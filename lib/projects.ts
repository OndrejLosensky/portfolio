import datadepot from "@/public/mockups/datadepot.png";
import kl from "@/public/mockups/KL.png";
import codecommerce from "@/public/app.webp";
export const projectsData = [
    { 
      title: "Královská levandule",
      description:
        "První reálný projekt, který již 2 rokem běží on-line na adrese www.kralovskalevandule.cz.",
      tags: ["Wordpress", "Figma", "PHP"],
      imageUrl: kl,
    },
    {
      title: "DataDepot",
      description:
        "Jednoduchá aplikace pro správu hesel, poznámek a code snippets vše společně s přehlednou stránkou na statistiky a plně funkční registrací",
      tags: ["Next.js", "JavaScript", "Firebase", "Sqlite", "TailwindCSS"],
      imageUrl: datadepot,
    },
    /*
    {
      title: "CodeVault",
      description:
        "Webová aplikac pro ukládání vlastních code snippets. Inspirace v desktopové aplikaci: Codespace.app",
      tags: ["Next.js", "TypeScript", "Neon & Drizzle DB", "TailwindCSS", "Shadcn-ui"],
      imageUrl: logo,
    },
    {
      title: "PassDefender",
      description:
        "Aplikace na podobné bázi akorát pro ukládání hesel a všemu podobnému",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Firebase"],
      imageUrl: logo,
    },*/
    {
      title: "CodeCommerce",
      description:
        "Webová aplikace pro správu jednoduché e-shopu pomocí administrátorského panelu",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Prisma"],
      imageUrl: codecommerce,
    },
  ] as const;