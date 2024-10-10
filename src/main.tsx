import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./pages/Home";
import Login from "./pages/Login";
import MealVoucher from "./pages/MealVoucher";
import Relatorio from "./pages/Report";
import "./index.css";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    purple: {
      500: "#9b59b6",
    },
    black: {
      500: "#111",
    },
    white: {
      500: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<App />} />
          <Route path="/alimentacao" element={<MealVoucher />} />
          <Route path="/relatorios" element={<Relatorio />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
