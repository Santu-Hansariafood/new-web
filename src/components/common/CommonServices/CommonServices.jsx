import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CommonServices = ({ title, subtitle, image, strategies, about }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="relative bg-gray-100 font-sans">
      <div className="relative w-full h-96 bg-gray-300 flex items-center justify-center mb-4">
        <img
          src={image}
          alt="service"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-700 text-white py-2 px-4 rounded">
          <span>Services</span> /{" "}
          <span className="font-bold text-yellow-500">{subtitle}</span>
        </div>
      </div>
      <div className="content bg-white p-6 rounded shadow-lg">
        <h1 className="text-green-700 text-2xl font-bold">{title}</h1>
        <ul className="mt-4">
          {strategies.map((strategy, index) => (
            <li key={index} className="mb-4">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                <div className="mr-2 text-green-700">
                  {activeIndex === index ? (
                    <FiChevronUp className="text-xl" />
                  ) : (
                    <FiChevronDown className="text-xl" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {strategy.title}
                </h3>
              </div>
              {activeIndex === index && (
                <div className="mt-2 p-4 border border-green-200 rounded bg-gray-50 transition-all duration-300">
                  <p className="text-gray-700">{strategy.content}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
        <h1 className="text-green-700 text-2xl font-bold mt-6">About</h1>
        <p className="text-gray-700 mt-2">{about}</p>
      </div>
    </div>
  );
};

export default CommonServices;
