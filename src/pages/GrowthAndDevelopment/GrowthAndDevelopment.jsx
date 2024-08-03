import React, { Suspense } from "react";
import {
  FaUsers,
  FaBullseye,
  FaLightbulb,
  FaPhoneAlt,
  FaPen,
} from "react-icons/fa";

const Timeline = React.lazy(() => import("./Timeline/Timeline"));

const GrowthAndDevelopment = ({ darkMode }) => {
  const strategies = [
    {
      title: "DEFINE YOUR TARGET AUDIENCE",
      description:
        "Clearly identify and understand the specific group of people or businesses you want to reach with your marketing efforts. Consider demographics, psychographics, and behavior patterns to create a comprehensive profile of your ideal customer.",
      icon: <FaUsers />,
      bgColor: "bg-blue-700",
    },
    {
      title: "SET CLEAR OBJECTIVES",
      description:
        "Establish specific, measurable, attainable, relevant, and time-bound (SMART) goals for your marketing campaign. Whether it's increasing brand awareness, generating leads, or boosting sales, clear objectives will help you stay focused and track your progress.",
      icon: <FaBullseye />,
      bgColor: "bg-green-500",
    },
    {
      title: "DEVELOP A COMPELLING VALUE PROPOSITION",
      description:
        "Clearly identify and understand the specific needs of the people or businesses you want to reach with your marketing efforts. Consider demographics, psychographics, and behavior patterns to create a comprehensive profile of your ideal customer.",
      icon: <FaLightbulb />,
      bgColor: "bg-yellow-400",
    },
    {
      title: "CHOOSE APPROPRIATE MARKETING CHANNELS",
      description:
        "Select the most effective channels to reach and engage your target audience. This could include a combination of online and offline platforms such as social media, email marketing, content marketing, search engine optimization (SEO), and more.",
      icon: <FaPhoneAlt />,
      bgColor: "bg-red-500",
    },
    {
      title: "CREATE ENGAGING CONTENT",
      description:
        "Develop high-quality, relevant, and valuable content that resonates with your target audience. Consider various content formats such as blog posts, videos, infographics, podcasts, and interactive experiences.",
      icon: <FaPen />,
      bgColor: "bg-gray-300",
    },
  ];

  return (
    <div className={`max-w-7xl mx-auto p-6 ${darkMode ? "dark" : ""}`}>
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-green-500">MARKETING</span>{" "}
        <span className="text-yellow-500">STRATEGY</span>
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        MAIN ASPECTS TO ENSURE EFFECTIVENESS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${strategy.bgColor} text-white hover-scale`}
          >
            <div className="text-5xl mb-4">{strategy.icon}</div>
            <h2 className="text-xl font-semibold mb-4">{strategy.title}</h2>
            <p className="text-sm">{strategy.description}</p>
          </div>
        ))}
      </div>
      <Suspense fallback={<div>Loading timeline...</div>}>
        <Timeline />
      </Suspense>
    </div>
  );
};

export default GrowthAndDevelopment;
