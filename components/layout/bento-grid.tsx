import Image from 'next/image';
import React, {useState} from 'react';

import { Button } from '../ui/button';

import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";


const BentoGrid: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "losenskyondrej@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000); // 5 seconds delay
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  return (
    <div id='bento' className="flex h-full w-full flex-col items-center justify-center my-16 ">
      <div className="flex flex-col h-full w-full gap-4">
        {/* Projects section */}
        <section className='flex flex-col md:flex-row gap-x-4'>
          <div className='group relative w-full md:w-1/2 h-[600px] flex flex-col items-start justify-end rounded-lg shadow-lg border dark:border-text-light/15 border-text-dark/30 dark:bg-gray-900 bg-gray-200'>
            <Image src="/image2.jpg" alt='Macbook image' width={600} height={400} className='absolute w-full h-full rounded-lg opacity-75'/>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-main opacity-100 rounded-lg'></div>
            <div className='relative z-10 flex flex-col p-6'>
              <IoIosGlobe className='w-10 h-10 mb-2 text-text-light dark:text-text-light'/>
              <h2 className="text-4xl flex flex-col mb-1 font-bold bg-clip-text text-transparent bg-gradient-to-tr dark:from-neutral-50 dark:to-neutral-400 from-neutral-100 to-neutral-400 bg-opacity-50">
                    <span>Tvorba webu na míru</span>
                </h2>
                <p className='text-text-light dark:text-text-light/70'> Stačí se domluvit a váš web může být na světě </p>
              <Button className='mt-2 w-1/2 text-text-light'>Mám zájem o web</Button>
            </div>
          </div>
          <div className='grid grid-rows-2 w-full md:w-1/2 gap-y-4'>
            <div className='dark:bg-gray-900 bg-gray-200 border dark:border-text-light/15 border-text-dark/30 h-full flex items-center justify-center p-4 rounded-lg shadow-lg'>
              <div className='flex flex-col items-center'>
                <h3 className="text-text-dark dark:text-text-light text-lg font-semibold">Nejnovější projekt</h3>
                <Button className="mt-2 text-text-dark dark:text-text-light duration-300 px-4 py-2 rounded-md shadow-md">Podívat se</Button>
              </div>
            </div>
            <div className='dark:bg-gray-900 bg-gray-200 border dark:border-text-light/15 border-text-dark/30 h-full flex flex-row items-center justify-center p-4 rounded-lg shadow-lg'>
              <div className='w-[30%] h-full flex flex-col justify-center text-left items-center'>
                <div className='-ml-8'>
                  <p className='font-extralight lowercase text-text-dark/60 dark:text-text-light/60'> Nejvíce používám</p>
                  <h3 className="text-text-dark dark:text-text-light font-bold text-lg">Technologie</h3>
                </div>
              </div>
              <div className='w-[70%]  mx-auto grid grid-cols-3 text-sm'>
                    <p className='bg-gray-100 dark:bg-gray-800 border border-text-dark dark:text-text-light rounded-md m-4 text-center py-2 px-4 shadow-lg'> Next.js </p>
                    <p className='bg-gray-100 dark:bg-gray-800 border border-text-dark dark:text-text-light rounded-md m-4 text-center py-2 px-4 shadow-lg'> TypeScript</p>
                    <p className='bg-gray-100 dark:bg-gray-800 border border-text-dark dark:text-text-light rounded-md m-4 text-center py-2 px-4 shadow-lg'> Prisma</p>
                    <p className='bg-gray-100 dark:bg-gray-800 border border-text-dark dark:text-text-light rounded-md m-4 text-center py-2 px-4 shadow-lg'> TailwindCSS </p>
                    <p className='bg-gray-100 dark:bg-gray-800 border border-text-dark dark:text-text-light rounded-md m-4 text-center py-2 px-4 shadow-lg'> Firebase</p>
                    <p className='bg-gray-100 dark:bg-gray-800 border border-text-dark dark:text-text-light rounded-md m-4 text-center py-2 px-4 shadow-lg'> SQLite</p>
                    <p className='bg-gray-100 dark:bg-gray-800 border border-text-dark dark:text-text-light rounded-md m-4 text-center py-2 px-4 shadow-lg'> JavaScript </p>
                    <p className='bg-gray-100 dark:bg-gray-800 border border-text-dark dark:text-text-light rounded-md m-4 text-center py-2 px-4 shadow-lg'> Github </p>
                    <p className='bg-gray-100 dark:bg-gray-800 border border-text-dark dark:text-text-light rounded-md m-4 text-center py-2 px-4 shadow-lg'> Figma </p>
              </div>
            </div>
          </div>
        </section>
        {/* End of Projects section */}

        {/* Tasks section */}
        <section className='flex flex-col md:flex-row gap-x-4'>
          <div className='grid grid-rows-2 w-full md:w-1/2 gap-4'>
            <div className='dark:bg-gray-900 relative bg-gray-200 border dark:border-text-light/15 border-text-dark/30 h-full flex items-center justify-center p-4 rounded-xl shadow-lg'>
              <div>
                <div className='absolute inset-0 bg-gradient-to-tr from-transparent to-black opacity-20 rounded-lg'></div>
                <h3 className="dark:text-text-light text-text-dark text-lg font-semibold">Mojí největší oblibou je tvorba moderních a responzivních designů</h3>
              </div>
            </div>
            <div className='bg-gradient-to-br from-purple-500 to-violet-700 border dark:border-text-light/15 border-text-dark/30 h-full flex items-center justify-center p-4 rounded-xl shadow-lg'>
              <div className='flex flex-col items-center'>
                <h3 className="text-text-light text-lg font-semibold">Chceš začít společný projekt?</h3>
                <Button
                  variant="secondary"
                  className={`mt-2 mx-auto w-[300px] rounded-md shadow-md gap-x-4 border border-text-light/60 dark:border-text-light/60 px-4 py-2 ${copied ? 'text-green-500 dark:text-green-500 ' : 'dark:bg-main bg-main dark:hover:bg-main/95 hover:bg-main/95 text-white'}`}
                  onClick={copyToClipboard}
                >
                  {copied ? <FaCheck /> : <FaCopy />} {copied ? 'Zkopírováno!' : 'Zkopírovat moji e-mailovou adresu'}
                </Button>        
              </div>
            </div>
          </div>
          <div className='dark:bg-gray-900 bg-gray-200 relative  border dark:border-text-light/15 border-text-dark/30 flex w-full md:w-1/2 mt-4 md:mt-0 h-[350px] items-center justify-center p-4 rounded-xl shadow-lg'>
            <div className=''>
              <h2 className="text-text-dark dark:text-text-light text-xl font-bold pb-16"> Momentálně vytvářím vlastní CMS pro správu e-shopu a webu</h2>
            </div>
            <div className=''>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 rounded-lg'></div>
              <Image  src="/image3.png" width={800} height={600} alt='Code snippet' className='rounded-xl shadow-lg drop-shadow-xl absolute bottom-0 right-0 w-3/4'/>
            </div>
          </div>
        </section>
        {/* End of Tasks section */}
      </div>
    </div>
  );
};

export default BentoGrid;
