import React, { useState, useEffect, createContext } from "react";
import {
  getAllOrders,
  IOrderResponse,
  searchOrders,
} from "../../services/order";

type OrdersContextType = {
  data: IOrderResponse[] | undefined;
  query: string;
  searchHandler(
    event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
};

const defaultOrdersContext: OrdersContextType = {
  data: undefined,
  query: "",
  searchHandler: () => {},
};

export const OrdersContext =
  createContext<OrdersContextType>(defaultOrdersContext);

interface Props {
  children: React.ReactNode;
}

export const OrdersProvider: React.FC<Props> = (props) => {
  const [OrdersData, setOrdersData] = useState<IOrderResponse[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    getAllOrders().then((res) => {
      if (res) setOrdersData(res);
    });
  }, []);

  const handleSearch = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      const res = await getAllOrders();
      if (res) setOrdersData(res);
    } else {
      const res = await searchOrders({ query });
      if (res) setOrdersData(res);
    }
  };
  const ordersContextProviderValue = {
    data: OrdersData,
    query: searchQuery,
    searchHandler: handleSearch,
  };
  return (
    <OrdersContext.Provider value={ordersContextProviderValue}>
      {props.children}
    </OrdersContext.Provider>
  );
};
