import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import data from "../../../data/data.json";
import LeadersImage from "../../../Images/Team/leaders.jpeg";
import LazyImage from "../../../components/common/LazyImage/LazyImage";

const Leaders = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    setLeaders(data.leaders);
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const imageAnim = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="leaders-container">
      <animated.div
        style={{ ...imageAnim, height: "33vh" }}
        className="top-photo bg-gray-300"
      >
        <LazyImage
          src={LeadersImage}
          alt="Company Leadership"
          className="w-full h-full object-cover"
        />
      </animated.div>
      <h2 className="text-3xl font-bold text-center my-8">
        <span className="text-green-500">Meet Our</span>{" "}
        <span className="text-yellow-500">Leaders</span>
      </h2>
      <div className="team-members p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {leaders.map((leader) => (
            <animated.div
              key={leader.id}
              className="team-card relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
              style={fadeIn}
            >
              <LazyImage
                src={leader.photo}
                alt={leader.name}
                className="w-full h-60 object-cover"
              />
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                <p className="text-gray-300">{leader.position}</p>
                <div className="flex space-x-4 mt-4">
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                    >
                      <FaLinkedin
                        size={24}
                        className="hover:scale-125 transition-transform duration-300"
                      />
                    </a>
                  )}
                  {leader.facebook && (
                    <a
                      href={leader.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                    >
                      <FaFacebook
                        size={24}
                        className="hover:scale-125 transition-transform duration-300"
                      />
                    </a>
                  )}
                  {leader.instagram && (
                    <a
                      href={leader.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 dark:hover:text-pink-400"
                    >
                      <FaInstagram
                        size={24}
                        className="hover:scale-125 transition-transform duration-300"
                      />
                    </a>
                  )}
                  {leader.whatsapp && (
                    <a
                      href={leader.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 dark:hover:text-green-400"
                    >
                      <FaWhatsapp
                        size={24}
                        className="hover:scale-125 transition-transform duration-300"
                      />
                    </a>
                  )}
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default Leaders;
