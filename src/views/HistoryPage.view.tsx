//#region IMPORTS


import React from "react";
import { OrdersProvider } from "../contexts/order/OrdersProvider.context";
import { Link } from "react-router-dom";

//#region MAIN COMPONENT
const HistoryPage: React.FC = () => {
  return (
    <OrdersProvider>
      test
      <Link to="/">Home</Link> 
    </OrdersProvider>
  );
};
//#endregion

export default HistoryPage;
