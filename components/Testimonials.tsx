"use client";

import Image from "next/image";
import { Quotes, Star } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { t, dir } = useI18n();

  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">{t.testimonials.eyebrow}</span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight text-burgundy">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-base text-ink/70">{t.testimonials.subtitle}</p>
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-7 md:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.name}
              className={`relative flex flex-col rounded-3xl border border-gold/15 bg-cream p-7 shadow-luxe ${
                dir === "rtl" ? "text-right" : "text-left"
              }`}
            >
              <Quotes weight="fill" className="h-9 w-9 text-gold/40" />
              <div className="mt-3 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} weight="fill" className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="relative h-12 w-12 overflow-hidden rounded-full border border-gold/30">
                  <Image src={item.image} alt={item.name} fill sizes="48px" className="object-cover" />
                </span>
                <span>
                  <span className="block font-serif font-bold text-burgundy">{item.name}</span>
                  <span className="block text-xs text-ink/55">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
