"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Autoplay when in view, pause when scrolled away (saves CPU/battery).
  useEffect(() => {
    const v = ref.current;
    if (!v || reduced) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.05 }
    );
    io.observe(v);
    const onVis = () => {
      if (document.hidden) v.pause();
      else v.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduced, mounted]);

  // Reduced motion (or before hydration): show the static poster only — no video download.
  if (!mounted || reduced) {
    return (
      <Image
        src="/videos/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    );
  }

  const src = isMobile ? "/videos/hero-mobile.mp4" : "/videos/hero.mp4";

  return (
    <video
      key={src}
      ref={ref}
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/videos/hero-poster.jpg"
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
