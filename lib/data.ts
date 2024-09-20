import datadepot from "@/public/mockups/datadepot.png";
import kralovskalevandule from "@/public/mockups/kralovska-levandule.png";
import codecommerce from "@/public/mockups/codecommerce.png";

interface WorkEntry {
  name: string;
  description: string;
  date: string;
  icon: string;
  color: string;
  fullDescription: string;
}

interface ProjectEntry {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubLink?: string;
  websiteLink?: string;
  gradient: string;
  otherLink?: string;
}

interface CMSOption {
  title: string;
  description: string;
  features: string[];
  pricing: string;
}

interface FrameworkOption {
  title: string;
  description: string;
  features: string[];
  pricing: string;
}

interface GraphicsOption {
  title: string;
  description: string;
  features: string[];
  pricing: string;
}

interface Texts {
  hello: string;
  myNameIs: string;
  name: string;
  themeToggleText: string;
  heroDescription: string;
  continueBtn: string;
  AboutMeTitle: string;
  AboutMeDesc: string;
  showCV: string;
  scrollToTop: string;
  tags: string[];
  AboutDesc: string;
  TechnologiesTitle: string;
  workTitle: string;
  work: WorkEntry[];
  current_work: WorkEntry[]
  OverviewTitle: string;
  OverviewDescription: string;
  webCreation: string;
  webCreationDesc: string;
  webBtn: string;
  newestProject: string;
  projectImagePath: string;
  projectTitle: string;
  projectDescription: string;
  anotherGridTile: string;
  contactTile: string;
  emailCopy: string;
  emailCopied: string;
  currentlyWorkingOn: string;
  projectsTitle: string;
  projectsDescription: string;
  MoreProjectsBtn: string;
  projectsData: ProjectEntry[];
  contactTitle: string;
  contactDescription: string;
  contactSmallText1: string;
  contactSmallText2: string;
  contactFormName: string;
  contactFormNamePlaceholder: string;
  contactFormEmailPlaceholder: string;
  contactFormMessage: string;
  contactFormMessagePlaceholder: string;
  contactFormSendBtn: string;
  contactToastSuccess: string;
  contactToastSuccessDesc: string;
  contactToastError: string;
  contactToastErrorDesc: string;
  cookiesFormText: string;
  cookiesBtn1: string;
  cookiesBtn2: string;
  cookiesBtn3: string;
  cookiesBtn4: string;
  footerAllRightsReserved: string;
  cmsOption: CMSOption[];
  frameworkOptions: FrameworkOption[];
  graphicsOptions: GraphicsOption[];
  webTitle: string;
  webDescription: string;
  cmsTitle: string;
  handMadeTitle: string;
  graphicsTitle: string;
  comingSoonText: string;
  additionalText: string;
  backToHomepage: string;
}


