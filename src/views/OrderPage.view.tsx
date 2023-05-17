//#region IMPORTS


import React from "react";
import { ProductsProvider } from "../contexts/ProductsProvider.context";
import OrderForm from "../components/OrderForm.component";

//#region MAIN COMPONENT
const OrderPage: React.FC = () => {
  
  return (
    <ProductsProvider>
      <OrderForm />
    </ProductsProvider>
  );
};
//#endregion

export default OrderPage;
