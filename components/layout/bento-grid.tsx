import { useSectionInView } from "@/lib/hooks";
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

import { useTexts } from '@/context/texts-context';

const BentoGrid: React.FC = () => {
  const { texts } = useTexts();

  const { ref } = useSectionInView("Přehled", 0.5);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "losenskyondrej@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000); 
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <section id='prehled' ref={ref}>
        <div className="relative flex h-full w-full flex-col items-center justify-center my-16 ">
          <span className="relative text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bermuda-300  to-bermuda-500 text-center drop-shadow-glow">
            {texts['overviewTitle']}
          </span>
          <div className="bg-[#8af8eb] absolute top-[24rem] md:top-[20rem] -z-10  right-[2rem] md:right-[8rem] h-[12rem] md:h-[20.25rem] w-[15.25rem] md:w-[25.25rem] rounded-full blur-[18rem] dark:bg-[#56b595b6]"></div>
          <p className="text-center text-md md:text-lg lg:text-xl pt-1 font-light text-text-dark dark:text-text-light mb-12">
            {texts['overviewDescription']}
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
                    <span>{texts['webCreation']}</span>
                  </h2>
                  <p className='text-text-light dark:text-text-light/70'> {texts['webCreationDes']} </p>
                  <Link href="#contact">
                    <Button className='mt-2 text-text-light bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover active:bg-primary-active active:scale-90 duration-200'>
                     {texts['webBtn']}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='grid grid-rows-2 w-full min-h-64 mt-4 lg:mt-0 lg:w-1/2 gap-y-4'>
              
              <div className="relative group w-full flex items-center justify-between rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600">
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/50 to-transparent"></div>
                  
                  <div className="relative z-20 p-6 flex flex-col justify-between w-full items-center lg:w-2/3 h-full">
                    <div>
                      <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        {texts['newest project']}    {texts['newestProject']}                 
                      </span>
                      <h3 className="mt-4 text-white text-2xl w-full lg:text-3xl font-bold leading-tight">
                        {texts['projecttitle']}
                      </h3>
                      <p className="mt-2 text-gray-200 md:w-full w-1/2 text-sm lg:text-base">
                        {texts['projectDescription']}
                      </p>
                    </div>                   
                  </div>

                  <div className="absolute right-0 bottom-0 w-[50%] h-full transform rotate-6 translate-x-20 translate-y-12 lg:translate-y-28 md:translate-x-24 md:translate-y-8">
                    <Image
                      src="/mockups/kralovska-levandule.png"
                      width={500}
                      height={400}
                      alt={texts['projectTitle']}
                      className="object-cover rounded-lg shadow-lg transition-transform duration-300 ease-out scale-110 group-hover:scale-105"
                    />
                  </div>
                </div>


                <div className='dark:bg-gray-900 bg-gray-200 border dark:border-text-light/15 border-text-dark/30 h-full flex flex-row items-center justify-center p-4 rounded-lg shadow-lg overflow-hidden'>
                  <div className='w-[95%] md:w-[70%] h-full flex flex-col mx-auto overflow-hidden relative'>
                    <div className='absolute inset-0 bg-gradient-to-l w-full z-10 from-gray-200 via-transparent to-gray-200 dark:from-gray-900 dark:via-transparent dark:to-gray-900 opacity-100'></div>
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
            <section className='flex flex-col md:flex-row gap-x-4'>
              <div className='grid grid-rows-2 w-full md:w-1/2 lg:w-1/3 gap-4 mb-4 lg:mb-0'>
                <div className='dark:bg-gray-900 relative bg-gray-200 border dark:border-text-light/15 border-text-dark/30 h-full flex items-center justify-center p-4 rounded-xl shadow-lg'>
                  <div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-main/30 dark:from-transparent dark:to-main/80 opacity-100 rounded-lg'></div>
                    <h3 className="dark:text-text-light text-text-dark text-md text-center font-semibold">
                     {texts['anotherGridTile']}
                    </h3>
                  </div>
                </div>
                <div className='bg-gradient-to-br from-purple-500 to-violet-700 border dark:border-text-light/15 border-text-dark/30 h-full flex items-center justify-center p-4 rounded-xl shadow-lg'>
                  <div className='flex flex-col items-center '>
                    <h3 className="text-text-light lg:text-lg md:text-md text-sm font-semibold">{texts['contantTile']}</h3>
                    <Button
                      variant="secondary"
                      className={`mt-2 mx-auto w-[260px] md:w-[220px] text-xs md:text-md rounded-md shadow-md gap-x-4 border border-text-light/60 dark:border-text-light/60 px-4 py-2 ${
                        copied ? 'text-green-500 dark:text-green-500 ' : 'dark:bg-main bg-main dark:hover:bg-main/95 hover:bg-main/95 text-white'
                      }`}
                      onClick={copyToClipboard}
                    >
                      {copied ? <FaCheck /> : <FaCopy />} {copied ? `${texts['emailCopied']}` : `${texts['emailCopy']}`}
                    </Button>
                  </div>
                </div>
              </div>
              <div className='dark:bg-gray-900 -z-10 flex-col bg-gray-200 relative group overflow-hidden border dark:border-text-light/15 border-text-dark/30 flex lg:flex-col w-full md:w-1/2 lg:w-2/3 lg:mt-0 md:mt-0 h-[250px] md:h-[350px] items-center justify-center p-4 rounded-xl shadow-lg'>
                <div className='flex flex-col w-[100%]  h-full'>
                    <h2 className=" text-center pt-4 text-text-dark dark:text-text-light text-md md:text-lg lg:text-xl font-bold z-20">
                      {texts['currentlyWorkingOn']}
                    </h2>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-main/30 dark:from-transparent z-10 dark:to-main/80 opacity-100 rounded-lg'></div>
                    <Image src="/mockups/codecommerce.png" width={800} height={600} alt='Code snippet' className='w-full translate-y-8 rounded-xl border h-auto mx-auto'/> 
                </div>
              </div>
            </section>
          </div>
        </div>
    </section>
  );
};

export default BentoGrid;
