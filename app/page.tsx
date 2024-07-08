"use client";

import dynamic from 'next/dynamic';
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/footer";
import CookiesForm from './cookies/CookiesForm';
import Loader from '@/components/loaders/loader';
import Content from './content';
import EmailTicket from '@/components/action/email-ticket';


export default function Home() {

  return (
    <main className="flex flex-col mx-auto min-h-screen">
      <div className='h-screen w-screen flex justify-center items-center'>
            <div className="bg-[#8af8eb] absolute top-[0rem] md:top-[-12rem] -z-10  right-[2rem] md:right-[8rem] h-[25rem] md:h-[31.25rem] w-[20rem] md:w-[61.25rem] rounded-full blur-[12rem] dark:bg-[#56b595]"></div>
            <h1 className='text-4xl font-semibold'> Web bude brzy spuštěn </h1>
      </div>
      {/* 
        <div className="min-h-screen flex flex-col justify-between w-[80%] mx-auto">
          <Header />
          <Content />
          <Footer />
          <CookiesForm/>
          <EmailTicket/>
        </div>
        */}
    </main>
  );
}
