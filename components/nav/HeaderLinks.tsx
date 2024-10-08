import { links, SectionName } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section';
import { useLanguage } from '@/context/language-context';
import { useRef, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import useIsScrolled from '@/lib/hooks';
import ThemeSwitch from '@/context/theme-switcher';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import CustomDropdown from '../action/custom-dropdown';
import { useMedia } from 'react-use';

type Language = keyof typeof links;

export default function HeaderLinks() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language, setLanguage } = useLanguage() as { language: Language; setLanguage: (lang: Language) => void };
  const isScrolled = useIsScrolled();

  const sectionRefs = useRef<Record<SectionName, HTMLLIElement | null>>(
    links[language].reduce((acc, link) => {
      acc[link.name] = null;
      return acc;
    }, {} as Record<SectionName, HTMLLIElement | null>)
  );

  const isMobile = useMedia('(max-width: 1280px)', false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link: { name: SectionName; hash: string }) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(link.name);
    setTimeOfLastClick(Date.now());
    setIsOpen(false);

    const section = document.querySelector(link.hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return isMobile ? (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Button
          size="default"
          variant="outline"
          className="font-normal rounded-md bg-main/10 dark:bg-main/50 dark:text-text-light hover:bg-main/20 hover:text-main border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-main focus:bg-main/30 transition"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="px-2 bg-white dark:bg-main">
        <nav>
          <ul>
            {links[language].map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center"
                key={link.hash}
                ref={(el) => { sectionRefs.current[link.name] = el; }}
              >
                <Link
                  className={clsx(
                    'flex items-center px-3 py-3 hover:text-shark-950 text-shark-600 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium',
                    { 'text-red-500': activeSection === link.name }
                  )}
                  href={link.hash}
                  onClick={handleLinkClick(link)}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-bermuda-400 rounded-lg -z-10 dark:bg-bermuda-400"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-center mx-16 py-2 border-t border-text-dark dark:border-text-light mt-4 gap-x-4">
            <CustomDropdown />
            <span className="opacity-30">|</span>
            <ThemeSwitch light="Light" dark="Dark" />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  ) : (
    <header className="z-[999] relative">
      <nav className="flex fixed left-1/2 -translate-x-1/2 top-[0rem] sm:h-[initial]">
        <ul className="hidden xl:flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links[language].map((link) => (
            <motion.li
              className="h-3/4 mt-[2px] flex items-center justify-center relative"
              key={link.hash}
              ref={(el) => { sectionRefs.current[link.name] = el; }}
            >
              <Link
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-shark-950 text-shark-800 transition dark:text-shark-50 dark:hover:text-shark-100 font-medium',
                  { 'text-red-500': activeSection === link.name }
                )}
                href={link.hash}
                onClick={handleLinkClick(link)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-bermuda-400 rounded-lg absolute inset-0 -z-10 dark:bg-bermuda-400"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
