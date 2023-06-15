//#region IMPORTS
import React from "react";
import { ProductsProvider } from "../contexts/product/ProductsProvider.context";
import OrderForm from "../components/OrderForm.component";
import { IOrder, addNewOrder } from "../services/order";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
//#endregion

//#region MAIN COMPONENT
const OrderPage: React.FC = () => {
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleSubmitOrder = (order: IOrder) => {
    addNewOrder(order).then((res) => {
      // open the snackbar after the order successfully recorded
      // setOpen(true);
      navigate("/");
    });
  };

  // close handler for snackbar
  // const handleClose = (
  //   event: React.SyntheticEvent | Event,
  //   reason?: string
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };
  return (
    <ProductsProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coffee / Tea Order
          </Typography>
        </Toolbar>
      </AppBar>
      <OrderForm onSubmitOrder={handleSubmitOrder} />
      {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your Order is On The Way and Recorded
        </Alert>
      </Snackbar> */}
    </ProductsProvider>
  );
};
//#endregion

export default OrderPage;
