import { AxiosResponse } from "axios";
import { get } from "./api";

export interface IProduct {
  id: string;
  name: "coffee" | "tea";
  pricePerGram: number;
};


export const getAllProducts = async (): Promise<IProduct[] | undefined> => {
  try {
    const res: AxiosResponse<IProduct[]> = await get(`product`);
    return res.data;
  } catch (error) {
    throw new Error(`Error fetching products: ${error}`);
  }
};
