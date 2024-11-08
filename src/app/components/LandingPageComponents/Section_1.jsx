"use client";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import AdBlock1 from "./AdBlock1";
import Image from "next/image";

export default function Section1() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      console.log("Searching for:", searchInput);
    }
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center text-slate-950 flex flex-col justify-center"
      style={{ backgroundImage: "url(/bg1.png)" }}
    >
      {/* Top layer with black transparent background */}
      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 z-10 p-4">
        <div className="flex justify-between items-center">
          {/* Top Left: Explore and College Predictor */}
          <div className="flex space-x-4">
            <button
              aria-label="Explore"
              className="bg-blue-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-900 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              aria-label="College Predictor"
              className="bg-blue-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-900 transition-all duration-300 flex items-center space-x-2"
            >
              <Image src="/cplogo.svg" alt="College Predictor Logo" width={20} height={20} />
              <span>College Predictor</span>
            </button>
          </div>

          <div className="flex-grow flex justify-center">
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white w-full max-w-lg rounded-md overflow-hidden shadow-md"
            >
              <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none"
                placeholder="Search Colleges or Courses"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                aria-label="Search"
              />
              <button
                type="submit"
                className="px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Top Right: Bookmark, Notifications with Alert, Contact Us */}
          <div className="flex space-x-4 items-center">
            <button
              aria-label="Bookmark"
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              <FaBookmark size={20} />
            </button>
            <button
              aria-label="Notifications"
              className="relative bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              <IoIosNotificationsOutline size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full"></span>
            </button>
            <button
              aria-label="Contact Us"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Center-Left Text and Get Started Button */}
      <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 space-y-4 text-center md:text-left z-10">
        <h3 className="text-lg md:text-xl font-medium text-white">
          Shaping Sustainable Futures,
        </h3>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white py-4">
          Discover Colleges Based on Your Unique Path
        </h1>
        <button
          className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 text-white flex items-center space-x-2"
        >
          <span>Get Started</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h14" />
          </svg>
        </button>
      </div>

      {/* Bottom Carousel */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black bg-opacity-60 text-white text-center py-2">
        <AdBlock1 />
      </div>
    </section>
  );
}
