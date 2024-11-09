import Testimony from './TestimonyCard';

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-100 ">
      {/* Personalised Guide Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pt-8">
          Personalized Guidance Just for You!
        </h2>

        {/* Input Fields */}
        <div className="flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="text"
            placeholder="Stream"
            className="border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Get Guidance Button */}
        <div className="mt-6">
          <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-600">
            Get Guidance
          </button>
        </div>
      </div>

      {/* General Footer Section */}
      <div className="bg-[#2914B5] text-gray-200 p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Discover More */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Discover More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Colleges
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: contact@collegeguide.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

          {/* Places */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Places</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Kolkata
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Jaipur
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tamil Nadu
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <p>&copy; 2024 College Guide. All rights reserved.</p>
            <p>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </p>
            <p>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
