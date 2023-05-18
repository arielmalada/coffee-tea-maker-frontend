import React, { useState } from "react";
import "./App.css";
import OrderPage from "./views/OrderPage.view";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import HistoryPage from "./views/HistoryPage.view";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Home, History } from "@mui/icons-material";

function App() {
  const [value, setValue] = useState("/");
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<OrderPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            value="/"
            icon={<Home />}
          />
          <BottomNavigationAction
            component={Link}
            to="/history"
            label="History"
            value="/history"
            icon={<History />}
          />
        </BottomNavigation>
      </Paper>
    </HashRouter>
  );
}

export default App;
