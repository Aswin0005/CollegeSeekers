import Image from 'next/image';

const AdBlock5 = () => {
  return (
    <div className="flex items-center justify-between bg-white mt-10 drop-shadow-md w-full max-md:px-4">
      <div className="relative md:ml-12 max-w-2xl py-2 w-full">
        <h1 className="relative text-2xl font-bold mb-2 z-20">
          Confused About Your Career Path?
        </h1>
        <p className="hidden md:block text-gray-700 mb-4 z-20">
          Navigating your future can be challenging, but our career experts are
          here to help you clarify your goals and make informed decisions.
        </p>
        <p className="relative md:hidden text-black font-medium mb-4 z-20">
          We are here to help you out
        </p>
        <button className="bg-[#2914B5] text-white px-4 py-2 rounded-md max-md:w-full mx-auto max-md:mt-20 mb-2">
          View Full Details →
        </button>
      </div>

      <Image
        src="/adblock5.png"
        alt="adblock5"
        width={750}
        height={200}
        className="hidden md:block"
      />

      <Image
        src="/ad5-mobile.png"
        alt="adblock5"
        width={250}
        height={300}
        className="absolute right-0 md:hidden"
      />
    </div>
  );
};

export default AdBlock5;
