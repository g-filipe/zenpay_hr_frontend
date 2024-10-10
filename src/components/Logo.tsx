import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "../styles/Logo.css";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <RouterLink to="/">ZenPayHR</RouterLink>
    </div>
  );
};

export default Logo;
