import React from "react";
import { useSpring, animated } from "@react-spring/web";
import ClientImage from "../../../Images/Team/clients.gif";
import LazyImage from "../../../components/common/LazyImage/LazyImage";

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

  const imageAnim = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <div className="clients-container px-4 sm:px-8 lg:px-16 py-8">
      <animated.div
        style={{ ...imageAnim, height: "33vh" }}
        className="top-photo bg-gray-300 rounded-lg overflow-hidden mb-8"
      >
        <LazyImage
          src={ClientImage}
          alt="Top Clients"
          className="w-full h-full object-cover"
        />
      </animated.div>
      <h2 className="text-3xl md:text-4xl font-bold text-center my-8">
        <span className="text-green-500">Our Top</span>{" "}
        <span className="text-yellow-500">Clients</span>
      </h2>
      <div className="clients-list p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-500 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
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
