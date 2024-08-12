
import Image from 'next/image';
import React from 'react';

const Loader = () => (
  <div className="flex flex-col items-center w-screen justify-center min-h-screen bg-main ">
    <div className='flex flex-row items-center gap-x-4 mb-12'>
      <Image src="/logo.svg" quality={100} width={128} height={128} alt='Logo' className=''/>
      <h1 className='text-4xl font-bold text-white dark:text-white'> Ondřej Losenský </h1>
    </div>
    <div className="bg-[#8af8eb] absolute top-[0rem] md:top-[-16rem] z-10  right-[8rem] md:right-[8rem] h-[25rem] md:h-[31.25rem] w-[20rem] md:w-[61.25rem] rounded-full blur-[12rem] dark:bg-[#56b595]"></div>
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
