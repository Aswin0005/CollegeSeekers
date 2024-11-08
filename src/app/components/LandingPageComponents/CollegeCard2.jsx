// components/CollegeCard.js
import Image from 'next/image';
import React from 'react';

const CollegeCard = ({
  imageSrc,
  collegeName,
  location,
  rank,
  programsOffered,
  salaryPackage,
  fees,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Image Section */}
      <div className="relative">
        <Image src={imageSrc} alt={`${collegeName} Image`} className="w-full h-48 object-cover" width={100} height={48}/>
        <div className="absolute top-2 left-2 bg-gray-900 bg-opacity-60 text-white px-2 py-1 rounded">
          {collegeName}
        </div>
        <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded">
          NAAC &apos;A&apos; Grade
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-600">{location}</p>
          <p className="text-gray-700 font-semibold">Rank #{rank}</p>
        </div>
        <h3 className="text-lg font-bold mb-2">{collegeName}</h3>
        <p className="text-sm text-gray-600 mb-4">Programs Offered: {programsOffered}</p>

        {/* Additional Info */}
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">
              {/* Replace with icon */}
              🎓
            </span>
            <span className="text-sm text-gray-700">Salary Package - {salaryPackage}</span>
          </div>

          <div className="flex items-center">
            <span className="text-gray-700 mr-2">
              {/* Replace with icon */}
              💰
            </span>
            <span className="text-sm text-gray-700">Fees - {fees}</span>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
