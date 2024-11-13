'use client';
import React, { useEffect, useRef, useState } from 'react';
import Card from './Card01';
import AdBlock2 from './AdBlock2';

const Section2 = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 300; // Adjust this value based on your card's actual width
  const totalCards = 4; // Number of cards

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const autoScroll = () => {
      if (scrollContainer) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainer;
        const maxScrollLeft = scrollWidth - clientWidth;

        // Scroll to the right by one card's width (clientWidth), or reset to the start
        if (scrollLeft >= maxScrollLeft) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          setActiveIndex(0);
        } else {
          scrollContainer.scrollBy({ left: clientWidth, behavior: 'smooth' });
          setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
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
      const { scrollLeft, clientWidth } = scrollContainer;
      const newIndex = Math.round(scrollLeft / clientWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="sm:p-8 mt-5">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Why Choose Us?
        </h1>
        <p className="hidden md:block mt-4 text-lg italic text-gray-600 max-w-screen-lg mx-auto px-4 sm:px-12 md:px-24">
          At CollegeSeeker, we make higher education exploration effortless.
          Discover your ideal fit with our support and insights to navigate your
          educational journey confidently.
        </p>
      </div>

      {/* Cards Section */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scroll-smooth space-x-4 mx-7 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-10 p-2 no-scrollbar"
        onScroll={handleScroll}
      >
        <Card
          imagePath="/sc1.svg"
          text="Join a Thriving Community of Learners"
          textColor="#ffffff"
          cardColor="#2914B5"
        />
        <Card
          imagePath="/sc2.svg"
          text="Genuine Feedback from Real Students"
          textColor="#000000"
          cardColor="#ffffff"
          borderStyle="border border-gray-200"
        />
        <Card
          imagePath="/sc3.svg"
          text="Effortlessly Discover Colleges and Courses"
          textColor="#ffffff"
          cardColor="#2914B5"
        />
        <Card
          imagePath="/sc4.svg"
          text="Supportive Mentorship for Your Success"
          textColor="#000000"
          cardColor="#ffffff"
          borderStyle="border border-gray-200"
        />
      </div>

      {/* Dot Tracker */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalCards }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* AdBlock Section */}
      <AdBlock2 />
    </div>
  );
};

export default Section2;
