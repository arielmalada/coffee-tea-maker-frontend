//#region IMPORTS
import React from "react";
import { IOrderResponse } from "../services/order";
//#endregion

type Props = {
  data: IOrderResponse
}

//#region MAIN COMPONENTS
const OrderItem: React.FC<Props> = ({data}) => {
  return (
    <div>
      <div>name : {data.name}</div>
      <div>type : {data.type}</div>
      <div>weight : {data.packageWeight}</div>
      <div>roast level : {data.roastingLevel}</div>
      <div>price : {data.price}</div>

    </div>
  );
};
//#endregion

export default OrderItem;