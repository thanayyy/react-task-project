import React from "react";
import "../css/Header.css";
const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <header>
      <div className="logo">
        <span>Task Management App</span>
      </div>
      <div className="theme-container">
        <span className="icon">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </span>
        <input
          type="checkbox"
          className="theme-checkbox"
          onChange={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;
