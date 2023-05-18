import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IOrder } from "../services/order";
import {
  Button,
  FormHelperText,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import { ProductsContext } from "../contexts/product/ProductsProvider.context";
import CoffeeIcon from "@mui/icons-material/Coffee";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
//#endregion

//#region TYPES AND SCHEMA
type OrderData = {
  name: string;
  type: "coffee" | "tea";
  packageWeight: number;
  price: number;
  roastingLevel?: number;
};

type Props = {
  onSubmitOrder(order: IOrder): void;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  type: yup
    .string()
    .oneOf(["coffee", "tea"], "Type must be either coffee or tea")
    .required("Type is required"),
  packageWeight: yup
    .number()
    .typeError("Package weight must be a number")
    .positive("Package weight must be positive")
    .required("Package weight is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  roastingLevel: yup.number().typeError("Roasting level must be a number"),
});
//#endregion

//#region MAIN COMPONENT
const OrderForm: React.FC<Props> = ({ onSubmitOrder }) => {
  const products = useContext(ProductsContext);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<OrderData>({
    resolver: yupResolver(schema),
  });
  const [price, setPrice] = useState(0);
  const [type, setType] = useState<"coffee" | "tea">("coffee");

  const handleType = (
    event: React.MouseEvent<HTMLElement>,
    newType: "coffee" | "tea"
  ) => {
    setType(newType);
    setValue("type", newType);
    if (newType === "tea") setValue("roastingLevel", undefined);
  };

  useEffect(() => {
    const checkPrice = (weight?: number, pricePerGram?: number) => {
      if (weight && pricePerGram) {
        const price = (weight * pricePerGram).toFixed(2);
        setPrice(parseFloat(price));
      }
    };
    const subscription = watch((value) => {
      if (products) {
        const getProduct = products.find((obj) => obj.name === value.type);
        const pricePerGram = getProduct?.pricePerGram;
        checkPrice(pricePerGram, value.packageWeight);
      }
    });
    return () => subscription.unsubscribe();
  }, [products, setValue, watch]);

  useEffect(() => {
    if (price) setValue("price", price);
  }, [price, setValue]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitOrder)}
      className="flex flex-col max-w-3xl gap-6 p-4 mx-auto"
    >
      <ToggleButtonGroup
        value={type}
        exclusive
        onChange={handleType}
        aria-label="order type"
        className="mx-auto"
      >
        <ToggleButton value="coffee" aria-label="coffee" {...register("type")}>
          <CoffeeIcon />
          Coffee
        </ToggleButton>
        <ToggleButton value="tea" aria-label="tea" {...register("type")}>
          <LocalDrinkIcon />
          Tea
        </ToggleButton>
      </ToggleButtonGroup>
      {errors.type && <FormHelperText>{errors.type.message}</FormHelperText>}
      <FormControl error={!!errors.name}>
        <TextField {...register("name")} label="Name" fullWidth />
        {errors.name && <FormHelperText>{errors.name.message}</FormHelperText>}
      </FormControl>
      <FormControl error={!!errors.packageWeight}>
        <InputLabel id="weight-label">Weight</InputLabel>
        <Select
          {...register("packageWeight")}
          labelId="weight-label"
          fullWidth
          aria-labelledby="weight-label"
          defaultValue={""}
        >
          {Array.from({ length: 4 }, (_, i) => (i + 2) * 5).map((value) => (
            <MenuItem key={value} value={value}>{`${value} gram`}</MenuItem>
          ))}
        </Select>
        {errors.packageWeight && (
          <FormHelperText>{errors.packageWeight.message}</FormHelperText>
        )}
      </FormControl>
      {type === "coffee" && (
        <FormControl error={!!errors.roastingLevel}>
          <InputLabel id="roast-level-label">Roast Level</InputLabel>
          <Select
            {...register("roastingLevel")}
            labelId="roast-level-label"
            fullWidth
            aria-labelledby="roast-level-label"
            defaultValue={""}
          >
            {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
              <MenuItem key={value} value={value}>{`Level ${value}`}</MenuItem>
            ))}
          </Select>
          {errors.roastingLevel && (
            <FormHelperText>{errors.roastingLevel.message}</FormHelperText>
          )}
        </FormControl>
      )}
      {price > 0 && (
        <div className="flex items-center justify-between space-x-1">
          <Typography>Price:</Typography>
          <Typography fontWeight="bold" className="space-x-1" variant="h5">
            <span>$</span>
            <span>{price}</span>
          </Typography>
        </div>
      )}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
  );
};
//#endregion

export default OrderForm;
