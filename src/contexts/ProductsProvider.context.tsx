import React, { useState, useEffect, createContext } from "react";
import { getAllProducts, IProduct } from "../services/product";
export const ProductsContext = createContext<IProduct[] | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const ProductsProvider: React.FC<Props> = (props) => {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      if (res) setProductsData(res);
    });
  }, []);
  return (
    <ProductsContext.Provider value={productsData}>
      {props.children}
    </ProductsContext.Provider>
  );
};
