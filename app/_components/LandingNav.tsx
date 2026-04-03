import Image from "next/image";
import Link from "next/link";
import { MobileNavMenu } from "./MobileNavMenu";

export function LandingNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 w-full pl-[calc(env(safe-area-inset-left)+1rem)] pr-[calc(env(safe-area-inset-right)+1rem)] pt-[calc(env(safe-area-inset-top)+1rem)] lg:px-8 lg:pt-6">
      <div className="lg:hidden">
        <div className="flex w-full items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.svg"
              alt="Matt’s Garden logo"
              width={44}
              height={44}
              priority
              className="h-10 w-10 object-contain"
            />
            <span className="font-heading text-2xl font-semibold tracking-tight text-[#A4BE7B]">
              Matt’s Garden
            </span>
          </Link>

          <MobileNavMenu />
        </div>
      </div>

      <nav className="hidden w-full flex-col items-center gap-4 px-0 py-0 text-brand-800 sm:flex-row sm:items-center sm:justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-3">
          <Image
            src="/assets/images/logo.svg"
            alt="Matt’s Garden logo"
            width={52}
            height={52}
            priority
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          />
          <span className="text-3xl font-heading font-semibold tracking-tight text-[#A4BE7B] pb-1">
            Matt’s Garden
          </span>
        </Link>

        <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-auto sm:justify-end">
          <Link
            href="/"
            className="nav-link rounded-full px-4 py-2 text-sm font-semibold text-white hover:text-brand-100"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="nav-link rounded-full px-4 py-2 text-sm font-semibold text-white hover:text-brand-100"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="nav-link rounded-full px-4 py-2 text-sm font-semibold text-white hover:text-brand-100"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="nav-link rounded-full px-4 py-2 text-sm font-semibold text-white hover:text-brand-100"
          >
            Gallery
          </Link>
          <Link
            href="/book-site-visit"
            className="book-cta rounded-full border-2 border-brand-300 px-5 py-2 text-sm font-semibold text-white"
          >
            Book a Free Site Visit
          </Link>
        </div>
      </nav>
    </header>
  );
}
