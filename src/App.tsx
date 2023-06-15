import React from "react";
import "./App.css";
import OrderPage from "./views/OrderPage.view";
import { HashRouter, Routes, Route } from "react-router-dom";
import HistoryPage from "./views/HistoryPage.view";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/" element={<HistoryPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
