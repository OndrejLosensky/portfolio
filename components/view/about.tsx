"use client";

import SectionTitle from "../layout/section-title";
import { useSectionInView } from "../../lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { IoMdPin } from "react-icons/io";
import Link from "next/link";

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
  { name: 'HTML', level: '100%', icon: "/icons/html.svg" },
  { name: 'Sqlite', level: '80%', icon: "/icons/sqlite.svg" },
  { name: 'MongoDB', level: '10%', icon: "/icons/mongo.png" },
  { name: 'TailwindCSS', level: '85%', icon: "/icons/tailwind.svg" },
  { name: 'Wordpress', level: '90%', icon: "/icons/wordpress.svg" },
  { name: 'PHP', level: '90%', icon: "/icons/php.svg" },
  { name: 'C#', level: '90%', icon: "/icons/cs.svg" },
  { name: 'Godot', level: '90%', icon: "/icons/godot2.svg" },
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
    <div ref={ref} id="o-mne" className="min-h-screen max-w-screen w-[100%] z-10 mb-64 relative mx-auto flex flex-col space-y-4">
      
      <section className="flex flex-col lg:flex-row lg:gap-x-6 lg:items-center">
        <div className="w-full lg:w-1/3 relative lg:mt-12">
            <div className="bg-[#3c8d77] absolute top-[-2rem] -z-20 left-[-1rem] md:left-[0rem] lg:left-[-5rem] -rotate-45 opacity-30 h-[10rem] md:h-[30rem] lg:w-[35rem] w-[20rem] rounded-full blur-[2em] dark:bg-[#82e8cfee]"></div>
            <Image src="/pf.webp" height={200} width={200} alt="My personal photo" className="w-2/3 lg:w-full rounded-xl border border-text-dark dark:border-text-light shadow-lg" />
        </div>
        <div className="w-full lg:ml-20 mt-16 lg:w-2/3">
          <SectionTitle heading="O mě" subHeading="Kdo jsem?" />
          <h2 className="md:text-4xl pt-2 lg:text-5xl text-3xl flex flex-col mb-1 font-bold bg-clip-text text-transparent bg-gradient-to-br dark:from-neutral-50 dark:to-neutral-400 from-neutral-500/85 to-neutral-800 bg-opacity-50">
              <span>Ondřej Losenský</span>
          </h2>
          <div className="flex flex-row gap-x-4 my-3">
            <p className="text-[0.6rem] md:text-lg text-green-500 font-medium flex flex-row items-center lg:pb-0 border-r border-text-dark/60 dark:border-text-light/60 pr-4"> <CiCircleCheck className="mr-2 w-4 h-4 md:w-6 md:h-6"/> <span>Jsem otevřen pracovním příležitostem</span></p>
            <p className="text-[0.6rem] md:text-lg text-text-dark dark:text-text-light font-medium flex flex-row items-center"> <IoMdPin className="text-red-500 mr-2 w-4 h-4 md:w-6 md:h-6"/> <span>Praha</span></p>
          </div>
          <div className="flex flex-row items-center gap-x-2 mt-4">
            <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Programátor </p>
            <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Kóder </p>
            <p className="px-2 py-1 bg-black/10 hover:bg-black/20 dark:bg-white/10 rounded-md dark:hover:bg-white/20 duration-200">Administrátor</p>
          </div>
          <p className="mt-4 text-sm text-shark-500 dark:text-shark-200">
          Jmenuji se Ondřej Losenský, je mi 19 let a jsem z Prahy. Právě jsem dokončil střední průmyslovou školu v oboru IT. Věnuji se programování webových aplikací, správě systémů a dalším technologickým zájmům. Na mém portfoliu najdete mé kontaktní údaje, projekty a životopis ve formátu PDF ve více jazycích.
          Zároveň se můžeme domluvit na vytvoření webové stránky na míru nebo nějakého projektu. Pro více se podívejte do sekce <strong><Link href="/tvorba-webu">Tvorba webu</Link></strong></p>
        </div>     
      </section>

      <h2 className="pt-24 text-md md:text-lg lg:text-xl">Technologie, které znám</h2>
      <ul className="grid grid-cols-4 lg:flex lg:flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            variants={fadeInAnimationVariants}
            className="bg-black/10 group relative hover:scale-105 hover:bg-black/20 dark:bg-white/10 p-4 rounded dark:hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Image src={skill.icon} alt={`${skill.name} icon`} height={32} width={32} />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </ul>

      <h2 className="pt-12 text-md md:text-lg lg:text-xl">Nástroje, které používám nejčastěji</h2>
      <ul className="grid grid-cols-4 lg:flex lg:flex-wrap gap-4">
        {tools.map((tool, index) => (
          <motion.li
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            variants={fadeInAnimationVariants}
            className="bg-black/10 group relative hover:scale-105 hover:bg-black/20 dark:bg-white/10 p-4 rounded dark:hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Image src={tool.icon} alt={`${tool.name} icon`} height={32} width={32} />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
              {tool.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
