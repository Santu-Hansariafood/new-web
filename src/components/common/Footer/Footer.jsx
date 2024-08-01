import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-12 mb-4 md:mb-0" />
        <div className="w-full md:w-auto flex flex-col md:flex-row justify-between items-start mb-4 md:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col space-y-1">
              <Link to="/home" className="hover:underline flex items-center">
                <span className="mr-2">&gt;</span>Home
              </Link>
              <Link to="/about" className="hover:underline flex items-center">
                <span className="mr-2">&gt;</span>About
              </Link>
              <Link
                to="/services/commodity-trading"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Commodity Trading
              </Link>
              <Link
                to="/services/market-intelligence-analysis"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Market Analysis
              </Link>
              <Link
                to="/services/top-notch-broking"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Top Notch Broking
              </Link>
            </div>
            <div className="flex flex-col space-y-1">
              <Link
                to="/people/teams"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Teams
              </Link>
              <Link
                to="/people/leaders"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Leaders
              </Link>
              <Link
                to="/people/clients"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Clients
              </Link>
              <Link
                to="/people/farmers"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Farmers
              </Link>
              <Link
                to="/people/teams"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Teams
              </Link>
            </div>
            <div className="flex flex-col space-y-1">
              <Link
                to="/people/leaders"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Leaders
              </Link>
              <Link
                to="/people/clients"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Clients
              </Link>
              <Link
                to="/people/farmers"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>Farmers
              </Link>
              <Link
                to="/people/teams"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">&gt;</span>G & D
              </Link>
              <Link to="/contact" className="hover:underline flex items-center">
                <span className="mr-2">&gt;</span>Contact
              </Link>
              <Link to="/career" className="hover:underline flex items-center">
                <span className="mr-2">&gt;</span>Career
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold">Social Media Links</h4>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600"
            >
              <FaYoutube size={24} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full">
            <input
              type="email"
              placeholder="subscribe@email.com"
              className="px-4 py-2 rounded-md text-gray-800 w-full sm:w-auto"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-6">
        <hr className="border-t border-gray-700 mb-4" />
        <p className="text-sm">
          All rights reserved. &copy; {currentYear} Hansaria Food Private
          Limited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
