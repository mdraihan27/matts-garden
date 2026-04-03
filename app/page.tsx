"use client";

import { useRef, useState } from "react";
import type { TouchEvent, WheelEvent } from "react";
import { HERO_SLIDES } from "./_data/landing";
import { LandingSlides } from "./_components/LandingSlides";
import { ScrollCue } from "./_components/ScrollCue";

const MAX_SLIDE_INDEX = HERO_SLIDES.length + 1;

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const isAnimatingRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  function go(delta: 1 | -1) {
    if (isAnimatingRef.current) return;

    setActiveSlide((current) => {
      const next = Math.min(Math.max(current + delta, 0), MAX_SLIDE_INDEX);
      if (next === current) return current;
      isAnimatingRef.current = true;
      return next;
    });
  }

  function handleWheel(event: WheelEvent) {
    if (isAnimatingRef.current) return;
    if (Math.abs(event.deltaY) < 14) return;
    go(event.deltaY > 0 ? 1 : -1);
  }

  function handleTouchStart(event: TouchEvent) {
    touchStartY.current = event.touches?.[0]?.clientY ?? null;
  }

  function handleTouchEnd(event: TouchEvent) {
    if (touchStartY.current == null) return;
    const endY = event.changedTouches?.[0]?.clientY ?? touchStartY.current;
    const deltaY = touchStartY.current - endY;
    touchStartY.current = null;

    if (Math.abs(deltaY) < 48) return;
    go(deltaY > 0 ? 1 : -1);
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <LandingSlides
        activeSlide={activeSlide}
        onAnimationComplete={() => {
          isAnimatingRef.current = false;
        }}
      />

      <ScrollCue
        activeSlide={activeSlide}
        maxSlideIndex={MAX_SLIDE_INDEX}
        go={go}
      />
    </main>
  );
}
