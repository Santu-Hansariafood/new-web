import React from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  FaUserFriends,
  FaSeedling,
  FaCalendarAlt,
  FaWarehouse,
} from "react-icons/fa";
import logo from "../../Images/Logo/Hansaria-Logo.png";
import LazyImage from "../../components/common/LazyImage/LazyImage"

const About = () => {
  const props = useSpring({
    from: { transform: "scale(0.5)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { duration: 500 },
    reset: true,
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 py-8 md:py-16">
      <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        <LazyImage src={logo} alt="About Hansaria Food" className="" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-yellow-500">Hansaria</span>{" "}
          <span className="text-green-500">Food</span>
        </h2>
        <p className="mb-4">
          From the heart of Kolkata, Hansaria Food Pvt Ltd has been at the
          forefront of revolutionizing the seed industry. Rooted in tradition
          and powered by technology, we offer a diverse range of premium paddy,
          wheat, and vegetable seeds.
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
        <button className="mt-4 bg-green-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base hover:bg-yellow-500">
          Know More
        </button>
      </div>
      <div className="flex flex-wrap md:w-1/2 mt-8 md:mt-0">
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <animated.div style={props}>
            <FaUserFriends className="text-3xl md:text-4xl text-green-500 mb-2 hover:text-yellow-500" />
          </animated.div>
          <div className="text-2xl md:text-3xl font-bold text-green-500 hover:text-yellow-500">
            10L+
          </div>
          <div className="text-sm md:text-base">Farmers Connected</div>
        </div>
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <animated.div style={props}>
            <FaWarehouse className="text-3xl md:text-4xl text-green-500 mb-2 hover:text-yellow-500" />
          </animated.div>
          <div className="text-2xl md:text-3xl font-bold text-green-500 hover:text-yellow-500">
            5
          </div>
          <div className="text-sm md:text-base">Godowns</div>
        </div>
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <animated.div style={props}>
            <FaSeedling className="text-3xl md:text-4xl text-green-500 mb-2 hover:text-yellow-500" />
          </animated.div>
          <div className="text-2xl md:text-3xl font-bold text-green-500 hover:text-yellow-500">
            150+
          </div>
          <div className="text-sm md:text-base">Products</div>
        </div>
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <animated.div style={props}>
            <FaCalendarAlt className="text-3xl md:text-4xl text-green-500 mb-2 hover:text-yellow-500" />
          </animated.div>
          <div className="text-2xl md:text-3xl font-bold text-green-500 hover:text-yellow-500">
            48+
          </div>
          <div className="text-sm md:text-base">Years</div>
        </div>
      </div>
    </div>
  );
};

export default About;
