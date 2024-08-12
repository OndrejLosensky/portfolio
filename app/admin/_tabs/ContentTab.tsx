import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLanguage } from '@/context/language-context';
import { db, doc, getDoc, setDoc } from '../../../firebaseConfig';

type Texts = {
  [key: string]: string;
};

const ContentTab: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [texts, setTexts] = useState<Texts>({});
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [newValue, setNewValue] = useState<string>('');
  const [showOnlyNull, setShowOnlyNull] = useState<boolean>(false);

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
    setNewValue(texts[key] || '');
  };

  const handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewValue(event.target.value);
  };

  const handleSave = async () => {
    const updatedTexts = { ...texts, [selectedKey]: newValue };
    setTexts(updatedTexts);
    await setDoc(doc(db, 'texts', language), updatedTexts);
  };

  const handleCheckboxChange = () => {
    setShowOnlyNull(!showOnlyNull);
  };

  const filteredKeys = showOnlyNull
    ? Object.keys(texts).filter((key) => !texts[key])
    : Object.keys(texts);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8">Editace Textu</h2>

      <div className="mb-6">
        <label htmlFor="language-select" className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
          Vyber Jazyk Stránky
        </label>
        <select
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
          className="block w-full p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
        >
          <option value="cz">Čeština</option>
          <option value="en">Angličtina</option>
          <option value="de">Němčina</option>
        </select>
      </div>

      <div className="mb-6">
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

      <div className="mb-6">
        <label htmlFor="show-only-null" className="inline-flex items-center text-lg text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            id="show-only-null"
            checked={showOnlyNull}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600 dark:bg-gray-600 bg-gray-300"
          />
          <span className="ml-2">Zobrazit pouze klíče s prázdnou hodnotou</span>
        </label>
      </div>

      {selectedKey && (
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
            Uložit
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentTab;
