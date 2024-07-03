import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { IoMdHome } from "react-icons/io";
import Header from '@/components/nav/header-copy';
import Footer from '@/components/nav/footer';

const blogPosts = [
  { id: 2, title: 'Příprava na zveřejnění (0.3.6)', date: '27.6.2024', content: 'Postupně jsem připojil react-email pro vytvoření automatické newsletteru, dokončil jsem responzivní funkce, přepracoval layout nějakých stran a připravil obrázky ' },
  { id: 1, title: 'První neúplné vydání (0.2.4)', date: '20.6.2024', content: 'Vytvořil jsem největší část celého webu, včetně částí a jiných stránek, responzivního designu apod. Texty jsou skoro hotové, obrázky a odkazy také... ' },
];

export default function UpdatesPage() {
  return (
    <div className='max-w-screen w-3/4 min-h-screen flex flex-col justify-between mx-auto'>
      <Header/>

      <div className='mx-auto'>
        <h2 className='text-4xl text-primary font-bold text-center pb-2'>Verze mého portfólia</h2>
        <p className='w-3/4 text-center mx-auto'>
          Zde naleznete nejnovější změny týkající se webové stránky, cen i možností nabídky.
        </p>
        
        <div className='mt-12 w-2/3 mx-auto'>
          {blogPosts.map(post => (
            <div key={post.id} className='bg-gray-100 dark:bg-gray-900 border border-text-dark/60 dark:border-text-light/20 shadow-md rounded-md p-6 mb-6'>
              <h3 className='text-text-dark dark:text-text-light text-xl font-bold'>{post.title}</h3>
              <p className='text-text-dark/70 dark:text-text-light/70 text-sm mb-2'>{post.date}</p>
              <p className='text-text-dark/50 dark:text-text-light/50 '>{post.content}</p>
            </div>
          ))}
        </div>
        <Link href="/">
          <Button className='mx-auto mt-8 flex items-center gap-x-2'>
            <IoMdHome className='w-6 h-auto'/>
            <span>Zpět na domovskou stránku</span>
          </Button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}
