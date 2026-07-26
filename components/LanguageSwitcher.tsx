"use client";

import { useI18n } from "@/lib/i18n";
import { LANGS } from "@/content/dictionary";

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border p-1 backdrop-blur ${
        light ? "border-gold/30 bg-white/5" : "border-burgundy/15 bg-white/60"
      }`}
    >
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={l.label}
            className={`min-h-[32px] rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              active
                ? "bg-gold-gradient text-burgundy-deep shadow-sm"
                : light
                ? "text-cream/70 hover:text-gold"
                : "text-burgundy/60 hover:text-burgundy"
            }`}
          >
            {l.short}
          </button>
        );
      })}
    </div>
  );
}
