import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <button onClick={toggleDarkMode} className="focus:outline-none">
    {darkMode ? (
      <FaSun className="text-2xl" />
    ) : (
      <FaMoon className="text-2xl" />
    )}
  </button>
);

export default DarkModeToggle;
