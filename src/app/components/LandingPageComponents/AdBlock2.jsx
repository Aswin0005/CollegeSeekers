import Image from 'next/image';
import React from 'react';

const AdBlock2 = () => {
  return (
    <div className="flex items-center justify-between m-10 border-2 shadow-lg">
      <div className="flex-shrink-0">
        <Image src="https://via.placeholder.com/800x400" alt="Your Image" className="h-28 w-40" width={30} height={42} />
      </div>
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold">Admission open for 2025</h1>
        <p className="text-gray-500">Start your Future Today</p>
      </div>
      <div className="flex-shrink-0">
        <button className="bg-blue-500 text-white px-4 py-2 mr-6 rounded-md hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default AdBlock2;