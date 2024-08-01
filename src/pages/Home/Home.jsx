import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Career from "../Career/Career";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      img: "https://via.placeholder.com/800x400.png?text=Slide+1",
      text: "High Quality Grains for the Nation",
    },
    {
      img: "https://via.placeholder.com/800x400.png?text=Slide+2",
      text: "Innovative Agricultural Practices",
    },
    {
      img: "https://via.placeholder.com/800x400.png?text=Slide+3",
      text: "Sustainable Farming Solutions",
    },
    {
      img: "https://via.placeholder.com/800x400.png?text=Slide+4",
      text: "Optimized Yield for Every Seed",
    },
    {
      img: "https://via.placeholder.com/800x400.png?text=Slide+5",
      text: "Pioneering Agricultural Techniques",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full relative">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-[90vh] md:h-screen">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-8 md:p-16 lg:p-24">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Filling The Bowls Of Our Nation
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-green-400 font-bold">
                  With Best Quality Grains
                </h2>
                <p className="mt-4 mb-6 text-sm md:text-lg lg:text-xl">
                  We take pride in producing the highest quality seeds for
                  optimised yields.
                </p>
                <button className="mt-6 bg-green-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base">
                  Discover Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <About />
      <Contact />
      <Career />
    </div>
  );
};

export default Home;
