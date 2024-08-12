"use client"

import React, { createContext, useContext, useEffect, useState, FC } from 'react';
import { useLanguage } from './language-context'; // Adjust the path as necessary
import { db, doc, getDoc } from '../firebaseConfig'; // Adjust the path as necessary

interface TextsContextType {
  texts: Record<string, string>;
}

const TextsContext = createContext<TextsContextType | undefined>(undefined);

export const TextsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [texts, setTexts] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchTexts = async () => {
      const docRef = doc(db, 'texts', language);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setTexts(snapshot.data() as Record<string, string>);
      }
    };

    fetchTexts();
  }, [language]);

  return (
    <TextsContext.Provider value={{ texts }}>
      {children}
    </TextsContext.Provider>
  );
};

export const useTexts = () => {
  const context = useContext(TextsContext);
  if (!context) {
    throw new Error('useTexts must be used within a TextsProvider');
  }
  return context;
};
