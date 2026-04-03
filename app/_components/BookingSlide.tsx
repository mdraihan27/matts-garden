"use client";

import Link from "next/link";

export function BookingSlide() {
  return (
    <div className="w-full max-w-6xl px-4 py-10 text-center text-white sm:px-10 sm:py-12">
      <p className="font-heading text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">
        Not convinced yet?
      </p>
      <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
        Get A Free Quote On Site
      </h2>
      <p className="mx-auto mt-6 max-w-3xl font-sans text-base leading-relaxed text-white/85 sm:text-xl">
        Matt will stop by, take a quick look, and give you a clear quote. No
        pressure. Just honest pricing and an easy plan.
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          href="/book-site-visit"
          className="book-cta rounded-full border-2 border-brand-100 px-7 py-3 text-sm font-semibold text-white sm:text-base"
        >
          Book a Free Site Visit
        </Link>
      </div>
    </div>
  );
}
