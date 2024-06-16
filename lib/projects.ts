import logo from "@/public/rmtdev.png";

export const projectsData = [
    {
      title: "DataDepot",
      description:
        "Vlastní nápad, který jsem tvořil během maturitního období. Naučil jsem se zde spoustu nových věcí co se týče API, databází, i front-end stylování",
      tags: ["Next.js", "JavaScript", "Firebase", "Sqlite", "TailwindCSS"],
      imageUrl: logo,
    },
    {
      title: "Královská levandule",
      description:
        "První reálný projekt, který již 2 roky běží on-line na adrese www.kralovskalevandule.cz. Momentálně běží na CMS Wordpress, ale brzy dokončím verzi pomocí Next.js",
      tags: ["Python", "Lavarell", "MongoDB", "Sqlite", "CSV"],
      imageUrl: logo,
    },
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
    },
  ] as const;