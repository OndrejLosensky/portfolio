import React from 'react';

export default function CookiesPage() {
  return (
    <div className='max-w-screen my-28 overflow-hidden w-3/4 mx-auto'>
      <h1 className='pt-24 text-4xl font-bold font-sora'>Cookies</h1>
      <p className='mt-8'>
        Tato stránka používá soubory cookies k vylepšení uživatelského zážitku. 
        Soubory cookies jsou malé textové soubory uložené ve vašem zařízení, které 
        nám pomáhají porozumět, jak stránku používáte. S používáním této stránky 
        vyjadřujete souhlas s naším používáním souborů cookies.
      </p>
      <h2 className='mt-8 text-2xl font-semibold'>Jaké druhy souborů cookies používáme?</h2>
      <p className='mt-4'>
        - <strong>Nezbytné cookies:</strong> Tyto cookies jsou nezbytné pro provoz 
        naší webové stránky a umožňují vám používat základní funkce jako navigace 
        na stránce a přístup k zabezpečeným částem.
        <br />
        - <strong>Analytické cookies:</strong> Tyto cookies nám pomáhají sledovat a 
        analyzovat chování uživatelů na naší stránce. Tyto informace nám pomáhají 
        vylepšovat naši stránku a nabízet lepší služby.
      </p>
      <h2 className='mt-8 text-2xl font-semibold'>Jak můžete spravovat soubory cookies?</h2>
      <p className='mt-4'>
        Můžete kdykoliv změnit své preference ohledně souborů cookies ve svém 
        internetovém prohlížeči. Většina prohlížečů vám umožní odmítnout přijetí 
        souborů cookies nebo upravit nastavení tak, aby byly soubory cookies 
        odstraněny po ukončení vaší relace na internetu.
      </p>
    </div>
  );
}
