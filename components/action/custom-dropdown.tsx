import { useState, useRef, useEffect, FC } from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import ThemeSwitch from '@/context/theme-switcher';

interface LanguageOption {
  value: string;
  label: string;
  icon: string;
  disabled?: boolean;
}

const languages: LanguageOption[] = [
  { value: 'cz', label: 'Čeština', icon: '/additional-icons/cz.svg' },
  { value: 'en', label: 'English', icon: '/additional-icons/en.svg', disabled: true},
  { value: 'de', label: 'German', icon: '/additional-icons/de.svg', disabled: true }
];

const CustomDropdown: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='hidden xl:flex flex-row items-center justify-center gap-x-4'>
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center px-2 py-1 rounded-md border bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={selectedLanguage.icon} width={24} height={24} alt={`${selectedLanguage.label} flag icon`} />
          <span className="ml-2">{selectedLanguage.label}</span>
          <FaChevronDown
            className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="absolute mt-1 w-full bg-transparent dark:bg-transparent border border-white shadow-lg z-10 rounded-md">
            {languages.map((lang) => (
              <button
                key={lang.value}
                disabled={lang.disabled}
                onClick={() => {
                  if (!lang.disabled) {
                    setSelectedLanguage(lang);
                    setIsOpen(false);
                  }
                }}
                className={`flex items-center px-2 py-1 w-full text-left ${lang.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-main/20 dark:hover:bg-main/40'}`}
              >
                <Image src={lang.icon} width={24} height={24} alt={`${lang.label} flag icon`} />
                <span className="ml-2">{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <span className="opacity-30">|</span>
      <ThemeSwitch light="" dark="" />
    </div>
  );
};

export default CustomDropdown;
