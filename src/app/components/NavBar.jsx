"use client";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    colleges: false,
    courses: false,
    career: false,
    aboutUs: false,
    contactUs: false,
  });

  const toggleDropdown = (menu) => {
    setIsDropdownOpen({
      ...isDropdownOpen,
      [menu]: !isDropdownOpen[menu],
    });
  };

  return (
    <nav className="bg-[#2A1EB3] shadow-md text-white z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="College Seekers Logo" width={153} height={47} />
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("colleges")}
                className="hover:text-yellow-300 flex items-center space-x-1"
              >
                <span>Colleges</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("courses")}
                className="hover:text-yellow-300 flex items-center space-x-1"
              >
                <span>Courses</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("career")}
                className="hover:text-yellow-300 flex items-center space-x-1"
              >
                <span>Career</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen.career && (
                <div className="absolute mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-50"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-50"
                  >
                    Option 2
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-yellow-300">
              About Us
            </a>
            <a href="#" className="hover:text-yellow-300">
              Contact Us
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
              Register
            </button>
            <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
              Log In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md hover:bg-yellow-500"
            >
              Colleges
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md hover:bg-yellow-500"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md hover:bg-yellow-500"
            >
              Career
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md hover:bg-yellow-500"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md hover:bg-yellow-500"
            >
              Contact Us
            </a>
            <div className="pt-4">
              <button className="bg-yellow-500 text-white w-full px-4 py-2 rounded-md hover:bg-yellow-600 mb-2">
                Register
              </button>
              <button className="border border-white text-white w-full px-4 py-2 rounded-md hover:bg-yellow-500">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
