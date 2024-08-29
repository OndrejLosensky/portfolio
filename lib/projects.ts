import datadepot from "@/public/mockups/datadepot.png";
import kralovskalevandule from "@/public/mockups/kl.png";
import codecommerce from "@/public/mockups/codecommerce.png";
import demonicka from "@/public/mockups/demonicka.png";
import soon from "@/public/soon.png";

export const projectsData = [
  { 
    title: "Královská levandule",
    description: "První reálný projekt, který již 2 rokem běží on-line na adrese www.kralovskalevandule.cz.",
    tags: ["Wordpress", "Figma"],
    imageUrl: kralovskalevandule,
    githubLink: undefined, 
    websiteLink: "https://www.kralovskalevandule.cz",
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-300 dark:via-teal-500 dark:to-indigo-600', 
    otherLink: "https://obchod.kralovskalevandule.cz",  
    disabled: false,
  },
  {
    title: "Démonická",
    description: "Webová aplikace pro akci Démonická pro jednoduchou správu počtu vypitých piv narozdíl proti papírové podobě.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Firebase"],
    imageUrl: demonicka,
    githubLink: undefined,
    websiteLink: undefined,
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-300 dark:via-teal-500 dark:to-indigo-600', 
    otherLink: undefined,
    disabled: false, 
  },  
  {
    title: "CodeCommerce",
    description: "Webová aplikace pro správu jednoduchého e-shopu pomocí administrátorského panelu",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Prisma"],
    imageUrl: soon,
    githubLink: 'https://github.com/OndrejLosensky/code-commerce',
    websiteLink: undefined,
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-300 dark:via-teal-500 dark:to-indigo-600', 
    otherLink: undefined,
    disabled: true,
  }, 
] as const;


export const sideProjectsData = [
  {
    title: "DataDepot",
    description: "Jednoduchá aplikace pro správu hesel, poznámek a code snippets vše společně s přehlednou stránkou na statistiky a plně funkční registrací",
    tags: ["Next.js", "JavaScript", "Firebase", "Sqlite", "TailwindCSS"],
    imageUrl: datadepot,
    githubLink: 'https://github.com/OndrejLosensky/DataDepot', 
    websiteLink: undefined,
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-300 dark:via-teal-500 dark:to-indigo-600', 
    otherLink: undefined,
    disabled: false,
  },
  {
    title: "CodeCommerce",
    description: "Webová aplikace pro správu jednoduchého e-shopu pomocí administrátorského panelu",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Prisma"],
    imageUrl: codecommerce,
    githubLink: 'https://github.com/OndrejLosensky/code-commerce',
    websiteLink: undefined,
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-300 dark:via-teal-500 dark:to-indigo-600', 
    otherLink: undefined,
    disabled: false,
  },     
  {
    title: "TaskBoard",
    description: "Webová aplikace pro správu jednoduchého e-shopu pomocí administrátorského panelu",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Prisma"],
    imageUrl: codecommerce,
    githubLink: 'https://github.com/OndrejLosensky/code-commerce',
    websiteLink: undefined,
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-300 dark:via-teal-500 dark:to-indigo-600', 
    otherLink: undefined,
    disabled: false,
  },     
] as const;