"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

type VideoLoadGateProps = Readonly<{
  children: React.ReactNode;
  videoSelector?: string;
  fallbackDelayMs?: number;
}>;

const DEFAULT_VIDEO_SELECTOR = "[data-hero-video]";
const DEFAULT_FALLBACK_DELAY_MS = 12000;

export function VideoLoadGate(props: VideoLoadGateProps) {
  const {
    children,
    videoSelector = DEFAULT_VIDEO_SELECTOR,
    fallbackDelayMs = DEFAULT_FALLBACK_DELAY_MS,
  } = props;

  const [ready, setReady] = useState(false);

  useEffect(() => {
    let finished = false;

    const fallbackTimer = window.setTimeout(() => {
      finish();
    }, fallbackDelayMs);

    function finish() {
      if (finished) return;
      finished = true;
      window.clearTimeout(fallbackTimer);
      setReady(true);
    }

    const video = document.querySelector<HTMLVideoElement>(videoSelector);

    if (!video) {
      window.setTimeout(() => finish(), 0);
      return () => {
        window.clearTimeout(fallbackTimer);
      };
    }

    function handleReady() {
      finish();
    }

    video.addEventListener("loadeddata", handleReady, { once: true });
    video.addEventListener("canplay", handleReady, { once: true });
    video.addEventListener("error", handleReady, { once: true });

    window.setTimeout(() => {
      if (video.readyState >= 2) finish();
    }, 0);

    return () => {
      window.clearTimeout(fallbackTimer);
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("error", handleReady);
    };
  }, [videoSelector, fallbackDelayMs]);

  return (
    <>
      {ready ? children : null}

      {!ready ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/35 px-6 text-white backdrop-blur-2xl backdrop-saturate-150"
          role="status"
          aria-live="polite"
          aria-label="Assets are loading"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-white/5 px-7 py-8 text-center shadow-2xl backdrop-blur-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-brand-300/18 blur-3xl animate-pulse"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-14 -right-16 h-48 w-48 rounded-full bg-brand-100/12 blur-3xl animate-pulse"
            />

            <div className="relative">
              <div className="flex justify-center">
                <div className="grid place-items-center rounded-full border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
                  <Loader2 className="h-10 w-10 animate-spin text-brand-100" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-4 text-xs font-semibold tracking-[0.35em] text-white/85">
                ASSETS ARE LOADING
              </div>
              <div className="sr-only">Loading assets. Please wait.</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
