import React from "react";
import { IOrderResponse } from "../services/order";
import { Grid, Typography } from "@mui/material";

type Props = {
  data: IOrderResponse;
};

const OrderItem: React.FC<Props> = ({ data }) => {
  return (
    <Grid container className="p-4 border rounded">
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="body1" gutterBottom className="space-x-1">
          <span className="font-bold">Type:</span>
          <span className="capitalize">{data.type}</span>
        </Typography>
        <Typography variant="body1" gutterBottom className="space-x-1">
          <span className="font-bold">Weight:</span>
          <span>{data.packageWeight} gram</span>
        </Typography>
        {data.roastingLevel && (
          <Typography variant="body1" gutterBottom className="space-x-1">
            <span className="font-bold">Roast Level:</span>
            <span>{data.roastingLevel}</span>
          </Typography>
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom align="right">
          $ {data.price}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OrderItem;
