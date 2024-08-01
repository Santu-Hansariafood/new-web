import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/common/Footer/Footer";
import Career from "./pages/Career/Career";
import Teams from "./pages/people/Teams/Teams";
import Leaders from "./pages/people/Leaders/Leaders";
import Clients from "./pages/people/Clients/Clients";
import Farmers from "./pages/people/Farmers/Farmers";
import Broking from "./pages/services/Broking/Broking";
import CommodityTrading from "./pages/services/CommodityTrading/CommodityTrading";
import MarketAnalysis from "./pages/services/MarketAnalysis/MarketAnalysis";
import Maize from "./pages/products/Maize/Maize";
import GrowthAndDevelopment from "./pages/GrowthAndDevelopment/GrowthAndDevelopment";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        <div className="pt-20 p-4"> {/* Added pt-20 to account for the fixed Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/people/teams" element={<Teams />} />
            <Route path="/services/top-notch-broking" element={<Broking />} />
            <Route path="/services/commodity-trading" element={<CommodityTrading />} />
            <Route path="/services/market-intelligence-analysis" element={<MarketAnalysis />} />
            <Route path="/people/leaders" element={<Leaders />} />
            <Route path="people/clients" element={<Clients />} />
            <Route path="/people/farmers" element={<Farmers />} />
            <Route path="/products/maize" element={<Maize />} />
            <Route path="/grothdevelopment" element={<GrowthAndDevelopment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
