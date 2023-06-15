//#region IMPORTS
import React from "react";
import { OrdersProvider } from "../contexts/order/OrdersProvider.context";
import ListOrders from "../components/ListOrders.component";
import SearchOrders from "../components/SearchOrders.component";
import { AppBar, Fab, SxProps, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
//#endregion

//#region MAIN COMPONENT
const HistoryPage: React.FC = () => {
  const fabStyle: SxProps = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };
  return (
    <OrdersProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <SearchOrders />
      <ListOrders />
      <Fab
        component={Link}
        to="/order"
        color="primary"
        aria-label="add"
        sx={fabStyle}
      >
        <AddIcon />
      </Fab>
    </OrdersProvider>
  );
};
//#endregion

export default HistoryPage;
