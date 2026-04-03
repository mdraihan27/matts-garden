"use client";

import { useState } from "react";
import { Mail, MapPinHouse, Phone } from "lucide-react";

export default function BookSiteVisitPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="relative h-screen h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-10 overflow-y-auto px-4 pb-20 pt-24 sm:px-10 sm:pt-32 md:px-16">
        <div className="mx-auto w-full max-w-6xl text-white">
          <section className="rounded-3xl border border-white/20 bg-black/35 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            <p className="text-xs font-semibold tracking-[0.35em] text-white/70">
              BOOK A FREE SITE VISIT
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell Us About Your Property
            </h1>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-white/92 sm:text-lg">
              Fill in your details and we will arrange a quick on site visit to
              assess your garden and provide a clear quote.
            </p>

            <div className="mt-8 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/20 bg-black/35 p-5 sm:p-6">
                {!submitted ? (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold text-white/90">
                          Full Name
                        </span>
                        <input
                          required
                          name="fullName"
                          type="text"
                          placeholder="Enter your name"
                          className="rounded-xl border border-white/25 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-brand-100/70"
                        />
                      </label>

                      <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold text-white/90">
                          Phone Number
                        </span>
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="rounded-xl border border-white/25 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-brand-100/70"
                        />
                      </label>
                    </div>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-semibold text-white/90">
                        Email Address
                      </span>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-xl border border-white/25 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-brand-100/70"
                      />
                    </label>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-semibold text-white/90">
                        Street Address
                      </span>
                      <input
                        required
                        name="address"
                        type="text"
                        placeholder="House number and street"
                        className="rounded-xl border border-white/25 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-brand-100/70"
                      />
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold text-white/90">
                          City
                        </span>
                        <input
                          required
                          name="city"
                          type="text"
                          placeholder="City"
                          className="rounded-xl border border-white/25 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-brand-100/70"
                        />
                      </label>

                      <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold text-white/90">
                          Postcode
                        </span>
                        <input
                          required
                          name="postcode"
                          type="text"
                          placeholder="Postcode"
                          className="rounded-xl border border-white/25 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-brand-100/70"
                        />
                      </label>
                    </div>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-semibold text-white/90">
                        Notes (optional)
                      </span>
                      <textarea
                        name="notes"
                        rows={4}
                        placeholder="Tell us about your garden or service needs"
                        className="resize-none rounded-xl border border-white/25 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-brand-100/70"
                      />
                    </label>

                    <button
                      type="submit"
                      className="book-cta inline-flex w-full justify-center rounded-full border-2 border-brand-100 px-7 py-3 text-sm font-semibold text-white sm:w-auto sm:text-base"
                    >
                      Submit Request
                    </button>
                  </form>
                ) : (
                  <div className="rounded-2xl border border-brand-100/35 bg-brand-800/35 p-5">
                    <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                      Submitted Successfully
                    </h2>
                    <p className="mt-2 font-sans leading-relaxed text-white/90">
                      Thanks for your request. We will contact you soon to confirm
                      your site visit.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-5 w-full rounded-full border border-white/35 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto"
                    >
                      Submit another response
                    </button>
                  </div>
                )}
              </div>

              <aside className="space-y-5">
                <div className="rounded-2xl border border-white/20 bg-black/35 p-6">
                  <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                    Reach Matt Directly
                  </h2>
                  <p className="mt-3 font-sans text-white/90">
                    Prefer to call or email first? Use the contact details below.
                  </p>

                  <div className="mt-5 space-y-4 font-sans text-sm text-white/90 sm:text-base">
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" />
                      <div>
                        <div className="text-white/70">Phone</div>
                        <div className="break-words font-semibold">+1 (555) 287-4912</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" />
                      <div>
                        <div className="text-white/70">Email</div>
                        <div className="break-words font-semibold">matt@mattsgarden.example</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPinHouse className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" />
                      <div>
                        <div className="text-white/70">Service Area</div>
                        <div className="font-semibold">Greater Metro Residential Zones</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/20 bg-black/35 p-6">
                  <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
                    What Happens Next?
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-sm text-white/90 marker:text-brand-100 sm:text-base">
                    <li>We review your request details.</li>
                    <li>Matt contacts you to confirm timing.</li>
                    <li>On site assessment and quote follow.</li>
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
