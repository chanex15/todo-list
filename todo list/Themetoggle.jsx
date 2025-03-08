import React, { useEffect } from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "🔆 Light Mode"}
    </button>
  );
};

export default ThemeToggle;