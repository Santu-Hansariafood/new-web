import React from "react";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

const TimelineEvent = ({
  year,
  title,
  description,
  bgColor,
  dateRange,
  align,
  darkMode,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-start p-6 rounded-lg shadow-lg ${bgColor} text-white mb-8 w-full md:w-5/12 ${
        align === "left" ? "self-start md:mr-auto" : "self-end md:ml-auto"
      } ${inView ? "animate-fadeIn" : "opacity-0"}`}
    >
      <div className="flex justify-between w-full mb-2">
        <div className="text-lg font-semibold">{year}</div>
        <div className={`px-2 py-1 ${darkMode ? "bg-gray-700" : "bg-gray-800"} rounded`}>
          {dateRange}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
      <div
        className={`absolute top-12 h-8 w-8 ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full border-2 ${darkMode ? "border-gray-500" : "border-gray-400"} flex items-center justify-center ${
          align === "left"
            ? "-right-4 md:right-auto md:-left-4"
            : "-left-4 md:left-auto md:-right-4"
        }`}
      >
        <div className={`w-2 h-2 ${darkMode ? "bg-gray-500" : "bg-gray-400"} rounded-full`}></div>
      </div>
    </div>
  );
};

const Timeline = ({ darkMode }) => {
  const events = [
    {
      year: "2000",
      title: "First steps",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-purple-500",
      dateRange: "January 2000 - December 2000",
    },
    {
      year: "2001",
      title: "Idea documentation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-purple-300",
      dateRange: "January 2001 - December 2001",
    },
    {
      year: "2003",
      title: "New premises in Ensigna",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-pink-300",
      dateRange: "January 2003 - December 2003",
    },
    {
      year: "2009",
      title: "Qualified training",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-yellow-300",
      dateRange: "January 2009 - December 2009",
    },
    {
      year: "2011",
      title: "Team expansion",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-yellow-500",
      dateRange: "January 2011 - December 2011",
    },
    {
      year: "2014",
      title: "National publication",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-green-300",
      dateRange: "January 2014 - December 2014",
    },
    {
      year: "2018",
      title: "First national prize",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-green-500",
      dateRange: "January 2018 - December 2018",
    },
    {
      year: "2020",
      title: "Technology award",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-blue-500",
      dateRange: "January 2020 - December 2020",
    },
    {
      year: "2021",
      title: "National reach",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-blue-300",
      dateRange: "January 2021 - December 2021",
    },
    {
      year: "2022",
      title: "One million users",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-red-300",
      dateRange: "January 2022 - December 2022",
    },
    {
      year: "2023",
      title: "Tripled income",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-red-500",
      dateRange: "January 2023 - December 2023",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className={`text-green-500`}>Time</span>
        <span className={`text-yellow-500`}>line</span>
      </h1>
      <div className="relative flex flex-col items-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-full"
          >
            <TimelineEvent
              year={event.year}
              title={event.title}
              description={event.description}
              bgColor={event.bgColor}
              dateRange={event.dateRange}
              align={index % 2 === 0 ? "left" : "right"}
              darkMode={darkMode}
            />
            {index !== events.length - 1 && (
              <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-8 ${darkMode ? "bg-gray-500" : "bg-gray-400"}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