export const Data_cz = {
    hello: "Ahoj",
    myNameIs: "jmenuji se",
    name: "Ondřej Losenský",
    themeToggleText: "Pro přepnutí světlého režimu",
    heroDescription: "Vítejte na mém portfoliu! Jsem full-stack softwarový vývojář z Prahy📍 a absolvent střední školy. Specializuji se na tvorbu moderních a responzivních webů a vysoce efektivních řešení pomocí nejnovějších technologií. Také se zajímám o veškeré dění v oblastech AI a dalších odvětvích",
    continueBtn: "Pokračovat",
    AboutMeTitle: "O mně",
    AboutMeDesc: "Kdo jsem?",
    showCV: "Ukázat CV",
    scrollToTop: "Nahoru",
    tags: [
        "Programátor",
        "Web designer",
        "Administrátor",
    ],
    AboutDesc: "Jmenuji se Ondřej Losenský, je mi 19 let a jsem z Prahy. Právě jsem dokončil střední průmyslovou školu v oboru IT. Věnuji se programování webových aplikací, správě systémů a dalším technologickým zájmům. Na mém portfoliu najdete mé kontaktní údaje, projekty a životopis ve formátu PDF ve více jazycích. Zároveň se můžeme domluvit na vytvoření webové stránky na míru nebo nějakého projektu. ",    
    TechnologiesTitle: "Technologie",
    workTitle: "Pracovní zkušenosti",

    current_work: [
      { 
          name: 'Unicorn', 
          description: 'Junior Front-end Developer', 
          date: 'Září 2024 - aktuálně', 
          icon: '/logos/unicorn1.jpg', 
          color: 'bg-white',
          fullDescription: 'Instalace nových telefonů, kontrola zasedacích místností, reinstalace PC, práce v Excelu, kontrola tiskáren (výměna tonerů, waste kontejnerů)'
      },
    ],

    work: [
      { 
          name: 'Havel&Partners', 
          description: 'IT Support', 
          date: 'Červenec 2023 - Srpen 2023', 
          icon: '/logos/hp.svg', 
          color: 'bg-white',
          fullDescription: 'Instalace nových telefonů, kontrola zasedacích místností, reinstalace PC, práce v Excelu, kontrola tiskáren (výměna tonerů, waste kontejnerů)'
      },
      { 
          name: 'Česká spořitelna - II. stáž', 
          description: 'Stážista', 
          date: 'Druhá polovina května 2023', 
          icon: '/logos/csas.svg',
          color: "bg-[#2970ed]",
          fullDescription: 'Tvorba python scriptu pro dohledávání veřejných smluv. Práce s excelem a CSV soubory'
      },
      { 
          name: 'Královská levandule', 
          description: 'Web developer, administrátor', 
          date: '2022 - 2024', 
          icon: '/logos/kl.svg', 
          color: 'bg-white',
          fullDescription: 'Vytvořil jsem stránku Královské levandule společně s jejím e-shopem'
      },
      { 
          name: 'Česká spořitelna - I. stáž', 
          description: 'Stážista', 
          date: 'Druhá polovina května 2022', 
          icon: '/logos/csas.svg', 
          color: "bg-[#2970ed]",
          fullDescription: 'Práce s SSRS, tvorba ikon pro reporty pomocí Adobe Illustrator, práce v Excelu'
      },
  ],
    OverviewTitle: "Přehled",
    OverviewDescription: "Získejte rychlý předmět o veškerých možnostech a zajímavostech",
    webCreation: "Tvorba webu na míru",
    webCreationDesc: "Stačí se domluvit a váš web můze být na světe",
    webBtn: "Mám zájem o web",
    newestProject: "Nejnovější projekt",
    projectImagePath: "/mockups/kralovska-levandule.png",
    projectTitle: "Královská levandule",
    projectDescription: "Web pro rodinnou levandulovou farmu v Novém Kníně",
    anotherGridTile: "Mým koníčkem je tvorba moderních a responzivních designů",
    contactTile: "Chceš začít společný projekt?",
    emailCopy: "Zkopírovat e-mail",
    emailCopied: "Zkopírováno",
    currentlyWorkingOn: "Momentálně vytvářím vlastní CMS pro tvorbu webových stránek",
    projectsTitle: "Projekty",
    projectsDescription: "Zde se nachází přehled nějakých mých projektů, které lze najít většinou najít i na mém GitHubu",
    MoreProjectsBtn: "Další projekty...",
    projectsData: [
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
    ],
    contactTitle: "Kontakt",
    contactDescription: "Kontaktujte mě během pár kliknutí",
    contactSmallText1:"Chcete mi něco sdělit, něco nabídnout nebo se jen zeptat? Stačí vyplnit tento formulář",
    contactSmallText2:"Běžně odpovídám do 2 pracovních dní",
    contactFormName: "Jméno",
    contactFormNamePlaceholder:"Vaše jméno",
    contactFormEmailPlaceholder: "Váš e-mail",
    contactFormMessage: "Zpráva",
    contactFormMessagePlaceholder: "Napište mi zprávu...",
    contactFormSendBtn: "Odeslat",
    contactToastSuccess: "Úspěšně odesláno",
    contactToastSuccessDesc: "Děkuji za vaši zprávu, odpovím vám co nejdříve",
    contactToastError: "Chyba při odesílání",
    contactToastErrorDesc: "Došlo k chybě při odesílání formuláře. Zkuste to prosím znovu.",
    cookiesFormText: "Používáme pouze nezbytné cookies a volitelné cookies pro správnou funkci stránky",
    cookiesBtn1: "Zásady používání cookies",
    cookiesBtn2: "Přijmout vše",
    cookiesBtn3: "Pouze nezbytné",
    cookiesBtn4: "Otevřít", 
    footerAllRightsReserved: "Všechna práva vyhrazena",
    cmsOption: [
      {
        title: "Jednoduchý web",
        description: "Vytvořím vám jednoduchý web pomocí grafických návrhů a předloh, které mi dodáte, tvořím na platformě Wordpress nebo Joomla",
        features: ["WordPress", "Joomla", "Responzivní design", "Funkční SEO"],
        pricing: "cena: zaleží na domluvě",
      },
      {
        title: "Pokročilejší web",
        description: "O něco pokročilejší web, kdy vám i navrhu vzhled a celý obsah. Nejčastěji na platformu Wordpress, ale po domluvě může být na čemkoliv",
        features: ["Můj Design", "WordPress", "SEO => 90", "Možnost integrace e-shopu"],
        pricing: "cena: zaleží na domluvě",
      },
      {
        title: "Rozsáhlý web",
        description: "Multi-page rozsáhlejší web, vytvořím vám rozložení, grafické prvky a napíšu texty. Při velkém projektu jsem ochotný na zakázku vytvořit vlastní CMS na míru",
        features: ["Multi-page", "Rozšířené funkce", "Co nejrychlejší", "Dlouhodobá spolupráce"],
        pricing: "cena: zaleží na domluvě",
      },
    ],
    frameworkOptions: [
      {
        title: "Tvorba webu pomocí statické kódu",
        description: "Vytvořím vám jednoduchý web pomocí HTML a Kaskádových stylů. Vhodná možnost pro nenáročné zájemce",
        features: ["HTML", "CSS", "Bootstrap"],
        pricing: "cena: zaleží na domluvě",
      },
      {
        title: "Tvorba webu pomocí dynamického kódu",
        description: "Vytvořím pokročilou stránku pomocí dynamického programování. Například pomocí Next.js a spoustu moderních knihoven",
        features: ["Next.js", "React", "Možnost použití API", "Dynamický obsah", "TailwindCSS", "Shadcn-ui"],
        pricing: "cena: zaleží na domluvě",
      },
    ],
    graphicsOptions: [
      {
        title: "Grafické návrhy pro webové stránky",
        description: "Vytvořím vám grafiku pro webové stránky, blogy, portfólia apod. Pro tvorbu používám Adobe Photoshop, Figmu a Framer",
        features: ["Adobe Photoshop", "Figma", "Framer", "Custom Designs"],
        pricing: "Starting at $200 per design",
      },
    ],
    webTitle: "Tvorba webu",
    webDescription: "Vyberte si z dané nabídky níže co přesně potřebujete a kontaktujte mě.",
    cmsTitle: "Tvorba webu pomocí CMS (Wordpress, Joomla, Drupal)",
    handMadeTitle: "Ručně kódované",
    graphicsTitle: "Grafické návrhy",
    comingSoonText: "Vemi brzy",
    additionalText: "Momentálně nejsou uvedeny více podrobné informace ani ceny za jednotlivé služby. Pokud máte zájem neváhejte mě kontaktovat e-mailem",
    backToHomepage: "Zpět na domovskou stránku"
}

