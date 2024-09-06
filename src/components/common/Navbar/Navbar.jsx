import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../Images/Logo/Hansaria-Logo.png";
import LazyImage from "../LazyImage/LazyImage";
import MobileMenu from "../MobileMenu/MobileMenu";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Navbar = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white w-full fixed top-0 z-50 p-4 flex justify-between items-center">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="text-2xl font-bold">
          <LazyImage src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-2xl md:hidden focus:outline-none"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-6`}>
        <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      </div>

      <div className="flex items-center space-x-4">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <LanguageSelector language={language} toggleLanguage={toggleLanguage} />
      </div>
    </nav>
  );
};

export default Navbar;
