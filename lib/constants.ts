// Business constants for LeCroy & Owens Handyman & Remodeling Co.
// Single source of truth for NAP, services, locations, and SEO content.
// Update here and it flows to schema, pages, and components.

export const BUSINESS = {
  name: "LeCroy & Owens Handyman & Remodeling Co.",
  shortName: "LeCroy & Owens Handyman",
  tagline: "Quality craftsmanship you can count on — from decks and porches to full home remodels.",
  phone: "(864)606-4438",
  phoneHref: "tel:8646064438",
  email: "contact@lecroy-owens.com", // Update this to your real email if different
  address: {
    street: "Spartanburg, SC", // Update with full street address for better schema & GBP
    locality: "Spartanburg",
    region: "SC",
    postalCode: "", // Add if you have a mailing/office zip
    country: "US",
  },
  yearsExperience: "10+",
  license: "", // Removed as requested
  serviceRadius: "50-100 miles",
  description:
    "Professional handyman, carpentry, deck building, siding, flooring, bathroom and home remodeling, electrical, and maintenance services serving Spartanburg and the Upstate of South Carolina.",
} as const;

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  keywords: string[];
  image?: string; // path under /images/work/ or public
};

export const SERVICES: Service[] = [
  {
    slug: "decks-porches",
    title: "Decks & Porches",
    shortDesc: "Custom wooden decks, front porches, back porches, and outdoor living spaces built to last.",
    longDesc:
      "Design and build beautiful, code-compliant decks and porches. From simple platforms to multi-level entertaining spaces with stairs, railings, and integrated features. We use quality pressure-treated lumber and fasteners for South Carolina weather.",
    keywords: ["deck builder", "porch builder", "wooden deck", "front porch", "back porch", "outdoor living"],
    image: "image-d7352d30-f24f-4702-9307-99f41702a9af.jpg",
  },
  {
    slug: "siding",
    title: "Siding Installation & Repair",
    shortDesc: "New siding, repairs, board & batten, and full exterior refreshes that protect your home.",
    longDesc:
      "Expert siding work including full replacements, repairs, and upgrades. We handle vinyl, fiber cement, wood, and board & batten styles with proper flashing, insulation, and weatherproofing for the Upstate climate.",
    keywords: ["siding repair", "siding installation", "board and batten", "exterior siding", "house siding"],
    image: "image-71e08b1f-79a0-438c-b4ac-45b567e7935f.jpg",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortDesc: "Complete bathroom updates — showers, vanities, tile, fixtures, and accessibility improvements.",
    longDesc:
      "From simple refreshes to full gut renovations. We handle plumbing coordination, waterproofing, tile work, vanity and cabinet installation, lighting, and finishes that add real value to your home.",
    keywords: ["bathroom remodel", "bathroom renovation", "shower remodel", "tile work"],
    image: undefined, // will use another photo or generic
  },
  {
    slug: "flooring",
    title: "Flooring",
    shortDesc: "Hardwood, LVP, laminate, tile, and subfloor repairs installed cleanly and durably.",
    longDesc:
      "Professional flooring installation and repair. We prep properly, match transitions, and deliver finished floors that look great and hold up in busy households.",
    keywords: ["flooring installation", "hardwood floors", "LVP flooring", "tile flooring"],
    image: undefined,
  },
  {
    slug: "house-remodeling",
    title: "Home Remodeling",
    shortDesc: "Kitchen, living spaces, additions, and whole-home updates done right the first time.",
    longDesc:
      "Thoughtful home remodeling focused on function, flow, and lasting quality. We coordinate trades as needed and communicate clearly throughout the project.",
    keywords: ["home remodeling", "house remodel", "kitchen remodel", "room additions"],
    image: undefined,
  },
  {
    slug: "electrical",
    title: "Electrical Wiring & Repairs",
    shortDesc: "Troubleshooting, outlets, switches, lighting, panel work, and general electrical maintenance.",
    longDesc:
      "Safe, code-compliant electrical repairs and upgrades. We diagnose issues quickly and leave your home clean and safe. (Licensed electrical work performed per SC regulations.)",
    keywords: ["electrical repair", "electrician near me", "outlet installation", "lighting", "wiring"],
    image: undefined,
  },
  {
    slug: "sheds-outbuildings",
    title: "Sheds & Outbuildings",
    shortDesc: "Custom sheds, storage buildings, workshops, and small structures built on your property.",
    longDesc:
      "Well-built sheds and outbuildings using proper foundations, framing, roofing, and finishes. Great for storage, hobbies, or workshop space.",
    keywords: ["shed builder", "storage shed", "outbuilding", "workshop"],
    image: undefined,
  },
  {
    slug: "general-handyman",
    title: "General Handyman & Maintenance",
    shortDesc: "Repairs, installations, assemblies, and the long list of jobs that keep a house running smoothly.",
    longDesc:
      "The everyday and not-so-everyday fixes: door repairs, drywall patches, painting, hardware installs, fence fixes, gutter work, and more. One call solves most problems.",
    keywords: ["handyman", "handyman near me", "home maintenance", "home repair"],
    image: undefined,
  },
];

