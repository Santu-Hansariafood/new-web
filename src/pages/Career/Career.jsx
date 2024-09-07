import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import teamData from "../../data/data.json";
import LazyImage from "../../components/common/LazyImage/LazyImage";

const Career = ({ darkMode }) => {
  const [data, setData] = useState({ teamMembers: [], jobOpenings: [] });

  useEffect(() => {
    setData(teamData);
  }, []);

  return (
    <div
      className={`container mx-auto p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className={`${darkMode ? "text-green-500" : "text-green-600"}`}>
          Employee
        </span>{" "}
        <span className={`${darkMode ? "text-yellow-500" : "text-yellow-600"}`}>
          Review
        </span>
      </h1>

      {/* Team Members Section */}
      <div className="flex flex-wrap justify-center">
        {data.teamMembers.map((member, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <div
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              } shadow-lg rounded-lg overflow-hidden`}
            >
              <LazyImage
                src={member.photo}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold">{member.name}</h2>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  {member.designation}
                </p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-blue-500">
                    <FaLinkedin size="1.5em" />
                  </a>
                  <a href={member.facebook} className="text-blue-700">
                    <FaFacebook size="1.5em" />
                  </a>
                  <a href={member.youtube} className="text-red-500">
                    <FaYoutube size="1.5em" />
                  </a>
                  <a href={member.instagram} className="text-pink-500">
                    <FaInstagram size="1.5em" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Job Openings Section */}
      <h1 className="text-4xl font-bold text-center my-8">
        <span className={`${darkMode ? "text-green-500" : "text-green-600"}`}>
          Current
        </span>{" "}
        <span className={`${darkMode ? "text-yellow-500" : "text-yellow-600"}`}>
          Openings
        </span>
      </h1>
      <div className="flex flex-wrap justify-center">
        {data.jobOpenings.map((job, index) => (
          <div key={index} className="w-full md:w-1/2 p-4">
            <div
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              } shadow-lg rounded-lg overflow-hidden ${
                job.status === "open"
                  ? darkMode
                    ? "border-l-4 border-green-400"
                    : "border-l-4 border-green-500"
                  : darkMode
                  ? "border-l-4 border-red-400"
                  : "border-l-4 border-red-500"
              }`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-2`}
                >
                  Designation: {job.designation}
                </p>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-2`}
                >
                  Number of Openings: {job.numberOfOpenings}
                </p>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {job.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Apply for Position Section */}
      <h1 className="text-4xl font-bold text-center my-8">
        <span className={`${darkMode ? "text-green-500" : "text-green-600"}`}>
          Apply for a
        </span>{" "}
        <span className={`${darkMode ? "text-yellow-500" : "text-yellow-600"}`}>
          Position
        </span>
      </h1>
      <form
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        } shadow-lg rounded-lg p-6`}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className={`border p-2 rounded w-full ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className={`border p-2 rounded w-full ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Apply for Position"
            className={`border p-2 rounded w-full ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            className={`border p-2 rounded w-full ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Career;
