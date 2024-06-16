"use client";

import SectionTitle from "../layout/section-title";
import { useSectionInView } from "@/lib/hooks";

// Open source projekt pro odesílání e-mailů
import { useForm, ValidationError } from '@formspree/react';


import { CiCircleCheck } from "react-icons/ci";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import Image from "next/image";

import { IoIosSend } from "react-icons/io";
import { useState } from "react";


export default function ContactSection() {
  const { ref } = useSectionInView("Kontakt", 0.5);
  const [isSent, setIsSent] = useState(false);

  const [state, handleSubmit] = useForm("xjvndwpq");
  if (state.succeeded) {
      setIsSent(true);
  }

  return (
    <div  id="contact" ref={ref} className="relative h-screen max-h-screen w-full mx-auto z-10">
      <SectionTitle heading="Kontakt" subHeading="Kontaktujte mě během pár kliknutí" />
      <span className="text-sm font-light text-shark-300"> Chcete mi něco sdělit, něco nabídnout nebo se jen zeptat? Stačí vyplnit tento formulář a já vám nejdéle během 3 pracovních dní odpovím </span>
      <div className="bg-[#8af8eb] absolute top-[2rem] -z-10 right-[-1rem] lg:right-[-5rem] dark:bg-opacity-75 h-[31.25rem] w-[31.25rem] md:w-[60rem] rounded-full blur-[15rem] ] dark:bg-[#56b595]"></div>

      <form onSubmit={handleSubmit} className="mt-6 px-4 sm:px-8 z-10 py-6 bg-shark-100 dark:hover:border-shark-300 hover:border-shark-900  border border-shark-400 duration-300 dark:bg-shark-900 rounded-md mx-auto w-full">
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium  text-gray-700 dark:text-shark-100">
            Jméno
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Vaše jméno"
            className="mt-1 block px-2 w-full dark:bg-shark-700 py-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-bermuda-500 focus:border-bermuda-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-shark-100">
            E-mail*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Váš e-mail"
            className="mt-1 px-2 block w-full dark:bg-shark-700 py-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-bermuda-500 focus:border-bermuda-500 sm:text-sm"
          />
           <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-shark-100">
            Zpráva*
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Napište mi zprávu..."
            className="mt-1 px-2 block w-full max-h-[200px] dark:bg-shark-700 py-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-bermuda-500 focus:border-bermuda-500 sm:text-sm"
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            disabled={state.submitting}
            className="items-center gap-x-2 inline-flex justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-bermuda-500 hover:bg-bermuda-600 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bermuda-500"
          >
            <span>Odeslat</span>
            <IoIosSend/>
          </button>
        </div>
      </form>


      { isSent ? (
        <div className="justify-center w-full text-md pt-12 text-center text-green-500 font-semibold flex flex-row items-center mx-auto gap-x-2"> <CiCircleCheck className="w-6 h-6"/> <span>Děkuji za vaši zprávu, odpovím vám co nejdříve</span></div>
      ): (
        <div> </div>
      )}

      <h2 className={`dark:text-shark-200 text-shark-600 mb-2 ${isSent ? "pt-12": "mt-24"} text-center text-sm font-light`}> Tento web byl vytvořen pomocí těchto technologií </h2>
      <div className="flex flex-row items-center gap-x-6 scale-75 opacity-75 w-full justify-center">
          <div className="group relative">
            <SiTypescript className="w-10 h-10"/>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">TypeScript</span>
          </div>
          <div className="group relative">
            <SiJavascript  className="w-10 h-10" /> 
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">JavaScript</span>
          </div>

          <div className="group relative">
            <FaReact className="w-10 h-10"/>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">React</span>
          </div>

          <div className="group relative">
            <RiNextjsFill  className="w-10 h-10"/>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">Next.js</span>
          </div>
          <div className="group relative">
            <RiTailwindCssFill  className="w-10 h-10"/>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">TailwindCSS</span>
          </div>

          <div className="group relative">
            <Image src="/emailjs.png" width={40} height={40} alt="icon"/>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">EmailJS</span>
          </div>
      </div>
    </div>
  );
}
