import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [currency, setCurrency] = useState("EUR");
  const [symbol, setSymbol] = useState("€");

  useEffect(() => {
    if (currency === "EUR") setSymbol("€");
    else if (currency === "USD") setSymbol("$");
    // eslint-disable-next-line
  }, [currency]);

  return (
    <AppContext.Provider
      value={{ dark, setDark, currency, symbol, setCurrency }}
    >
      {children}
    </AppContext.Provider>
  );
};
// hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
