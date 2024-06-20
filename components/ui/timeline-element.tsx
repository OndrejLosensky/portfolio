"use client";

import { AiOutlineDoubleRight } from "react-icons/ai";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLaptopCode } from 'react-icons/fa';
import Image from 'next/image';
import { LuLaptop2 } from "react-icons/lu";
import Link from "next/link";

interface TimelineEventProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  date: string;
  isReversed: boolean;
  link?: string;
  tags?: string[];
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ icon, title, description, date, isReversed, link, tags }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      transition={{ duration: 0.5 }}
      className={`mb-4 flex justify-between items-center w-full ${isReversed ? 'flex-row-reverse' : ''}`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-10 flex items-center order-1 bg-shark-400 dark:bg-shark-800 shadow-xl w-10 h-10 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-gray-100 dark:text-white">
          {icon}
        </h1>
      </div>
      <div className="order-1 h-auto bg-shark-50 dark:bg-shark-900 border border-shark-500 dark:border-shark-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-shark-800 flex flex-row items-center gap-x-2 dark:text-shark-100 text-xl">
          {title}
          <span className='font-mono font-light text-sm pt-1 text-shark-300'>{date}</span>
        </h3>
        {tags && tags.length > 0 && (
          <div className="mb-2">
            {tags.map((tag, index) => (
              <span key={index} className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-sm leading-snug tracking-wide text-shark-600 dark:text-shark-300 text-opacity-100">
          {description}
        </p>
        {link && (
          <Link href={link} className="text-primary hover:font-bold duration-300 group text-sm mt-2 flex flex-row gap-x-1 items-center">
            <span className="">Zjistit více</span> <AiOutlineDoubleRight/>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const events = [
    {
      icon: <FaLaptopCode />,
      title: "Odborná stáž - Česká spořitelna",
      date: "Květen 2022",
      description: "Práce s Adobe Illustrator, SSRS ve Visual Studiu a Excel",
      tags: ["Illustrator","Photoshop", "SSRS", "Excel"]
    },
    {
      icon: <FaLaptopCode />,
      title: "Odborná stáž - Česká spořitelna",
      date: "Květen 2023",
      description: "Python script pro nahrání a následné filtrování veřejných smluv z rejstříku",
      tags: ["Python", "Excel", "CSV"]
    },
    {
      icon: <Image src="/additional-icons/logo.svg" width={26} height={26} alt='KL icon'/>,
      title: "Královská levandule - web",
      date: "2022 - 2023",
      description: "Kompletní tvorba webové stránky Královské levandule pomocí Wordpressu a custom code bloků",
      link: "/kralovska-levandule",
      tags: ["Wordpress"]
    },
    {
      icon: <LuLaptop2/>,
      title: "Havel & Partners",
      date: "Srpen 2023",
      description: "Brigáda v IT oddělení jako IT support výpomoc",
      tags: ["IT Support"]
    },
  ];

  return (
    <div className="max-w-full mx-auto">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border" style={{ left: '50%' }}></div>
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            icon={event.icon}
            title={event.title}
            description={event.description}
            date={event.date}
            isReversed={index % 2 !== 0}
            link={event.link} 
            tags={event.tags} 
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
