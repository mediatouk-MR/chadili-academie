"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value up when scrolled into view.
 * Preserves any non-digit prefix/suffix (e.g. "13.1k+", "500+", "100%").
 */
export default function StatCounter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = value.match(/([\d.,]+)/);
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const numStr = match[1].replace(/,/g, ".");
    const target = parseFloat(numStr);
    const decimals = (numStr.split(".")[1] || "").length;
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index || 0) + match[1].length);

    let raf = 0;
    let started = false;
    const run = () => {
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = (target * eased).toFixed(decimals);
        setDisplay(`${prefix}${current}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={`tabular ${className}`}>
      {display}
    </span>
  );
}
