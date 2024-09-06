import React, { useState } from "react";

const LanguageSelector = ({ language, toggleLanguage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
      >
        {language}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white rounded shadow-lg z-50">
          <button
            onClick={() => toggleLanguage("en")}
            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            English (en)
          </button>
          <button
            onClick={() => toggleLanguage("bn")}
            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Bangla (bn)
          </button>
          <button
            onClick={() => toggleLanguage("hi")}
            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Hindi (hi)
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
