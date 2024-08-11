"use client"

import React, { createContext, useContext, useState, FC, ReactNode } from 'react';
import { Data_cz, Data_en, Data_de } from '@/lib/data';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  data: typeof Data_cz | typeof Data_en | typeof Data_de;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('cz');

  const data = language === 'cz' ? Data_cz : language === 'en' ? Data_en : Data_de;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
