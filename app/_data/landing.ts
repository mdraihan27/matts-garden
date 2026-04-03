export const HERO_SLIDES = [
  {
    id: "precision",
    title: ["Precision Lawn Care", "With A Friendly Touch"],
    subtitle:
      "Reliable mowing that keeps your yard fresh and naturally inviting.",
  },
  {
    id: "tidy",
    title: ["Simple Garden Care", "Done Properly"],
    subtitle: "On time visits, straightforward service, and a tidy finish every time.",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "jenny",
    imageSrc: "/assets/images/reviews/review%20(1).png",
    quote:
      "Matt’s Garden has been mowing our lawn for months. Always on time, crisp edges, and they leave everything spotless. It’s the easiest part of our week.",
    name: "Jenny Wilson",
    location: "St Albans, Hertfordshire",
    initials: "JW",
    rating: 5,
  },
  {
    id: "esther",
    imageSrc: "/assets/images/reviews/review%20(2).png",
    quote:
      "Booked a free site visit and got a simple, no pressure plan. The weekly mow keeps our yard looking fresh, and the cleanup is genuinely great.",
    name: "Esther Howard",
    location: "Watford, Hertfordshire",
    initials: "EH",
    rating: 5,
  },
  {
    id: "wade",
    imageSrc: "/assets/images/reviews/review%20(3).png",
    quote:
      "Fast, friendly, and consistent. They notice the little things, like trimming around beds and blowing off the driveway. Our curb appeal is back.",
    name: "Wade Warren",
    location: "Hemel Hempstead, Hertfordshire",
    initials: "WW",
    rating: 5,
  },
  {
    id: "ava",
    imageSrc: "/assets/images/reviews/review%20(4).png",
    quote:
      "Super easy to work with. Quick communication, tidy finish, and the lawn looks sharp every single time.",
    name: "Ava Martinez",
    location: "Harpenden, Hertfordshire",
    initials: "AM",
    rating: 5,
  },
  {
    id: "noah",
    imageSrc: "/assets/images/reviews/review%20(5).png",
    quote:
      "We switched to Matt’s Garden for weekly mowing and it’s been smooth since day one. Clean edges and no mess left behind.",
    name: "Noah Kim",
    location: "Hitchin, Hertfordshire",
    initials: "NK",
    rating: 5,
  },
  {
    id: "mia",
    imageSrc: "/assets/images/reviews/review%20(6).png",
    quote:
      "Respectful, friendly crew and a consistent schedule. Our yard finally looks like we actually have time.",
    name: "Mia Johnson",
    location: "Welwyn Garden City, Hertfordshire",
    initials: "MJ",
    rating: 4,
  },
  {
    id: "logan",
    imageSrc: "/assets/images/reviews/review%20(7).png",
    quote:
      "They caught a few problem spots and adjusted the mowing height for the season. Small details, big difference.",
    name: "Logan Parker",
    location: "Stevenage, Hertfordshire",
    initials: "LP",
    rating: 5,
  },
  {
    id: "zoe",
    imageSrc: "/assets/images/reviews/review%20(8).png",
    quote:
      "Fast service with a calm, no pressure vibe. The lawn is even, the lines look great, and the cleanup is solid.",
    name: "Zoe Carter",
    location: "Hatfield, Hertfordshire",
    initials: "ZC",
    rating: 4,
  },
  {
    id: "ethan",
    imageSrc: "/assets/images/reviews/review%20(9).png",
    quote:
      "Booked a free site visit and got a straightforward quote. The ongoing mowing has been reliable and stress free.",
    name: "Ethan Brooks",
    location: "Hertford, Hertfordshire",
    initials: "EB",
    rating: 5,
  },
  {
    id: "sophia",
    imageSrc: "/assets/images/reviews/review%20(10).png",
    quote:
      "Professional results without the hard sell. Our front yard looks clean and welcoming, week after week.",
    name: "Sophia Nguyen",
    location: "Bishops Stortford, Hertfordshire",
    initials: "SN",
    rating: 5,
  },
] as const;

export type HeroSlide = (typeof HERO_SLIDES)[number];
export type Testimonial = (typeof TESTIMONIALS)[number];
