import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import data from "../../../data/data.json";
import teamsmember from "../../../Images/Team/teams.gif";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(data.teamMembers);
  }, []);

  return (
    <div className="leaders-container">
      <div className="top-photo bg-gray-300 h-72 w-full flex items-center justify-center">
        <img
          src={teamsmember}
          alt="Team Hansaria"
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-3xl font-bold text-center my-8">
        <span className="text-green-500">Meet Our</span> <span className="text-yellow-500">Teams</span>
      </h2>
      <div className="team-members p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teams.map((team, index) => (
            <div
              key={index}
              className="team-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={team.photo}
                alt={team.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                  {team.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {team.designation}
                </p>
                <div className="flex justify-between mt-4">
                  {team.linkedin && (
                    <a
                      href={team.linkedin}
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
                  {team.facebook && (
                    <a
                      href={team.facebook}
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
                  {team.instagram && (
                    <a
                      href={team.instagram}
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
                  {team.youtube && (
                    <a
                      href={team.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 dark:hover:text-red-400"
                    >
                      <FaYoutube
                        size={24}
                        className="hover:scale-125 transition-transform duration-300"
                      />
                    </a>
                  )}
                  {team.whatsapp && (
                    <a
                      href={team.whatsapp}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
