// components/LandingPageComponents/Section1.js
"use client";
import { useState } from 'react';
import { HiSave } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import AdBlock1 from './AdBlock1';

export default function Section1() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      console.log('Searching for:', searchInput);
    }
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center text-slate-950 flex flex-col justify-center"
      style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/9ddf/2451/54d8dc2623ee9b1c6684edfd899ca0bd?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JiqL9aIF9BzzSkHsqx5TXl0b3Yh5C9Ke2BMtCxo45l2rg8CgMHpYAniAVREy8QRTh-zQfPelLwH~WQ3IS4Gmayjut2-rDcNXUGe8lNTrAt114MVi6PNOWfnx7mRw5Qo~Qeu4m~6-5EJP10CBlVfRZTSp4kTaQawLBXAPo2b35eugHNyBl3Mkrac2UKzUcXuqwIocFWs4e1mdSOnhNrRkJPiawkJQP6x9CRH72dIpWTGZLBR5hqAIh8ocP3v1JTonPtyFrqUshNBuq4z91K2-R4J56lQ8l4MGNIkM1s7P~Kf3EXCX-TzK3nU1nXt9WD941STjvBPnWRdM-g~y72W0lA__)' }}
    >
      {/* Top layer with black transparent background */}
      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 z-10 p-4">
        <div className="flex justify-between items-center">
          {/* Top Left: Explore and College Predictor */}
          <div className="flex space-x-4">
            <button
              aria-label="Explore"
              className="bg-white text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              Explore
            </button>
            <button
              aria-label="College Predictor"
              className="bg-white text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              College Predictor
            </button>
          </div>

          {/* Top Center: Search Bar */}
          <div className="flex-grow flex justify-center">
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white w-full max-w-lg rounded-md overflow-hidden"
            >
              <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                aria-label="Search"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
              >
                Search
              </button>
            </form>
          </div>

          {/* Top Right: Save, Notifications, Contact Us */}
          <div className="flex space-x-4">
            <button
              aria-label="Save"
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              <HiSave size={20} />
            </button>
            <button
              aria-label="Notifications"
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              <IoIosNotificationsOutline size={20} />
            </button>
            <button
              aria-label="Contact Us"
              className="bg-white text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Center-Left Text and Get Started Button */}
      <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 space-y-4 text-center md:text-left z-10">
        <h3 className="text-lg md:text-xl font-medium text-white">
          Shaping a sustainable future
        </h3>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white py-4">
            Discover College based <br/> on your unique path
        </h1>
        <button
          className="bg-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300 text-white mt-4"
        >
          Get Started
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
        <AdBlock1 />
      </div>
    </section>
  );
}
