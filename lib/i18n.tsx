"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { DICT, LANGS, type Lang, type Dictionary } from "@/content/dictionary";

type I18nValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: Dictionary;
  setLang: (l: Lang) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "chadili-lang";

function applyDocument(lang: Lang) {
  const dir = LANGS.find((l) => l.code === lang)?.dir ?? "rtl";
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (saved && DICT[saved]) {
      setLangState(saved);
      applyDocument(saved);
    } else {
      applyDocument("ar");
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    applyDocument(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const dir = LANGS.find((l) => l.code === lang)?.dir ?? "rtl";

  return (
    <I18nContext.Provider value={{ lang, dir, t: DICT[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
