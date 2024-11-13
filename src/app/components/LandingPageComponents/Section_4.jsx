// pages/index.js
'use client';
import React, { useRef, useState } from 'react';
import AdBlock5 from './AdBlock5';
import CollegeCard from './CollegeCard2';

export default function Section4() {
  const scrollContainerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const colleges = [
    {
      imageSrc: 'https://via.placeholder.com/300',
      collegeName: 'Anna University',
      location: 'Chennai, Tamil Nadu',
      rank: '17',
      programsOffered: 'B.Tech, and more.',
      salaryPackage: '7 LPA',
      fees: '2 Lakhs / Year',
    },
    {
      imageSrc: 'https://via.placeholder.com/300',
      collegeName: 'IIT Madras',
      location: 'Chennai, Tamil Nadu',
      rank: '1',
      programsOffered: 'B.Tech, M.Tech, and more.',
      salaryPackage: '15 LPA',
      fees: '3 Lakhs / Year',
    },
    {
      imageSrc: 'https://via.placeholder.com/300',
      collegeName: 'NIT Trichy',
      location: 'Tiruchirappalli, Tamil Nadu',
      rank: '9',
      programsOffered: 'B.Tech, M.Tech, MBA.',
      salaryPackage: '10 LPA',
      fees: '2.5 Lakhs / Year',
    },
  ];

  const handlePrevClick = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (scrollIndex < colleges.length - 1) {
      setScrollIndex(scrollIndex + 1);
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#8477FF14]">
      <h1 className="text-3xl sm:text-4xl font-bold mt-20 py-10 text-center">
        Top Recommended Colleges For You
      </h1>

      {/* Horizontal Scroll Section */}
      <div className="relative">
        {/* Left Navigation Button */}
        {scrollIndex > 0 && (
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
          >
            &#8249;
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth space-x-4 px-4 lg:space-x-8"
        >
          {colleges.map((college, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs sm:max-w-none lg:flex-1"
            >
              <div className="h-full flex justify-center items-stretch">
                <CollegeCard {...college} className="h-full" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Advertisement Section */}
      <AdBlock5 />
    </div>
  );
}
