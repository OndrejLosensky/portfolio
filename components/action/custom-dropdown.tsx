// CustomDropdown.tsx
import { useState, useRef, useEffect, FC } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useLanguage } from "@/context/language-context";

interface LanguageOption {
  value: string;
  label: string;
  icon: string;
  disabled?: boolean;
}

const languages: LanguageOption[] = [
  { value: "cz", label: "Čeština", icon: "/additional-icons/cz.svg" },
  { value: "en", label: "English", icon: "/additional-icons/en.svg" },
  /*
  { value: 'de', label: 'German', icon: '/additional-icons/de.svg' }
   */
];

const CustomDropdown: FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = languages.find((lang) => lang.value === language);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row items-center justify-center gap-x-4">
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center px-2 py-1 rounded-md border border-text-dark/60 dark:border-text-light/60 bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={selectedLanguage!.icon}
            width={24}
            height={24}
            alt={`${selectedLanguage!.label} flag icon`}
          />
          <span className="ml-2">{selectedLanguage!.label}</span>
          <FaChevronDown
            className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
              isOpen ? "-rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute mt-4 w-full mx-auto bg-gray-100 dark:bg-main border border-text-dark/30 rounded-md dark:rounded-md dark:border-text-light shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.value}
                disabled={lang.disabled}
                onClick={() => {
                  if (!lang.disabled) {
                    setLanguage(lang.value);
                    setIsOpen(false);
                  }
                }}
                className={`flex items-center dark:bg-main/50 px-2 py-1 w-full rounded-sm text-left ${
                  lang.disabled
                    ? "bg-gray-700 cursor-not-allowed"
                    : "hover:bg-bermuda-400 dark:hover:bg-bermuda-400"
                }`}
              >
                <Image
                  src={lang.icon}
                  width={24}
                  height={24}
                  alt={`${lang.label} flag icon`}
                />
                <span className="ml-2">{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
