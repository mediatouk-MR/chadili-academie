"use client";

import { MapPin, Broadcast, ArrowRight, ArrowLeft, CheckCircle } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";
import Icon from "./Icon";
import LazyVideo from "./LazyVideo";
import { selectCourse } from "@/lib/courseBus";

export default function Courses() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="courses" className="relative bg-cream-deep py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4 justify-center">{t.courses.eyebrow}</span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight text-burgundy">
            {t.courses.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">{t.courses.subtitle}</p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {t.courses.items.map((c, i) => {
            const videoRight = i % 2 === 1;
            return (
              <Reveal key={c.key}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  {/* Video */}
                  <div className={`${videoRight ? "lg:order-2" : ""} flex justify-center`}>
                    <div className="relative aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-[2rem] border border-gold/25 shadow-luxe-lg sm:max-w-[320px]">
                      <LazyVideo
                        src={c.video}
                        poster={c.poster}
                        className="h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy-deep/50 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl border border-gold/40 bg-burgundy-deep/70 text-gold backdrop-blur">
                        <Icon name={c.icon} weight="duotone" className="h-6 w-6" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={dir === "rtl" ? "text-right" : "text-left"}>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {c.modes.includes("presentiel") && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-burgundy/8 px-3 py-1 text-xs font-semibold text-burgundy">
                          <MapPin weight="fill" className="h-3 w-3" /> {t.courses.modePresentiel}
                        </span>
                      )}
                      {c.modes.includes("distance") && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-deep">
                          <Broadcast weight="fill" className="h-3 w-3" /> {t.courses.modeDistance}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight text-burgundy">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/70">{c.desc}</p>

                    <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                      {t.courses.modulesLabel}
                    </p>
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {c.modules.map((m, mi) => (
                        <li key={mi} className="flex items-start gap-2 text-sm text-ink/80">
                          <CheckCircle
                            weight="fill"
                            className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => selectCourse(c.title)}
                      className="btn-primary mt-8 !px-6"
                    >
                      {t.courses.cta}
                      <Arrow className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
