import React from 'react';
import Card from './Card01';
import AdBlock2 from './AdBlock2';

const Section2 = () => {
  return (
    <div className="p-6 sm:p-8 mt-5">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Why Choose Us?</h1>
        <p className="mt-4 text-lg italic text-gray-600 max-w-screen-lg mx-auto px-4 sm:px-12 md:px-24">
          &quot;At CollegeSeeker, we make higher education exploration effortless. Discover your ideal fit with our support and insights to navigate your educational journey confidently.&quot;
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <Card 
          imagePath="https://via.placeholder.com/150" 
          text="Join a thriving community of learners"  
          textColor="#ffffff" 
          cardColor="#2914B5" 
        />
        <Card 
          imagePath="https://via.placeholder.com/150" 
          text="Genuine feedback from students"  
          textColor="#000000" 
          cardColor="#ffffff" 
        />
        <Card 
          imagePath="https://via.placeholder.com/150" 
          text="Effortless discovery of college and students"  
          textColor="#ffffff" 
          cardColor="#2914B5" 
        />
        <Card 
          imagePath="https://via.placeholder.com/150" 
          text="Supportive mentorship for your success"  
          textColor="#000000" 
          cardColor="#ffffff" 
        />
      </div>
    <AdBlock2/>
    </div>
  );
};

export default Section2;
