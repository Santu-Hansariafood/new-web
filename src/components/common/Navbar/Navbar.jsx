import React, { lazy, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Images/Logo/Hansaria-Logo.png";
import LazyImage from "../LazyImage/LazyImage";

const MobileMenu = lazy(() => import("../MobileMenu/MobileMenu"));
const DarkModeToggle = lazy(() => import("../DarkModeToggle/DarkModeToggle"));
const LanguageSelector = lazy(() =>
  import("../LanguageSelector/LanguageSelector")
);

const Navbar = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white w-full fixed top-0 z-50 p-4 flex justify-between items-center">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="text-2xl font-bold" onClick={closeMobileMenu}>
          <LazyImage src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-2xl md:hidden focus:outline-none"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`hidden md:flex md:items-center md:space-x-6`}>
        <MobileMenu closeMobileMenu={closeMobileMenu} />
      </div>
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 md:hidden">
          <div className="flex flex-col items-center p-4 space-y-4">
            <MobileMenu closeMobileMenu={closeMobileMenu} />
          </div>
        </div>
      )}
      <div className="flex items-center space-x-4">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <LanguageSelector language={language} toggleLanguage={toggleLanguage} />
      </div>
    </nav>
  );
};

export default Navbar;
