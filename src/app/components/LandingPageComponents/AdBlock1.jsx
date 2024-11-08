// components/AdBlock.js
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AdBlock1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const adTexts = [
    "India's first webinar college admission",
    "Easy admission way",
    "There are no for seekers if we have College seekers",
  ];

  // Automatically cycle through text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === adTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000); // Changed to 5000 milliseconds (5 seconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [adTexts.length]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? adTexts.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === adTexts.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative  text-white py-4 px-6 rounded-md flex justify-center items-center">
      {/* Arrow Left */}
      <button
        onClick={handlePrev}
        className="absolute left-2 p-2 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300"
      >
        <FaArrowLeft />
      </button>

      {/* Moving Text */}
      <p className="text-center text-lg">{adTexts[currentIndex]}</p>

      {/* Arrow Right */}
      <button
        onClick={handleNext}
        className="absolute right-2 p-2 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default AdBlock1;
