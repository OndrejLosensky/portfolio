"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaSchool } from 'react-icons/fa';

interface TimelineEventProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  date: string;
  isReversed: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ icon, title, description,date, isReversed }) => {
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
      <div className="order-1 h-[150px] bg-shark-50 dark:bg-shark-900 border border-shark-500 dark:border-shark-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-shark-800 flex flex-row items-center gap-x-2 dark:text-shark-100 text-xl">{title}<span className='font-mono font-light text-sm pt-1 text-shark-300'> {date} </span></h3>
        <p className="text-sm leading-snug tracking-wide text-shark-600 dark:text-shark-300 text-opacity-100">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const events = [
    {
      icon: <FaReact />,
      title: "Odborná stáž - Česká spořitelna",
      date: "Květen 2022",
      description: "Práce s Adobe Illustrator, SSRS ve Visual Studiu a Excel",
    },
    {
      icon: <FaSchool />,
      title: "Odborná stáž - Česká spořitelna",
      date: "Květen 2023",
      description: "Python script pro nahrání a následné filtrování veřejných smluv z rejstříku",
    },
    {
      icon: <FaReact/>,
      title: "Královská levandule - web",
      date: "2022 - 2023",
      description: "Kompletní tvorba webové stránky Královské levandule pomocí Wordpressu a custom code bloků",
    },
    {
      icon: <FaSchool />,
      title: "Havel & Partners",
      date: "Srpen 2023",
      description: "Bridága v IT oddělení jako IT support výpomoc",
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
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
