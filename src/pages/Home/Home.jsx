import React, { Suspense, lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyImage from "../../components/common/LazyImage/LazyImage";
import slide1 from "../../Images/Slides/slide-1.jpg";
import slide2 from "../../Images/Slides/slide-2.jpg";
import slide3 from "../../Images/Slides/slide-3.jpg";
import slide4 from "../../Images/Slides/slide-4.jpg";
import slide5 from "../../Images/Slides/slide-5.jpg";
import "./Home.css";

const About = lazy(() => import("../About/About"));
const Contact = lazy(() => import("../Contact/Contact"));
const Career = lazy(() => import("../Career/Career"));

const Home = ({ darkMode }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className="custom-dot">
        <span className="custom-dot-inner"></span>
      </div>
    ),
    appendDots: (dots) => <ul>{dots}</ul>,
  };

  const slides = [
    {
      img: slide1,
      text: "High Quality Grains for the Nation",
      quote:
        "We take pride in producing the highest quality seeds for optimized yields.",
    },
    {
      img: slide2,
      text: "Innovative Agricultural Practices",
      quote: "Innovation is at the heart of our farming practices.",
    },
    {
      img: slide3,
      text: "Sustainable Farming Solutions",
      quote: "Sustainability drives our approach to agriculture.",
    },
    {
      img: slide4,
      text: "Optimized Yield for Every Seed",
      quote: "Maximizing yield, one seed at a time.",
    },
    {
      img: slide5,
      text: "Pioneering Agricultural Techniques",
      quote: "Leading the way with pioneering techniques.",
    },
  ];

  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="w-full relative">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-[90vh] md:h-screen">
              <LazyImage
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center p-8 md:p-16 lg:p-24 ${
                  darkMode ? "bg-black bg-opacity-60" : "bg-black bg-opacity-50"
                }`}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-slide-in">
                  {slide.text}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-green-400">
                  {slide.quote}
                </h2>
                <p className="mt-4 mb-6 text-sm md:text-lg lg:text-xl animate-slide-in">
                  {slide.quote}
                </p>
                <button
                  className={`mt-6 px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
                    darkMode
                      ? "bg-green-600 text-white hover:bg-yellow-500 hover:text-green-600"
                      : "bg-green-500 text-white hover:bg-yellow-500 hover:text-green-500"
                  }`}
                >
                  Discover Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Suspense fallback={<div>Loading About Section...</div>}>
        <About darkMode={darkMode} />
      </Suspense>
      <Suspense fallback={<div>Loading Career Section...</div>}>
        <Career darkMode={darkMode} />
      </Suspense>
      <Suspense fallback={<div>Loading Contact Section...</div>}>
        <Contact darkMode={darkMode} />
      </Suspense>
    </div>
  );
};

export default Home;
