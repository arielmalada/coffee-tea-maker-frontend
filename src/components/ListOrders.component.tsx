//#region IMPORTS
import React, { useContext } from "react";
import { OrdersContext } from "../contexts/order/OrdersProvider.context";
import OrderItem from "./OrderItem.component";
//#endregion

//#region MAIN COMPONENTS
const ListOrders: React.FC = () => {
  const orders = useContext(OrdersContext);
  console.log(orders);
  if (orders)
    return (
      <div className="flex flex-col gap-4 p-4">
        {orders?.map((order) => (
          <OrderItem data={order} />
        ))}
      </div>
    );
    return null;
};
//#endregion

export default ListOrders;
