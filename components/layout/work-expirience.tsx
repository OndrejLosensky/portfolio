import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { useTexts } from "@/context/texts-context";
import { Data_cz } from "@/lib/data";

const workExperience = [
  {
    name: 'Unicorn',
    description: 'Junior Front-end Developer',
    date: 'Září 2024 - aktuálně',
    icon: '/logos/unicorn1.jpg',
    color: 'bg-white',
    fullDescription:
      'Aktuálně pracuji jako Frontend Developer ve společnosti Unicorn. V rámci své role se zaměřuji na vývoj a údržbu moderních webových aplikací za použití technologií jako Angular a TypeScript. Denně spolupracuji s týmem na vývoji nových funkcionalit, optimalizaci výkonu a testování softwaru. Podílím se také na tvorbě a údržbě automatizovaných testů.',
    current: true, 
  },
  {
    name: 'Havel&Partners',
    description: 'IT Support',
    date: 'Červenec 2023 - Srpen 2023',
    icon: '/logos/hp.svg',
    color: 'bg-white',
    fullDescription:
      'V roli IT Support ve společnosti Havel&Partners jsem zajišťoval technickou podporu v různých oblastech. Moje práce zahrnovala instalaci a konfiguraci nových telefonů, pravidelnou kontrolu a údržbu zasedacích místností pro bezproblémové fungování. Mezi další úkoly patřila reinstalace operačních systémů na pracovních stanicích, správa Excelových souborů, a údržba tiskáren, včetně výměny tonerů a waste kontejnerů, čímž jsem zajistil nepřetržitý chod kancelářských technologií.',
    current: false,
  },
  {
    name: 'Česká spořitelna - II. stáž',
    description: 'Stážista',
    date: 'Druhá polovina května 2023',
    icon: '/logos/csas.svg',
    color: 'bg-[#2970ed]',
    fullDescription:
      'Během druhé stáže v České spořitelně jsem pracoval na tvorbě Python skriptů pro dohledávání veřejně dostupných smluv v různých databázích. Součástí mé práce bylo také zpracování a analýza dat v Excelu a CSV souborech. Díky této stáži jsem získal hlubší pochopení pro automatizaci úkolů pomocí programování a práce s velkými objemy dat, což vedlo k rychlejšímu a efektivnějšímu vyhledávání smluvních dokumentů pro potřeby společnosti.',
    current: false,
  },
  {
    name: 'Královská levandule',
    description: 'Web developer, administrátor',
    date: '2022 - 2024',
    icon: '/logos/kl.svg',
    color: 'bg-white',
    fullDescription:
      'Pro společnost Královská levandule jsem vytvořil kompletní webovou stránku a e-shop, který poskytuje uživatelům přehledné rozhraní pro nákup produktů z levandule. Kromě samotné vývoje jsem měl na starosti správu webu, aktualizace obsahu a řešení technických problémů. Rovněž jsem navrhl uživatelsky přívětivý design a optimalizoval stránku pro SEO, což přispělo ke zvýšení viditelnosti webu na vyhledávačích a růstu tržeb z online prodeje.',
    current: false,
  },
  {
    name: 'Česká spořitelna - I. stáž',
    description: 'Stážista',
    date: 'Druhá polovina května 2022',
    icon: '/logos/csas.svg',
    color: 'bg-[#2970ed]',
    fullDescription:
      'Během své první stáže v České spořitelně jsem se zaměřil na práci s SSRS (SQL Server Reporting Services), kde jsem vytvářel a spravoval reporty pro interní potřeby společnosti. Součástí mojí práce bylo také vytváření grafických ikon pro reporty pomocí Adobe Illustrator, což zlepšilo jejich vizuální prezentaci. Dále jsem se věnoval práci v Excelu, kde jsem zpracovával a analyzoval data pro podporu různých interních projektů a reportů.',
    current: false,
  },
];

export function WorkExperience() {
  const { texts } = useTexts();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative w-full pt-16 sm:pt-32">
      <h2 className="text-2xl sm:text-3xl font-semibold">{texts["workTitle"]}</h2>

      {/* Current Work */}
      <div>
        <h2 className="text-2xl font-bold py-4">Kde momentálně pracuji?</h2>

        {workExperience
          .filter((work) => work.current) 
          .map((work, index) => (
            <WorkItem
              key={index}
              index={index}
              work={work}
              expandedIndex={expandedIndex}
              handleRowClick={handleRowClick}
            />
          ))}

        {/* Divider only below current work */}
        <div className="w-full border-t dark:border-white/20 border-black/20"></div>
      </div>

      {/* Past Work */}
      {workExperience
        .filter((work) => !work.current) 
        .map((work, index) => (
          <WorkItem
            key={index}
            index={index + 1} 
            work={work}
            expandedIndex={expandedIndex}
            handleRowClick={handleRowClick}
          />
        ))}
    </div>
  );
}

const WorkItem = ({
  work,
  index,
  expandedIndex,
  handleRowClick,
}: {
  work: any;
  index: number;
  expandedIndex: number | null;
  handleRowClick: (index: number) => void;
}) => {
  return (
    <div className="my-4 py-2 flex flex-col w-full group">
      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer gap-4"
        onClick={() => handleRowClick(index)}
      >
        <div className="flex items-center gap-x-4">
          <span className={`w-12 h-12 sm:w-16 sm:h-16 flex rounded-full relative ${work.color}`}>
            <Image
              src={work.icon}
              fill
              quality={100}
              className="rounded-full"
              alt={`Logo of ${work.name}`}
            />
          </span>
          <div className="flex flex-col">
            <h2 className="text-xl sm:text-md font-bold flex items-center">
              {work.name}
              <span
                className={`ml-2 transition-transform duration-300 ${
                  expandedIndex === index ? "rotate-90" : ""
                }`}
              >
                <MdKeyboardArrowRight />
              </span>
            </h2>
            <p className="text-sm sm:text-md font-light">{work.description}</p>
          </div>
        </div>
        <p className="text-sm hidden md:flex sm:text-md font-regular text-black/55 dark:text-white/60">
          {work.date}
        </p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expandedIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 p-4 bg-transparent dark:bg-transparent">
          <p className="text-sm sm:text-md font-regular">{work.fullDescription}</p>
        </div>
      </div>
    </div>
  );
};
