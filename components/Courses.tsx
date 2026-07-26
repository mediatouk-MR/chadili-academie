"use client";

import Image from "next/image";
import { MapPin, Broadcast, ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { selectCourse } from "@/lib/courseBus";

export default function Courses() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="courses" className="relative bg-cream-deep py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">{t.courses.eyebrow}</span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight text-burgundy">
            {t.courses.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">{t.courses.subtitle}</p>
        </Reveal>

        <Reveal stagger staggerAmount={0.08} className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {t.courses.items.map((c) => (
            <article
              key={c.key}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gold/15 bg-cream shadow-luxe transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe-lg"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/60 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl border border-gold/40 bg-burgundy-deep/70 text-gold backdrop-blur">
                  <Icon name={c.icon} weight="duotone" className="h-6 w-6" />
                </span>
              </div>

              <div className={`flex flex-1 flex-col p-6 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                <div className="mb-3 flex flex-wrap gap-2">
                  {c.modes.includes("presentiel") && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-burgundy/8 px-3 py-1 text-[0.7rem] font-semibold text-burgundy">
                      <MapPin weight="fill" className="h-3 w-3" /> {t.courses.modePresentiel}
                    </span>
                  )}
                  {c.modes.includes("distance") && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-3 py-1 text-[0.7rem] font-semibold text-gold-deep">
                      <Broadcast weight="fill" className="h-3 w-3" /> {t.courses.modeDistance}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl font-bold text-burgundy">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{c.desc}</p>

                <button
                  onClick={() => selectCourse(c.title)}
                  className="link-underline mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-burgundy transition-colors hover:text-gold-deep"
                >
                  {t.courses.cta}
                  <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
