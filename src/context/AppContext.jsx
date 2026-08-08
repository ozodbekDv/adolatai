import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState("uz");
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        darkMode,
        setDarkMode,
        user,
        setUser,
        cases,
        setCases,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
