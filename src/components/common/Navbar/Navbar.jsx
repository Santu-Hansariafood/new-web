import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import logo from "../../../Images/Logo/Hansaria-Logo.png";

const Navbar = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const isActive = (path) => location.pathname === path;

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  useEffect(() => {
    setDropdownOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 w-full fixed top-0 z-50 flex flex-col md:flex-row justify-between items-center p-4">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-10 w-15" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-2xl md:hidden focus:outline-none"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`flex flex-col md:flex-row md:space-x-8 md:items-center w-full md:w-auto transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "h-screen transform translate-y-0" : "h-0 transform -translate-y-full md:translate-y-0"
        } md:h-auto md:translate-y-0 md:overflow-visible overflow-hidden`}
        style={{ paddingRight: mobileMenuOpen ? "1rem" : "0" }} // Added padding for mobile
      >
        <div className="flex flex-col md:flex-row md:space-x-8 md:items-center w-full md:w-auto mt-4 md:mt-0">
          <Link to="/home" className={`px-3 py-2 ${isActive("/home") ? "underline" : ""}`}>
            Home
          </Link>
          <Link to="/about" className={`px-3 py-2 ${isActive("/about") ? "underline" : ""}`}>
            About
          </Link>
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("services")}
              className={`px-3 py-2 ${isActive("/services") ? "underline" : ""} focus:outline-none`}
            >
              Services
            </button>
            {dropdownOpen === "services" && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white rounded shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-100">
                <Link to="/services/commodity-trading" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Commodity Trading
                </Link>
                <Link to="/services/market-intelligence-analysis" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Market Intelligence Analysis
                </Link>
                <Link to="/services/top-notch-broking" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Top Notch Broking
                </Link>
              </div>
            )}
          </div>
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("people")}
              className={`px-3 py-2 ${isActive("/people") ? "underline" : ""} focus:outline-none`}
            >
              People
            </button>
            {dropdownOpen === "people" && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white rounded shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-100">
                <Link to="/people/teams" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Teams
                </Link>
                <Link to="/people/leaders" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Leaders
                </Link>
                <Link to="/people/clients" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Clients
                </Link>
                <Link to="/people/farmers" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Farmers
                </Link>
              </div>
            )}
          </div>
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("products")}
              className={`px-3 py-2 ${isActive("/products") ? "underline" : ""} focus:outline-none`}
            >
              Products
            </button>
            {dropdownOpen === "products" && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white rounded shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-100">
                <Link to="/products/maize" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Maize
                </Link>
                <Link to="/products/category2" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Wheat
                </Link>
                <Link to="/products/category3" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Paddy
                </Link>
                <Link to="/products/category4" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Broken Rice
                </Link>
                <Link to="/products/category5" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Added More
                </Link>
              </div>
            )}
          </div>
          <Link to="/grothdevelopment" className={`px-3 py-2 ${isActive("/grothdevelopment") ? "underline" : ""}`}>
            G & D
          </Link>
          <Link to="/contact" className={`px-3 py-2 ${isActive("/contact") ? "underline" : ""}`}>
            Contact
          </Link>
          <Link to="/career" className={`px-3 py-2 ${isActive("/career") ? "underline" : ""}`}>
            Career
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
        </button>
        <div className="relative">
          <button
            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
          >
            {language}
          </button>
          {languageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white rounded shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-100">
              <button onClick={() => handleLanguageChange("en")} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                English (en)
              </button>
              <button onClick={() => handleLanguageChange("bn")} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                Bangla (bn)
              </button>
              <button onClick={() => handleLanguageChange("hi")} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                Hindi (hi)
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
