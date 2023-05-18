//#region IMPORTS
import React, { useState } from "react";
import { ProductsProvider } from "../contexts/product/ProductsProvider.context";
import OrderForm from "../components/OrderForm.component";
import { IOrder, addNewOrder } from "../services/order";
import { Alert, Snackbar, Typography } from "@mui/material";
//#endregion

//#region MAIN COMPONENT
const OrderPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleSubmitOrder = (order: IOrder) => {
    addNewOrder(order).then((res) => {
      setOpen(true);
    });
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <ProductsProvider>
      <Typography variant="h4" className="!mx-auto w-fit">
        Coffee / Tea Maker
      </Typography>
      <OrderForm onSubmitOrder={handleSubmitOrder} />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your Order is On The Way and Recorded
        </Alert>
      </Snackbar>
    </ProductsProvider>
  );
};
//#endregion

export default OrderPage;
