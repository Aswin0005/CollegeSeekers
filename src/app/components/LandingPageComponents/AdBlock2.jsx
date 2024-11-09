import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AdBlock2 = () => {
  return (
    <div className="flex items-center justify-between m-10 border-2 border-gray-200 rounded-md shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Image
          src="/ab.png"
          alt="Graduation Image"
          className="h-28 w-40 object-cover"
          width={342}
          height={198}
        />
      </div>
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Admissions Open For 2024!
        </h1>
        <p className="text-gray-500">Start Your Future Today!</p>
      </div>
      <div className="flex-shrink-0">
        <button className="bg-yellow-500 text-white px-6 py-3 mr-6 rounded-md hover:bg-yellow-600 flex items-center space-x-2">
          <span>Apply Now</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AdBlock2;
