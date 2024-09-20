"use client";

import SectionTitleCenter from "../layout/section-title-center";
import SectionTitle from "../layout/section-title";
import { useSectionInView } from "../../lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { WorkExperience } from "../layout/work-expirience";

import { useTexts } from "@/context/texts-context";
import { skills } from "@/lib/data";

export default function AboutSection() {
  const { texts } = useTexts();

  const { ref } = useSectionInView("O mně");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.02 * index,
      },
    }),
  };

  return (
    <div
      ref={ref}
      id="o-mne"
      className="min-h-screen max-w-screen z-10 mb-64 relative mx-auto flex flex-col items-center lg:items-start space-y-8"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 w-full text-center lg:text-left">
          <SectionTitle
            heading={texts["about_title"]}
            subHeading={texts["about_short-description"]}
            className="hidden lg:flex"
          />
          <SectionTitleCenter
            heading={texts["about_title"]}
            subHeading={texts["aboutMeDesc"]}
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br dark:from-neutral-50 dark:to-neutral-400 from-neutral-500/85 to-neutral-800 bg-opacity-50 mb-4">
            {texts["about_name"]}
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4 text-xs md:text-sm">
            
            <span
                  className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-md"
                >
                Programátor
                </span>
            {/* 
            {Array.isArray(texts["tags"]) ? (
              texts["tags"].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-md"
                >
                  {tag}
                </span>
              ))
            ) : (
              <p>{texts["about_no-tags"]}</p>
            )}
              */}
          </div>

          <p className="mt-6 w-full md:w-3/4 text-sm text-shark-500 dark:text-shark-200 mx-auto lg:mx-0">
            {texts[`about_description`]}
          </p>

          <div>
            <h2 className="text-2xl font-semibold py-2 pt-8">
              {" "}
              {texts["technologiesTitlw"]}{" "}
            </h2>
            <ul className="grid grid-cols-5 mt-2 lg:flex lg:flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeInAnimationVariants}
                  className="bg-black/10 group relative hover:scale-105 hover:bg-black/20 dark:bg-white/10 p-2 rounded dark:hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    height={24}
                    width={24}
                  />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                    {skill.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-1/3 w-2/3 relative mx-auto mt-12 lg:mt-0">
          <Image
            src="/profile_pic.png"
            height={800}
            width={800}
            quality={100}
            alt="My personal photo"
            className="z-10 drop-shadow-lg rounded-full scale-75 border border-black/50 dark:border-white/50 bg-gray-100 dark:bg-main/60"
          />
        </div>
      </div>

      <WorkExperience />
    </div>
  );
}
