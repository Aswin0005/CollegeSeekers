'use client';
import React, { useRef, useState } from 'react';
import SelectionPanel from './SelectionPanel';
import CollegeCard from './CollegeCard';
import EntranceExams from './EntranceExams';
import PopularCourses from './PopularCourses';
import AdBlock3 from './AdBlock3';
import AdBlock4 from './AdBlock4';

export default function Section3() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = 3; // Number of cards (CollegeCard, EntranceExams, PopularCourses)

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
    <div>
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mt-16">
          Explore Your Dream College In India
        </h1>
        <p className="mt-4 text-lg italic text-gray-600 max-w-screen-lg mx-auto px-4 sm:px-12 md:px-64">
          &quot;Easily explore colleges, entrance exams, and career
          opportunities tailored to your interests.&quot;
        </p>
      </div>
      {/* Selection Panel */}
      <SelectionPanel />
      {/* Cards Section with Horizontal Scroll */}
      <div
        ref={scrollContainerRef}
        className="w-full flex overflow-x-auto scroll-smooth max-md:space-x-4 mt-6 px-4 no-scrollbar"
        onScroll={handleScroll}
      >
        <CollegeCard />
        <EntranceExams />
        <PopularCourses />
      </div>

      {/* Dot Tracker */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalCards }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Advertisement Blocks */}
      <AdBlock3 />
      <AdBlock4 />
    </div>
  );
}
