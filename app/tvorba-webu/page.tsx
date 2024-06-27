import Header from "@/components/nav/Header";
import Footer from "@/components/nav/footer";
import { DynamicDialog } from "@/components/action/dynamic-dialog";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdHome } from "react-icons/io";

interface Option {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  image: string; 
}


const cmsOptions: Option[] = [
  {
    title: "Jednoduchý web, z vašeho grafického návrhu",
    description: "Vytvořím vám jednoduchý web pomocí grafických návrhů a předloh, které mi dodáte, tvořím na platformě Wordpress nebo Joomla",
    features: ["WordPress", "Joomla", "Responsive Design", "SEO Friendly"],
    pricing: "Starting at $500",
    image: "/rmtdev.png",
  },
  {
    title: "Pokročilejší web s mými grafickými návrhy",
    description: "O něco pokročilejší web, kdy vám i navrhu vzhled a celý obsah. Nejčastěji na platformu Wordpress, ale po domluvě může být na čemkoliv",
    features: ["Custom Design", "WordPress", "SEO Optimized", "E-commerce Integration"],
    pricing: "Starting at $1000",
    image: "/rmtdev.png",
  },
  {
    title: "Rozsáhlý web",
    description: "Multi-page rozsáhlejší web, vytvořím vám rozložení, grafické prvky a napíšu texty. Při velkém projektu jsem ochotný na zakázku vytvořit vlastní CMS na míru",
    features: ["Multi-page", "Custom CMS", "Advanced SEO", "Ongoing Support"],
    pricing: "Starting at $3000",
    image: "/rmtdev.png",
  },
];

const frameworkOptions: Option[] = [
  {
    title: "Tvorba webu pomocí statické kódu",
    description: "Vytvořím vám jednoduchý web pomocí HTML a Kaskádových stylů. Vhodná možnost pro nenáročné zájemce",
    features: ["HTML", "CSS", "Responsive Design"],
    pricing: "Starting at $300",
    image: "/rmtdev.png",
  },
  {
    title: "Tvorba webu pomocí dynamického kódu",
    description: "Vytvořím pokročilou stránku pomocí dynamického programování. Například pomocí Next.js a spoustu moderních knihoven",
    features: ["Next.js", "React", "API Integration", "Dynamic Content"],
    pricing: "Starting at $1500",
    image: "/rmtdev.png",
  },
];

const graphicsOptions: Option[] = [
  {
    title: "Grafické návrhy pro webové stránky",
    description: "Vytvořím vám grafiku pro webové stránky, blogy, portfólia apod. Pro tvorbu používám Adobe Photoshop, Figmu a Framer",
    features: ["Adobe Photoshop", "Figma", "Framer", "Custom Designs"],
    pricing: "Starting at $200 per design",
    image: "/rmtdev.png",
  },
];

export default function WebDevelopmentPage() {
  return (
    <section className="w-3/4 space-y-12 mx-auto flex flex-col">
      <Header />

      <div className="text-left">
        <h2 className="text-5xl mt-32 text-center text-primary font-bold">Tvorba webu na míru</h2>
        <p className="text-xl text-center font-light text-text-dark dark:text-text-light pt-4">
          Vyberte si z dané nabídky níže co přesně potřebujete a kontaktujte mě.
        </p>

        <div className="mt-24">
          <h2 className="font-semibold text-3xl text-text-dark/70 dark:text-text-light/70 pb-4">Tvorba webu pomocí CMS</h2>
          <div className="grid grid-cols-2 gap-6">
            {cmsOptions.map((option, index) => (
              <DynamicDialog key={index} option={option} />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-semibold text-3xl text-text-dark/70 dark:text-text-light/70 pb-4">Ručně psané</h2>
          <div className="grid grid-cols-2 gap-6">
            {frameworkOptions.map((option, index) => (
              <DynamicDialog key={index} option={option} />
            ))}
          </div>
        </div>

        <div className="mt-24 mb-40">
          <h2 className="font-semibold text-3xl text-text-dark/70 dark:text-text-light/70 pb-4">Grafické návrhy</h2>
          <div className="grid grid-cols-2 gap-6">
            {graphicsOptions.map((option, index) => (
              <DynamicDialog key={index} option={option} />
            ))}
          </div>
        </div>

        <p className="pb-20 text-center font-light text-text-dark/80 dark:text-text-light/80">
          Momentálně nejsou uvedeny více podrobné informace ani ceny za jednotlivé služby. Pokud máte zájem neváhejte mě kontaktovat e-mailem
        </p>
      </div>
      <Link href="/" className='mx-auto'>
          <Button className='mx-auto mt-8 flex items-center gap-x-2'>
            <IoMdHome className='w-6 h-auto'/>
            <span>Zpět na domovskou stránku</span>
          </Button>
        </Link> 
      <Footer />
    </section>
  );
}
