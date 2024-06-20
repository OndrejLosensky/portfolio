
import React from 'react';

const Loader = () => (
  <div className="flex flex-col items-center w-screen justify-center min-h-screen bg-main">
    <p className='text-xl text-text-light pb-8 font-extralight'> Vyčkejte chvíli, stránka se načítá </p>
    <div className="loader" />
        <style jsx>{`
        .loader {
            border: 12px solid #f3f3f3;
            border-top: 12px solid #3498db;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        `}</style>
  </div>
);

export default Loader;
