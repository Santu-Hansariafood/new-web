import React, { useEffect, useState } from "react";

const Clients = () => {
  const clients = [
    "PREMIUM CHICK FEEDS PVT LTD",
    "SUGUNA FOODS PRIVATE LIMITED",
    "SHALIMAR PELLET FEEDS LTD",
    "SONAVETS PVT LTD",
    "GODREJ AGROVET LTD",
    "JAPFA COMFEED INDIA PVT LTD",
    "ABIS EXPORTS INDIA PVT LTD",
    "SNEHA FARMS PRIVATE LIMITED",
    "VENKY'S (INDIA) LIMITED",
    "NUTRIKRAFT INDIA PVT LTD",
    "SKYLARK HATCHERIES PRIVATE LIMITED",
    "MAHARASHTRA FEEDS PRIVATE LIMITED",
    "ANMOL FEEDS PVT LTD",
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="clients-container">
      <div className="top-photo bg-gray-300 h-1/3">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Top Clients"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-3xl font-bold text-center my-8">Our Top Clients</h2>
      <div className="clients-list p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`client-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 transform transition duration-500 hover:scale-105 ${
                scrollPosition > 100 ? "flip" : ""
              }`}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                {client}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
