import React from 'react';
import Card from './Card01';
import AdBlock2 from './AdBlock2';

const Section2 = () => {
  return (
    <div className="p-6 sm:p-8 mt-5">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Why Choose Us?</h1>
        <p className="mt-4 text-lg italic text-gray-600 max-w-screen-lg mx-auto px-4 sm:px-12 md:px-24">
          At CollegeSeeker, we make higher education exploration effortless. Discover your ideal fit with our support and insights to navigate your educational journey confidently.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
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

      {/* AdBlock Section */}
      <AdBlock2 />
    </div>
  );
};

export default Section2;
