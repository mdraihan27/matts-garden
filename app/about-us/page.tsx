"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const cardPop = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
    },
  },
};

export default function AboutUsPage() {
  return (
    <main className="relative h-screen h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-10 overflow-y-auto px-4 pb-20 pt-24 sm:px-10 sm:pt-32 md:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <motion.section
            className="rounded-3xl border border-white/20 bg-black/35 p-6 text-white shadow-2xl backdrop-blur-xl sm:p-10"
            variants={panelReveal}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              Meet{" "}
              <span className="font-heading">Matt</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-white/92 sm:text-xl"
            >
              <span className="font-heading">Matt</span>’s Garden is built around
              one simple idea: show up on time, cut it clean, and leave every
              property looking better than we found it.
              <span className="font-heading"> Matt</span> is a seasoned lawn care
              pro who treats every yard like a front porch moment: the first
              impression your home makes.
            </motion.p>

            <motion.div
              variants={sectionStagger}
              className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
            >
              <motion.div variants={sectionStagger} className="space-y-5">
                <motion.div
                  variants={imageReveal}
                  className="overflow-hidden rounded-3xl border border-white/20 bg-black/25"
                >
                  <Image
                    src="/assets/images/matt.png"
                    alt="Matt, lawn care specialist"
                    width={900}
                    height={1100}
                    priority
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                  />
                </motion.div>

                <motion.div
                  variants={cardPop}
                  className="rounded-3xl border border-white/20 bg-black/35 p-6 text-white shadow-xl backdrop-blur-xl"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Quick Bio
                  </h2>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/90 sm:text-base">
                    <span className="font-heading">Matt</span> is known for his
                    clean edges, consistent mowing patterns, and the kind of
                    finish that makes a lawn look intentionally cared for.
                    Whether it’s your first cut of the season or ongoing weekly
                    maintenance, he’ll keep your yard looking sharp.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div variants={sectionStagger} className="space-y-8">
                <motion.section variants={fadeUp} className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    Experience that shows in the details
                  </h2>
                  <p className="font-sans leading-relaxed text-white/92">
                    With over a decade of hands on experience in residential lawn
                    maintenance, <span className="font-heading">Matt</span>
                    specializes in consistent mowing, crisp edging, and clean
                    finishes that last. He’s the person who notices where grass
                    builds up, where lines drift, and how seasonal height changes
                    affect your lawn.
                  </p>
                </motion.section>

                <motion.section variants={fadeUp} className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    Why clients trust us
                  </h2>
                  <motion.ul
                    variants={sectionStagger}
                    className="grid gap-3 font-sans text-sm leading-relaxed text-white/92 sm:text-base"
                  >
                    <motion.li
                      variants={cardPop}
                      className="rounded-2xl border border-white/20 bg-black/30 p-4"
                    >
                      Consistent scheduling and communication
                    </motion.li>
                    <motion.li
                      variants={cardPop}
                      className="rounded-2xl border border-white/20 bg-black/30 p-4"
                    >
                      Clean edging, clean lines, clean finish
                    </motion.li>
                    <motion.li
                      variants={cardPop}
                      className="rounded-2xl border border-white/20 bg-black/30 p-4"
                    >
                      Respect for your property (and your time)
                    </motion.li>
                  </motion.ul>
                </motion.section>

                <motion.section variants={fadeUp} className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    Our promise
                  </h2>
                  <motion.div variants={sectionStagger} className="grid gap-4 sm:grid-cols-2">
                    <motion.div
                      variants={cardPop}
                      className="rounded-2xl border border-white/20 bg-black/30 p-5"
                    >
                      <div className="text-sm font-semibold text-brand-100">
                        Consistency
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/90">
                        The same standards, every visit: clean cut, clean lines,
                        clean finish.
                      </p>
                    </motion.div>
                    <motion.div
                      variants={cardPop}
                      className="rounded-2xl border border-white/20 bg-black/30 p-5"
                    >
                      <div className="text-sm font-semibold text-brand-100">
                        Respect
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/90">
                        We treat your property like it’s our own and leave it
                        looking better than before.
                      </p>
                    </motion.div>
                    <motion.div
                      variants={cardPop}
                      className="rounded-2xl border border-white/20 bg-black/30 p-5"
                    >
                      <div className="text-sm font-semibold text-brand-100">
                        No pressure
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/90">
                        Clear communication and straightforward pricing, without
                        the hard sell.
                      </p>
                    </motion.div>
                    <motion.div
                      variants={cardPop}
                      className="rounded-2xl border border-white/20 bg-black/30 p-5"
                    >
                      <div className="text-sm font-semibold text-brand-100">
                        Craft
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/90">
                        We focus on the details that make a lawn look intentionally
                        cared for.
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.section>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
