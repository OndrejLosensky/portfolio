"use client";

import React from 'react';

import { Button } from '../ui/button';

const NewsletterForm: React.FC = () => {
  return (
    <section className='mb-32'>
      <div className="bg-gray-200/80 dark:bg-gray-800/80 rounded-xl border my-32 mb-8 -mx-0 lg:mx-24 shadow-lg border-text-dark/30 dark:border-text-light/30 py-8">
        <div className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-2/3 mx-auto flex flex-col items-center">
            <h2 className="text-xl md:text-3xl text-center font-bold leading-tight mb-4">Přihlaste se k odběru mého newsletteru</h2>
            <p className="text-text-dark/60 text-center text-sm md:text-md lg:text-lg dark:text-text-light/60 mb-6">
              Zůstaňte v obraze s nejnovějšími aktualizacemi, změny a dalšími věcmi.      
            </p>
            <form className="flex flex-col lg:flex-row w-full lg:items-center lg:gap-x-2">
              <input
                type="email"
                placeholder="Váš e-mail"
                className="bg-gray-100 dark:bg-gray-600 border border-gray-400 dark:border-gray-700 rounded-md px-4 py-2 w-full mb-2 lg:mb-0 focus:outline-none focus:ring-2 focus:ring-primary text-text-dark dark:text-text-light"
              />
              <Button
                disabled
                onClick={async function handleOnClick() {
                  const results = await fetch('/api/newsletter', {
                    method: 'POST',
                    body: JSON.stringify({
                      validationCode: `tt226-5398x`
                    })
                  });
                  console.log('results', results)
                }}
                type="submit"
                className="w-full lg:w-1/3 bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover duration-200 active:bg-primary-active dark:active:bg-primary-active text-text-light dark:text-text-light font-semibold rounded-md px-4 py-2 sm:py-2 sm:px-6 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Mám zájem
              </Button>
            </form>
          </div>
        </div>
      </div>
      <p className='text-center text-sm font-light text-text-dark dark:text-text-light/80'> Newsletter je momentálně ve vývoji, brzy bude dostupný, zádáním vaše e-mailu souhlasíte s užitím vašich osobních dat </p>
    </section>
  );
};

export default NewsletterForm;

