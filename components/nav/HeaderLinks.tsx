"use client";

import { links } from "@/lib/navData";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section";
import useIsScrolled from "@/lib/hooks";
import { useRef } from "react";

// Extract the section names type from links
type SectionName = (typeof links)[number]['name'];

export default function HeaderLinks() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const isScrolled = useIsScrolled();

  // Create typed refs for each section
  const sectionRefs = useRef<Record<SectionName, HTMLLIElement | null>>(
    links.reduce((acc, link) => {
      acc[link.name] = null;
      return acc;
    }, {} as Record<SectionName, HTMLLIElement | null>)
  );

  return (
    <header className="z-[999] relative">
      <nav className={`flex fixed left-1/2 -translate-x-1/2 top-[0rem] sm:h-[initial]`}>
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              ref={(el) => { sectionRefs.current[link.name] = el; }} // Assign ref to each link
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-shark-950 text-shark-600 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium",
                  {
                    "text-red-500": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault(); // Prevent the default link behavior
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());

                  // Smooth scroll to the section
                  const section = document.querySelector(link.hash);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link.name}
                {link.name === activeSection && (
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
