import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IOrder } from "../services/order";

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
}

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
const OrderForm: React.FC<Props> = ({onSubmitOrder}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OrderData>({
    resolver: yupResolver(schema),
  });
  useEffect(()=> {
    const weight = watch("packageWeight")
    if(weight) {
      setValue("price", weight*0.2)
    }
  },[setValue, watch])
  return (
    <form onSubmit={handleSubmit(onSubmitOrder)} className="max-w-3xl flex flex-col">
      <label>
        Name:
        <input {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label>
        Type:
        <select {...register("type")}>
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
        </select>
        {errors.type && <span>{errors.type.message}</span>}
      </label>
      <label>
        Package Weight:
        <select {...register("packageWeight")}>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        {errors.packageWeight && <span>{errors.packageWeight.message}</span>}
      </label>
      <label>
        Roasting Level:
        <select {...register("roastingLevel")}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors.roastingLevel && <span>{errors.roastingLevel.message}</span>}
      </label>
      <div>Price: </div>
      <button type="submit">Submit</button>
    </form>
  );
};
//#endregion

export default OrderForm;
