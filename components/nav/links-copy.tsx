"use client";

import { links } from "@/lib/navData";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section";
import useIsScrolled from "@/lib/hooks";
import { useRef } from "react";
import {useMedia} from 'react-use';

import ThemeSwitch from "@/context/theme-switcher";
import { Button } from "../ui/button";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import React, { useState } from 'react';

// Extract the section names type from links
type SectionName = (typeof links)[number]['name'];

export default function HeaderLinksCopy() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const isScrolled = useIsScrolled();

  // Create typed refs for each section
  const sectionRefs = useRef<Record<SectionName, HTMLLIElement | null>>(
    links.reduce((acc, link) => {
      acc[link.name] = null;
      return acc;
    }, {} as Record<SectionName, HTMLLIElement | null>)
  );

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
              <nav className={``}>
                <ul className="">
                    <motion.li
                      className="h-3/4 flex items-center justify-center"
                    >
                      <Link
                        className={clsx(
                          "flex items-center px-3 py-3 hover:text-shark-950 text-shark-600 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium"
                        )}
                        href={"/#about"}
                        onClick={(e) => {
                          e.preventDefault();
                          setTimeOfLastClick(Date.now());
                          setIsOpen(false);
                        }}
                      >
                        O mně
        
                      </Link>
                    </motion.li>
                </ul>
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
    <header className="z-[999] relative">
      <nav className={`flex fixed left-1/2 -translate-x-1/2 top-[0rem] sm:h-[initial]`}>
        <ul className="hidden xl:flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                      <Link
                        className={clsx(
                          "flex items-center px-3 py-3 hover:text-shark-950 text-shark-600 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium"
                        )}
                        href={"/#uvod"}  
                      >
                        Úvod
                      </Link>
                      <Link
                        className={clsx(
                          "flex items-center px-3 py-3 hover:text-shark-950 text-shark-600 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium"
                        )}
                        href={"/#o-mne"}  
                      >
                        O mně
                      </Link>
                      <Link
                        className={clsx(
                          "flex items-center px-3 py-3 hover:text-shark-950 text-shark-600 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium"
                        )}
                        href={"/#projekty"}  
                      >
                        Projekty
                      </Link>
                      <Link
                        className={clsx(
                          "flex items-center px-3 py-3 hover:text-shark-950 text-shark-600 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium"
                        )}
                        href={"/#kontakt"}  
                      >
                        Kontakt
                      </Link>
        </ul>
      </nav>
    </header>
  );
}
