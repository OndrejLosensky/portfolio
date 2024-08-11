
export const Data_cz = {
    hello: "Ahoj",
    myNameIs: "jmenuji se",
    name: "Ondřej Losenský",
    themeToggleText: "Pro přepnutí světlého režimu",
    heroDescription: "Vítejte na mém portfoliu! Jsem full-stack softwarový vývojář z Prahy📍 a absolvent střední školy. Specializuji se na tvorbu moderních a responzivních webů a vysoce efektivních řešení pomocí nejnovějších technologií. Také se zajímám o veškeré dění v oblastech AI a dalších odvětvích",
    continueBtn: "Pokračovat"
}

export const Data_en = {
    hello: "Hi",
    myNameIs: "my name is",
    name: "Ondřej Losenský",
    themeToggleText: "To change dark teme",
    heroDescription: "Welcome to my portfolio website! I am a full-stack software developer from Prague📍 and a high school graduate. I specialize in creating modern and responsive websites and highly efficient solutions using the latest technologies. I am also interested in everything related to AI and other industries.",
    continueBtn: "Continue"
}

export const Data_de = {
    hello: "Hallo",
    myNameIs: "mein Name ist",
    name: "Ondřej Losenský",
    themeToggleText: "To change dark mode",
    heroDescription: "Willkommen auf meiner Portfolio-Website! Ich bin ein Full-Stack-Softwareentwickler aus Prag📍 und ein Abiturient. Ich spezialisiere mich auf die Erstellung moderner und responsiver Websites und hocheffizienter Lösungen mit den neuesten Technologien. Ich interessiere mich auch für alles, was mit KI und anderen Branchen zu tun hat.",
    continueBtn: "Weiter"
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
    { name: 'Home', hash: '#uvod' },
    { name: 'About Me', hash: '#o-mne' },
    { name: 'Overview', hash: '#prehled' },
    { name: 'Projects', hash: '#projekty' },
    { name: 'Contact', hash: '#kontakt' },
  ],    
};

export type SectionName = (typeof links[keyof typeof links])[number]['name'];

  

