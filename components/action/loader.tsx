import React from 'react';

const CircularLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear spin rounded-full border-8 border-t-8 border-gray-600 h-32 w-32"></div>
    </div>
  );
};

export default CircularLoader;
