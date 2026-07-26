"use client";

import { InstagramLogo, WhatsappLogo, Phone } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/content/dictionary";
import Wordmark from "./Wordmark";

export default function Footer() {
  const { t, dir } = useI18n();
  const year = new Date().getFullYear();

  const links = [
    { href: "#chef", label: t.nav.chef },
    { href: "#courses", label: t.nav.courses },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#register", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-gold/15 bg-burgundy-night pb-28 pt-16 text-cream lg:pb-16">
      <div className="container-luxe">
        <div className={`grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <div>
            <Wordmark light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">{t.footer.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 text-cream transition hover:border-gold hover:text-gold"
              >
                <InstagramLogo weight="fill" className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 text-cream transition hover:border-gold hover:text-gold"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
              </a>
              <a
                href={`tel:+${CONTACT.phone1Intl}`}
                aria-label="Phone"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 text-cream transition hover:border-gold hover:text-gold"
              >
                <Phone weight="fill" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-gold">{t.footer.nav}</h3>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream/65 transition hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-gold">{t.footer.contact}</h3>
            <ul className="space-y-2.5 text-sm text-cream/65">
              <li dir="ltr" className={dir === "rtl" ? "text-right" : ""}>{t.contact.phone}</li>
              <li dir="ltr" className={dir === "rtl" ? "text-right" : ""}>{t.contact.phone2}</li>
              <li>@{CONTACT.instagramHandle}</li>
              <li>{t.contact.location} 🇲🇦</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 hairline" />
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-cream/45 sm:flex-row">
          <p>© {year} {t.footer.made}. {t.footer.rights}</p>
          <p className="font-serif italic">Chadili Académie</p>
        </div>
      </div>
    </footer>
  );
}
