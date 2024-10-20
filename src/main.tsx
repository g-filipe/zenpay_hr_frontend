import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Employee from "./pages/Employee";
import Login from "./pages/Login";
import MealVoucher from "./pages/MealVoucher";
import Home from "./pages/Home";
import "./index.css";
import Report from "./pages/Report";

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
          <Route path="/" element={<Home />} />
          <Route path="/alimentacao" element={<MealVoucher />} />
          <Route path="/colaboradores" element={<Employee />} />
          <Route path="/relatorios/alimentacao/:period" element={<Report />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
