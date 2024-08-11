"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section";
import useIsScrolled from "@/lib/hooks";
import { useRef } from "react";
import { useMedia } from 'react-use';

import ThemeSwitch from "@/context/theme-switcher";
import { Button } from "../ui/button";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import React, { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import CustomDropdown from "../action/custom-dropdown";

type Language = keyof typeof links;

export default function HeaderLinks() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage() as { language: Language; setLanguage: (lang: Language) => void };
  const isScrolled = useIsScrolled();

  const sectionRefs = useRef<Record<string, HTMLLIElement | null>>(
    links[language].reduce((acc: Record<string, HTMLLIElement | null>, link) => {
      acc[link.id] = null;
      return acc;
    }, {})
  );

  const isMobile = useMedia("(max-width: 1280px)", false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link: { id: string; hash: string }) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(link.id);
    setTimeOfLastClick(Date.now());
    setIsOpen(false);

    const section = document.querySelector(link.hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            size="default"
            variant="outline"
            className='font-normal rounded-md bg-main/10 dark:bg-main/50 dark:text-text-light hover:bg-main/20 hover:text-main border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-main focus:bg-main/30 transition'
          >
            <Menu className='size-4'/>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className='px-2 bg-white dark:bg-main'>
          <nav>
            <ul>
              {links[language].map((link) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center"
                  key={link.hash}
                  ref={(el) => { sectionRefs.current[link.id] = el; }} 
                >
                  <Link
                    className={clsx(
                      "flex items-center px-3 py-3 hover:text-shark-950 text-shark-600 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium",
                      {
                        "text-red-500": activeSection === link.id,
                      }
                    )}
                    href={link.hash}
                    onClick={handleLinkClick(link)}
                  >
                    {link.name}
                    {link.id === activeSection && (
                      <motion.span
                        className="bg-bermuda-400 rounded-lg -z-10 dark:bg-bermuda-400"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className='flex flex-row items-center justify-center mx-16 py-2 border-t border-text-dark dark:border-text-light mt-4 gap-x-4'>
              <CustomDropdown/>
              <span className="opacity-30">|</span>
              <ThemeSwitch light="Light" dark="Dark" />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <header className="z-[999] relative">
      <nav className={`flex fixed left-1/2 -translate-x-1/2 top-[0rem] sm:h-[initial]`}>
        <ul className="hidden xl:flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links[language].map((link) => (
            <motion.li
              className="h-3/4 mt-[2px] flex items-center justify-center relative"
              key={link.hash}
              ref={(el) => { sectionRefs.current[link.id] = el; }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-shark-950 text-shark-800 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium",
                  {
                    "text-red-500": activeSection === link.id,
                  }
                )}
                href={link.hash}
                onClick={handleLinkClick(link)}
              >
                {link.name}
                {link.id === activeSection && (
                  <motion.span
                    className="bg-bermuda-400 rounded-lg absolute inset-0 -z-10 dark:bg-bermuda-400"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
