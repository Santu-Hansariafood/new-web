import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import ClientImage from "../../../Images/Team/clients.gif";

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

  const imageAnim = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <div className="clients-container">
      <animated.div
        style={{ ...imageAnim, height: "33vh" }}
        className="top-photo bg-gray-300"
      >
        <img
          src={ClientImage}
          alt="Top Clients"
          className="w-full h-full object-cover"
        />
      </animated.div>
      <h2 className="text-3xl font-bold text-center my-8">
        <span className="text-green-500">Our Top</span>{" "} 
        <span className="text-yellow-500">Clients</span>
        </h2>
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
