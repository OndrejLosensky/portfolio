import React, { useState, useEffect, ChangeEvent } from "react";
import { useLanguage } from "@/context/language-context";
import { db, doc, getDoc, setDoc } from "../../../firebaseConfig";

type Texts = {
  [key: string]: string | string[];
};

const sectionNames: Record<
  "hero" | "about" | "projects" | "preview" | "collaboration" | "contact",
  string
> = {
  hero: "hero",
  about: "about",
  projects: "projects",
  preview: "preview",
  collaboration: "collaboration",
  contact: "contact",
};

const ContentTab: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [texts, setTexts] = useState<Texts>({});
  const [selectedSection, setSelectedSection] = useState<
    "hero" | "about" | "projects" | "preview" | "collaboration" | "contact"
  >("hero");
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [newValue, setNewValue] = useState<string>("");
  const [showOnlyNull, setShowOnlyNull] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Uložit");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "data", language);
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

  const handleSectionChange = (
    section:
      | "hero"
      | "about"
      | "projects"
      | "preview"
      | "collaboration"
      | "contact"
  ) => {
    setSelectedSection(section);
    setSelectedKey(""); // Reset selected key when section changes
    setNewValue(""); // Reset the value input
  };

  const handleKeyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const key = event.target.value;
    setSelectedKey(key);
    setNewValue(typeof texts[key] === "string" ? texts[key] : "");
  };

  const handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewValue(event.target.value);
  };

  const handleSave = async () => {
    setButtonText("Ukládám...");
    const updatedTexts = { ...texts, [selectedKey]: newValue };
    setTexts(updatedTexts);
    await setDoc(doc(db, "data", language), updatedTexts);
    setTimeout(() => {
      setButtonText("Uložit");
    }, 400);
  };

  const handleCheckboxChange = () => {
    setShowOnlyNull(!showOnlyNull);
  };

  const filteredKeys = Object.keys(texts).filter(
    (key) =>
      key.startsWith(selectedSection) && (showOnlyNull ? !texts[key] : true)
  );

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Editace obsahu
      </h2>

      {/* Tabs for Section Selection */}
      <div className="flex justify-start mb-8 border-b border-white/20">
        {Object.keys(sectionNames).map((section) => (
          <button
            key={section}
            onClick={() =>
              handleSectionChange(
                section as
                  | "hero"
                  | "about"
                  | "projects"
                  | "preview"
                  | "collaboration"
                  | "contact"
              )
            }
            className={`${
              selectedSection === section
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-400 duration-200"
            } px-6 py-2 font-semibold focus:outline-none`}
          >
            {
              sectionNames[
                section as
                  | "hero"
                  | "about"
                  | "projects"
                  | "preview"
                  | "collaboration"
                  | "contact"
              ]
            }
          </button>
        ))}
      </div>

      <div className="flex flex-row items-center justify-between gap-x-4">
        <div className="flex justify-between w-1/3 gap-x-4">
          <div className="w-full">
            <label
              htmlFor="language-select"
              className="block text-sm md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Vyber Jazyk Stránky
            </label>
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              className="block w-full p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            >
              <option value="cz">🇨🇿 Čeština</option>
              <option value="en">🇬🇧 Angličtina</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-2/3">
          <div className="">
            <label
              htmlFor="key-select"
              className="block text-sm md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Vyber Klíč ({sectionNames[selectedSection]})
            </label>
            <select
              id="key-select"
              value={selectedKey}
              onChange={handleKeyChange}
              className="block w-full p-2 md:p-3 border dark:bg-gray-600 bg-gray-300 border-gray-300 rounded-md shadow-sm"
            >
              <option value="">-- Vyber --</option>
              {filteredKeys.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          {/* 
          <div className="">
            <label
              htmlFor="show-only-null"
              className="inline-flex items-center text-md text-gray-700 dark:text-gray-300"
            >
              <input
                type="checkbox"
                id="show-only-null"
                checked={showOnlyNull}
                onChange={handleCheckboxChange}
                className="form-checkbox h-4 w-4 text-blue-600 dark:bg-gray-600 bg-gray-300"
              />
              <span className="ml-2">
                Zobrazit pouze klíče s prázdnou hodnotou
              </span>
            </label>
          </div>
          */}
        </div>
      </div>

      {selectedKey && (
        <div className="my-6">
          <label
            htmlFor="value-input"
            className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
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
      )}
    </div>
  );
};

export default ContentTab;
