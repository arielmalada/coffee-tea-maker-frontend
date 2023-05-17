import React, { useState, useEffect, createContext } from "react";
import { getAllOrders, IOrderResponse } from "../../services/order";
export const OrdersContext = createContext<IOrderResponse[] | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const OrdersProvider: React.FC<Props> = (props) => {
  const [OrdersData, setOrdersData] = useState<IOrderResponse[]>([]);
  useEffect(() => {
    getAllOrders().then((res) => {
      console.log(res)
      if (res) setOrdersData(res);
    });
  }, []);
  return (
    <OrdersContext.Provider value={OrdersData}>
      {props.children}
    </OrdersContext.Provider>
  );
};