export const LOCATIONS = [
  "Spartanburg",
  "Boiling Springs",
  "Inman",
  "Greer",
  "Greenville",
  "Gaffney",
  "Chesnee",
  "Union",
  "Landrum",
  "Duncan",
  "Moore",
  "Roebuck",
  "Wellford",
  "Lyman",
];

export const SERVICE_AREA_DESCRIPTION =
  "Proudly serving Spartanburg County and the greater Upstate of South Carolina — typically within a 50-100 mile radius depending on project scope.";

// Production domain - update this when you assign the real domain
export const DOMAIN = "lecroy-owens.com";
export const SITE_URL = `https://${DOMAIN}`;

// Contact form - wired to Formspree
export const FORM_ENDPOINT = "https://formspree.io/f/xojznlga";

// Placeholder testimonials (clearly marked for easy replacement)
export const TESTIMONIALS = [
  {
    quote:
      "They built us a beautiful deck with stairs and railings that completely transformed our backyard. On time, clean job site, and the price was fair. Highly recommend for any deck or porch work.",
    name: "Mike R.",
    location: "Spartanburg, SC",
  },
  {
    quote:
      "Replaced the siding on the entire side of our house after storm damage. They matched the existing as close as possible and the house looks brand new again. Professional from start to finish.",
    name: "Sarah T.",
    location: "Boiling Springs, SC",
  },
  {
    quote:
      "Needed several handyman repairs and a bathroom update before selling. They knocked everything out in a week and helped us get top dollar. Will use again for our next house.",
    name: "James & Linda K.",
    location: "Greer, SC",
  },
];

// Full list of project photos for gallery and homepage featured work.
// Updated with multiple images per job for lightbox carousels where specified.
// Removed the general license badge as requested. New phone number.
export const WORK_PHOTOS = [
  {
    images: [
      { src: "/images/work/image-d7352d30-f24f-4702-9307-99f41702a9af.jpg", caption: "Main deck view with railings and stairs" },
      { src: "/images/work/deck-build-1.jpg", caption: "Deck construction detail" },
      { src: "/images/work/deck-build-2.jpg", caption: "Deck framing and supports" },
      { src: "/images/work/deck-build-3.jpg", caption: "Deck installation in progress" },
      { src: "/images/work/deck-build-4.jpg", caption: "Completed deck section" },
    ],
    caption: "Custom wooden deck with railings and stairs — full backyard transformation",
    category: "Decks & Porches",
  },
  {
    images: [
      { src: "/images/work/image-71e08b1f-79a0-438c-b4ac-45b567e7935f.jpg", caption: "Professional siding installation and repair on two-story home" },
      { src: "/images/work/siding-house-ladders.jpg", caption: "Siding work with ladders on gray house exterior" },
    ],
    caption: "Professional siding installation and repair on two-story home — includes window installation",
    category: "Siding",
  },
  {
    images: [
      { src: "/images/work/image-be24b087-cebd-4846-9920-32698e20ca91.jpg", caption: "Board & batten siding refresh with clean exterior lines" },
    ],
    caption: "Board & batten siding refresh with clean exterior lines",
    category: "Siding",
  },
  {
    src: "/images/work/bedroom-barn-doors-reclaimed.jpg",
    caption: "Speckled epoxy garage floor coating — durable, easy-clean finish",
    category: "Flooring",
  },
  {
    images: [
      { src: "/images/work/bedroom-rustic-wood-bed.jpg", caption: "Custom green marble walk-in shower with rain head and recessed niche" },
      { src: "/images/work/bathroom-shower-before.jpg", caption: "Bathroom remodel - before" },
      { src: "/images/work/bathroom-shower-after.jpg", caption: "Bathroom remodel - after with new shower" },
    ],
    caption: "Custom green marble walk-in shower with rain head and recessed niche",
    category: "Bathroom Remodeling",
  },
  {
    src: "/images/work/kitchen-white-cabinets.jpg",
    caption: "White shaker kitchen cabinets and marble tile flooring installation",
    category: "Flooring",
  },
  {
    src: "/images/work/image-9a457e3c-8c2d-4100-87cc-dd2753d871f7.jpg",
    caption: "Deck and porch construction detail",
    category: "Decks & Porches",
  },
];
