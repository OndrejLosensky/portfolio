"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { IoMdHome } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/footer-2';

interface OfferProps {
  title: string;
  duration: string;
  description: string;
}

export default function WebOfferPage() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const offers: OfferProps[] = [
    {
      title: "Rychlý web z vašich grafických návrhů",
      duration: "1 - 2 týdny",
      description: "Vytvořím web podle vašich existujících grafických návrhů s důrazem na rychlost implementace."
    },
    {
      title: "Web pomocí Wordpressu",
      duration: "3 týdny",
      description: "Poskytuji implementaci webu s využitím Wordpressu, buď s vaší vlastní grafikou nebo s vytvořením grafiky."
    },
    {
      title: "Custom web pomocí frameworku",
      duration: "Individuálně",
      description: "Vytvořím váš web na míru s použitím moderních frameworků, aby odpovídal vašim specifickým potřebám."
    }
  ];

  return (
    <div className='max-w-screen my-28 overflow-hidden w-full mx-auto flex flex-col'>
      <Header/>

     <div className='mt-24'>
      <h2 className='text-4xl text-primary font-bold text-center pb-2'>Tvorba webu na míru</h2>
        <p className='text-center pb-8'>
          Potřebujete profesionální web? Nabízím tvorbu moderních a efektivních webových stránek přesně podle vašich požadavků.
        </p>

        <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <OfferSection
              key={index}
              title={offer.title}
              duration={offer.duration}
              description={offer.description}
              expanded={expanded}
              onToggle={toggleExpand}
            />
          ))}
        </div>

        <Link href="/">
          <Button className='mx-auto mt-8 flex flex-row gap-x-4'> 
            <IoMdHome className='w-6 h-auto'/> 
            <span> Zpět na domovskou stránku </span> 
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface OfferSectionProps extends OfferProps {
  expanded: boolean;
  onToggle: () => void;
}

function OfferSection({ title, duration, description, expanded, onToggle }: OfferSectionProps) {
  return (
    <div className=" rounded-lg shadow-md p-6 ">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg">Doba realizace: {duration}</p>
      {expanded ? (
        <div>
          <p className="mt-4">{description}</p>
          <Button onClick={onToggle} className="mt-4 inline-flex items-center text-primary font-medium">
            Zavřít <span className="ml-2"><FaChevronDown className='rotate-180'/></span>
          </Button>
        </div>
      ) : (
        <Button onClick={onToggle} className="mt-4 inline-flex items-center text-primary font-medium">
          Více <span className="ml-2"> <FaChevronDown/> </span>
        </Button>
      )}
    </div>
  );
}
