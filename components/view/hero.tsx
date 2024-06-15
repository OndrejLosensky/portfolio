"use client";

import { MdArrowRightAlt } from "react-icons/md";
import ScrollToTopButton from "../action/scroll-to-top";
import { FaGithub, FaLinkedin, FaInstagram,FaFacebookF } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";


export default function HeroSection() {
  const { ref } = useSectionInView("Úvod");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 80; 
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref} id="home" className='w-[80%] h-screen max-w-screen overflow-x-hidden flex flex-col justify-center items-center text-center mx-auto'>
        <div className="bg-[#8af8eb] absolute top-[-12rem] -z-10 right-[8rem] h-[31.25rem] w-[61.25rem] rounded-full blur-[12rem] ] dark:bg-[#56b595]"></div>
              
        <motion.div 
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}  
            className="flex flex-col items-center h-2/3 justify-between mt-72"
            >
              <p className="absolute top-36 flex scale-90 opacity-80 flex-row items-center">
                <kbd className="px-[8px] py-[2px] scale-75 dark:bg-shark-700 bg-shark-300 text-shark-600 dark:text-shark-100 rounded-md">CTRL</kbd>
                <span className="dark:text-shark-100 text-shark-600"> + </span>
                <kbd className="px-[8px] py-[2px] scale-75 mr-2 dark:bg-shark-700 bg-shark-300 text-shark-600 dark:text-shark-100 rounded-md">H</kbd>
                <span className="font-light dark:text-shark-100 text-shark-600">to toggle theme  </span>
              </p> 
              <div className='w-full items-center justify-center mb-48 flex flex-col'>
                  <h1 className='text-xl mb-2 font-sora font-light'> Ahoj👋, jmenuji se </h1>
                  <h2 className="text-5xl flex flex-col mb-1 font-bold text-center bg-clip-text text-transparent bg-gradient-to-br dark:from-neutral-50 dark:to-neutral-400 from-neutral-500/85 to-neutral-800 bg-opacity-50">
                    <span>Ondřej Losenský</span>
                  </h2>
                  <p className='text-shark-500 dark:text-shark-50 font-light text-wrap w-2/4 mt-2 mb-6'> Vítej na mém portfoliu! Pocházím z Prahy📍 a jsem absolventem střední školy. Jsem full-stack softwarový vývojář, který se zajímá o tvorbu moderních a responzivních webů, co nejefektivnejších a nejrychlejší back-end. </p>
                  <div className='flex flex-row gap-x-4 items-center mx-auto'>
                    <button onClick={() => scrollToSection('about')} className='bg-bermuda-500 text-shark-100 px-4 py-2 rounded-md hover:bg-bermuda-600 active:bg-bermuda-700 active:scale-90 duration-200'> 
                        Pokračovat 
                    </button>
                    <button className='px-4 py-2 flex flex-row items-center group'>
                      <span>Stáhnout CV</span>
                      <MdArrowRightAlt className='ml-2 w-6 h-7 text-shark-600 dark:text-shark-100 transform group-hover:translate-x-1 transition-transform duration-200' />
                    </button>                  
                  </div>

                  <div className="mt-8 flex flex-row items-center gap-x-4">
                    <button className="group relative">
                      <FaGithub className="text-xl group-hover:text-malibu-500 transition duration-300" />
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">GitHub</span>
                    </button>
                    <button className="group relative">
                      <FaLinkedin className="text-xl group-hover:text-malibu-500 transition duration-300" />
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">LinkedIn</span>
                    </button>
                    <button className="group relative">
                      <FaFacebookF className="text-xl group-hover:text-malibu-500 transition duration-300" />
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Facebook</span>
                    </button>
                    <button className="group relative">
                      <FaInstagram className="text-xl group-hover:text-malibu-500 transition duration-300" />
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Instagram</span>
                    </button>
                    <button className="group relative">
                      <MdOutlineMailOutline className="text-xl group-hover:text-malibu-500 transition duration-300" />
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Email</span>
                    </button>
                  </div>
              </div>

            
          <ScrollToTopButton/>

        </motion.div>
        
    </div>
  )
}