import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

import { IoMdHome } from "react-icons/io";

export default function UpdatesPage() {
  return (
    <div className='max-w-screen my-28 overflow-hidden w-1/2 mx-auto flex flex-col'>
      <h2 className='text-4xl text-primary font-bold text-center pb-2'>Verze mého portfólia</h2>
     <p className='text-center'> 
            Zde naleznete nejnovější změny týkající se webové stránky, cen i možností nabídky
      </p>

      <Link href="/">
        <Button className='mx-auto mt-12 flex flex-row gap-x-4'> 
            <IoMdHome className='w-6 h-auto'/> 
            <span> Zpět na domovskou stránku </span> 
        </Button>
      </Link>
    </div>
  );
}
