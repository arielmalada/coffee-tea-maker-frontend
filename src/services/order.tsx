import { AxiosResponse } from "axios";
import { get, post } from "./api";

export interface IOrder {
  name: string;
  type: "coffee" | "tea";
  packageWeight: number;
  price: number;
  roastingLevel?: number;
};

export interface ISearchOrder {
  query: string;
}

export interface IOrderResponse extends IOrder {
  id: string;
}


export const addNewOrder = async (order: IOrder): Promise<IOrderResponse> => {
  try {
    const response: AxiosResponse<IOrderResponse> = await post("order", order)
    return response.data;
  } catch (error) {
    throw new Error(`Failed to add new order: ${error}`);
  }
};

export const getAllOrders = async (): Promise<IOrderResponse[] | undefined> => {
  try {
    const response: AxiosResponse<IOrderResponse[]> = await get(`order`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching orders: ${error}`);
  }
};

export const searchOrders = async (query: ISearchOrder): Promise<IOrderResponse[] | undefined> => {
  try {
    const response: AxiosResponse<IOrderResponse[]> = await post("order/search", query)
    return response.data;
  } catch (error) {
    throw new Error(`Failed to find the order: ${error}`);
  }
};