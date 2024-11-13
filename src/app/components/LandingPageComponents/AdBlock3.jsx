import Image from 'next/image';

const AdBlock3 = () => {
  return (
    <div className="hidden md:flex items-center justify-between bg-gray-100 mt-10 drop-shadow-md">
      <div className="ml-12 max-w-xl">
        <h1 className="text-2xl font-bold mb-2">Why Pursue Engineering?</h1>
        <p className="text-gray-700 mb-4">
          Engineering opens doors to innovation, tech breakthroughs, and endless
          career opportunities.
        </p>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-yellow-500 flex items-center justify-center mr-2 p-3">
            <span className="text-white font-bold">✓</span>
          </div>
          <span className="text-gray-800">High salary potential</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-500 flex items-center justify-center mr-2 p-3">
            <span className="text-white font-bold">✓</span>
          </div>
          <span className="text-gray-800">Vast career opportunities</span>
        </div>
      </div>
      <div className="relative">
        <button className="absolute -left-16 top-1/2 -translate-y-1/2 bg-[#2914B5] text-white px-4 py-2 rounded-md">
          View Full Details →
        </button>
        <Image src="/adblock3.png" alt="adblock3" width={270} height={270} />
      </div>
    </div>
  );
};

export default AdBlock3;
