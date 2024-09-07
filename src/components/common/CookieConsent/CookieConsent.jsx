import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import icons

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0">
          We uses cookies to improve your experience. By using our site, you
          agree to our cookie policy.
        </p>
        <div className="flex space-x-2">
          <button
            onClick={handleAccept}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          >
            <FaCheckCircle className="mr-2" />
          </button>
          <button
            onClick={handleDecline}
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md"
          >
            <FaTimesCircle className="mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
