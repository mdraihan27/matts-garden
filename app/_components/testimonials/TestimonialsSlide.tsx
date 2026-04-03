"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { TESTIMONIALS } from "../../_data/landing";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSlide() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const count = TESTIMONIALS.length;
  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  function goTo(index: number) {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function goBy(delta: 1 | -1) {
    setDirection(delta);
    setActiveIndex((current) => (current + delta + count) % count);
  }

  const active = TESTIMONIALS[activeIndex];
  const prev = TESTIMONIALS[prevIndex];
  const next = TESTIMONIALS[nextIndex];

  return (
    <div className="w-full max-w-6xl rounded-3xl bg-transparent px-4 py-10 sm:px-10 sm:py-12">
      <div className="text-center">
        <p className="text-xs font-semibold tracking-[0.35em] text-white/70">
          TESTIMONIALS
        </p>
        <h2 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          What Our Clients Say!
        </h2>
      </div>

      <div className="mt-10 flex items-center justify-center sm:mt-12">
        <div className="relative h-105 w-full max-w-5xl">
          <button
            type="button"
            onClick={() => goBy(-1)}
            aria-label="Previous review"
            className="absolute left-1/2 top-1/2 hidden -translate-x-[calc(50%+290px)] -translate-y-1/2 scale-[0.92] opacity-35 blur-[1px] lg:block"
          >
            <div className="h-80 w-[min(24rem,calc(100vw-3rem))]">
              <TestimonialCard
                quote={prev.quote}
                name={prev.name}
                location={prev.location}
                initials={prev.initials}
                imageSrc={prev.imageSrc}
                rating={prev.rating}
              />
            </div>
          </button>

          <button
            type="button"
            onClick={() => goBy(1)}
            aria-label="Next review"
            className="absolute left-1/2 top-1/2 hidden translate-x-[calc(-50%+290px)] -translate-y-1/2 scale-[0.92] opacity-35 blur-[1px] lg:block"
          >
            <div className="h-80 w-[min(24rem,calc(100vw-3rem))]">
              <TestimonialCard
                quote={next.quote}
                name={next.name}
                location={next.location}
                initials={next.initials}
                imageSrc={next.imageSrc}
                rating={next.rating}
              />
            </div>
          </button>

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={active.id}
              custom={direction}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, y: direction > 0 ? 14 : -14, scale: 1.02 }}
              animate={{ opacity: 1, y: 0, scale: 1.08 }}
              exit={{ opacity: 0, y: direction > 0 ? -14 : 14, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80) goBy(-1);
                if (info.offset.x < -80) goBy(1);
              }}
            >
              <div className="h-80 w-[min(24rem,calc(100vw-3rem))]">
                <TestimonialCard
                  quote={active.quote}
                  name={active.name}
                  location={active.location}
                  initials={active.initials}
                  imageSrc={active.imageSrc}
                  rating={active.rating}
                  emphasis
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((t, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to review ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={
                "h-3 w-3 rounded-full transition-colors sm:h-2.5 sm:w-2.5" +
                (isActive ? " bg-brand-100" : " bg-white/35")
              }
            />
          );
        })}
      </div>
    </div>
  );
}
