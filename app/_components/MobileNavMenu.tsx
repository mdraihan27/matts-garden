"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
] as const;

export function MobileNavMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    function handlePopState() {
      setOpen(false);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-100/70"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div className="fixed inset-0 z-30 overscroll-contain backdrop-blur-2xl lg:hidden ">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />

          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            className="absolute left-4 right-4 top-[calc(env(safe-area-inset-top)+5rem)] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl border border-white/20 bg-green-950 p-5 text-white shadow-2xl backdrop-blur-lg"
          >
            <div className="flex items-center justify-between gap-4 ">
              <div>
                <div className="text-xs font-semibold tracking-[0.35em] text-white/70">
                  MENU
                </div>
                <div className="mt-2 font-heading text-2xl font-semibold tracking-tight">
                  Navigate
                </div>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-100/70"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={
                      "block rounded-2xl border border-white/15 px-4 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-100/70" +
                      (isActive
                        ? " bg-white/12 text-brand-100"
                        : " bg-white/5 text-white hover:bg-white/10")
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/book-site-visit"
                onClick={() => setOpen(false)}
                className="book-cta mt-3 inline-flex w-full items-center justify-center rounded-full border-2 border-brand-300 px-6 py-3 text-base font-semibold text-white"
              >
                Book a Free Site Visit
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
