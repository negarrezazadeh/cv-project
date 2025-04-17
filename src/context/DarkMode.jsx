import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") || "light";
    setTheme(localTheme);
    document.documentElement.classList.toggle("dark", localTheme === "dark");
  }, []);

  return (
    <DarkModeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  return context;
};

export { DarkModeProvider, useDarkMode };
