"use client";

import Image from "next/image";
import { useId, useState } from "react";

export function BeforeAfterSlider(
  props: Readonly<{
    beforeSrc: string;
    afterSrc: string;
    beforeAlt: string;
    afterAlt: string;
    beforeLabel?: string;
    afterLabel?: string;
  }>
) {
  const {
    beforeSrc,
    afterSrc,
    beforeAlt,
    afterAlt,
    beforeLabel = "Before",
    afterLabel = "After",
  } = props;

  const [position, setPosition] = useState(50);
  const sliderId = useId();

  return (
    <div className="relative h-[420px] sm:h-[520px] lg:h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/20 bg-black/30">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 920px"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          aria-hidden="true"
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 920px"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-black/45 text-white backdrop-blur sm:h-10 sm:w-10"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <div className="flex h-full items-center justify-center text-xs font-semibold tracking-wide">
            <>||</>
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-white/90 backdrop-blur">
          {beforeLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-brand-100/45 bg-brand-800/45 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-brand-100 backdrop-blur">
          {afterLabel}
        </span>
      </div>

      <label htmlFor={sliderId} className="sr-only">
        Drag to compare before and after images
      </label>
      <input
        id={sliderId}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-x-0 bottom-0 top-0 z-10 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        aria-label="Before and after image comparison slider"
      />
    </div>
  );
}
