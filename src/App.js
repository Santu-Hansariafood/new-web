import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import CookieConsent from "./components/common/CookieConsent/CookieConsent";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Career = lazy(() => import("./pages/Career/Career"));
const Teams = lazy(() => import("./pages/people/Teams/Teams"));
const Leaders = lazy(() => import("./pages/people/Leaders/Leaders"));
const Clients = lazy(() => import("./pages/people/Clients/Clients"));
const Farmers = lazy(() => import("./pages/people/Farmers/Farmers"));
const Broking = lazy(() => import("./pages/services/Broking/Broking"));
const CommodityTrading = lazy(() =>
  import("./pages/services/CommodityTrading/CommodityTrading")
);
const MarketAnalysis = lazy(() =>
  import("./pages/services/MarketAnalysis/MarketAnalysis")
);
const Maize = lazy(() => import("./pages/products/Maize/Maize"));
const GrowthAndDevelopment = lazy(() =>
  import("./pages/GrowthAndDevelopment/GrowthAndDevelopment")
);

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
    <HelmetProvider>
      <Router>
        <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            language={language}
            toggleLanguage={toggleLanguage}
          />
          <div className="pt-[4rem]">
            <Suspense
              fallback={<div className="loading-spinner">Loading...</div>}
            >
              <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/home" element={<Home darkMode={darkMode} />} />
                <Route path="/about" element={<About darkMode={darkMode} />} />
                <Route path="/people/teams" element={<Teams />} />
                <Route
                  path="/services/top-notch-broking"
                  element={<Broking darkMode={darkMode} />}
                />
                <Route
                  path="/services/commodity-trading"
                  element={<CommodityTrading darkMode={darkMode} />}
                />
                <Route
                  path="/services/market-intelligence-analysis"
                  element={<MarketAnalysis darkMode={darkMode} />}
                />
                <Route path="/people/leaders" element={<Leaders />} />
                <Route path="/people/clients" element={<Clients />} />
                <Route path="/people/farmers" element={<Farmers />} />
                <Route path="/products/maize" element={<Maize />} />
                <Route
                  path="/grothdevelopment"
                  element={<GrowthAndDevelopment darkMode={darkMode} />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/career" element={<Career />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
