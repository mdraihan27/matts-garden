"use client";

import { motion } from "framer-motion";

import { HERO_SLIDES } from "../_data/landing";
import { BookingSlide } from "./BookingSlide";
import { TestimonialsSlide } from "./testimonials";

export function LandingSlides(
  props: Readonly<{
    activeSlide: number;
    onAnimationComplete: () => void;
  }>
) {
  const { activeSlide, onAnimationComplete } = props;

  return (
    <section className="absolute inset-0 z-10 overflow-hidden">
      <motion.div
        animate={{ y: `-${activeSlide * 100}vh` }}
        transition={{ type: "spring", stiffness: 260, damping: 34, mass: 0.9 }}
        onAnimationComplete={onAnimationComplete}
      >
        {HERO_SLIDES.map((slide) => (
          <div
            key={slide.id}
            className="flex h-screen items-center justify-center px-4 sm:px-10 md:px-16"
          >
            <div className="max-w-6xl text-center text-white">
              <h1 className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight sm:text-6xl md:text-7xl lg:text-[110px]">
                {slide.title[0]}
                <br />
                {slide.title[1]}
              </h1>
              <p className="mx-auto mt-5 max-w-5xl font-sans text-base leading-relaxed text-white/90 sm:text-xl md:text-2xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        <div className="flex h-screen items-center justify-center px-4 sm:px-10 md:px-16">
          <TestimonialsSlide />
        </div>

        <div className="flex h-screen items-center justify-center px-4 sm:px-10 md:px-16">
          <BookingSlide />
        </div>
      </motion.div>
    </section>
  );
}
