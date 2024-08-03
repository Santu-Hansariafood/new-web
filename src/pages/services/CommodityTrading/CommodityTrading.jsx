import React from "react";
import "tailwindcss/tailwind.css";
import comodity from "../../../Images/services/comodity.jpg";
import LazyImage from "../../../components/common/LazyImage/LazyImage";

const CommodityTrading = () => {
  return (
    <div className="relative bg-gray-100 font-sans">
      <div className="relative w-full h-80 bg-gray-300 flex items-center justify-center mb-4">
        <LazyImage
          src={comodity}
          alt="comodity"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-700 text-white py-2 px-4 rounded">
          <span>Services</span> /{" "}
          <span className="font-bold text-yellow-500">
            Top Notch Commodity Trading
          </span>
        </div>
      </div>
      <div className="content bg-white p-6 rounded shadow-lg">
        <h1 className="text-green-700 text-2xl font-bold">
          Strategies To Select A Good Portfolio Management Service
        </h1>
        <p className="text-gray-700 mt-2">
          Based on your investment objective and requirements, the professional
          manager will create a diversified portfolio by investing in different
          commodities in corporate and individual firms which have good ratings
          in India.
        </p>
        <p className="text-gray-700 mt-2">
          Hansaria Food Pvt Ltd (HFPL) deals with authentic buyers and sellers
          who continue to stand with any bargain done even when there is a
          variation in the market rate.
        </p>
      </div>
    </div>
  );
};

export default CommodityTrading;
