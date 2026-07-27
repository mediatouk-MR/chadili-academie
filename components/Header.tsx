"use client";

import { useEffect, useState } from "react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/content/dictionary";
import Wordmark from "./Wordmark";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#chef", label: t.nav.chef },
    { href: "#courses", label: t.nav.courses },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#register", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open
          ? "border-b border-gold/15 bg-burgundy-deep shadow-luxe backdrop-blur-xl"
          : scrolled
          ? "border-b border-gold/15 bg-burgundy-deep/80 shadow-luxe backdrop-blur-xl"
          : "bg-transparent"
      } ${scrolled || open ? "py-3" : "py-5"}`}
    >
      <div className="container-luxe flex items-center justify-between gap-4">
        <Wordmark light priority />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm font-medium text-cream/85 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher light />
          </div>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-5 !py-2.5 text-xs md:inline-flex"
          >
            <WhatsappLogo weight="fill" className="h-4 w-4" />
            {t.nav.cta}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-burgundy-deep transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-luxe flex flex-col gap-1 pb-6 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-cream/90 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex items-center justify-between gap-3 px-2">
            <LanguageSwitcher light />
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-2.5 text-xs"
            >
              <WhatsappLogo weight="fill" className="h-4 w-4" />
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
