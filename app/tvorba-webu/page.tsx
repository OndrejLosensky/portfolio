import Header from "@/components/nav/Header";
import Footer from "@/components/nav/footer";
import { FaArrowRight } from "react-icons/fa";

interface Option {
  title: string;
  description: string;
}

const cmsOptions: Option[] = [
  {
    title: "Jednoduchý web, z vašeho grafického návrhu",
    description: "Vytvořím vám jednoduchý web pomocí grafických návrhů a předloh, které mi dodáte, tvořím na platformě Wordpress nebo Joomla",
  },
  {
    title: "Pokročilejší web s mými grafickými návrhy",
    description: "O něco pokročilejší web, kdy vám i navrhu vzhled a celý obsah. Nejčastěji na platformu Wordpress, ale po domluvě může být na čemkoliv",
  },
  {
    title: "Rozsáhlý web",
    description: "Multi-page rozsáhlejší web, vytvořím vám rozložení, grafické prvky a napíšu texty. Při velkém projektu jsem ochotný na zakázku vytvořit vlastní CMS na míru",
  },
];

const frameworkOptions: Option[] = [
  {
    title: "Tvorba webu pomocí statické kódu",
    description: "Vytvořím vám jednoduchý web pomocí HTML a Kaskádových stylů. Vhodná možnost pro nenáročné zájemce",
  },
  {
    title: "Tvorba webu pomocí dynamického kódu",
    description: "Vytvořím pokročilou stránku pomocí dynamického programování. Například pomocí Next.js a spoustu moderních knihoven",
  },
];


const graphicsOptions: Option[] = [
  {
    title: "Grafické návrhy pro webové stránky",
    description: "Vytvořím vám grafiku pro webové stránky, blogy, portfólia apod. Pro tvorbu používám Adobe Photoshop, Figmu a Framer",
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
              <div key={index} className="group p-4 border-[0.5px] border-text-dark dark:border-text-light/25 rounded-lg flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                <div>
                  <h2 className="font-semibold text-2xl">{option.title}</h2>
                  <p className="w-3/4 font-light text-sm pt-2">{option.description}</p>
                </div>
                <FaArrowRight className="w-10 h-10 transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-semibold text-3xl text-text-dark/70 dark:text-text-light/70 pb-4">Ručně psané</h2>
          <div className="grid grid-cols-2 gap-6">
            {frameworkOptions.map((option, index) => (
              <div key={index} className="group p-4 border-[0.5px] border-text-dark dark:border-text-light/25 rounded-lg flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                <div>
                  <h2 className="font-semibold text-2xl">{option.title}</h2>
                  <p className="w-3/4 font-light text-sm pt-2">{option.description}</p>
                </div>
                <FaArrowRight className="w-8 h-8 transition-transform duration-300 group-hover:rotate-0 -rotate-45" />
              </div>
            ))}
          </div>
        </div>


        <div className="mt-24 mb-40">
          <h2 className="font-semibold text-3xl text-text-dark/70 dark:text-text-light/70 pb-4">Grafické návrhy</h2>
          <div className="grid grid-cols-2 gap-6">
            {graphicsOptions.map((option, index) => (
              <div key={index} className="group p-4 border-[0.5px] border-text-dark dark:border-text-light/25 rounded-lg flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                <div>
                  <h2 className="font-semibold text-2xl">{option.title}</h2>
                  <p className="w-3/4 font-light text-sm pt-2">{option.description}</p>
                </div>
                <FaArrowRight className="w-8 h-8 transition-transform duration-300 group-hover:rotate-0 -rotate-45" />
              </div>
            ))}
          </div>
        </div>

        <p className="pb-20 text-center font-light text-text-dark/80 dark:text-text-light/80"> Momentálně nejsou uvedeny více podrobné informace ani ceny za jednotlivé služby. Pokud máte zájem neváhejte mě kontaktovat e-mailem </p>

      </div>
      <Footer />
    </section>
  );
}
