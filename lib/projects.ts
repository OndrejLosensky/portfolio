import datadepot from "@/public/mockups/datadepot.png";
import kralovskalevandule from "@/public/mockups/kl2.png";
import codecommerce from "@/public/mockups/codecommerce.png";
import demonicka from "@/public/mockups/demonicka.png";
import taskboard from "@/public/mockups/taskboard.png";
import qabot from "@/public/mockups/qabot.png";
import pal from "@/public/mockups/pal.png";
import cleannotes from "@/public/mockups/cleannotes.png";

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
    title: "Pavel Losenský",
    description: "Statická webová stránka na platformě WordPress",
    tags: ["WordPress"],
    imageUrl: pal,
    githubLink: undefined,
    websiteLink: "https://www.losensky.cz",
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-300 dark:via-teal-500 dark:to-indigo-600', 
    otherLink: undefined,
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
  }
] as const;


export const sideProjectsData = [    
  {
    title: "TaskBoard",
    description: "Webová aplikace ve stylu aplikace Trello/Notion pro jednoduché plánování úkolů",
    tags: ["React", "TypeScript", "TailwindCSS", "Framer motion"],
    imageUrl: taskboard,
    githubLink: 'https://github.com/OndrejLosensky/TaskBoard',
    websiteLink: undefined,
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-300 dark:via-teal-500 dark:to-indigo-600', 
    otherLink: undefined,
    disabled: false,
  }, 
  {
    title: "Q&A Bot",
    description: "Jednoduchý chatbot s předem definovanými otázkami a odpovědmi, ready na implementaci do vašeho osobního portfólia nebo kamkoliv vás napadne",
    tags: ["React", "TypeScript", "TailwindCSS", "Framer motion"],
    imageUrl: qabot,
    githubLink: 'https://github.com/OndrejLosensky/Q-A-Bot',
    websiteLink: undefined,
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-300 dark:via-teal-500 dark:to-indigo-600', 
    otherLink: undefined,
    disabled: false,
  },   
  {
    title: "CleanNotes",
    description: "Jednoduchá aplikaci pro zapisování poznámek s podporou Markdown. Možnost mazat, editovat a přidávat poznámky.Ukládané pouze",
    tags: ["React", "TypeScript", "TailwindCSS", "LocalStorage"],
    imageUrl: cleannotes,
    githubLink: 'https://github.com/OndrejLosensky/CleanNotes',
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
 
] as const;