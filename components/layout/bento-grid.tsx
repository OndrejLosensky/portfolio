import useIntersectionObserver from '@/lib/lazy-loading';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import TechstackSlider from '../action/carousel/techstack-carousel';
import { cardDetailsTop, cardDetailsMiddle, cardDetailsBottom } from '../action/carousel/carousel.config';
import TechstackCarouselReversed from '../action/carousel/techstack-carousel-reversed';

const BentoGrid: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "losenskyondrej@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000); // Delayed the change of text when copying e-mail from button
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <section id='prehled' ref={ref as any}>
        <div className="flex h-full w-full flex-col items-center justify-center my-16 ">
          <span className="relative text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bermuda-300  to-bermuda-500 text-center drop-shadow-glow">
            Přehled
          </span>
          <p className="text-center text-md md:text-lg lg:text-xl pt-1 font-light text-text-dark dark:text-text-light mb-12">
            Získejte rychlý předmět o veškerých možnostech a zajímavostech
          </p>
          <div className="flex flex-col h-full w-full gap-4">
            {/* Projects section */}
            <section className='flex flex-col lg:flex-row gap-x-4'>
              <div className='group relative w-full lg:w-1/2 h-[360px] md:h-[600px] flex flex-col items-start justify-end rounded-lg shadow-lg border dark:border-text-light/15 border-text-dark/30 dark:bg-gray-900 bg-gray-200'>
                <Image src="/tvorba-webu.webp" alt='Macbook image' width={300} height={400} className='absolute w-full h-full rounded-lg opacity-75'/>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-main opacity-100 rounded-lg'></div>
                <div className='relative z-10 flex flex-col p-6'>
                  <IoIosGlobe className='w-10 h-10 mb-2 text-text-light dark:text-text-light'/>
                  <h2 className="text-2xl md:text-4xl flex flex-col mb-1 font-bold bg-clip-text text-transparent bg-gradient-to-tr dark:from-neutral-50 dark:to-neutral-400 from-neutral-100 to-neutral-400 bg-opacity-50">
                    <span>Tvorba webu na míru</span>
                  </h2>
                  <p className='text-text-light dark:text-text-light/70'> Stačí se domluvit a váš web může být na světě </p>
                  <Link href="/tvorba-webu">
                    <Button className='mt-2 text-text-light bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover active:bg-primary-active active:scale-90 duration-200'>
                      Mám zájem o web
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='grid grid-rows-2 w-full min-h-64 mt-4 lg:mt-0 lg:w-1/2 gap-y-4'>
                <div className='dark:bg-gray-900 group relative bg-gray-200 border w-full overflow-hidden dark:border-text-light/15 border-text-dark/30 h-full flex items-center justify-center p-4 rounded-lg shadow-lg'>
                  <div className='flex flex-col z-10 md:ml-20 lg:ml-2 w-[30%] lg:w-[25%] '>
                    <h3 className="text-text-dark dark:text-text-light text-xs md:text-md lg:text-lg font-semibold ">Poslední projekt</h3>
                    <Link href="/kralovska-levandule">
                      <button className="mt-2 scale-100 lg:scale-100 text-text-dark dark:text-text-light bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover duration-200  px-[8px] py-[4px] text-xs md:text-md md:px-4 md:py-2 rounded-md shadow-md active:bg-primary-active active:scale-[0.65] lg:active:scale-75">
                        Podívat se
                      </button>
                    </Link>
                  </div>
                  <div className='w-[70%] lg:w-[75%]'>
                    <Image src="/mockups/kl-full.png" width={500} height={400} alt='Project image' className='md:w-96 lg:w-full lg:h-full md:translate-x-0 lg:translate-x-32 rounded-t-xl h-40 w-72 group-hover:-rotate-3 group-hover:scale-[1.04] duration-300 absolute md:-bottom-12 md:-right-0 lg:-bottom-16 lg:-right-20 -bottom-16 -right-20'/>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-br dark:from-transparent from-transparent to-gray-100 dark:to-gray-900 opacity-55 rounded-lg'></div>
                </div>
                <div className='dark:bg-gray-900 bg-gray-200 border dark:border-text-light/15 border-text-dark/30 h-full flex flex-row items-center justify-center p-4 rounded-lg shadow-lg overflow-hidden'>
                  <div className='w-[95%] md:w-[70%] h-full flex flex-col mx-auto overflow-hidden relative'>
                    <div className='absolute inset-0 bg-gradient-to-l w-full z-20 from-gray-200 via-transparent to-gray-200 dark:from-gray-900 dark:via-transparent dark:to-gray-900 opacity-100'></div>
                    <div className='h-0 lg:h-1/3 scale-75 md:scale-100'>
                      <TechstackSlider cardDetails={cardDetailsTop} />
                    </div>
                    <div className='h-full lg:h-1/3 scale-100 md:scale-100'>
                      <TechstackCarouselReversed cardDetails={cardDetailsMiddle} />
                    </div>
                    <div className='lg:h-1/3 scale-75 md:scale-100'>
                      <TechstackSlider cardDetails={cardDetailsBottom} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End of Projects section */}
            {/* Tasks section */}
            <section className='flex flex-col lg:flex-row gap-x-4'>
              <div className='grid grid-rows-2 w-full md:w-1/2 lg:w-1/3 gap-4 mb-4 lg:mb-0'>
                <div className='dark:bg-gray-900 relative bg-gray-200 border dark:border-text-light/15 border-text-dark/30 h-full flex items-center justify-center p-4 rounded-xl shadow-lg'>
                  <div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-main/30 dark:from-transparent dark:to-main/80 opacity-100 rounded-lg'></div>
                    <h3 className="dark:text-text-light text-text-dark text-md text-center font-semibold">
                      Mým největším koníčkem je tvorba moderních a responzivních designů.
                    </h3>
                  </div>
                </div>
                <div className='bg-gradient-to-br from-purple-500 to-violet-700 border dark:border-text-light/15 border-text-dark/30 h-full flex items-center justify-center p-4 rounded-xl shadow-lg'>
                  <div className='flex flex-col items-center '>
                    <h3 className="text-text-light lg:text-lg md:text-md text-sm font-semibold">Chceš začít společný projekt?</h3>
                    <Button
                      variant="secondary"
                      className={`mt-2 mx-auto w-[260px] md:w-[220px] text-xs md:text-md rounded-md shadow-md gap-x-4 border border-text-light/60 dark:border-text-light/60 px-4 py-2 ${
                        copied ? 'text-green-500 dark:text-green-500 ' : 'dark:bg-main bg-main dark:hover:bg-main/95 hover:bg-main/95 text-white'
                      }`}
                      onClick={copyToClipboard}
                    >
                      {copied ? <FaCheck /> : <FaCopy />} {copied ? 'Zkopírováno!' : 'Zkopírovat e-mail'}
                    </Button>
                  </div>
                </div>
              </div>
              <div className='dark:bg-gray-900 flex-col bg-gray-200 relative group overflow-hidden border dark:border-text-light/15 border-text-dark/30 flex lg:flex-col w-full md:w-1/2 lg:w-2/3 lg:mt-0 md:mt-0 h-[250px] md:h-[350px] items-center justify-center p-4 rounded-xl shadow-lg'>
                <div className='flex flex-col w-[100%]  h-full'>
                    <h2 className=" text-center pt-4 text-text-dark dark:text-text-light text-md md:text-lg lg:text-xl font-bold z-20">
                      Momentálně vytvářím vlastní CMS pro správu e-shopu
                    </h2>
                    <Image src="/mockups/app.svg" width={800} height={600} alt='Code snippet' className='z-20 w-full translate-y-8 h-auto mx-auto'/> 
                </div>
              </div>
            </section>
            {/* End of Tasks section */}
          </div>
        </div>
    </section>
  );
};

export default BentoGrid;
