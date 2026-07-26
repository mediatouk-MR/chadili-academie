"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SealCheck } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function AboutChef() {
  const { t, dir } = useI18n();
  const imgWrap = useRef<HTMLDivElement>(null);
  const imgInner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      // clip reveal + gentle parallax zoom
      gsap.fromTo(
        imgWrap.current,
        { clipPath: "inset(12% 12% 12% 12% round 24px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          ease: "none",
          scrollTrigger: { trigger: imgWrap.current, start: "top 85%", end: "top 40%", scrub: true },
        }
      );
      gsap.to(imgInner.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: imgWrap.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="chef" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-burgundy/5 blur-3xl" />

      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        {/* Portrait */}
        <div className="relative">
          <div
            ref={imgWrap}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-luxe-lg"
          >
            <div ref={imgInner} className="absolute inset-0 h-[115%] w-full">
              <Image
                src="/images/chef.jpg"
                alt="Création signature de Chef Awatif Chadili — Chadili Académie"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/50 via-transparent to-transparent" />
          </div>

          {/* floating credential card */}
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-gold/30 bg-white/90 px-5 py-3 shadow-luxe backdrop-blur">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-burgundy-deep">
              <SealCheck weight="fill" className="h-5 w-5" />
            </span>
            <div className={dir === "rtl" ? "text-right" : "text-left"}>
              <p className="font-serif text-sm font-bold text-burgundy">Chef Awatif Chadili</p>
              <p className="text-xs text-ink/60">🇲🇦 Maroc</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className={dir === "rtl" ? "text-right" : "text-left"}>
          <Reveal>
            <span className="eyebrow mb-4">{t.about.eyebrow}</span>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight text-burgundy">
              {t.about.title}
            </h2>
            <p className="mt-5 font-serif text-xl italic text-gold-deep">{t.about.lead}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
            {t.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <p className="font-serif text-2xl italic text-burgundy">{t.about.signature}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold-deep">{t.about.role}</p>
          </Reveal>

          <Reveal stagger className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {t.about.stats.map((s) => (
              <div key={s.label} className={dir === "rtl" ? "text-right" : "text-left"}>
                <StatCounter
                  value={s.value}
                  className="font-serif text-3xl font-bold text-burgundy sm:text-4xl"
                />
                <p className="mt-1 text-xs uppercase tracking-wider text-ink/50">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
