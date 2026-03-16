import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLang() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLang must be used inside a LanguageProvider");
  }

  return context;
}

/**
 * Tiny helper: returns the EN or ES string based on current lang.
 * Usage: t(lang, 'Hello', 'Hola')
 */
export function t(lang, en, es) {
  return lang === "en" ? en : es;
}
