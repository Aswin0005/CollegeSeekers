// components/NavBar.js
"use client";
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    college: false,
    course: false,
    career: false,
  });

  const toggleDropdown = (menu) => {
    setIsDropdownOpen({
      ...isDropdownOpen,
      [menu]: !isDropdownOpen[menu],
    });
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-indigo-600">
            College Seekers
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-4">
            <div className="relative">
              <button
                onClick={() => toggleDropdown('college')}
                className="text-gray-700 hover:text-indigo-600"
              >
                College
              </button>
              {isDropdownOpen.college && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Option 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Option 2</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('course')}
                className="text-gray-700 hover:text-indigo-600"
              >
                Course
              </button>
              {isDropdownOpen.course && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Option 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Option 2</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('career')}
                className="text-gray-700 hover:text-indigo-600"
              >
                Career
              </button>
              {isDropdownOpen.career && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Option 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Option 2</a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-indigo-600">About Us</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact Us</a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-2">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Register</button>
            <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50">Login</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-700 block px-3 py-2 rounded-md hover:bg-indigo-50">College</a>
            <a href="#" className="text-gray-700 block px-3 py-2 rounded-md hover:bg-indigo-50">Course</a>
            <a href="#" className="text-gray-700 block px-3 py-2 rounded-md hover:bg-indigo-50">Career</a>
            <a href="#" className="text-gray-700 block px-3 py-2 rounded-md hover:bg-indigo-50">About Us</a>
            <a href="#" className="text-gray-700 block px-3 py-2 rounded-md hover:bg-indigo-50">Contact Us</a>
            <div className="pt-4">
              <button className="bg-indigo-600 text-white w-full px-4 py-2 rounded-md hover:bg-indigo-700 mb-2">Register</button>
              <button className="border border-indigo-600 text-indigo-600 w-full px-4 py-2 rounded-md hover:bg-indigo-50">Login</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
