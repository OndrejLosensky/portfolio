import Header from '@/components/nav/Header';
import Footer from '@/components/nav/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

import { IoMdHome } from "react-icons/io";

export default function CookiesPage() {
  return (
    <div className='max-w-screen w-3/4 lg:w-2/3 mx-auto flex flex-col justify-between min-h-screen'>
      <Header/>
      <div className='my-32'>
        <h2 className='text-2xl lg:text-4xl text-primary font-bold text-center pb-6'>Souhlas s použitím souborů cookies</h2>
        <p>Vítáme vás na naší stránce. Používáme soubory cookies, abychom vám mohli poskytovat lepší služby a zlepšit vaši uživatelskou zkušenost. Pokud pokračujete v používání naší stránky, souhlasíte s naším používáním souborů cookies.</p>
        <br />
        <p>Tento web je provozován Ondřejem Losenským. Pokud máte jakékoliv otázky ohledně zpracování vašich osobních údajů, prosím, kontaktujte mě na <strong>losenskyondrej@gmail.com</strong></p>

        <Link href="/">
          <Button className='mx-auto mt-12 flex flex-row gap-x-4 group bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover duration-200 active:bg-primary-active dark:active:bg-primary-active'> 
              <IoMdHome className='w-6 h-auto'/> 
              <span> Zpět na domovskou stránku </span> 
          </Button>
        </Link>
      </div>

      <Footer/>

    </div>
  );
}
