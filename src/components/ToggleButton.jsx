import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-4 right-4 p-2 rounded-full ${
        theme === "light" ? "bg-gray-300 text-black" : "bg-gray-700 text-white"
      }`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggler;
