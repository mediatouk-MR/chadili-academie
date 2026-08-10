"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HandTap, PlayCircle } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import Reveal from "./Reveal";
import LazyVideo from "./LazyVideo";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  { src: "/images/gallery-1.jpg", tall: false },
  { src: "/images/gallery-2.jpg", tall: true },
  { src: "/images/gallery-3.jpg", tall: false },
  { src: "/images/gallery-4.jpg", tall: true },
  { src: "/images/gallery-5.jpg", tall: false },
  { src: "/images/gallery-6.jpg", tall: true },
  { src: "/images/gallery-7.jpg", tall: false },
  { src: "/images/gallery-8.jpg", tall: true },
];

export default function Gallery() {
  const { t, dir } = useI18n();
  const scroller = useRef<HTMLDivElement>(null);
  const videoWrap = useRef<HTMLDivElement>(null);
  const videoInner = useRef<HTMLDivElement>(null);

  // Elegant clip-reveal + parallax on the featured video.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoWrap.current,
        { clipPath: "inset(14% 8% 14% 8% round 32px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 32px)",
          ease: "none",
          scrollTrigger: { trigger: videoWrap.current, start: "top 85%", end: "top 40%", scrub: true },
        }
      );
      gsap.to(videoInner.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: videoWrap.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  // Convert vertical wheel into horizontal scroll on desktop (pointer: fine).
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const atStart = el.scrollLeft <= 0;
      const atEnd = Math.abs(el.scrollLeft) + el.clientWidth >= el.scrollWidth - 2;
      // let the page scroll past the strip at its edges
      const dir2 = e.deltaY > 0 ? 1 : -1;
      if ((atStart && dir2 < 0) || (atEnd && dir2 > 0)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section id="gallery" className="bg-cream py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className={dir === "rtl" ? "text-right" : "text-left"}>
            <span className="eyebrow mb-4">{t.gallery.eyebrow}</span>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight text-burgundy">
              {t.gallery.title}
            </h2>
            <p className="mt-3 max-w-xl text-base text-ink/70">{t.gallery.subtitle}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-deep">
            <HandTap weight="fill" className="h-4 w-4" />
            {t.gallery.drag}
          </span>
        </Reveal>
      </div>

      <div
        ref={scroller}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {IMAGES.map((img, i) => (
          <figure
            key={i}
            className={`group relative shrink-0 snap-center overflow-hidden rounded-3xl shadow-luxe ${
              img.tall ? "h-[26rem] w-[19rem]" : "h-[22rem] w-[28rem] max-w-[85vw]"
            }`}
          >
            <Image
              src={img.src}
              alt={`Création Chadili Académie ${i + 1}`}
              fill
              sizes="(max-width: 640px) 85vw, 28rem"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </figure>
        ))}
      </div>

      {/* Featured videos — the craft in motion */}
      <div className="container-luxe mt-16">
        <Reveal className="flex flex-wrap items-center justify-center gap-6">
          {[
            { src: "/videos/gallery.mp4", poster: "/videos/gallery-poster.jpg", label: t.gallery.featured },
            { src: "/videos/gallery-cake.mp4", poster: "/videos/gallery-cake-poster.jpg", label: "Cake Design" },
          ].map((v, i) => (
            <div
              key={i}
              ref={i === 0 ? videoWrap : undefined}
              className="relative aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-[2rem] border border-gold/25 shadow-luxe-lg sm:max-w-[320px]"
            >
              <div ref={i === 0 ? videoInner : undefined} className="absolute inset-0 h-[110%] w-full">
                <LazyVideo src={v.src} poster={v.poster} className="h-full w-full object-cover" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy-deep/70 via-transparent to-transparent" />
              <span className="pointer-events-none absolute inset-x-0 bottom-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-cream">
                <PlayCircle weight="fill" className="h-5 w-5 text-gold" />
                {v.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
