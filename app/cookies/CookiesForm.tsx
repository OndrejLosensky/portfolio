import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';

export default function CookiesForm() {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'all' || cookiesAccepted === 'necessary') {
      setIsClosed(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'all');
    setIsClosed(true);
  };

  const handleNecessary = () => {
    localStorage.setItem('cookiesAccepted', 'necessary');
    setIsClosed(true);
  };

  const handleReopen = () => {
    setIsClosed(false);
  };

  return (
    <>
      <div className={`fixed bottom-2 overflow-hidden left-1/2 z-10 transform -translate-x-1/2 p-2 rounded-lg lg:rounded-full flex-col w-[90%] lg:w-[80%] bg-gray-200 dark:bg-gray-900 border border-gray-500 text-center flex lg:flex-row items-center justify-between transition-transform duration-500 ${isClosed ? 'translate-y-full' : ''}`} style={{ right: isClosed ? '100%' : 'auto' }}>
        <p className='pl-2 text-xs flex flex-col space-y-2 lg:space-y-0 lg:flex-row items-center gap-x-4 text-gray-600 dark:text-gray-200'>
          <Image src="/icons/cookies.png" alt='icon' width={24} height={24}/>
          <span>Používáme pouze nezbytné cookies a volitelné cookies pro správnou funkci stránky </span>
        </p>
        <div className='flex flex-col lg:flex-row gap-x-2 items-center'>
          <Link href="/cookies" className='dark:text-bermuda-400 text-bermuda-600 mr-0 mt-2 lg:mt-0 lg:mr-2 text-xs underline underline-offset-2 font-semibold'>
            Zásady používání cookies
          </Link>
          <div className='my-2 lg:my-0 lg:mt-0 lg:space-x-2 mt-4 space-x-4'>
            <button onClick={handleAccept} className='bg-bermuda-500 hover:bg-bermuda-600 transition duration-300 text-white rounded-full py-0.5 px-4'>
              Přijmout vše
            </button>
            <button onClick={handleNecessary} className='bg-bermuda-500 hover:bg-bermuda-600 transition duration-300 text-white rounded-full py-0.5 px-4'>
              Pouze nezbytné
            </button>       
          </div>
        </div>
      </div>
      {isClosed && (
        <div className='z-1 fixed hover:py-2 duration-300 bottom-0 left-2 py-0.5 px-2 bg-gradient-to-tr to-bermuda-600 from-emerald-400 rounded-t-full cursor-pointer flex items-center' onClick={handleReopen} title="Znovu otevřít nastavení cookies">
            <div className='group relative'>
                <IoIosArrowBack className='text-white rotate-90 mt-1' />
                <span className="absolute -top-8 ml-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                    Otevřít
                </span>
            </div>
        </div>
      )}
    </>
  );
}
