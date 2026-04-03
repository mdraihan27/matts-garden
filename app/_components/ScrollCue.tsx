"use client";

export function ScrollCue(
  props: Readonly<{
    activeSlide: number;
    maxSlideIndex: number;
    go: (delta: 1 | -1) => void;
  }>
) {
  const { activeSlide, maxSlideIndex, go } = props;

  return (
    <div className="absolute bottom-[calc(env(safe-area-inset-bottom)+2.5rem)] left-1/2 z-20 -translate-x-1/2 pointer-events-none">
      <div className="mx-auto flex h-8 items-stretch justify-center sm:h-16"></div>
      <button
        type="button"
        aria-label={
          activeSlide >= maxSlideIndex ? "Scroll up" : "Scroll to next section"
        }
        onClick={() => go(activeSlide >= maxSlideIndex ? -1 : 1)}
        className="scroll-arrow pointer-events-auto mx-auto flex items-center justify-center cursor-pointer rounded-full flex justify-center items-center p-4 bg-white/10 blur-2xl"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-8 w-8 sm:h-9 sm:w-9"
        >
          {activeSlide >= maxSlideIndex ? (
            <path
              d="M18 13.5L12 7.5L6 13.5"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M6 10.5L12 16.5L18 10.5"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>
    </div>
  );
}
