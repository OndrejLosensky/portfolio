import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLanguage } from '@/context/language-context';
import { db, doc, getDoc, setDoc } from '../../../firebaseConfig';

type Link = {
  name: string;
  hash: string;
};

type NavigationLinks = {
  [key: string]: Link[];
};

const NavigationTab: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [links, setLinks] = useState<Link[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [newName, setNewName] = useState<string>('');
  const [newHash, setNewHash] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'navigation', language);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot.data();
        setLinks(data?.links || []);
      } else {
        setLinks([]);
      }
    };

    fetchData();
  }, [language]);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const handleSave = async () => {
    const docRef = doc(db, 'navigation', language);
    await setDoc(docRef, { links });
  };

  const handleEditChange = (index: number, field: 'name' | 'hash', value: string) => {
    const updatedLinks = [...links];
    if (selectedIndex !== null) {
      updatedLinks[selectedIndex][field] = value;
      setLinks(updatedLinks);
    }
  };

  const handleAddLink = () => {
    if (newName && newHash) {
      setLinks([...links, { name: newName, hash: newHash }]);
      setNewName('');
      setNewHash('');
    }
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
    if (selectedIndex === index) setSelectedIndex(null);
  };

  const handleSelectLink = (index: number) => {
    setSelectedIndex(index);
    const link = links[index];
    setNewName(link.name);
    setNewHash(link.hash);
  };

  return (
    <div>
      <div className="flex justify-between mb-6">
        {/* Language Selector */}
        <div className="w-1/3">
          <label htmlFor="language-select" className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            Vyber Jazyk Stránky
          </label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="block w-full p-3 border dark:bg-gray-600 bg-gray-300 border-gray-300 rounded-md shadow-sm"
          >
            <option value="cz">Čeština</option>
            <option value="en">Angličtina</option>
            <option value="de">Němčina</option>
          </select>
        </div>
      </div>

      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8">Editace Navigačních Odkazů</h2>

      {links.length > 0 ? (
        <div className="space-y-4">
          {links.map((link, index) => (
            <div key={index} className="flex items-center space-x-4">
              <button
                onClick={() => handleSelectLink(index)}
                className="flex-1 p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
              >
                {link.name} - {link.hash}
              </button>
              <button
                onClick={() => handleRemoveLink(index)}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none"
              >
                Odstranit
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">Žádné odkazy k zobrazení</p>
      )}

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Přidat nebo Upravit Odkaz</h3>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Název odkazu"
          className="w-full p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm mb-4"
        />
        <input
          type="text"
          value={newHash}
          onChange={(e) => setNewHash(e.target.value)}
          placeholder="Hash odkazu"
          className="w-full p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm mb-4"
        />
        <button
          onClick={handleAddLink}
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
        >
          Přidat Odkaz
        </button>
      </div>

      <button
        onClick={handleSave}
        className="mt-8 px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none"
      >
        Uložit Změny
      </button>
    </div>
  );
};

export default NavigationTab;
