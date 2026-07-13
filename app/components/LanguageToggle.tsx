'use client'; // Important: This is a client component

import { useState, useEffect } from 'react';
import './LanguageToggle.css';

interface LanguageToggleProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => {
  return (
    <div className="language-toggle-wrapper">
      <button
        className={`language-toggle ${language === 'en' ? 'active' : ''}`}
        onClick={() => {
          setLanguage('en');
          localStorage.setItem('language', 'en');
        }}
        aria-label="Switch to English"
      >
        EN
      </button>
      
      <div className="toggle-separator">|</div>
      
      <button
        className={`language-toggle ${language === 'hi' ? 'active' : ''}`}
        onClick={() => {
          setLanguage('hi');
          localStorage.setItem('language', 'hi');
        }}
        aria-label="हिंदी में स्विच करें"
      >
        हि
      </button>
    </div>
  );
};

interface UseLanguageReturn {
  language: string;
  setLanguage: (lang: string) => void;
  mounted: boolean;
}

// Hook to manage language state and localStorage
export const useLanguage = (): UseLanguageReturn => {
  const [language, setLanguage] = useState<string>('en');
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Get language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    setMounted(true);
  }, []);

  return { language, setLanguage, mounted };
};
