import Image from 'next/image';

const AdBlock5 = () => {
  return (
    <div className="flex items-center justify-between bg-white mt-10 drop-shadow-md">
      <div className="ml-12 max-w-2xl py-2">
        <h1 className="text-2xl font-bold mb-2">
          Confused About Your Career Path?
        </h1>
        <p className="text-gray-700 mb-4">
          Navigating your future can be challenging, but our career experts are
          here to help you clarify your goals and make informed decisions.
        </p>
        <button className="bg-[#2914B5] text-white px-4 py-2 rounded-md">
          View Full Details →
        </button>
      </div>

      <Image src="/adblock5.png" alt="adblock5" width={750} height={200} />
    </div>
  );
};

export default AdBlock5;