export const Data_en = {
  hello: "Hello",
  myNameIs: "My name is",
  name: "Ondřej Losenský",
  themeToggleText: "Toggle light mode",
  heroDescription: "Welcome to my portfolio! I'm a full-stack software developer from Prague📍 and a high school graduate. I specialize in creating modern, responsive websites and highly efficient solutions using the latest technologies. I also have a strong interest in AI and other tech fields.",
  continueBtn: "Continue",
  AboutMeTitle: "About Me",
  AboutMeDesc: "Who am I?",
  showCV: "show CV",
  scrollToTop: "Up",
  tags: [
      "Programmer",
      "Web Designer",
      "Administrator",
  ],
  AboutDesc: "My name is Ondřej Losenský, I'm 19 years old, and I'm from Prague. I recently graduated from a technical high school with a focus on IT. I’m passionate about web application development, system administration, and other tech-related interests. On my portfolio, you'll find my contact information, projects, and a downloadable resume in multiple languages. We can also discuss creating a custom website or project together.",
  TechnologiesTitle: "Technologies",
  workTitle: "Work Experience",
  work: [
    { 
        name: 'Havel&Partners', 
        description: 'IT Support', 
        date: 'July 2023 - August 2023', 
        icon: '/logos/hp.svg', 
        color: 'bg-white',
        fullDescription: 'Installed new phones, checked meeting rooms, reinstalled PCs, worked with Excel, and managed printers (replacing toners and waste containers).'
    },
    { 
        name: 'Česká spořitelna - Internship II', 
        description: 'Intern', 
        date: 'Second half of May 2023', 
        icon: '/logos/csas.svg',
        color: "bg-[#2970ed]",
        fullDescription: 'Created a Python script for tracking public contracts. Worked with Excel and CSV files.'
    },
    { 
        name: 'Královská levandule', 
        description: 'Web Developer, Administrator', 
        date: '2022 - 2024', 
        icon: '/logos/kl.svg', 
        color: 'bg-white',
        fullDescription: 'Developed the website for Královská levandule along with its e-commerce platform.'
    },
    { 
        name: 'Česká spořitelna - Internship I', 
        description: 'Intern', 
        date: 'Second half of May 2022', 
        icon: '/logos/csas.svg', 
        color: "bg-[#2970ed]",
        fullDescription: 'Worked with SSRS, created icons for reports using Adobe Illustrator, and handled tasks in Excel.'
    },
],
  OverviewTitle: "Overview",
  OverviewDescription: "Get a quick summary of all features and highlights",
  webCreation: "Custom Web Development",
  webCreationDesc: "Let’s discuss your needs and make your website a reality.",
  webBtn: "Interested in a Website",
  newestProject: "Latest Project",
  projectImagePath: "/mockups/kralovska-levandule.png",
  projectTitle: "Královská levandule",
  projectDescription: "Website for a family-owned lavender farm in Nový Knín",
  anotherGridTile: "I enjoy creating modern and responsive designs.",
  contactTile: "Ready to start a project together?",
  emailCopy: "Copy email",
  emailCopied: "Copied",
  currentlyWorkingOn: "Currently developing my own CMS for website creation",
  projectsTitle: "Projects",
  projectsDescription: "Here’s an overview of some of my projects, most of which can be found on my GitHub.",
  MoreProjectsBtn: "More Projects...",
  projectsData: [
    {
      title: "DataDepot",
      description:
        "A simple application for managing passwords, notes, and code snippets, featuring a clean stats page and fully functional registration.",
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
        "A web application for managing a simple e-commerce store with an admin panel.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Prisma"],
      imageUrl: codecommerce,
      githubLink: 'https://github.com/OndrejLosensky/code-commerce',
      websiteLink: undefined,
      gradient: 'from-green-400 via-blue-500 to-purple-600', 
      otherLink: undefined,
    }, 
  ],
  contactTitle: "Contact",
  contactDescription: "Get in touch with me in just a few clicks",
  contactSmallText1:"Have something to share, an offer, or a question? Just fill out this form.",
  contactSmallText2:"I typically respond within 2 business days.",
  contactFormName: "Name",
  contactFormNamePlaceholder:"Your name",
  contactFormEmailPlaceholder: "Your email",
  contactFormMessage: "Message",
  contactFormMessagePlaceholder: "Write me a message...",
  contactFormSendBtn: "Send",
  contactToastSuccess: "Successfully sent",
  contactToastSuccessDesc: "Thank you for your message, I’ll get back to you soon.",
  contactToastError: "Sending failed",
  contactToastErrorDesc: "An error occurred while sending the form. Please try again.",
  cookiesFormText: "We use only essential cookies and optional cookies for the proper functioning of the website.",
  cookiesBtn1: "Cookie Policy",
  cookiesBtn2: "Accept All",
  cookiesBtn3: "Essential Only",
  cookiesBtn4: "Open", 
  footerAllRightsReserved: "All rights reserved",
  cmsOption: [
    {
      title: "Simple Website",
      description: "I will create a simple website based on the graphic designs and templates you provide. I work primarily with WordPress or Joomla.",
      features: ["WordPress", "Joomla", "Responsive Design", "Functional SEO"],
      pricing: "Price: depends on agreement",
    },
    {
      title: "Advanced Website",
      description: "A more advanced website where I design both the layout and content. Typically built on WordPress, but other platforms can be discussed.",
      features: ["Custom Design", "WordPress", "SEO Score => 90", "E-commerce Integration Possible"],
      pricing: "Price: depends on agreement",
    },
    {
      title: "Comprehensive Website",
      description: "A multi-page, more extensive website. I will create the layout, graphic elements, and write the content. For large projects, I can custom-develop a CMS tailored to your needs.",
      features: ["Multi-page", "Extended Features", "Optimized for Speed", "Long-term Collaboration"],
      pricing: "Price: depends on agreement",
    },
  ],
  frameworkOptions: [
    {
      title: "Static Code Website Development",
      description: "I will create a simple website using HTML and Cascading Style Sheets. Suitable for clients with basic needs.",
      features: ["HTML", "CSS", "Bootstrap"],
      pricing: "Price: depends on agreement",
    },
    {
      title: "Dynamic Code Website Development",
      description: "I will develop an advanced website using dynamic programming, such as Next.js and many modern libraries.",
      features: ["Next.js", "React", "API Integration", "Dynamic Content", "TailwindCSS", "Shadcn-ui"],
      pricing: "Price: depends on agreement",
    },
  ],
  graphicsOptions: [
    {
      title: "Graphic Design for Websites",
      description: "I will create graphics for websites, blogs, portfolios, etc. I use Adobe Photoshop, Figma, and Framer for design.",
      features: ["Adobe Photoshop", "Figma", "Framer", "Custom Designs"],
      pricing: "Starting at $200 per design",
    },
  ],
  webTitle: "Website Development",
  webDescription: "Choose from the options below what exactly you need and contact me.",
  cmsTitle: "Website Development with CMS (WordPress, Joomla, Drupal)",
  handMadeTitle: "Hand-Coded",
  graphicsTitle: "Graphic Designs",
  comingSoonText: "Coming Soon",
  additionalText: "Currently, no detailed information or pricing for individual services is provided. If you are interested, feel free to contact me via email.",
  backToHomepage: "Back to Homepage"
}


