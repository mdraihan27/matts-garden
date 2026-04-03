"use client";

import { motion } from "framer-motion";

import { BeforeAfterSlider } from "../_components/gallery/BeforeAfterSlider";
import { GALLERY_PROJECTS } from "../_data/gallery";

const sectionReveal = {
  hidden: { opacity: 0, y: 32, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
    },
  },
};

export default function GalleryPage() {
  return (
    <main className="relative h-screen h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-10 overflow-y-auto px-4 pb-20 pt-24 sm:px-10 sm:pt-32 md:px-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 text-white">
          <motion.section
            className="rounded-3xl border border-white/20 bg-black/35 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
            variants={sectionReveal}
            initial="hidden"
            animate="show"
          >
            <p className="text-xs font-semibold tracking-[0.35em] text-white/70">
              GALLERY
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Transformations Done by Us.
            </h1>

          </motion.section>

          <div className="space-y-7">
            {GALLERY_PROJECTS.map((project) => (
              <motion.section
                key={project.id}
                className="rounded-3xl border border-white/20 bg-black/35 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
                variants={sectionReveal}
                initial="hidden"
                animate="show"
              >
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h2>

                <div className="mt-5 lg:h-190">
                  <BeforeAfterSlider
                    beforeSrc={project.beforeImage}
                    afterSrc={project.afterImage}
                    beforeAlt={`${project.title} before`}
                    afterAlt={`${project.title} after`}
                    beforeLabel={project.beforeLabel}
                    afterLabel={project.afterLabel}
                  />
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
