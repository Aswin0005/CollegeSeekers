'use client';
import React, { useRef } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function SelectionPanel() {
  const scrollRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200, // Adjust this value for the scrolling amount
      behavior: 'smooth',
    });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200, // Adjust this value for the scrolling amount
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full bg-amber-400 p-4">
      {/* Left Arrow */}
      {/* <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        <FaArrowAltCircleLeft size={32} />
      </button> */}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide gap-12 items-center justify-evenly"
      >
        {/* Individual Buttons */}
        <button className="px-6 py-2 ml-4 bg-white text-black whitespace-nowrap ">
          Engineering
        </button>
        <button className="px-6 py-2 bg-white text-black whitespace-nowrap ">
          Medical
        </button>
        <button className="px-6 py-2 bg-white text-black whitespace-nowrap ">
          Law
        </button>
        <button className="px-6 py-2 bg-white text-black whitespace-nowrap ">
          Arts
        </button>
        <button className="px-6 py-2 bg-white text-black whitespace-nowrap ">
          Science
        </button>
        <button className="px-6 py-2 bg-white text-black whitespace-nowrap ">
          Management
        </button>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        <FaArrowAltCircleRight size={26} />
      </button>
    </div>
  );
}

export default SelectionPanel;
