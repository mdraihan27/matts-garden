"use client";

import Image from "next/image";

import { QuoteIcon } from "./QuoteIcon";
import { StarIcon } from "./StarIcon";

export function TestimonialCard(
  props: Readonly<{
    quote: string;
    name: string;
    location: string;
    initials: string;
    imageSrc?: string;
    rating: number;
    emphasis?: boolean;
  }>
) {
  const { quote, name, location, initials, imageSrc, rating, emphasis } = props;
  const clampedRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <div
      className={
        "relative h-full rounded-2xl border border-white/18 bg-white/10 px-6 pb-6 pt-7 text-left text-white shadow-xl backdrop-blur-lg" +
        (emphasis ? " shadow-2xl" : "")
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div className="text-brand-100/90">
          <QuoteIcon />
        </div>
        <div
          className="flex items-center gap-1"
          aria-label={`${clampedRating} out of 5 stars`}
        >
          {Array.from({ length: 5 }, (_, index) => {
            const filled = index < clampedRating;
            return (
              <span
                key={index}
                className={filled ? "text-brand-100" : "text-white/25"}
              >
                <StarIcon />
              </span>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        {quote}
      </p>

      <div className="mt-6 flex items-center gap-3">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name} profile photo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 font-semibold text-brand-100">
            {initials}
          </div>
        )}
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white sm:text-base">
            {name}
          </div>
          <div className="text-xs text-white/60 sm:text-sm">{location}</div>
        </div>
      </div>
    </div>
  );
}
