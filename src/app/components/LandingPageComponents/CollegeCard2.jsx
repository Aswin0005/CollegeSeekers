// components/CollegeCard.js
import Image from 'next/image';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';

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
    <div className="max-w-sm bg-white rounded-md shadow-md overflow-hidden border border-gray-200">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={imageSrc}
          alt={`${collegeName} Image`}
          className="w-full h-48 object-cover"
          width={100}
          height={48}
        />
        <div className="absolute bottom-4 left-2 text-white font-medium">
          <p className="">{collegeName}</p>
          <p className="text-sm flex items-center gap-1">
            <IoLocationOutline />
            {location}
          </p>
        </div>
        <div className="absolute bottom-8 font-medium right-2 text-yellow-500">
          NAAC &apos;A&apos; Grade
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700 font-semibold">Rank #{rank}</p>
          <p className="text-gray-700 font-semibold underline">View Details</p>
        </div>

        {/* Additional Info */}
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">
              {/* Replace with icon */}
              🎓
            </span>
            <span className="text-sm text-gray-700">
              Programs Offered: {programsOffered}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">
              {/* Replace with icon */}
              💸
            </span>
            <span className="text-sm text-gray-700">
              Salary Package - {salaryPackage}
            </span>
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
        <div className="flex justify-center mt-4 w-full">
          <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 w-full">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
