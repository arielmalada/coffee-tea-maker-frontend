//#region IMPORTS
import React from "react";
import { ProductsProvider } from "../contexts/product/ProductsProvider.context";
import OrderForm from "../components/OrderForm.component";
import { IOrder, addNewOrder } from "../services/order";
import { Typography } from "@mui/material";
//#endregion

//#region MAIN COMPONENT
const OrderPage: React.FC = () => {
  const handleSubmitOrder = (order: IOrder) => {
    addNewOrder(order);
  };
  return (
    <ProductsProvider>
      <Typography variant="h4" className="!mx-auto w-fit">
        Coffee / Tea Maker
      </Typography>
      <OrderForm onSubmitOrder={handleSubmitOrder} />
    </ProductsProvider>
  );
};
//#endregion

export default OrderPage;
