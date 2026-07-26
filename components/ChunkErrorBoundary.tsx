"use client";

import { Component, ReactNode } from "react";

type Props = { children: ReactNode; fallback: ReactNode };
type State = { failed: boolean };

/**
 * Catches lazy-chunk / render failures from the 3D canvas (e.g. a transient
 * ChunkLoadError after a redeploy) and shows a graceful fallback instead of
 * crashing the page. Attempts a one-time reload of the stale chunk.
 */
export default class ChunkErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    const msg = error instanceof Error ? error.name + error.message : String(error);
    const isChunkError = /ChunkLoadError|Loading chunk|import\(\)/i.test(msg);
    // Reload the stale chunk once per session so the user recovers automatically.
    if (isChunkError && typeof window !== "undefined") {
      const KEY = "chadili-chunk-retry";
      if (!sessionStorage.getItem(KEY)) {
        sessionStorage.setItem(KEY, "1");
        window.location.reload();
      }
    }
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}
