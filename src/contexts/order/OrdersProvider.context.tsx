import React, { useState, useEffect, createContext } from "react";
import { getAllOrders, IOrder } from "../../services/order";
export const ProductsContext = createContext<IOrder[] | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const OrdersProvider: React.FC<Props> = (props) => {
  const [ordersData, setProductsData] = useState<IOrder[]>([]);
  useEffect(() => {
    getAllOrders().then((res) => {
      if (res) setProductsData(res);
    });
  }, []);
  return (
    <ProductsContext.Provider value={ordersData}>
      {props.children}
    </ProductsContext.Provider>
  );
};
