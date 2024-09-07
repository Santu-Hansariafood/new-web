import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <button onClick={toggleDarkMode} className="focus:outline-none">
    {darkMode ? (
      <FaMoon className="text-2xl" />
    ) : (
      <FaSun className="text-2xl" />
    )}
  </button>
);

export default DarkModeToggle;
