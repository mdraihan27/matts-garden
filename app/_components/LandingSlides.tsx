"use client";

import { motion } from "framer-motion";

import { HERO_SLIDES } from "../_data/landing";
import { BookingSlide } from "./BookingSlide";
import { TestimonialsSlide } from "./testimonials";

const sectionStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

const panelReveal = {
  hidden: { opacity: 0, y: 34, scale: 0.975, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
    },
  },
};

export function LandingSlides(
  props: Readonly<{
    activeSlide: number;
    onAnimationComplete: () => void;
  }>
) {
  const { activeSlide, onAnimationComplete } = props;
  const testimonialsIndex = HERO_SLIDES.length;
  const bookingIndex = HERO_SLIDES.length + 1;

  return (
    <section className="absolute inset-0 z-10 overflow-hidden">
      <motion.div
        animate={{ y: `-${activeSlide * 100}vh` }}
        transition={{ type: "spring", stiffness: 260, damping: 34, mass: 0.9 }}
        onAnimationComplete={onAnimationComplete}
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = activeSlide === index;
          return (
          <div
            key={slide.id}
            className="flex h-screen items-center justify-center px-4 sm:px-10 md:px-16"
          >
            <motion.div
              className="max-w-6xl text-center text-white"
              variants={panelReveal}
              initial="hidden"
              animate={isActive ? "show" : "hidden"}
            >
              <motion.div variants={sectionStagger}>
                <motion.h1
                  variants={fadeUp}
                  className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight sm:text-6xl md:text-7xl lg:text-[110px]"
                >
                  {slide.title[0]}
                  <br />
                  {slide.title[1]}
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="mx-auto mt-5 max-w-5xl font-sans text-base leading-relaxed text-white/90 sm:text-xl md:text-2xl"
                >
                  {slide.subtitle}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
          );
        })}

        <div className="flex h-screen items-center justify-center px-4 sm:px-10 md:px-16">
          <motion.div
            className="w-full"
            variants={panelReveal}
            initial="hidden"
            animate={activeSlide === testimonialsIndex ? "show" : "hidden"}
          >
            <TestimonialsSlide />
          </motion.div>
        </div>

        <div className="flex h-screen items-center justify-center px-4 sm:px-10 md:px-16">
          <motion.div
            className="w-full"
            variants={panelReveal}
            initial="hidden"
            animate={activeSlide === bookingIndex ? "show" : "hidden"}
          >
            <BookingSlide />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
