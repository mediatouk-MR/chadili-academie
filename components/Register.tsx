"use client";

import { useEffect, useState } from "react";
import {
  WhatsappLogo,
  Phone,
  InstagramLogo,
  MapPin,
  Clock,
  PaperPlaneRight,
} from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/content/dictionary";
import { onSelectCourse } from "@/lib/courseBus";
import Reveal from "./Reveal";

export default function Register() {
  const { t, dir } = useI18n();
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [mode, setMode] = useState<"presentiel" | "distance">("presentiel");
  const [city, setCity] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => onSelectCourse((title) => setCourse(title)), []);

  const nameError = touched && !name.trim();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!name.trim()) return;
    const modeLabel = mode === "presentiel" ? t.register.modePresentiel : t.register.modeDistance;
    const lines = [
      `${t.register.eyebrow} — Chadili Académie`,
      `${t.register.name}: ${name}`,
      course ? `${t.register.course}: ${course}` : "",
      `${t.register.mode}: ${modeLabel}`,
      city ? `${t.register.city}: ${city}` : "",
    ].filter(Boolean);
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const align = dir === "rtl" ? "text-right" : "text-left";

  return (
    <section id="register" className="relative overflow-hidden bg-burgundy-radial py-24 text-cream sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-luxe relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Form */}
        <Reveal className={align}>
          <span className="eyebrow mb-4">{t.register.eyebrow}</span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight">
            {t.register.title}
          </h2>
          <p className="mt-4 max-w-lg text-base text-cream/70">{t.register.subtitle}</p>

          <form onSubmit={submit} className="mt-9 space-y-5" noValidate>
            <div>
              <label htmlFor="reg-name" className="mb-2 block text-sm font-medium text-cream/85">
                {t.register.name} <span className="text-gold">*</span>
              </label>
              <input
                id="reg-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder={t.register.namePh}
                autoComplete="name"
                aria-invalid={nameError}
                aria-describedby={nameError ? "reg-name-err" : undefined}
                className={`min-h-[52px] w-full rounded-xl border bg-white/5 px-4 text-cream placeholder:text-cream/40 backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-gold ${
                  nameError ? "border-red-400/70" : "border-gold/20"
                }`}
              />
              {nameError && (
                <p id="reg-name-err" role="alert" className="mt-1.5 text-xs text-red-300">
                  {t.register.required}
                </p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="reg-course" className="mb-2 block text-sm font-medium text-cream/85">
                  {t.register.course}
                </label>
                <select
                  id="reg-course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="min-h-[52px] w-full rounded-xl border border-gold/20 bg-white/5 px-4 text-cream backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-gold [&>option]:text-ink"
                >
                  <option value="">{t.register.coursePh}</option>
                  {t.courses.items.map((c) => (
                    <option key={c.key} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="reg-city" className="mb-2 block text-sm font-medium text-cream/85">
                  {t.register.city}
                </label>
                <input
                  id="reg-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={t.register.cityPh}
                  autoComplete="address-level2"
                  className="min-h-[52px] w-full rounded-xl border border-gold/20 bg-white/5 px-4 text-cream placeholder:text-cream/40 backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            <fieldset>
              <legend className="mb-2 block text-sm font-medium text-cream/85">{t.register.mode}</legend>
              <div className="grid grid-cols-2 gap-3">
                {(["presentiel", "distance"] as const).map((m) => {
                  const active = mode === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMode(m)}
                      aria-pressed={active}
                      className={`min-h-[52px] rounded-xl border px-4 text-sm font-semibold transition ${
                        active
                          ? "border-gold bg-gold-gradient text-burgundy-deep"
                          : "border-gold/20 bg-white/5 text-cream/80 hover:border-gold/50"
                      }`}
                    >
                      {m === "presentiel" ? t.register.modePresentiel : t.register.modeDistance}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              <WhatsappLogo weight="fill" className="h-5 w-5" />
              {t.register.submit}
              <PaperPlaneRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-cream/50">{t.register.whatsappNote}</p>
          </form>
        </Reveal>

        {/* Direct contact */}
        <Reveal delay={0.1} className={`flex flex-col gap-4 ${align}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t.register.or}</p>

          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass group flex items-center gap-4 p-5 transition hover:border-gold/50 hover:bg-white/10"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-gradient text-burgundy-deep">
              <WhatsappLogo weight="fill" className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm text-cream/60">WhatsApp</span>
              <span className="block font-serif text-lg font-bold text-cream tabular" dir="ltr">
                {t.contact.phone}
              </span>
            </span>
          </a>

          <div className="grid grid-cols-2 gap-4">
            <a href={`tel:+${CONTACT.phone1Intl}`} className="card-glass flex flex-col gap-2 p-5 transition hover:border-gold/50">
              <Phone weight="fill" className="h-5 w-5 text-gold" />
              <span className="text-sm text-cream/60">{t.register.callNow}</span>
              <span className="font-serif font-bold text-cream tabular" dir="ltr">{t.contact.phone}</span>
            </a>
            <a href={`tel:+${CONTACT.phone2Intl}`} className="card-glass flex flex-col gap-2 p-5 transition hover:border-gold/50">
              <Phone weight="fill" className="h-5 w-5 text-gold" />
              <span className="text-sm text-cream/60">{t.register.callNow}</span>
              <span className="font-serif font-bold text-cream tabular" dir="ltr">{t.contact.phone2}</span>
            </a>
          </div>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass group flex items-center gap-4 p-5 transition hover:border-gold/50 hover:bg-white/10"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white">
              <InstagramLogo weight="fill" className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm text-cream/60">{t.register.instagram}</span>
              <span className="block font-serif text-lg font-bold text-cream">@{CONTACT.instagramHandle}</span>
            </span>
          </a>

          <div className="mt-2 flex flex-wrap gap-6 text-sm text-cream/70">
            <span className="inline-flex items-center gap-2">
              <MapPin weight="fill" className="h-4 w-4 text-gold" />
              {t.contact.location} 🇲🇦
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock weight="fill" className="h-4 w-4 text-gold" />
              {t.contact.hoursValue}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