export const Data_de = {
  hello: "Hallo",
  myNameIs: "Mein Name ist",
  name: "Ondřej Losenský",
  themeToggleText: "Zum Umschalten des Lichtmodus",
  heroDescription: "Willkommen in meinem Portfolio! Ich bin ein Full-Stack-Softwareentwickler aus Prag📍 und ein Absolvent der Sekundarschule. Ich spezialisiere mich auf die Erstellung moderner und responsiver Websites sowie hocheffizienter Lösungen mit den neuesten Technologien. Ich interessiere mich auch stark für AI und andere Technologiebereiche.",
  continueBtn: "Weiter",
  AboutMeTitle: "Über mich",
  AboutMeDesc: "Wer bin ich?",
  showCV: "Lebenslauf anzeigen",
  scrollToTop: "Hoch",
  tags: [
      "Programmierer",
      "Webdesigner",
      "Administrator",
  ],
  AboutDesc: "Mein Name ist Ondřej Losenský, ich bin 19 Jahre alt und komme aus Prag. Ich habe gerade meine technische Sekundarschule mit dem Schwerpunkt IT abgeschlossen. Ich beschäftige mich leidenschaftlich mit der Entwicklung von Webanwendungen, der Systemverwaltung und anderen technologiebezogenen Interessen. Auf meinem Portfolio finden Sie meine Kontaktdaten, Projekte und einen Lebenslauf zum Download in mehreren Sprachen. Wir können auch über die Erstellung einer maßgeschneiderten Website oder eines Projekts sprechen.",
  TechnologiesTitle: "Technologien",
  workTitle: "Berufserfahrung",
  work: [
    { 
        name: 'Havel&Partners', 
        description: 'IT-Support', 
        date: 'Juli 2023 - August 2023', 
        icon: '/logos/hp.svg', 
        color: 'bg-white',
        fullDescription: 'Installation neuer Telefone, Überprüfung von Besprechungsräumen, Neuinstallation von PCs, Arbeiten mit Excel und Verwaltung von Druckern (Austausch von Tonern und Abfallbehältern).'
    },
    { 
        name: 'Česká spořitelna - Praktikum II', 
        description: 'Praktikant', 
        date: 'Zweite Hälfte Mai 2023', 
        icon: '/logos/csas.svg',
        color: "bg-[#2970ed]",
        fullDescription: 'Erstellung eines Python-Skripts zur Nachverfolgung öffentlicher Verträge. Arbeiten mit Excel und CSV-Dateien.'
    },
    { 
        name: 'Královská levandule', 
        description: 'Webentwickler, Administrator', 
        date: '2022 - 2024', 
        icon: '/logos/kl.svg', 
        color: 'bg-white',
        fullDescription: 'Entwicklung der Website für Královská levandule zusammen mit der E-Commerce-Plattform.'
    },
    { 
        name: 'Česká spořitelna - Praktikum I', 
        description: 'Praktikant', 
        date: 'Zweite Hälfte Mai 2022', 
        icon: '/logos/csas.svg', 
        color: "bg-[#2970ed]",
        fullDescription: 'Arbeit mit SSRS, Erstellung von Icons für Berichte mit Adobe Illustrator und Aufgaben in Excel bearbeitet.'
    },
],
  OverviewTitle: "Überblick",
  OverviewDescription: "Erhalten Sie einen schnellen Überblick über alle Funktionen und Highlights",
  webCreation: "Maßgeschneiderte Webentwicklung",
  webCreationDesc: "Lassen Sie uns über Ihre Bedürfnisse sprechen und Ihre Website Wirklichkeit werden lassen.",
  webBtn: "Interessiert an einer Website",
  newestProject: "Neueste Projekt",
  projectImagePath: "/mockups/kralovska-levandule.png",
  projectTitle: "Královská levandule",
  projectDescription: "Website für eine familiengeführte Lavendelfarm in Nový Knín",
  anotherGridTile: "Ich genieße es, moderne und responsive Designs zu erstellen.",
  contactTile: "Bereit für ein gemeinsames Projekt?",
  emailCopy: "E-Mail kopieren",
  emailCopied: "Kopiert",
  currentlyWorkingOn: "Derzeit entwickle ich mein eigenes CMS für die Erstellung von Websites",
  projectsTitle: "Projekte",
  projectsDescription: "Hier finden Sie einen Überblick über einige meiner Projekte, die größtenteils auch auf meinem GitHub zu finden sind.",
  MoreProjectsBtn: "Weitere Projekte...",
  projectsData: [
    {
      title: "DataDepot",
      description:
        "Eine einfache Anwendung zur Verwaltung von Passwörtern, Notizen und Code-Snippets mit einer übersichtlichen Statistikseite und vollständig funktionsfähiger Registrierung.",
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
        "Eine Webanwendung zur Verwaltung eines einfachen E-Shops über ein Administrationspanel.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "ClerkAuth", "Prisma"],
      imageUrl: codecommerce,
      githubLink: 'https://github.com/OndrejLosensky/code-commerce',
      websiteLink: undefined,
      gradient: 'from-green-400 via-blue-500 to-purple-600', 
      otherLink: undefined,
    }, 
  ],
  contactTitle: "Kontakt",
  contactDescription: "Kontaktieren Sie mich in nur wenigen Klicks",
  contactSmallText1:"Möchten Sie mir etwas mitteilen, ein Angebot machen oder eine Frage stellen? Füllen Sie einfach dieses Formular aus.",
  contactSmallText2:"Ich antworte in der Regel innerhalb von 2 Werktagen.",
  contactFormName: "Name",
  contactFormNamePlaceholder:"Ihr Name",
  contactFormEmailPlaceholder: "Ihre E-Mail",
  contactFormMessage: "Nachricht",
  contactFormMessagePlaceholder: "Schreiben Sie mir eine Nachricht...",
  contactFormSendBtn: "Senden",
  contactToastSuccess: "Erfolgreich gesendet",
  contactToastSuccessDesc: "Vielen Dank für Ihre Nachricht, ich werde mich bald bei Ihnen melden.",
  contactToastError: "Senden fehlgeschlagen",
  contactToastErrorDesc: "Beim Senden des Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
  cookiesFormText: "Wir verwenden nur notwendige Cookies und optionale Cookies für die ordnungsgemäße Funktion der Website.",
  cookiesBtn1: "Cookie-Richtlinie",
  cookiesBtn2: "Alle akzeptieren",
  cookiesBtn3: "Nur notwendige",
  cookiesBtn4: "Öffnen", 
  footerAllRightsReserved: "Alle Rechte vorbehalten",
  cmsOption: [
    {
      title: "Einfache Website",
      description: "Ich erstelle eine einfache Website basierend auf den grafischen Entwürfen und Vorlagen, die Sie mir zur Verfügung stellen. Ich arbeite hauptsächlich mit WordPress oder Joomla.",
      features: ["WordPress", "Joomla", "Responsives Design", "Funktionales SEO"],
      pricing: "Preis: nach Vereinbarung",
    },
    {
      title: "Fortgeschrittene Website",
      description: "Eine fortgeschrittenere Website, bei der ich sowohl das Layout als auch den gesamten Inhalt gestalte. Meistens auf WordPress, aber nach Absprache auch auf anderen Plattformen.",
      features: ["Eigenes Design", "WordPress", "SEO-Wert => 90", "Möglichkeit zur E-Commerce-Integration"],
      pricing: "Preis: nach Vereinbarung",
    },
    {
      title: "Umfassende Website",
      description: "Eine mehrseitige, umfangreichere Website. Ich erstelle das Layout, die grafischen Elemente und schreibe die Texte. Bei großen Projekten kann ich ein maßgeschneidertes CMS nach Ihren Wünschen entwickeln.",
      features: ["Mehrseitig", "Erweiterte Funktionen", "Maximale Geschwindigkeit", "Langfristige Zusammenarbeit"],
      pricing: "Preis: nach Vereinbarung",
    },
  ],
  frameworkOptions: [
    {
      title: "Webentwicklung mit statischem Code",
      description: "Ich erstelle eine einfache Website mit HTML und CSS. Geeignet für Kunden mit grundlegenden Anforderungen.",
      features: ["HTML", "CSS", "Bootstrap"],
      pricing: "Preis: nach Vereinbarung",
    },
    {
      title: "Webentwicklung mit dynamischem Code",
      description: "Ich entwickle eine fortschrittliche Website mit dynamischer Programmierung, z. B. mit Next.js und vielen modernen Bibliotheken.",
      features: ["Next.js", "React", "API-Integration", "Dynamischer Inhalt", "TailwindCSS", "Shadcn-ui"],
      pricing: "Preis: nach Vereinbarung",
    },
  ],
  graphicsOptions: [
    {
      title: "Grafikdesign für Webseiten",
      description: "Ich erstelle Grafiken für Websites, Blogs, Portfolios usw. Für das Design verwende ich Adobe Photoshop, Figma und Framer.",
      features: ["Adobe Photoshop", "Figma", "Framer", "Maßgeschneiderte Designs"],
      pricing: "Ab $200 pro Design",
    },
  ],
  webTitle: "Webentwicklung",
  webDescription: "Wählen Sie aus den untenstehenden Optionen, was genau Sie benötigen, und kontaktieren Sie mich.",
  cmsTitle: "Webentwicklung mit CMS (WordPress, Joomla, Drupal)",
  handMadeTitle: "Manuell codiert",
  graphicsTitle: "Grafikdesigns",
  comingSoonText: "Demnächst",
  additionalText: "Derzeit sind keine detaillierten Informationen oder Preise für einzelne Dienstleistungen angegeben. Wenn Sie interessiert sind, zögern Sie nicht, mich per E-Mail zu kontaktieren.",
  backToHomepage: "Zurück zur Startseite"
}



