import { AxiosResponse } from "axios";
import { get } from "./api";

export interface IProduct {
  id: string;
  name: string;
  type: "coffee" | "tea";
  packageWeight: number;
  price: number;
  roastingLevel?: number;
};


export const getAllProducts = async (): Promise<IProduct[] | undefined> => {
  try {
    const res: AxiosResponse<IProduct[]> = await get(`product`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    return undefined;
  }
};
