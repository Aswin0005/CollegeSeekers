'use client';
import React, { useRef, useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Anush',
    role: 'Engineering Student',
    review:
      'Career Navigator was a game-changer for me! The personalized insights helped me identify my strengths and choose a career path that truly aligns with my passions.',
    stars: 5,
    image: 'https://via.placeholder.com/50', // Placeholder image URL
    backgroundColor: 'bg-white',
    textColor: 'text-black',
    iconColor: 'text-black',
  },
  {
    id: 2,
    name: 'Anush',
    role: 'Engineering Student',
    review:
      'Career Navigator was a game-changer for me! The personalized insights helped me identify my strengths and choose a career path that truly aligns with my passions.',
    stars: 5,
    image: 'https://via.placeholder.com/50', // Placeholder image URL
    backgroundColor: 'bg-indigo-700',
    textColor: 'text-white',
    iconColor: 'text-white',
  },
  {
    id: 3,
    name: 'Anush',
    role: 'Engineering Student',
    review:
      'Career Navigator was a game-changer for me! The personalized insights helped me identify my strengths and choose a career path that truly aligns with my passions.',
    stars: 5,
    image: 'https://via.placeholder.com/50', // Placeholder image URL
    backgroundColor: 'bg-white',
    textColor: 'text-black',
    iconColor: 'text-black',
  },
  {
    id: 4,
    name: 'Anush',
    role: 'Engineering Student',
    review:
      'Career Navigator was a game-changer for me! The personalized insights helped me identify my strengths and choose a career path that truly aligns with my passions.',
    stars: 5,
    image: 'https://via.placeholder.com/50', // Placeholder image URL
    backgroundColor: 'bg-indigo-700',
    textColor: 'text-white',
    iconColor: 'text-white',
  },
  {
    id: 5,
    name: 'Anush',
    role: 'Engineering Student',
    review:
      'Career Navigator was a game-changer for me! The personalized insights helped me identify my strengths and choose a career path that truly aligns with my passions.',
    stars: 5,
    image: 'https://via.placeholder.com/50', // Placeholder image URL
    backgroundColor: 'bg-white',
    textColor: 'text-black',
    iconColor: 'text-black',
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -334, behavior: 'smooth' }); // Scroll one card at a time
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 334, behavior: 'smooth' }); // Scroll one card at a time
    }
  };

  useEffect(() => {
    handleScroll(); // Initialize arrow visibility on load
  }, []);

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-center text-lg mb-8">What Our Students Say</p>
        <div className="relative flex items-center overflow-hidden">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              className="absolute left-0 z-10 p-2 text-gray-500 hover:text-gray-700 w-10 h-10 rounded-full bg-white flex justify-center items-center shadow-lg"
              onClick={scrollLeft}
            >
              <FiChevronLeft size={30} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto no-scrollbar p-2 overflow-y-hidden
            "
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`min-w-[310px] p-6 rounded-xl shadow-lg ${testimonial.backgroundColor} transition-transform transform hover:-translate-y-1`}
              >
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.stars)].map((_, index) => (
                    <AiFillStar key={index} className="text-yellow-400" />
                  ))}
                </div>
                <p className={`mb-6 ${testimonial.textColor}`}>
                  {testimonial.review}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h4 className={`font-semibold ${testimonial.textColor}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${testimonial.textColor}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <FaQuoteRight
                  className={`absolute bottom-3 right-3 ${testimonial.iconColor}`}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              className="absolute right-0 z-10 p-2 text-gray-500 hover:text-gray-700 w-10 h-10 rounded-full bg-white flex justify-center items-center shadow-lg"
              onClick={scrollRight}
            >
              <FiChevronRight size={30} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
