import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AdBlock2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly md:justify-between mt-10 md:m-10 border-2 border-gray-200 rounded-md shadow-lg overflow-hidden max-md:bg-[url('/bg-ad1.jpeg')] max-md:bg-center max-md:bg-cover max-md:h-96 max-md:bg-black/30 max-md:bg-blend-multiply">
      <div className="hidden md:flex">
        <Image
          src="/ab.png"
          alt="Graduation Image"
          className="h-28 w-40 object-cover"
          width={342}
          height={198}
        />
      </div>
      <div className="md:flex-grow p-6">
        <h1 className="text-2xl font-bold text-white md:text-gray-800">
          Admissions Open For <span className='text-yellow-400'>2024!</span>
        </h1>
        <p className="hidden md:block text-gray-500">
          Start Your Future Today!
        </p>
        <p className="md:hidden text-white text-center mt-4">
          Take the first step toward a brighter future. Don’t wait. Begin your
          journey with us and shape your path to success.
        </p>
      </div>
      <div className="max-md:w-full">
        <button className="bg-[#2914B5] max-md:w-[90%] max-md:mx-auto  text-white px-6 py-3 mr-6 rounded-md hover:bg-yellow-600 flex items-center justify-center space-x-2">
          <span>Apply Now</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AdBlock2;
