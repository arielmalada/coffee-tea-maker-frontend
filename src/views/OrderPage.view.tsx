//#region IMPORTS


import React from "react";
import { ProductsProvider } from "../contexts/product/ProductsProvider.context";
import OrderForm from "../components/OrderForm.component";
import { IOrder, addNewOrder } from "../services/order";
import { Link } from "react-router-dom";

//#region MAIN COMPONENT
const OrderPage: React.FC = () => {
  const handleSubmitOrder = (order: IOrder) => {
    addNewOrder(order)
  }
  return (
    <ProductsProvider>
      <OrderForm onSubmitOrder={handleSubmitOrder} />
      <Link to="history">History</Link> 
    </ProductsProvider>
  );
};
//#endregion

export default OrderPage;
