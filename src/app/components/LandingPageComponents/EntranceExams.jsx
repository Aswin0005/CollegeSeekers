// components/EntranceExams.js
export default function EntranceExams() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 flex flex-col justify-between">
      <div className="bg-purple-100 p-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Entrance Exams</h2>
          <p className="text-sm text-gray-600">
            Entrance Exams in Engineering Colleges
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
              d="M12 12m-6.708-6.708L12 6.586m0 12.828L6.293 12M12 6.586l6.707 6.707M12 6.586L6.293 12M18 6.586L12 12"
            />
          </svg>
        </div>
      </div>

      <div className="p-4 grid grid-cols-3 gap-2 ">
        {[
          'JEE Main',
          'JEE Advanced',
          'BITSAT',
          'VITEEE',
          'SRMJEEE',
          'WBJEE',
          'COMEDK UGET',
          'MHT CET',
          'KIITEE',
        ].map((exam) => (
          <button
            key={exam}
            className="border border-gray-300 rounded-full py-1 px-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            {exam}
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">
          View All Exams
        </button>
      </div>
    </div>
  );
}
