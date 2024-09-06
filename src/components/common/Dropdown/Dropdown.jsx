import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dropdown = ({ title, links, isActive }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative dropdown">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`flex items-center px-3 py-2 block ${
          isActive ? "underline" : ""
        } focus:outline-none`}
      >
        {title} <FaChevronDown className="ml-2" />
      </button>
      {dropdownOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white rounded shadow-lg z-50">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
