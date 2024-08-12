import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLanguage } from '@/context/language-context';
import { db, doc, getDoc, setDoc } from '../../../firebaseConfig';

type Texts = {
  [key: string]: string | string[]; // Allow strings and arrays
};

const CollectionTab: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [texts, setTexts] = useState<Texts>({});
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [newItem, setNewItem] = useState<string>('');

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
    setSelectedKey(event.target.value);
  };

  const handleItemChange = (index: number, value: string) => {
    if (Array.isArray(texts[selectedKey])) {
      const updatedArray = [...(texts[selectedKey] as string[])];
      updatedArray[index] = value;
      setTexts({ ...texts, [selectedKey]: updatedArray });
    }
  };

  const handleAddItem = () => {
    if (newItem && Array.isArray(texts[selectedKey])) {
      const updatedArray = [...(texts[selectedKey] as string[]), newItem];
      setTexts({ ...texts, [selectedKey]: updatedArray });
      setNewItem('');
    }
  };

  const handleRemoveItem = (index: number) => {
    if (Array.isArray(texts[selectedKey])) {
      const updatedArray = [...(texts[selectedKey] as string[])];
      updatedArray.splice(index, 1);
      setTexts({ ...texts, [selectedKey]: updatedArray });
    }
  };

  const handleSave = async () => {
    await setDoc(doc(db, 'texts', language), texts);
  };

  // Filter keys that are arrays
  const arrayKeys = Object.keys(texts).filter((key) => Array.isArray(texts[key]));

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8">Editace datových sad</h2>

      <div className="flex justify-between mb-6 gap-x-4">
        {/* Language Selector */}
        <div className="w-1/3">
          <label htmlFor="language-select" className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            Vyber jazyk Stránky
          </label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="block w-full p-3 border dark:bg-gray-600 bg-gray-300 border-gray-300 rounded-md shadow-sm"
          >
            <option value="cz">🇨🇿 Čeština</option>
            <option value="en">🇬🇧 Angličtina</option>
            <option value="de">🇩🇪 Němčina</option>
          </select>
        </div>

        {/* Collection Selector */}
        <div className="w-2/3">
          <label htmlFor="key-select" className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            Vyber Kolekci
          </label>
          <select
            id="key-select"
            value={selectedKey}
            onChange={handleKeyChange}
            className="block w-full p-3 border dark:bg-gray-600 bg-gray-300 border-gray-300 rounded-md shadow-sm"
          >
            <option value="">-- Vyber --</option>
            {arrayKeys.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      </div>


      {selectedKey && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
            Editace Kolekce: {selectedKey}
          </h3>

          {Array.isArray(texts[selectedKey]) && (
            <div className="space-y-4">
              {(texts[selectedKey] as string[]).map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleItemChange(index, e.target.value)}
                    className="flex-1 p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
                  />
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none"
                  >
                    Odstranit
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Nová položka"
              className="w-full p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
            <button
              onClick={handleAddItem}
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
            >
              Přidat Položku
            </button>
          </div>

          <button
            onClick={handleSave}
            className="mt-8 px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none"
          >
            Uložit Změny
          </button>
        </div>
      )}
    </div>
  );
};

export default CollectionTab;
