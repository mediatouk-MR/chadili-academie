"use client";

/** Tiny event bus to pre-select a course in the registration form from a course card. */
const EVENT = "chadili:select-course";

export function selectCourse(title: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(EVENT, { detail: title }));
  const el = document.getElementById("register");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function onSelectCourse(handler: (title: string) => void) {
  if (typeof window === "undefined") return () => {};
  const cb = (e: Event) => handler((e as CustomEvent<string>).detail);
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}
