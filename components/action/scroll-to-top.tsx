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
    <div className="fixed right-4 bottom-4">
      {isVisible && (
        <button className="w-10 h-10 rounded-full bg-gradient-to-br hover:from-bermuda-800 hover:to-bermuda-500 from-bermuda-600 to-bermuda-400 duration-300 shadow-md flex items-center justify-center" onClick={scrollToTop}>
          <FaArrowUp className='w-4 h-6 text-shark-200' />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
