import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLanguage } from '@/context/language-context';
import { db, doc, getDoc, setDoc } from '../../../firebaseConfig';

type Texts = {
  [key: string]: string | string[];
};

const ContentTab: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [texts, setTexts] = useState<Texts>({});
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [newValue, setNewValue] = useState<string>('');
  const [showOnlyNull, setShowOnlyNull] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Uložit');

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'texts', language);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setTexts(snapshot.data() as Texts);
      } else {
        setTexts({});
      }
    };

    fetchData();
  }, [language]);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
  };

  const handleKeyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const key = event.target.value;
    setSelectedKey(key);
    setNewValue(typeof texts[key] === 'string' ? texts[key] : ''); // Ensuring the value is a string
  };

  const handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewValue(event.target.value);
  };

  const handleSave = async () => {
    setButtonText('SAVING...');
    const updatedTexts = { ...texts, [selectedKey]: newValue };
    setTexts(updatedTexts);
    await setDoc(doc(db, 'texts', language), updatedTexts);
    setTimeout(() => {
      setButtonText('Uložit');
    }, 500); // Display "SAVING..." for 500ms
  };

  const handleCheckboxChange = () => {
    setShowOnlyNull(!showOnlyNull);
  };

  const filteredKeys = showOnlyNull
    ? Object.keys(texts).filter((key) => typeof texts[key] === 'string' && !texts[key])
    : Object.keys(texts).filter((key) => typeof texts[key] === 'string');

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8">Editace obsahu</h2>

      <div className="flex justify-between w-full gap-x-4 mb-4">
        <div className="w-1/3">
          <label htmlFor="language-select" className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            Vyber Jazyk Stránky
          </label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="block w-full p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
          >
            <option value="cz">🇨🇿 Čeština</option>
            <option value="en">🇬🇧 Angličtina</option>
            <option value="de">🇩🇪 Němčina</option>
          </select>
        </div>

        <div className="w-2/3">
          <label htmlFor="key-select" className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            Vyber Klíč
          </label>
          <select
            id="key-select"
            value={selectedKey}
            onChange={handleKeyChange}
            className="block w-full p-3 border dark:bg-gray-600 bg-gray-300 border-gray-300 rounded-md shadow-sm"
          >
            <option value="">-- Vyber --</option>
            {filteredKeys.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="show-only-null" className="inline-flex items-center text-md text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            id="show-only-null"
            checked={showOnlyNull}
            onChange={handleCheckboxChange}
            className="form-checkbox h-4 w-4 text-blue-600 dark:bg-gray-600 bg-gray-300"
          />
          <span className="ml-2">Zobrazit pouze klíče s prázdnou hodnotou</span>
        </label>
      </div>

      <div className="mb-8">
        <label htmlFor="value-input" className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
          Hodnota
        </label>
        <textarea
          id="value-input"
          value={newValue}
          onChange={handleValueChange}
          rows={4}
          className="block w-full p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
        />
        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
        >
          {buttonText}
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Obsah</h3>
        <ul className="space-y-4">
          {Object.entries(texts).map(([key, value]) => (
            <li key={key} className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">{key}</span>
              <span className="text-gray-600 dark:text-gray-400">{typeof value === 'string' ? value : ''}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentTab;
