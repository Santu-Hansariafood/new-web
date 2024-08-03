import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
} from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import ContactCover from "../../Images/Contact/contact.gif";
import logo from "../../Images/Logo/Hansaria-Logo.png";

const Contact = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translate3d(0,-20px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  const branchOffices = [
    { name: "Branch Office 1", address: "City, State, ZIP" },
    { name: "Branch Office 2", address: "City, State, ZIP" },
    { name: "Branch Office 3", address: "City, State, ZIP" },
    { name: "Branch Office 4", address: "City, State, ZIP" },
    { name: "Branch Office 5", address: "City, State, ZIP" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactCover})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            <span className="text-green-500">Contact</span>{" "}
            <span className="text-yellow-500">Us</span>
          </h1>
        </div>
      </div>
      <div className="w-full p-6 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img src={logo} alt="Placeholder" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start p-4">
          <p className="text-lg md:text-xl text-gray-700">
            Have a query about our range of high-quality seeds and grains? Wish
            to place an order? Simply fill up this form, and our team will get
            back to you promptly!
          </p>
        </div>
      </div>

      <div className="w-full p-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-yellow-500">Head</span>{" "}
          <span className="text-green-500">Office</span>
        </h2>
        <animated.div
          style={animationProps}
          className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 w-full md:w-3/4 lg:w-2/3"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4234607104922!2d88.40781927454105!3d22.563260133314028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b7a8d7ebaf%3A0xec7eb347c6472d0e!2sHansaria%20Food%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1722661943720!5m2!1sen!2sin"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: "2px solid #4CAF50", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hansaria Food Pvt Ltd Location"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
              <div className="flex items-center text-green-600 mb-4">
                <FaBuilding className="mr-2 text-yellow-500" />
                <span className="font-bold">Hansaria Food Pvt Ltd</span>
              </div>
              <div className="flex items-center text-green-600 mb-4">
                <FaMapMarkerAlt className="mr-2 text-yellow-500" />
                <span className="">
                  Plot No.1, Primarc Square, Salt Lake Bypass, LA Block, Sector:
                  3, Bidhannagar, Kolkata, West Bengal 700098
                </span>
              </div>
              <div className="flex items-center text-green-600 mb-2">
                <FaPhoneAlt className="mr-2 text-yellow-500" />
                <span>+91 33 2466 2179</span>
              </div>
              <div className="flex items-center text-green-600 mb-2">
                <FaPhoneAlt className="mr-2 text-yellow-500" />
                <span>+91 33 2466 2180</span>
              </div>
              <div className="flex items-center text-green-600 mb-2">
                <FaPhoneAlt className="mr-2 text-yellow-500" />
                <span>Customer care: +91 9073328273</span>
              </div>
              <div className="flex items-center text-green-600">
                <FaEnvelope className="mr-2 text-yellow-500" />
                <span>info@hansariafood.in</span>
              </div>
            </div>
          </div>
        </animated.div>
      </div>

      <div className="w-full p-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-green-500">Branch </span>{" "}
          <span className="text-yellow-500">Offices</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {branchOffices.map((branch, index) => (
            <animated.div
              key={index}
              style={animationProps}
              className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="flex items-center text-green-600 mb-2">
                <FaMapMarkerAlt className="mr-2 text-yellow-500" />
                <span className="font-bold">{branch.name}</span>
              </div>
              <p className="text-gray-700">{branch.address}</p>
            </animated.div>
          ))}
        </div>
      </div>

      <div className="w-full p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start relative z-10 min-h-full">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-4 bg-green-600 text-white relative z-20 h-full">
          <animated.div
            style={animationProps}
            className="mb-4 flex items-center"
          >
            <FaMapMarkerAlt className="mr-2 text-yellow-500" />
            <span>Plot No.1, Primarc Square, Salt Lake Bypass, LA Block, Sector: 3, Bidhannagar, Kolkata, West Bengal 700098</span>
          </animated.div>
          <animated.div
            style={animationProps}
            className="mb-4 flex items-center"
          >
            <FaPhoneAlt className="mr-2 text-yellow-500" />
            <span>+91 33 2466 2179</span>
          </animated.div>
          <animated.div
            style={animationProps}
            className="mb-4 flex items-center"
          >
            <FaPhoneAlt className="mr-2 text-yellow-500" />
            <span>+91 33 2466 2180</span>
          </animated.div>
          <animated.div
            style={animationProps}
            className="mb-4 flex items-center"
          >
            <FaPhoneAlt className="mr-2 text-yellow-500" />
            <span>Customer care: +91 9073328273</span>
          </animated.div>
          <animated.div style={animationProps} className="flex items-center">
            <FaEnvelope className="mr-2 text-yellow-500" />
            <span>info@hansariafood.in</span>
          </animated.div>
        </div>
        <div className="w-full md:w-1/2 p-4 relative z-20">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Drop us a message
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <select
                className="border p-2 rounded w-full"
                defaultValue="Enquiry Type"
              >
                <option value="Enquiry Type" disabled>
                  Enquiry Type
                </option>
                <option value="General">General</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="border p-2 rounded w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border p-2 rounded w-full"
            />
            <textarea
              placeholder="Write your message here.."
              className="border p-2 rounded w-full h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 hover:text-yellow-500 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
