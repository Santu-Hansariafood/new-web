import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start p-4">
          <p className="text-lg md:text-xl text-gray-700">
            Have a query about our range of high-quality seeds and grains? Wish
            to place an order? Simply fill up this form, and our team will get
            back to you promptly!
          </p>
        </div>
      </div>
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start relative z-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-4 bg-green-600 text-white relative z-20">
          <div className="mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span>69A, Satish Mukherjee Road, Kolkata, West Bengal 700026</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>+91 33 2466 2179</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>+91 33 2466 2180</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>Customer care: +91 9073328273</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>info@hansariafood.in</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 relative z-20">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Drop us a message
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Enquiry Types"
                className="border p-2 rounded w-full"
              />
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
              className="bg-green-600 text-white py-2 px-4 rounded"
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
