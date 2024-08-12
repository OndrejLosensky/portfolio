"use client"

import Header from "@/components/nav/header-copy";
import Footer from "@/components/nav/footer";
import { DynamicDialog } from "@/components/action/dynamic-dialog";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdHome } from "react-icons/io";
import CookiesForm from "../(cookies)/CookiesForm";

import { useTexts } from '@/context/texts-context';

export default function WebDevelopmentPage() {
  const { texts } = useTexts();

  return (
    <section className="w-3/4 space-y-12 mx-auto flex flex-col">
      <Header />

      <div className="bg-[#8af8eb] absolute top-[4rem] md:top-[-4rem] -z-10  right-[8rem] md:right-[8rem] h-[16rem] md:h-[21rem] w-[22rem] md:w-[30rem] rounded-full blur-[14rem] dark:bg-[#79d7b8cd]"></div>

      <div className="text-left">
        <h2 className="text-2xl md:text-3xl lg:text-5xl mt-32 text-center text-primary font-bold">{texts['webTitle']}</h2>
        <p className="text-md md:text-lg lg:text-xl text-center font-light text-text-dark dark:text-text-light pt-4">
          {texts['webDescription']}
        </p>

        <div className="mt-24">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl text-text-dark/70 dark:text-text-light/70 pb-4">{texts['cmsTitle']}</h2>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
            <p> {texts['comingSoonText']}</p>
            {/* 
            {data.cmsOption.map((option, index) => (
              <DynamicDialog key={index} option={option} />
            ))}
              */}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl text-text-dark/70 dark:text-text-light/70 pb-4">{texts['handMadeTitle']}</h2>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
            <p> {texts['comingSoonText']}</p>
            {/* 
            {data.frameworkOptions.map((option, index) => (
              <DynamicDialog key={index} option={option} />
            ))}
              */}
          </div>
        </div>

        <div className="mt-24 mb-40">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl text-text-dark/70 dark:text-text-light/70 pb-4">{texts['graphicsTitle']}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <p> {texts['comingSoonText']}</p>
            {/* 
            {graphicsOptions.map((option, index) => (
              <DynamicDialog key={index} option={option} />
            ))}
              */}
          </div>
        </div>

        <p className="pb-20 text-center font-light text-text-dark/80 dark:text-text-light/80">
          {texts['additionalText']}
        </p>
      </div>
      <Link href="/" className='mx-auto'>
          <Button className='mx-auto mt-8 flex items-center gap-x-2'>
            <IoMdHome className='w-6 h-auto'/>
            <span>{texts['backToHomepage']}</span>
          </Button>
        </Link> 

      <CookiesForm/>
      <Footer />
    </section>
  );
}
