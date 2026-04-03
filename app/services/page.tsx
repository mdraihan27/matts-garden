"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Axe,
} from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  strapline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  includes: string[];
  outcomes: string[];
};

const SERVICES: ServiceItem[] = [
  {
    id: "hedge-trimming",
    title: "Hedge Trimming",
    strapline: "Sharp lines. Healthy growth. Clean finish.",
    description:
      "Matt shapes and maintains hedges with careful, season aware trimming. The goal is a clean profile that suits your property while supporting long term plant health and steady regrowth.",
    imageSrc: "/assets/images/Hedge_Trimming.jpg",
    imageAlt: "Freshly trimmed hedge in a maintained garden",
    includes: [
      "Height and profile correction for overgrown hedges",
      "Precision edge shaping for front facing curb appeal",
      "Seasonal trims to support healthy, dense growth",
      "Full cleanup and green waste collection",
    ],
    outcomes: [
      "Cleaner property lines and stronger first impression",
      "Reduced overhang onto paths, drives, and neighboring space",
      "A tidy, intentional look that lasts between visits",
    ],
  },
  {
    id: "garden-clearance",
    title: "Garden Clearance",
    strapline: "From overgrown to ready to use.",
    description:
      "For neglected or overfilled outdoor spaces, Matt delivers complete garden clearance with an organized, step by step approach. We clear waste, restore access, and leave your garden ready for regular maintenance or a fresh redesign.",
    imageSrc: "/assets/images/before-after/Before_1.jpg",
    imageAlt: "Garden area before a full clearance",
    includes: [
      "Removal of weeds, debris, and unwanted growth",
      "Clearing dead planting and old garden material",
      "Path and border reset for cleaner structure",
      "Responsible collection and disposal planning",
    ],
    outcomes: [
      "Immediate visual reset for difficult outdoor spaces",
      "More usable space for family, seating, or new planting",
      "A practical baseline for ongoing maintenance",
    ],
  },
  {
    id: "small-tree-work",
    title: "Small Tree Work",
    strapline: "Safe, tidy, and proportionate to your space.",
    description:
      "Matt handles light tree pruning and small tree work for residential properties, focusing on shape control, branch reduction, and safety improvements. The work is practical, neat, and tailored to garden scale.",
    imageSrc: "/assets/images/before-after/After_2.jpg",
    imageAlt: "Maintained garden area after small tree work",
    includes: [
      "Low level branch pruning and crown tidy up",
      "Removal of problematic or dead small limbs",
      "Shape correction for balance and sunlight flow",
      "Site cleanup of all cut material",
    ],
    outcomes: [
      "Improved garden safety and clearer pathways",
      "Better light distribution across lawn and planting beds",
      "Healthier, cleaner looking small trees",
    ],
  },
  {
    id: "jet-washing",
    title: "Jet Washing",
    strapline: "Hard surfaces restored without the guesswork.",
    description:
      "Matt provides jet washing for patios, pathways, and driveways to remove built up grime, algae, and weather staining. We use controlled pressure and methodical passes to clean effectively while protecting the surface.",
    imageSrc: "/assets/images/before-after/After_3.jpg",
    imageAlt: "Cleaned outdoor hard surface after jet washing",
    includes: [
      "Patio, paving, and driveway pressure cleaning",
      "Moss and surface grime removal",
      "Edge to edge rinsing and finish check",
      "Optional recurring maintenance schedule",
    ],
    outcomes: [
      "Safer, less slippery outdoor walking areas",
      "Brighter, cleaner presentation for entrances and patios",
      "Longer-lasting appearance between deep cleans",
    ],
  },
];

const DELIVERY_STANDARDS = [
  "Clear quotes before work begins",
  "Reliable scheduling and communication",
  "Thorough cleanup after every visit",
  "Respectful, property first workmanship",
] as const;

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

