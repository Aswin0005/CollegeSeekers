// components/CollegeCard.js
export default function CollegeCard() {
  return (
    <div className="min-w-[320px] md:max-w-sm mx-auto bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 flex flex-col">
      <div className="bg-purple-100 p-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Top Colleges - 2024
          </h2>
          <p className="text-sm text-gray-600">
            Top Engineering Colleges in India
          </p>
        </div>
        <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
          {/* Replace with an appropriate icon */}
          <svg
            className="w-8 h-8 text-purple-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m-1-2h1.586a1 1 0 01.707.293l3.707 3.707a1 1 0 010 1.414L11.414 17.707a1 1 0 01-.707.293H10m0-7a1 1 0 00-1-1H7.414a1 1 0 00-.707.293L3 11.707a1 1 0 000 1.414l3.707 3.707A1 1 0 007.414 17H8"
            />
          </svg>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between grow">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">1.</span>
              <p className="font-medium text-gray-900">
                Indian Institute Of Technology - Chennai
              </p>
            </div>
            <p className="font-semibold text-green-600">Rank #1</p>
          </div>

          <div className="mt-3">
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2l4-4m0-4a9 9 0 11-18 0a9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2 text-gray-700">Placement Rate - 98%</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m2 0h2m-6 0a2 2 0 10-4 0a2 2 0 004 0zM10 16h4a1 1 0 011 1v1H9v-1a1 1 0 011-1z"
                  />
                </svg>
                <span className="ml-2 text-gray-700">
                  Average Salary - 12 LPA
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v8m0-8h-4m0 0h8"
                  />
                </svg>
                <span className="ml-2 text-gray-700">Fees - 2.5 L / Year</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
