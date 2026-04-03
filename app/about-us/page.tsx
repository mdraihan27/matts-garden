import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="relative h-screen h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-10 overflow-y-auto px-4 pb-20 pt-24 sm:px-10 sm:pt-32 md:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-3xl border border-white/20 bg-black/35 p-6 text-white shadow-2xl backdrop-blur-xl sm:p-10">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Meet{" "}
              <span className="font-heading">Matt</span>
            </h1>

            <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-white/92 sm:text-xl">
              <span className="font-heading">Matt</span>’s Garden is built around
              one simple idea: show up on time, cut it clean, and leave every
              property looking better than we found it.
              <span className="font-heading"> Matt</span> is a seasoned lawn care
              pro who treats every yard like a front porch moment: the first
              impression your home makes.
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-5">
                <div className="overflow-hidden rounded-3xl border border-white/20 bg-black/25">
                  <Image
                    src="/assets/images/matt.png"
                    alt="Matt, lawn care specialist"
                    width={900}
                    height={1100}
                    priority
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                  />
                </div>

                <div className="rounded-3xl border border-white/20 bg-black/35 p-6 text-white shadow-xl backdrop-blur-xl">
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
                </div>
              </div>

              <div className="space-y-8">
                <section className="space-y-3">
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
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    Why clients trust us
                  </h2>
                  <ul className="grid gap-3 font-sans text-sm leading-relaxed text-white/92 sm:text-base">
                    <li className="rounded-2xl border border-white/20 bg-black/30 p-4">
                      Consistent scheduling and communication
                    </li>
                    <li className="rounded-2xl border border-white/20 bg-black/30 p-4">
                      Clean edging, clean lines, clean finish
                    </li>
                    <li className="rounded-2xl border border-white/20 bg-black/30 p-4">
                      Respect for your property (and your time)
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    Our promise
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/20 bg-black/30 p-5">
                      <div className="text-sm font-semibold text-brand-100">
                        Consistency
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/90">
                        The same standards, every visit: clean cut, clean lines,
                        clean finish.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/20 bg-black/30 p-5">
                      <div className="text-sm font-semibold text-brand-100">
                        Respect
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/90">
                        We treat your property like it’s our own and leave it
                        looking better than before.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/20 bg-black/30 p-5">
                      <div className="text-sm font-semibold text-brand-100">
                        No pressure
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/90">
                        Clear communication and straightforward pricing, without
                        the hard sell.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/20 bg-black/30 p-5">
                      <div className="text-sm font-semibold text-brand-100">
                        Craft
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/90">
                        We focus on the details that make a lawn look intentionally
                        cared for.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
