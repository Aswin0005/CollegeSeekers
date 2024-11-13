'use client';
import React, { useEffect, useRef, useState } from 'react';

const CollegeStepsMobile = () => {
  const scrollContainerRef = useRef(null);
  const cardWidth = 364; // Adjust this value based on your card's actual width (e.g., min-w-[18rem])
  const [activeCard, setActiveCard] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const autoScroll = () => {
      if (scrollContainer) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainer;
        const maxScrollLeft = scrollWidth - clientWidth;

        // Scroll to the right by one card's width
        if (scrollLeft + cardWidth >= maxScrollLeft) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    };

    // Set an interval to auto-scroll every 3 seconds
    scrollInterval = setInterval(autoScroll, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  // Update active dot based on scroll position
  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const index = Math.round(scrollContainer.scrollLeft / cardWidth);
      setActiveCard(index);
    }
  };

  return (
    <div className="mt-10 md:hidden">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Choosing a College Shouldn’t be Stressful
        </h1>
      </div>

      {/* Cards Section */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth space-x-4 px-4"
      >
        {/* Card 1 */}
        <div className="bg-[#2914B5] text-white rounded-xl p-8 min-w-[18rem] shadow-lg flex-shrink-0">
          <div className="flex justify-center items-center mb-4 bg-[#DBD8FF] rounded-full w-20 h-20 mx-auto ">
            <img src="/Diploma.png" alt="Certificate" className="w-12 h-12" />
          </div>
          <h2 className="text-center text-xl font-semibold mb-2">
            Discover Your Perfect Fit
          </h2>
          <p className="text-center text-sm">
            Learn with peers who share your ambitions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-white rounded-xl p-8 min-w-[18rem] shadow-lg border flex-shrink-0">
          <div className="flex justify-center items-center mb-4 bg-[#DBD8FF] rounded-full w-20 h-20 mx-auto ">
            <img src="/Diploma.png" alt="Certificate" className="w-12 h-12" />
          </div>
          <h2 className="text-center text-xl font-semibold mb-2 text-black">
            Expert Guidance Tailored to You
          </h2>
          <p className="text-center text-sm text-black">
            Learn with peers who share your ambitions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#2914B5] text-white rounded-xl p-8 min-w-[18rem] shadow-lg flex-shrink-0">
          <div className="flex justify-center items-center mb-4 bg-[#DBD8FF] rounded-full w-20 h-20 mx-auto ">
            <img src="/Diploma.png" alt="Certificate" className="w-12 h-12" />
          </div>
          <h2 className="text-center text-xl font-semibold mb-2">
            Real-Time Application Tracking
          </h2>
          <p className="text-center text-sm">
            Learn with peers who share your ambitions.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white text-white rounded-xl p-8 min-w-[18rem] shadow-lg border flex-shrink-0">
          <div className="flex justify-center items-center mb-4 bg-[#DBD8FF] rounded-full w-20 h-20 mx-auto ">
            <img src="/Diploma.png" alt="Certificate" className="w-12 h-12" />
          </div>
          <h2 className="text-center text-xl font-semibold mb-2 text-black">
            One-Click
          </h2>
          <p className="text-center text-sm text-black">
            Learn with peers who share your ambitions.
          </p>
        </div>
      </div>

      {/* Dot Tracker */}
      <div className="flex justify-center mt-4 space-x-2">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              activeCard === index ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CollegeStepsMobile;
