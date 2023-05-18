//#region IMPORTS
import React, { useContext } from "react";
import { OrdersContext } from "../contexts/order/OrdersProvider.context";
import { TextField } from "@mui/material";
//#endregion

//#region MAIN COMPONENTS
const SearchOrders: React.FC = () => {
  const orders = useContext(OrdersContext);
  const {query, searchHandler} = orders;
  if (orders)
    return (
      <div className="p-4">
        <TextField fullWidth label="Search Order Name" value={query} onChange={searchHandler}/>
      </div>
    );
    return null;
};
//#endregion

export default SearchOrders;
