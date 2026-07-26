"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowsClockwise, Sparkle } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";
import Reveal from "./Reveal";
import ChunkErrorBoundary from "./ChunkErrorBoundary";

const CakeCanvas = dynamic(() => import("./three/CakeCanvas"), {
  ssr: false,
  loading: () => <ShowcasePoster />,
});

function ShowcasePoster() {
  return (
    <div className="relative mx-auto h-full w-full max-w-md overflow-hidden rounded-[2rem] border border-gold/25">
      <Image
        src="/images/gallery-3.jpg"
        alt="Cake design signé Chadili Académie"
        fill
        sizes="(max-width: 768px) 90vw, 40vw"
        className="object-cover"
      />
    </div>
  );
}

export default function CakeShowcase() {
  const { t, dir } = useI18n();
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const show3D = mounted && !isMobile && !reduced;

  return (
    <section
      id="showcase"
      className="grain relative overflow-hidden bg-burgundy-radial py-24 text-cream sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-luxe relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4 justify-center">
            <Sparkle weight="fill" className="h-4 w-4" />
            {t.showcase.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight">
            {t.showcase.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/70">{t.showcase.subtitle}</p>
        </Reveal>

        <div className="relative mt-12 h-[58vh] min-h-[420px] w-full sm:h-[64vh]">
          {show3D ? (
            <ChunkErrorBoundary fallback={<ShowcasePoster />}>
              <CakeCanvas interactive />
            </ChunkErrorBoundary>
          ) : (
            <ShowcasePoster />
          )}

          {show3D && (
            <span
              className={`pointer-events-none absolute bottom-2 ${
                dir === "rtl" ? "right-2" : "left-2"
              } inline-flex items-center gap-2 rounded-full border border-gold/30 bg-burgundy-deep/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur`}
            >
              <ArrowsClockwise weight="bold" className="h-4 w-4" />
              {t.showcase.hint}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
