// components/Testimony.js
import Image from 'next/image';
import React from 'react';

const Testimony = ({ stars = 5, comment, userName, userStream, profilePic }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      {/* Stars Section */}
      <div className="flex items-center mb-4">
        {/* Render stars */}
        {[...Array(stars)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="yellow"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27l5.18 3.15-1.64-6.81 5.18-4.29-6.81-.58L12 2l-2.91 6.74-6.81.58 5.18 4.29-1.64 6.81L12 17.27z"
            />
          </svg>
        ))}
      </div>

      {/* Comment Section */}
      <p className="text-gray-700 italic mb-4">&quot;{comment}&quot;</p>

      {/* Profile and User Details */}
      <div className="flex items-center">
        {/* Profile Icon */}
        <Image
          src={profilePic}
          alt={`${userName} profile`}
          className="w-12 h-12 rounded-full mr-4"
          width={12}
          height={12}
        />
        
        {/* User Info */}
        <div>
          <p className="font-semibold text-gray-800">{userName}</p>
          <p className="text-sm text-gray-600">{userStream}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
