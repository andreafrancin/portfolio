"use client";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { getLanguage, setLanguage } from "@/utils/languageStorage";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<string>(getLanguage());

  useEffect(() => {
    setLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: setLanguageState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
