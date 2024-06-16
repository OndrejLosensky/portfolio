"use client";

import SectionTitle from "../layout/section-title";
import { useSectionInView } from "../../lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

import { CiCircleCheck } from "react-icons/ci";


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
    <div ref={ref} id="about" className="min-h-screen max-w-screen w-[90%] z-10 mb-64 relative  mx-auto flex flex-col space-y-4">
      
      <section className="flex flex-col lg:flex-row lg:gap-x-6 lg:items-center">
        <div className="w-full lg:w-1/3 relative lg:mt-12">
            <div className="bg-[#3c8d77] absolute top-[-2rem] -z-20 left-[-1rem] md:left-[0rem] lg:left-[-5rem] -rotate-45 opacity-30 h-[10rem] md:h-[30rem] lg:w-[35rem] w-[20rem] rounded-full blur-[2em] dark:bg-[#82e8cfee]"></div>
            <Image src="/profile_pic.jpeg" height={200} width={200} alt="My personal photo" className="w-2/3 hover:scale-125 lg:hover:scale-110 duration-300 lg:w-full mx-auto rounded-xl border border-text-dark dark:border-text-light shadow-lg" />
        </div>
        <div className="w-full lg:ml-20 mt-16 lg:w-2/3">
        <SectionTitle heading="O mě" subHeading="Kdo jsem?" />

          <h2 className="md:text-4xl lg:text-5xl text-3xl flex flex-col mb-1 font-bold bg-clip-text text-transparent bg-gradient-to-br dark:from-neutral-50 dark:to-neutral-400 from-neutral-500/85 to-neutral-800 bg-opacity-50">
              <span>Ondřej Losenský</span>
          </h2>
          <p className="text-xs md:text-lg my-2 text-green-500 font-medium pt-2 flex flex-row items-center"> <CiCircleCheck className="mr-2 w-6 h-6"/> <span>Jsem otevřen pracovním příležitostem</span></p>
          <div className="flex flex-row items-center gap-x-1 mt-4">
            <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Kóder </p>
            <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Designér </p>
            <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Administrátor</p>
          </div>
          <p className="mt-4 text-sm text-shark-500 dark:text-shark-200">
            Jmenuji se Ondřej Losenský a je mi 19 let. Pocházím z Prahy a již několik let se věnuji Informačním technologiím a grafice.
            Tento rok jsem vystudoval střední průmyslovou školu v Praze s vybraným oborem IT. Mezi moje velké koníčky patří programování webových aplikací,
            tvorba amatérských grafických designů a mnoho různých věcí. Na mém portfoliu naleznete kontakt na mě, nějaké mé projekty, kompletní životopis
            jak ve formě PDF tak zde v podobě vertikální časové osy.

          </p>

        </div>     
      </section>
      {/* */}
      <h2 className="pt-10 text-xl"> Můj skillset: </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      <ul className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {tools.map((tool, index) => (
          <li key={index} className="bg-black/10 hover:bg-black/20 dark:bg-white/10 p-4 rounded dark:hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2">
            <Image src={tool.icon} alt="Icon" height={24} width={24}/>
            <span>{tool.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
