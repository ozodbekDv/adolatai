import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "uz";

    const storedLang = localStorage.getItem("selectedLang");
    const supportedLangs = ["uz", "Уз", "РУ", "ENG"];

    return storedLang && supportedLangs.includes(storedLang)
      ? storedLang
      : "uz";
  });
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;

    const storedTheme = localStorage.getItem("selectedTheme");
    return storedTheme === "dark";
  });
  const [user, setUser] = useState(null);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLang", lang);
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedTheme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

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
