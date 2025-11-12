import React from "react";
import { AppProvider } from "./AppContext";

const AppWrapper = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default AppWrapper;