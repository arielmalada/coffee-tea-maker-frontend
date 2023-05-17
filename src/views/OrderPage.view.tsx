//#region IMPORTS


import React from "react";
import { ProductsProvider } from "../contexts/product/ProductsProvider.context";
import OrderForm from "../components/OrderForm.component";
import { IOrder, addNewOrder } from "../services/order";

//#region MAIN COMPONENT
const OrderPage: React.FC = () => {
  const handleSubmitOrder = (order: IOrder) => {
    addNewOrder(order)
  }
  return (
    <ProductsProvider>
      <OrderForm onSubmitOrder={handleSubmitOrder} />
    </ProductsProvider>
  );
};
//#endregion

export default OrderPage;
