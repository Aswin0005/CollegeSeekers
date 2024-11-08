// components/PopularCourses.js
export default function PopularCourses() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-purple-100 p-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Popular Courses</h2>
          <p className="text-sm text-gray-600">
            Explore Popular Engineering Courses in 2024
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <div className="p-4 space-y-2">
        {[
          { course: 'B.Tech in Computer Science', icon: '💻' },
          { course: 'B.Tech in Electrical Engineering', icon: '⚡' },
          { course: 'B.Tech in Mechanical Engineering', icon: '⚙️' },
          { course: 'B.Tech in Artificial Intelligence', icon: '🤖' },
        ].map(({ course, icon }) => (
          <div
            key={course}
            className="flex items-center justify-between border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-200"
          >
            <span className="text-gray-700">{course}</span>
            <span>{icon}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
          Explore Programs
        </button>
      </div>
    </div>
  );
}
