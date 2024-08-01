import React from "react";
import {
  FaUserFriends,
  FaFlask,
  FaSeedling,
  FaCalendarAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 py-8 md:py-16">
      <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        <img
          src="https://via.placeholder.com/150"
          alt="About Hansaria Food"
          className="w-48 h-48 md:w-64 md:h-64"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hansaria Food</h2>
        <p className="mb-4">
          From the heart of Kolkata, Hansaria Food Pvt Ltd has been at the forefront
          of revolutionizing the seed industry. Rooted in tradition and powered
          by technology, we offer a diverse range of premium paddy, wheat, and
          vegetable seeds.
        </p>
        <p className="mb-4 font-semibold">“Good Seed, Good Life.”</p>
        <p className="mb-4">
          With a legacy spanning over five decades, our mission, “Powering
          Agriculture through Technology,” has driven us to consistently
          innovate, ensuring every seed meets the highest standards.
        </p>
        <p className="mb-4">
          Dive deep into our legacy, explore our range of products, and discover
          how we’re shaping the future of farming. Join us as we sow the seeds
          of tomorrow, ensuring a bountiful, prosperous harvest for all.
        </p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base">
          Know More
        </button>
      </div>
      <div className="flex flex-wrap md:w-1/2 mt-8 md:mt-0">
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <FaUserFriends className="text-3xl md:text-4xl text-green-500 mb-2" />
          <div className="text-2xl md:text-3xl font-bold text-green-500">
            10L+
          </div>
          <div className="text-sm md:text-base">Farmers Connected</div>
        </div>
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <FaFlask className="text-3xl md:text-4xl text-green-500 mb-2" />
          <div className="text-2xl md:text-3xl font-bold text-green-500">5</div>
          <div className="text-sm md:text-base">Research Centers</div>
        </div>
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <FaSeedling className="text-3xl md:text-4xl text-green-500 mb-2" />
          <div className="text-2xl md:text-3xl font-bold text-green-500">
            150+
          </div>
          <div className="text-sm md:text-base">Products</div>
        </div>
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <FaCalendarAlt className="text-3xl md:text-4xl text-green-500 mb-2" />
          <div className="text-2xl md:text-3xl font-bold text-green-500">
            48+
          </div>
          <div className="text-sm md:text-base">Years</div>
        </div>
      </div>
    </div>
  );
};

export default About;
