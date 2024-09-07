import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, links, isActive, isOpen, setIsOpen }) => (
  <div className="relative">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`px-3 py-2 block text-lg ${
        isActive ? "underline text-yellow-400" : "hover:text-yellow-400"
      }`}
    >
      {title}
    </button>
    {isOpen && (
      <div className="absolute bg-gray-700 shadow-lg rounded-lg">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default Dropdown;
