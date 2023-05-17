//#region IMPORTS

import React from "react";
import { OrdersProvider } from "../contexts/order/OrdersProvider.context";
import ListOrders from "../components/ListOrders.component";

//#region MAIN COMPONENT
const HistoryPage: React.FC = () => {
  return (
    <OrdersProvider>
      <ListOrders />
    </OrdersProvider>
  );
};
//#endregion

export default HistoryPage;