export const links = {
   cz: [
    { name: 'Úvod', hash: '#uvod' },
    { name: 'O mně', hash: '#o-mne' },
    { name: 'Přehled', hash: '#prehled' },
    { name: 'Projekty', hash: '#projekty' },
    { name: 'Kontakt', hash: '#kontakt' },
  ],
  en: [
    { name: 'Home', hash: '#uvod' },
    { name: 'About Me', hash: '#o-mne' },
    { name: 'Overview', hash: '#prehled' },
    { name: 'Projects', hash: '#projekty' },
    { name: 'Contact', hash: '#kontakt' },
  ],    
  de: [
    { name: 'Startseite', hash: '#uvod' },
    { name: 'Über mich', hash: '#o-mne' },
    { name: 'Überblick', hash: '#prehled' },
    { name: 'Projekte', hash: '#projekty' },
    { name: 'Kontakt', hash: '#kontakt' },
],  
};

export type SectionName = (typeof links[keyof typeof links])[number]['name'];

interface Skill {
  name: string;
  level: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: 'React', level: '95%', icon: "/icons/react.svg" },
  { name: 'Next.js', level: '90%', icon: "/icons/next.js.svg" },
  { name: 'Python', level: '65%', icon: "/icons/py.svg" },
  { name: 'TypeScript', level: '40%', icon: "/icons/ts.svg" },
  { name: 'CSS', level: '95%', icon: "/icons/css.svg" },
  { name: 'JavaScript', level: '80%', icon: "/icons/js.svg" },
  { name: 'HTML', level: '100%', icon: "/icons/html.svg" },
  { name: 'Sqlite', level: '80%', icon: "/icons/sqlite.svg" },
  { name: 'TailwindCSS', level: '85%', icon: "/icons/tailwind.svg" },
  { name: 'Wordpress', level: '90%', icon: "/icons/wordpress.svg" },
  { name: 'C#', level: '90%', icon: "/icons/cs.svg" },
  { name: 'Figma', level: '90%', icon: "/icons/figma.svg" },
  { name: 'Github', level: '90%', icon: "/icons/github.svg" },
  { name: 'Prisma', level: '90%', icon: "/icons/prisma.svg" },
  { name: 'Wordpress', level: '90%', icon: "/icons/wordpress.svg" },

];

