import datadepot from "@/public/mockups/datadepot.png";
import kralovskalevandule from "@/public/mockups/kralovska-levandule.png";
import codecommerce from "@/public/mockups/codecommerce.png";
import demonicka from "@/public/mockups/demonicka2.png";

export const projectsData = [
  { 
    title: "Královská levandule",
    description:
      "První reálný projekt, který již 2 rokem běží on-line na adrese www.kralovskalevandule.cz.",
    tags: ["Wordpress", "Figma"],
    imageUrl: kralovskalevandule,
    githubLink: undefined, 
    websiteLink: "https://www.kralovskalevandule.cz",
    gradient: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600', 
    otherLink: "https://obchod.kralovskalevandule.cz",  
  },
  {
    title: "Démonická",
    description:
      "Webová aplikace pro akci Démonická pro jednoduchou správu počtu vypitých piv narozdíl proti papírové podobě. ",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Firebase"],
    imageUrl: demonicka,
    githubLink: undefined,
    websiteLink: undefined,
    gradient: 'bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600', 
    otherLink: undefined,
  }, 
  {
    title: "DataDepot",
    description:
      "Jednoduchá aplikace pro správu hesel, poznámek a code snippets vše společně s přehlednou stránkou na statistiky a plně funkční registrací",
    tags: ["Next.js", "JavaScript", "Firebase", "Sqlite", "TailwindCSS"],
    imageUrl: datadepot,
    githubLink: 'https://github.com/OndrejLosensky/DataDepot', 
    websiteLink: undefined,
    gradient: 'bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600', 
    otherLink: undefined,
  },
  {
    title: "CodeCommerce",
    description:
      "Webová aplikace pro správu jednoduchého e-shopu pomocí administrátorského panelu",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Prisma"],
    imageUrl: codecommerce,
    githubLink: 'https://github.com/OndrejLosensky/code-commerce',
    websiteLink: undefined,
    gradient: 'bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600', 
    otherLink: undefined,
  }, 
] as const;

export const projectsDataAll = [
  { 
    title: "Královská levandule",
    description:
      "První reálný projekt, který již 2 rokem běží on-line na adrese www.kralovskalevandule.cz.",
    tags: ["Wordpress", "Figma", "PHP"],
    imageUrl: kralovskalevandule,
    githubLink: undefined, 
    websiteLink: "https://www.kralovskalevandule.cz",
    gradient: 'from-violet-200 via-sky-300 to-purple-400', 
    otherLink: "https://obchod.kralovskalevandule.cz",
  },
  {
    title: "Démonická",
    description:
      "Webová aplikace pro akci Démonická pro jednoduchou správu počtu vypitých piv narozdíl proti papírové podobě. ",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Firebase"],
    imageUrl: demonicka,
    githubLink: undefined,
    websiteLink: undefined,
    gradient: 'bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600', 
    otherLink: undefined,
  }, 
  {
    title: "LKSYSTEM.CZ s.r.o.",
    description:
      "Webová aplikace pro akci Démonická pro jednoduchou správu počtu vypitých piv narozdíl proti papírové podobě. ",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Firebase"],
    imageUrl: demonicka,
    githubLink: undefined,
    websiteLink: undefined,
    gradient: 'bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600', 
    otherLink: undefined,
  }, 
  {
    title: "Vila Perun",
    description:
      "Webová aplikace pro akci Démonická pro jednoduchou správu počtu vypitých piv narozdíl proti papírové podobě. ",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Firebase"],
    imageUrl: demonicka,
    githubLink: undefined,
    websiteLink: undefined,
    gradient: 'bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600', 
    otherLink: undefined,
  },
  {
    title: "Pavel Losenský",
    description:
      "Webová aplikace pro akci Démonická pro jednoduchou správu počtu vypitých piv narozdíl proti papírové podobě. ",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Firebase"],
    imageUrl: demonicka,
    githubLink: undefined,
    websiteLink: undefined,
    gradient: 'bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-600', 
    otherLink: undefined,
  },  
  {
    title: "DataDepot",
    description:
      "Jednoduchá aplikace pro správu hesel, poznámek a code snippets vše společně s přehlednou stránkou na statistiky a plně funkční registrací",
    tags: ["Next.js", "JavaScript", "Firebase", "Sqlite", "TailwindCSS"],
    imageUrl: datadepot,
    githubLink: 'https://github.com/OndrejLosensky/DataDepot', 
    websiteLink: undefined,
    gradient: 'from-yellow-400 via-red-500 to-pink-500', 
    otherLink: undefined,
  },
  {
    title: "CodeCommerce",
    description:
      "Webová aplikace pro správu jednoduchého e-shopu pomocí administrátorského panelu",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Prisma"],
    imageUrl: codecommerce,
    githubLink: 'https://github.com/OndrejLosensky/code-commerce',
    websiteLink: undefined,
    gradient: 'from-green-400 via-blue-500 to-purple-600', 
    otherLink: undefined,
  }, 
  {
    title: "DevDocs",
    description:
      "Webová aplikace pro správu jednoduchého e-shopu pomocí administrátorského panelu",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Prisma"],
    imageUrl: codecommerce,
    githubLink: 'https://github.com/OndrejLosensky/code-commerce',
    websiteLink: undefined,
    gradient: 'from-green-400 via-blue-500 to-purple-600', 
    otherLink: undefined,
  }, 
  
] as const;
