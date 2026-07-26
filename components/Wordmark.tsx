"use client";

import Image from "next/image";

export default function Wordmark({
  light = false,
  className = "",
  priority = false,
}: {
  light?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <a href="#home" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Chadili Académie">
      <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white shadow-gold ring-1 ring-gold/40 transition-transform duration-300 group-hover:scale-105">
        <Image src="/images/logo.png" alt="Chadili Académie" fill sizes="48px" priority={priority} className="object-contain p-1" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-lg font-bold italic tracking-wide ${
            light ? "text-cream" : "text-burgundy"
          }`}
        >
          Chadili
        </span>
        <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-gold">
          Académie
        </span>
      </span>
    </a>
  );
}
