"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationType } from "../data/translations";

type Language = "en" | "ml" | "ar";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: <K extends keyof TranslationType>(key: K) => TranslationType[K];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    // Check local storage or browser language preference if available (client-side only)
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "ml" || savedLang === "ar")) {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    // Update direction when language changes
    const newDir = language === "ar" ? "rtl" : "ltr";
    setDir(newDir);
    document.documentElement.dir = newDir;
    document.documentElement.lang = language;
    localStorage.setItem("app_lang", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = <K extends keyof TranslationType>(key: K): TranslationType[K] => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      <div dir={dir} className={language === "ar" ? "font-arabic" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
