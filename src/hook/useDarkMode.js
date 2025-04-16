import { useEffect, useState } from "react";

export default function useDarkMode() {
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

  return [theme, toggleTheme];
}
