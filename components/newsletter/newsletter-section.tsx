import React from 'react';

const NewsletterForm: React.FC = () => {
  return (
    <section className="bg-gray-200/80 dark:bg-gray-800/80 rounded-xl border my-32 mb-48 mx-0 lg:mx-24 shadow-lg border-text-dark/30 dark:border-text-light/30 py-8">
      <div className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-2/3 mx-auto  flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">Přihlaste se k odběru mého newsletteru</h2>
          <p className="text-text-dark/60 text-sm md:text-md lg:text-lg dark:text-text-light/60 mb-6">
            Zůstaňte v obraze s nejnovějšími aktualizacemi, změny a dalšími věcmi.      
          </p>
          <form className="flex flex-col sm:flex-row sm:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Vaše e-mailová adresa"
              className="bg-gray-100 dark:bg-gray-600 border border-gray-400 dark:border-gray-700 rounded-md px-4 py-2 mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-primary text-text-dark dark:text-text-light"
            />
            <button
              type="submit"
              className="bg-primary dark:bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover duration-200 active:bg-primary-active dark:active:bg-primary-active text-text-light dark:text-text-light font-semibold rounded-md px-4 py-2 sm:py-2 sm:px-6 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Mám zájem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
