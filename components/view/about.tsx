"use client";

import SectionTitle from "../layout/section-title";
import { useSectionInView } from "../../lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  level: string;
  icon: string;
}

interface Tool {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'React', level: '95%', icon: "/icons/react.svg" },
  { name: 'Next.js', level: '90%', icon: "/icons/next.js.svg" },
  { name: 'Python', level: '65%', icon: "/icons/py.svg" },
  { name: 'Swift', level: '15%', icon: "/icons/swift.svg" },
  { name: 'TypeScript', level: '40%', icon: "/icons/ts.svg" },
  { name: 'CSS', level: '95%', icon: "/icons/css.svg" },
  { name: 'JavaScript', level: '80%', icon: "/icons/js.svg" },
  { name: 'HTML', level: '100%', icon:"/icons/html.svg" },
  { name: 'Sqlite', level: '80%', icon: "/icons/sqlite.svg" },
  { name: 'MongoDB', level: '10%', icon: "/icons/mongo.png" },
  { name: 'TailwindCSS', level: '85%', icon:"/icons/tailwind.svg" },
  { name: 'Wordpress', level: '90%', icon: "/icons/wordpress.svg" },
];

const tools: Tool[] = [
  { name: 'VSCode', icon:"/icons/vsc.svg" },
  { name: 'Github', icon: "/icons/github.svg"},
  { name: 'Chrome', icon: "/icons/chrome.svg" },
  { name: 'Illustrator', icon: "/icons/ai.svg" },
  { name: 'Photoshop', icon: "/icons/ps.svg"},
  { name: 'Figma', icon: "/icons/figma.png"},
  { name: 'Postman', icon: "/icons/postman.svg" },
  { name: 'ChatGPT', icon: "/icons/chatgpt.png" }
]

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

export default function AboutSection() {
  const { ref } = useSectionInView("O mně");

  return (
    <div ref={ref} id="about" className="h-screen max-w-screen z-10 mb-64 relative w-full mx-auto flex flex-col space-y-4">
      <SectionTitle heading="O mě" subHeading="Kdo jsem?" />

      <div className="w-2/3">
        <h2 className="text-4xl font-sora font-bold"> Ondřej Losenský </h2>
        <div className="flex flex-row items-center gap-x-4 mt-4">
          <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Full-stack vývojář</p>
          <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Kóder </p>
          <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Designér </p>
          <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Administrátor</p>
        </div>
        <p className="mt-4 text-shark-500 dark:text-shark-200">
          Jmenuji se Ondřej Losenský a je mi 19 let. Pocházím z Prahy a již několik let se věnuji Informačním technologiím a grafice.
          Tento rok jsem vystudoval střední průmyslovou školu v Praze s vybraným oborem IT. Mezi moje velké koníčky patří programování webových aplikací,
          tvorba amatérských grafických designů a mnoho různých věcí. Na mém portfoliu naleznete kontakt na mě, nějaké mé projekty, kompletní životopis
          jak ve formě PDF tak zde v podobě vertikální časové osy.

        </p>
        <p className="mt-4 text-shark-500  dark:text-shark-200">
          Jestli bych si měl vybral zda jsem Front-end nebo Back-end developer, tak stoprocentně zvolím frontend, protože se mu věnuji o něco déle. Rád
          zkouším nové frameworky, různé knihovny a nástroje. Poslední dobou jsem se ale zastavil u Next.js, který je spíše Backendový. Momentálně se také
          snažím využívat spíše TypeScript než-li JavaScript.
        </p>

      </div>
      {/* 
      <h2 className="pt-10 text-xl"> Můj skillset: </h2>
      <ul className="grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.li
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index} key={index} className="bg-black/10 hover:bg-black/20 dark:bg-white/10 p-4 rounded dark:hover:bg-white/20 transition-colors duration-300">
            <div className="flex justify-between mb-2 items-center">
              <div className="flex items-center gap-2">
                <Image src={skill.icon} alt="Icon" height={24} width={24}/>
                <span>{skill.name}</span>
              </div>
              <span className="text-gray-400">{skill.level}</span>
            </div>
            <div className="w-full bg-shark-200 rounded-full h-2.5 dark:bg-shark-700">
              <div className="bg-gradient-to-bl from-malibu-400 to-bermuda-500 h-2.5 rounded-full" style={{ width: skill.level }}></div>
            </div>
          </motion.li>
        ))}
      </ul>

      <h2 className="pt-12 text-xl">Nástroj, které používám: </h2>
      <ul className="grid grid-cols-5 gap-4 mb-8">
        {tools.map((tool, index) => (
          <li key={index} className="bg-black/10 hover:bg-black/20 dark:bg-white/10 p-4 rounded dark:hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2">
            <Image src={tool.icon} alt="Icon" height={24} width={24}/>
            <span>{tool.name}</span>
          </li>
        ))}
      </ul>
      */}
    </div>
  )
}