export default function ServicesPage() {
  return (
    <main className="relative h-screen h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-10 overflow-y-auto px-4 pb-20 pt-24 sm:px-10 sm:pt-32 md:px-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 text-white">
          <motion.section
            className="rounded-3xl border border-white/20 bg-black/35 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
            variants={panelReveal}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-[0.35em] text-white/70"
            >
              SERVICES
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
            >
              Professional Outdoor Care By Matt
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-4xl font-sans text-base leading-relaxed text-white/92 sm:text-lg"
            >
              Every service is delivered with a practical, detail first workflow:
              assess, execute cleanly, and leave the space ready to use. From
              precision hedge shaping to full garden resets, Matt focuses on
              reliable workmanship and clear results.
            </motion.p>

            <motion.div
              variants={sectionStagger}
              className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {DELIVERY_STANDARDS.map((standard) => (
                <motion.div
                  key={standard}
                  variants={cardPop}
                  className="rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-sm font-medium text-white/92"
                >
                  <span>{standard}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="space-y-7">
            {SERVICES.map((service, index) => {
              const reverse = index % 2 !== 0;
              return (
                <motion.section
                  key={service.id}
                  className="rounded-3xl border border-white/20 bg-black/35 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
                  variants={panelReveal}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div
                    variants={sectionStagger}
                    className={
                      "grid gap-6 lg:grid-cols-2 lg:items-stretch " +
                      (reverse ? "" : "")
                    }
                  >
                    <motion.div
                      variants={imageReveal}
                      className={reverse ? "order-2 lg:order-1" : "order-2 lg:order-2"}
                    >
                      <motion.div
                        variants={imageReveal}
                        className="h-full overflow-hidden rounded-2xl border border-white/20 bg-black/25"
                      >
                        <Image
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          width={1200}
                          height={900}
                          className="h-full min-h-[260px] w-full object-cover"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      variants={sectionStagger}
                      className={reverse ? "order-1 lg:order-2" : "order-1 lg:order-1"}
                    >
                      <motion.div variants={fadeUp}>
                        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                          {service.title}
                        </h2>
                      </motion.div>
                      <motion.p
                        variants={fadeUp}
                        className="mt-2 text-sm font-semibold text-brand-100 sm:text-base"
                      >
                        {service.strapline}
                      </motion.p>
                      <motion.p
                        variants={fadeUp}
                        className="mt-4 font-sans leading-relaxed text-white/92"
                      >
                        {service.description}
                      </motion.p>

                      <motion.div
                        variants={sectionStagger}
                        className="mt-5 grid gap-4 sm:grid-cols-2"
                      >
                        <motion.div
                          variants={cardPop}
                          className="rounded-2xl border border-white/20 bg-black/30 p-4"
                        >
                          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/95">
                            Includes
                          </h3>
                          <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-sm text-white/90 marker:text-brand-100">
                            {service.includes.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          variants={cardPop}
                          className="rounded-2xl border border-white/20 bg-black/30 p-4"
                        >
                          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/95">
                            Outcomes
                          </h3>
                          <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-sm text-white/90 marker:text-brand-100">
                            {service.outcomes.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>

                      <motion.div variants={fadeUp} className="mt-6">
                        <Link
                          href={`/book-site-visit?service=${service.id}`}
                          className="book-cta inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-100 px-6 py-3 text-sm font-semibold text-white sm:w-auto sm:text-base"
                        >
                          Book This Service
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.section>
              );
            })}
          </div>

          <motion.section
            className="rounded-3xl border border-white/20 bg-black/35 p-6 text-center shadow-2xl backdrop-blur-xl sm:p-10"
            variants={panelReveal}
            initial="hidden"
            animate="show"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Need A Custom Combination?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-3xl font-sans text-base leading-relaxed text-white/92 sm:text-lg"
            >
              If your garden needs a mix of services, Matt can scope everything in
              one on site visit and build a practical plan around your property,
              timeline, and budget.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6">
              <Link
                href="/book-site-visit"
                className="book-cta inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-100 px-7 py-3 text-sm font-semibold text-white sm:w-auto sm:text-base"
              >
                Book a Free Site Visit
                <Axe className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
