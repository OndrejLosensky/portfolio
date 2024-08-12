"use client";

import useIsScrolled from "@/lib/hooks";

import ThemeSwitch from "@/context/theme-switcher";
import HeaderLinks from "./HeaderLinks";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-provider"; 
import CustomDropdown from "../action/custom-dropdown";

export default function Header() {
  const { theme } = useTheme(); 
  const logoSrc = theme === "light" ? "/logo_dark.svg" : "/logo_white.svg";
  const isScrolled = useIsScrolled();
  

  return (
    <div className="max-w-screen flex z-30 w-full mx-auto items-center justify-center">
      <motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='fixed w-[80%] z-20 top-4 rounded-xl shadow-lg'>
        <nav className={`flex items-center p-2 px-4  justify-between dark:bg-opacity-20  backdrop-filter backdrop-blur-md  dark:bg-shark-800 bg-clip-padding bg-[rgba(180, 220, 255, 0.3)] rounded-xl border border-shark-300 dark:border-shark-500'}`}>
          <Link href="/" className='text-shark-800 dark:text-shark-100 font-sora flex flex-row items-center font-thin text-xl'>
            <Image src={logoSrc} height={32} width={32} alt="Logo" className="mr-2"/>
            <span className="font-bold text-bermuda-400"> Losenský</span>Ondřej
          </Link>
          <HeaderLinks />
          <div className="hidden xl:flex items-center">
            <CustomDropdown/>        
            <span className="opacity-30 px-4">|</span>
            <ThemeSwitch light="" dark=""/>              
          </div>
         
        </nav>
      </motion.header>      
    </div>
  );
}
