import Header from '@/components/nav/header-copy';
import Footer from '@/components/nav/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IoMdHome } from "react-icons/io";

export default function KLPage() {
  return (
    <div className='w-3/4 mx-auto flex flex-col justify-between min-h-screen'>
      <Header/>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <Image src="/mockups/KL.svg" width={300} height={300} alt='Showcase image' className='hover:scale-110 hover:-rotate-2 duration-200 w-full  h-full rounded-lg drop-shadow-glow2'/>
        <div className='flex flex-col justify-center ml-8'>
          <h2 className='text-3xl font-semibold text-primary pb-2'>Královská levandule</h2>
          <p className='text-lg text-text-dark/70 dark:text-text-light/70 block'> Projekt královské levandule vznikl v roce 2021 jako malá rodinná levandulová farma. O necelý rok později začala vznikat webová stránka </p>
          <p className='pt-4 block text-lg  text-text-dark/70 dark:text-text-light/70 '> Celý web je postavený na CMS platformě Wordpress a momentálně plánuji web přestavit na verzi ručně kódovanou. Dále je k webu dostupný i e-shop, který je vytvořet na platformě Shoptet.cz <br /> </p>
          <h3 className='pt-8'> Zde můžete najít odkazy:</h3>
          <div className='flex flex-row gap-x-4 mt-2'> 
              <Link href="https://www.kralovskalevandule.cz"><Button className='bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover active:bg-primary-active active:scale-90 duration-200'> Web </Button></Link>
              <Link href="https://obchod.kralovskalevandule.cz"><Button className='bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover active:bg-primary-active active:scale-90 duration-200'> E-shop </Button></Link>
              <Button variant="ghost" disabled> Zdrojový kód je soukromý </Button>
          </div>
        </div>
      </div>
      <Link href="/">
          <Button className='mx-auto mt-8 flex items-center gap-x-2'>
            <IoMdHome className='w-6 h-auto'/>
            <span>Zpět na domovskou stránku</span>
          </Button>
        </Link> 
      <Footer/>
    </div>
  );
}

/* 
<div>
        <h2 className='text-4xl text-primary font-bold text-left pb-2'><span className='font-light'>Projekt</span> Královská levandule</h2>
        <p> 
            Zjistěte více o mém prvním reálném projektu, ke kterému jsem se dostal v roce 2022
        </p>

        <div className='flex flex-row w-full h-[30rem] items-center justify-center'>
            <Image src="/mockups/KL.svg" width={300} height={300} alt='Showcase image' className='w-1/2 rounded-lg drop-shadow-glow2'/> 
            <div className='w-1/2 h-full flex flex-col justify-center ml-4'>
                <h2 className='text-4xl pb-2 font-semibold text-primary'> Přehled </h2>
                <p className='text-lg text-text-dark/70 dark:text-text-light/70 block'> Projekt královské levandule vznikl v roce 2021 jako malá rodinná levandulová farma. O necelý rok později začala vznikat webová stránka </p>
                <h2 className='text-3xl font-semibold text-primary pt-8'> Klíčové vlastnosti</h2>
                <ul className='list-disc ml-4 text-text-dark/60 dark:text-text-light/60'>
                  <li className='py-4'> Moderní a responzivní design</li>
                  <li> Jednoduchá správa a úpravy (vlastní malé CMS)</li>
                </ul>
                <h2 className='text-primary text-3xl font-semibold pt-6'> Technologie</h2>
                <p className='text-md text-text-dark/70 dark:text-text-light/70 block'> Wordpress, PHP, Next.js, TypeScript, TailwindCSS </p>
                <div className='flex flex-row gap-x-3 mt-8'>
                    <Link href="https://www.kralovskalevandule.cz/"><Button> Web </Button></Link>
                    <Button disabled variant="ghost"> Zdrojový kód je soukromý </Button>
                </div>
            </div>
        </div>
        <div className='mt-32'>
           <h2 className='text-4xl font-semibold text-primary text-center'> Galerie </h2>
           <div className='flex flex-row gap-x-4 mx-auto w-full'>
              <Image src="/mockups/KL.svg" height={350} width={400} alt='Galery photo'/>
              <Image src="/mockups/KL.svg" height={350} width={400} alt='Galery photo'/>
              <Image src="/mockups/KL.svg" height={350} width={400} alt='Galery photo'/>
           </div>
        </div>
        <Link href="/">
          <Button className='mx-auto mt-12 flex flex-row gap-x-4'> 
              <IoMdHome className='w-6 h-auto'/> 
              <span> Zpět na domovskou stránku </span> 
          </Button>
        </Link>    
      </div>
      */