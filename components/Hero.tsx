"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CaretDown, Sparkle, MapPin } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import { useReducedMotion } from "@/lib/hooks";
import MagneticButton from "./MagneticButton";
import HeroVideo from "./HeroVideo";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t, dir } = useI18n();
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Cursor spotlight
  useEffect(() => {
    const el = heroRef.current;
    const spot = spotlightRef.current;
    if (!el || !spot || reduced) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
      spot.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, [reduced]);

  // Headline reveal + scroll-linked exit
  useEffect(() => {
    if (reduced) return;
    let safety: ReturnType<typeof setTimeout> | undefined;
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>(".hero-char");
      // Safety net: guarantee the headline is visible even if the tween
      // is interrupted or never advances (e.g. rAF throttled).
      safety = setTimeout(() => {
        gsap.set(chars, { opacity: 1, yPercent: 0, clearProps: "opacity,transform" });
      }, 3000);
      const tl = gsap.timeline({ delay: 0.25 });
      // .from() keeps the natural state visible — if the tween never runs,
      // the text still shows (no risk of permanently-hidden headline).
      tl.from(chars, {
        yPercent: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
      })
        .from(
          ".hero-fade",
          { y: 24, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 },
          "-=0.6"
        )
        .from(".hero-underline", { scaleX: 0, duration: 0.8, ease: "power2.inOut" }, "-=0.7");

      gsap.to(contentRef.current, {
        yPercent: -16,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, heroRef);
    return () => {
      clearTimeout(safety);
      ctx.revert();
    };
  }, [reduced]);

  // Arabic is cursive + RTL: splitting per-letter breaks joining and order,
  // so for RTL we reveal whole words; for Latin we reveal per letter.
  const renderReveal = (text: string) => {
    if (dir === "rtl") {
      const words = text.split(" ");
      return words.map((w, i) => (
        <Fragment key={i}>
          <span className="hero-char inline-block">{w}</span>
          {i < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
        </Fragment>
      ));
    }
    return text.split("").map((ch, i) => (
      <span key={i} className="inline-block overflow-hidden align-bottom">
        <span className="hero-char inline-block">{ch === " " ? " " : ch}</span>
      </span>
    ));
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden text-cream"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <HeroVideo />
      </div>

      {/* Dark overlays for text readability */}
      <div aria-hidden className="absolute inset-0 z-[1] bg-burgundy-night/55" />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-t from-burgundy-night via-burgundy-deep/45 to-burgundy-deep/65"
      />
      <div aria-hidden className="grain absolute inset-0 z-[1]" />
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-70"
        style={{
          background:
            "radial-gradient(460px circle at var(--mx,50%) var(--my,35%), rgba(201,162,75,0.16), transparent 70%)",
        }}
      />

      <div className="container-luxe relative z-10 pt-28 pb-16">
        <div className={`max-w-3xl ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <span className="hero-fade eyebrow mb-6">
            <Sparkle weight="fill" className="h-4 w-4" />
            {t.hero.kicker}
          </span>

          <h1 className="font-serif text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[1.12] drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
            <span className="block">{renderReveal(t.hero.titleLines[0])}</span>
            <span className="block">{renderReveal(t.hero.titleLines[1])}</span>
            <span className="relative inline-block">
              <span className="text-gold-gradient">{renderReveal(t.hero.highlight)}</span>
              <span className="hero-underline absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded bg-gold-gradient" />
            </span>
          </h1>

          <p className="hero-fade mt-7 flex items-center gap-2 font-serif text-base italic text-gold-light sm:text-lg">
            <span className="h-px w-6 bg-gold/60" />
            {t.hero.tagline}
          </p>

          <p className="hero-fade mt-4 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="hero-fade mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#register" className="btn-primary">
              {t.hero.ctaPrimary}
            </MagneticButton>
            <MagneticButton href="#courses" className="btn-ghost">
              {t.hero.ctaSecondary}
            </MagneticButton>
          </div>

          <div className="hero-fade mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" /> {t.hero.badgePresentiel}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" /> {t.hero.badgeDistance}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin weight="fill" className="h-4 w-4 text-gold" /> {t.hero.location}
              <span aria-hidden>🇲🇦</span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#showcase"
        className="hero-fade absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-gold"
      >
        {t.hero.scroll}
        <CaretDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
