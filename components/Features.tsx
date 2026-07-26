"use client";

import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Features() {
  const { t, dir } = useI18n();

  return (
    <section className="relative overflow-hidden bg-burgundy-radial py-24 text-cream sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="container-luxe relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">{t.features.eyebrow}</span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight">
            {t.features.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/70">{t.features.subtitle}</p>
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((f) => (
            <div
              key={f.title}
              className={`card-glass group p-7 transition-all duration-500 hover:border-gold/50 hover:bg-white/10 ${
                dir === "rtl" ? "text-right" : "text-left"
              }`}
            >
              <span className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-burgundy-deep shadow-gold transition-transform duration-500 group-hover:scale-110">
                <Icon name={f.icon} weight="duotone" className="h-7 w-7" />
              </span>
              <h3 className="font-serif text-xl font-bold text-cream">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{f.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
