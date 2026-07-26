"use client";

import { Fragment } from "react";
import { Asterisk } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";

export default function Marquee() {
  const { t } = useI18n();
  const items = t.marquee;
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-burgundy-deep py-5 text-cream">
      <div className="mask-fade-x flex w-max animate-marquee-x whitespace-nowrap will-change-transform">
        {loop.map((label, i) => (
          <Fragment key={i}>
            <span className="mx-6 font-serif text-lg italic text-cream/90 sm:text-xl">{label}</span>
            <Asterisk weight="fill" className="mx-2 h-4 w-4 self-center text-gold" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
