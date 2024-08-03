import React from "react";
import LazyImage from "../../../components/common/LazyImage/LazyImage";

const Maize = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center py-8 bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg animate-fadeIn">
        <h1 className="text-5xl font-extrabold">
          Green Elegant Farmer Story Presentation
        </h1>
        <p className="mt-2 text-lg font-light">PRESENTATION 2023</p>
      </header>

      <main className="mt-12 space-y-16 animate-fadeIn">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ABOUT FARMER
          </h2>
          <div className="w-full overflow-hidden">
            <LazyImage
              src="https://via.placeholder.com/1200x400"
              alt="About Farmer"
              className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            "The maize is the staple food of the vast majority of mankind."
          </p>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-lg">
            "Maize, the golden grain, holds the power to sustain and nourish
            life."
          </p>
        </section>
        <section className="text-center bg-gray-100 py-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">FUTURE PLAN</h2>
          <div className="w-full overflow-hidden">
            <LazyImage
              src="https://via.placeholder.com/1200x400"
              alt="Future Plan"
              className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            "The future of agriculture lies in the golden kernels of maize."
          </p>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-lg">
            "Maize cultivation is not just a practice, but a promise for
            tomorrow."
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-4xl font-bold text-green-700">1254++</p>
              <p className="text-gray-600">Paddy Harvest</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-4xl font-bold text-green-700">564++</p>
              <p className="text-gray-600">Fruit Harvest</p>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">COMMODITIES</h2>
          <div className="w-full overflow-hidden">
            <LazyImage
              src="https://via.placeholder.com/1200x400"
              alt="Commodities"
              className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            "Maize: The cornerstone of agriculture and the heartbeat of rural
            economies."
          </p>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-lg">
            "From ancient civilizations to modern kitchens, maize continues to
            feed the world."
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold text-gray-700">
                Best Quality Good Seeds
              </p>
              <LazyImage
                src="https://via.placeholder.com/200x150"
                alt="Good Seeds"
                className="mx-auto my-4 rounded-lg shadow-lg"
              />
              <p className="text-gray-600">
                "Good seeds, better yields, and a promise of abundance."
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold text-gray-700">
                Good Land for Farming
              </p>
              <LazyImage
                src="https://via.placeholder.com/200x150"
                alt="Good Land"
                className="mx-auto my-4 rounded-lg shadow-lg"
              />
              <p className="text-gray-600">
                "Fertile lands and sustainable farming practices go hand in
                hand."
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center py-8 bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg mt-16 animate-fadeIn">
        <p className="text-lg">THANKS FOR</p>
        <p className="text-2xl font-bold">Your Attention</p>
        <p className="mt-2">PRESENTATION 2023</p>
      </footer>
    </div>
  );
};

export default Maize;
