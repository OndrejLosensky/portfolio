"use client";

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed z-20 right-4 bottom-4">
      {isVisible && (
        <button className="group relative w-10 h-10 rounded-full bg-gradient-to-br hover:from-bermuda-800 hover:to-bermuda-500 from-bermuda-600 to-bermuda-400 duration-300 shadow-md flex items-center justify-center" onClick={scrollToTop}>
            <span className="absolute -top-8 ml-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                Nahoru
            </span>
            <FaArrowUp className='w-4 h-6 text-shark-200' />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
