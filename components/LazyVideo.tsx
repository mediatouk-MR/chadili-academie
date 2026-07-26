"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/lib/hooks";

type Props = { src: string; poster: string; className?: string; label?: string };

export default function LazyVideo({ src, poster, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || reduced) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "250px", threshold: 0.1 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduced]);

  useEffect(() => {
    const v = ref.current;
    if (load && v && !reduced) {
      v.load();
      v.play().catch(() => {});
    }
  }, [load, reduced]);

  // Reduced motion: static poster image, no video download.
  if (reduced) {
    return <Image src={poster} alt="" fill sizes="(max-width:768px) 90vw, 400px" className="object-cover" />;
  }

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden
    >
      {load && <source src={src} type="video/mp4" />}
    </video>
  );
}
