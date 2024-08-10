import Image from "next/image";
import { useState } from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

interface Work {
    name: string,
    description: string,
    date: string,
    icon: string,
    color: string,
    fullDescription?: string
}

const works: Work[] = [
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
]

export function WorkExpirience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleRowClick = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    return (
        <div className="relative w-full pt-16 sm:pt-32">
            <h2 className="text-2xl sm:text-3xl font-semibold">Pracovní zkušenosti</h2>
            <div>
                {works.map((work, index) => (
                    <div 
                        key={index} 
                        className="my-4 py-2 flex border-b border-black/40 dark:border-white/30 md:border-black/0 md:dark:border-white/0 flex-col w-full group"
                    >
                        <div 
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer gap-4 sm:gap-0" 
                            onClick={() => handleRowClick(index)}
                        >
                            <div className="flex flex-row items-center gap-x-4">
                                <span className={`w-12 h-12 sm:w-16 sm:h-16 flex rounded-full relative ${work.color}`}>
                                    <Image src={work.icon} width={32} height={32} className="w-full scale-90" alt={work.name} />
                                </span>
                                <div className="flex flex-col">
                                    <h2 className="text-xl sm:text-2xl font-bold flex items-center">
                                        {work.name}
                                        <span 
                                            className={`ml-2 transition-transform duration-300 opacity-0 group-hover:opacity-100 ${expandedIndex === index ? 'opacity-100 rotate-90' : ''}`}
                                        >
                                            <MdKeyboardArrowRight />
                                        </span>
                                    </h2>
                                    <p className="text-sm sm:text-md font-light">{work.description}</p>
                                </div>                                            
                            </div>
                            <p className="text-sm sm:text-md font-regular text-black/55 dark:text-white/60"> {work.date} </p>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="mt-2 p-4 bg-transparent rounded-md dark:bg-transparent">
                                <p className="text-sm sm:text-md font-regular">{work.fullDescription}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
