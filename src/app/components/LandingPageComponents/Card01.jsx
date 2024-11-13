import Image from 'next/image';
import React from 'react';

const Card = ({ imagePath, text, textColor, cardColor }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center shadow-xl p-8 border-black rounded-md max-sm:min-w-72`} 
      style={{ backgroundColor: cardColor }}
    >
      <Image 
        src={imagePath} 
        alt="Card Image" 
        className="w-24 h-24 object-cover mb-4" 
        width={24}
        height={24}
      />
      <p 
        className={`text-center text-lg font-semibold`} 
        style={{ color: textColor }}
      >
        {text}
      </p>
    </div>
  );
};

export default Card;
