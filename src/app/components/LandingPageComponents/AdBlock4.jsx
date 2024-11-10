import Image from 'next/image';

const AdBlock4 = () => {
  return (
    <div className="flex items-center bg-white p-2 drop-shadow-lg border rounded-md mt-10 w-[90%] mx-auto ">
      <div className="flex-shrink-0 relative">
        <Image src="/adblock4bg.png" alt="Ad 4" width={200} height={200} />
        <Image
          src="/adblock4trophy.png"
          alt="Ad 4"
          width={90}
          height={90}
          className="absolute top-1/2 -translate-y-1/2 left-[45%] -translate-x-1/2"
        />
      </div>
      <div className="ml-4 grow flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center">
          India&apos;s Most Convenient College Application Form
        </h2>
        <p className="text-gray-600 text-center">
          Apply to 2000+ colleges with just one form!
        </p>
        <button className="mt-2 bg-[#2914B5] text-white block py-2 px-6 rounded-md ">
          Start your Application
        </button>
      </div>
    </div>
  );
};

export default AdBlock4;
