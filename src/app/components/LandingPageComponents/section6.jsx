import Image from 'next/image';
import React from 'react';

const CollegeSteps = () => {
  return (
    <section className="bg-[#8477FF14] py-12 hidden md:block">
      <div className="container mx-auto lg:px-20 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-left">
          Choosing a College Shouldn’t be Stressful
        </h2>
        <p className="text-gray-600 mb-8 text-left">
          We’re here to help you navigate it at every turn.
        </p>

        {/* Steps Container */}
        <div className="flex justify-center items-end space-x-6 relative">
          {/* Step 1 */}
          <div className="relative flex flex-col gap-10">
            <div className="bg-white py-4  px-8 mb-4 max-w-52 min-h-24 drop-shadow-[-10px_12px_0px_rgba(0,0,0,1)] border border-black ml-14">
              <p className="font-semibold text-xl text-left">
                Discover Your Perfect Fit
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-52 flex justify-end">
                <h1 className="text-3xl font-bold text-gray-400 mb-2">#1</h1>
              </div>
              <div className="h-4 w-52 bg-white border border-black"></div>
              <div className="h-16 w-4 bg-black"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col gap-10  mb-16">
            <div className="bg-[#2914B5] py-4  px-4 mb-4 max-w-52 min-h-24 drop-shadow-[-10px_12px_0px_rgba(0,0,0,1)] border border-black ml-14">
              <p className="font-semibold text-xl text-left text-white">
                Expert Guidance, Tailored to You
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-52 flex justify-end">
                <h1 className="text-3xl font-bold text-gray-400 mb-2">#2</h1>
              </div>
              <div className="h-4 w-52 bg-white border border-black"></div>
              <div className="h-16 w-4 bg-black"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col gap-10 mb-32">
            <div className="bg-white py-4 px-2 mb-4 max-w-52 min-h-24 drop-shadow-[-10px_12px_0px_rgba(0,0,0,1)] border border-black ml-14">
              <p className="font-semibold text-xl text-left">
                Real-Time Application Tracking
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-52 flex justify-end">
                <h1 className="text-3xl font-bold text-gray-400 mb-2">#3</h1>
              </div>
              <div className="h-4 w-52 bg-white border border-black"></div>
              <div className="h-16 w-4 bg-black"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col gap-10 mb-48">
            <div className="bg-[#2914B5] py-4  px-8 mb-4 max-w-52 min-h-24 drop-shadow-[-10px_12px_0px_rgba(0,0,0,1)] border border-black ml-14">
              <p className="font-semibold text-xl text-left text-white">
                One-Click Application
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-52 flex justify-end">
                <h1 className="text-3xl font-bold text-gray-400 mb-2">#4</h1>
              </div>
              <div className="h-4 w-52 bg-white border border-black"></div>
              <div className="h-16 w-4 bg-black"></div>
            </div>
          </div>

          <div className="right-0 bottom-[-20px] hidden md:block mb-48">
            <Image
              width={200}
              height={200}
              src="/person.png"
              alt="Person Illustration"
              className="w-32 h-auto"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded">
            Start Your Application
          </button>
          <button className="border border-gray-500 hover:bg-gray-100 text-gray-700 font-bold py-2 px-6 rounded">
            Get Expert Advice
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollegeSteps;
