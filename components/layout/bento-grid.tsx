import Image from 'next/image';
import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-5 py-8 ">
      <div className="flex flex-col h-full w-full gap-4">
        {/* Projects section */}
        <section className='flex flex-row gap-x-4'>
          <div className='dark:bg-gray-900 bg-gray-200 w-1/2 relative h-[600px] flex flex-col items-end justify-center p-4 rounded-lg shadow-lg'>
            <Image src="/image2.jpg" alt='Macbook image' width={600} height={400} className='h-full w-full opacity-75'/>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 rounded-lg'></div>
            <h2 className="text-white text-xl font-bold absolute bottom-8 left-8 z-10">
              I am very flexible and I prioritize <br /> open communication
            </h2>
          </div>
          <div className='grid grid-rows-2 w-1/2 gap-4'>
            <div className='dark:bg-gray-900 bg-gray-200 h-full flex items-center justify-center p-4 rounded-lg shadow-lg'>
              <div className='flex flex-col items-center'>
                <h3 className="text-text-dark dark:text-text-light text-lg font-semibold">Latest project</h3>
                <button className="mt-2 text-text-dark dark:text-text-light bg-purple-400 hover:bg-purple-500 duration-300 px-4 py-2 rounded-md shadow-md">See more</button>
              </div>
            </div>
            <div className='dark:bg-gray-900 bg-gray-200 h-full flex flex-row items-center justify-center p-4 rounded-lg shadow-lg'>
              <div className='w-[40%] h-full flex flex-col justify-center text-left items-center'>
                <div className='-ml-8'>
                  <p className='font-extralight lowercase text-text-dark/60 dark:text-text-light/60'> Most used </p>
                  <h3 className="text-text-dark dark:text-text-light font-bold text-lg">My tech stack</h3>
                </div>
              </div>
              <div className='w-[60%] bg-violet-400 h-full'>

              </div>
            </div>
          </div>
        </section>
        {/* End of Projects section */}

        {/* Tasks section */}
        <section className='flex flex-row gap-x-4'>
          <div className='grid grid-rows-2 w-1/2 gap-4'>
            <div className='dark:bg-gray-900 bg-gray-200 h-full flex items-center justify-center p-4 rounded-xl shadow-lg'>
              <div>
                <h3 className="dark:text-text-light text-text-dark text-lg font-semibold">I am passionate about creating modern designs</h3>
              </div>
            </div>
            <div className='bg-gradient-to-br from-purple-500 to-violet-700 h-full flex items-center justify-center p-4 rounded-xl shadow-lg'>
              <div className='flex flex-col items-center'>
                <h3 className="text-text-light text-lg font-semibold">Start a project together?</h3>
                <button className="mt-2 mx-auto bg-black/90 text-white px-4 py-2 rounded-md shadow-md">Message me for more</button>
              </div>
            </div>
          </div>
          <div className='dark:bg-gray-900 bg-gray-200 relative flex w-1/2 h-[350px] items-center justify-center p-4 rounded-xl shadow-lg'>
            <div className=''>
              <h2 className="text-text-dark dark:text-text-light text-xl font-bold pb-16"> Currently building CMS platform for web development</h2>
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
