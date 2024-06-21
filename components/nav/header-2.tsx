"use client";


import Image from "next/image";
import CustomDropdown from "../action/custom-dropdown";
import { links } from "@/lib/navData";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section";
import useIsScrolled from "@/lib/hooks";
import { useRef } from "react";
import {useMedia} from 'react-use';
import { useTheme } from "@/context/theme-provider"; 

import ThemeSwitch from "@/context/theme-switcher";
import { Button } from "../ui/button";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import React, { useState } from 'react';

export default function Header() {
  const { theme } = useTheme(); 
  const logoSrc = theme === "light" ? "/logo_dark.svg" : "/logo_white.svg";
  const isScrolled = useIsScrolled();

  const isMobile = useMedia("(max-width: 1280px)", false);
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <Button
                    size="default"
                    variant="outline"
                    className='font-normal rounded-md bg-main/10 dark:bg-main/50 dark:text-text-light hover:bg-main/20 hover:text-main border-none focus-visible:ring-offset-0 focus-visivle:ring-transparent outline-none text-main focus:bg-main/30 transition'
                    >
                        <Menu className='size-4'/>   
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className='px-2 bg-white dark:bg-main'>
              <nav className=''>
                <div className="flex flex-col gap-y-4 items-center">
                  <Link href="/"> Úvod</Link>
                  <Link href="/"> O mně</Link>
                  <Link href="/"> Projekty</Link>
                  <Link href="/"> Kontakt</Link>
                </div> 
                <div className='flex flex-row items-center justify-center mx-16 py-2 border-t border-text-dark dark:border-text-light mt-4 gap-x-4'>
                  <select className="-ml-4 px-2 py-2 bg-transparent">
                    <option value="cz"> 🇨🇿 Čeština</option>
                    <option value="en" disabled> 🇬🇧 English</option>
                    <option value="de" disabled> 🇩🇪 German</option>
                  </select>
                  <span className="opacity-30">|</span>
                  <ThemeSwitch light="Light" dark="Dark" />
                </div>
              </nav>
            </SheetContent>
        </Sheet>
    )
}
  return (
    <div className="max-w-screen flex z-30 w-full items-center justify-center">
      <motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='fixed w-[80%] z-20 top-4 rounded-xl shadow-lg'>
        <nav className={`flex items-center p-2 px-4  justify-between dark:bg-opacity-20  backdrop-filter backdrop-blur-md  dark:bg-shark-800 bg-clip-padding bg-[rgba(180, 220, 255, 0.3)] rounded-xl border border-shark-300 dark:border-shark-500'}`}>
          <Link href="/" className='text-shark-800 dark:text-shark-100 font-sora flex flex-row items-center font-thin text-xl'>
            <Image src={logoSrc} height={32} width={32} alt="Logo" className="mr-2"/>
            <span className="font-bold text-bermuda-400"> Losenský</span>Ondřej
          </Link>
           <div className="flex flex-row gap-x-6">
                <Link href="/"> Úvod</Link>
                <Link href="/"> O mně</Link>
                <Link href="/"> Projekty</Link>
                <Link href="/"> Kontakt</Link>
           </div> 
          <CustomDropdown/>
        </nav>
      </motion.header>      
    </div>
  );
}
