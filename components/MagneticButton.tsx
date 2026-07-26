"use client";

import { ReactNode } from "react";
import { useMagnetic } from "@/lib/hooks";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}: Props) {
  const ref = useMagnetic<HTMLAnchorElement & HTMLButtonElement>(0.3);
  const sheen =
    "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full";

  const cls = `${className} ${sheen} will-change-transform`;

  if (href) {
    return (
      <a ref={ref} href={href} className={cls} aria-label={ariaLabel}>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }
  return (
    <button ref={ref} type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
