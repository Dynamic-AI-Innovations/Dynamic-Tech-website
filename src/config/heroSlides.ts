export type HeroSlide = {
  id: string;
  image: string;
  eyebrow: string;
  headlinePrefix: string;
  headlineAccent: string;
  subtext: string;
  primaryCta: { label: string; action: "modal" | { to: string } };
  secondaryCta: { label: string; action: { scrollTo: string } | { to: string } };
};

export const heroSlides: HeroSlide[] = [
  {
    id: "innovation",
    image: "/assets/hero/slide1-innovation.webp",
    eyebrow: "Building Africa's Silicon Valley",
    headlinePrefix: "Ideas become industries, engineering becomes ",
    headlineAccent: "impact.",
    subtext:
      "We are not a software company, an agency, or a consultancy. We are the ecosystem where research becomes product — engineered from Africa, for the world.",
    primaryCta: { label: "Enter the Ecosystem", action: "modal" },
    secondaryCta: { label: "What We're Building", action: { scrollTo: "ecosystem" } },
  },
  {
    id: "founders",
    image: "/assets/hero/slide2-founders.webp",
    eyebrow: "Founders Launch",
    headlinePrefix: "Where African startups become ",
    headlineAccent: "global companies.",
    subtext: "A venture studio behind you from first idea to funded, scaling company.",
    primaryCta: { label: "Start with Ideation", action: "modal" },
    secondaryCta: { label: "Explore Venture Studio", action: { to: "/venture-studio" } },
  },
  {
    id: "governments",
    image: "/assets/hero/slide3-governments.webp",
    eyebrow: "Governments Modernize",
    headlinePrefix: "Building ",
    headlineAccent: "smarter governments.",
    subtext: "Digital public infrastructure and industry modernisation, engineered for scale.",
    primaryCta: { label: "Start a Conversation", action: "modal" },
    secondaryCta: { label: "See Government Solutions", action: { to: "/services" } },
  },
  {
    id: "industries",
    image: "/assets/hero/slide4-industries.webp",
    eyebrow: "Industries Transform",
    headlinePrefix: "Engineering the future of ",
    headlineAccent: "industry.",
    subtext: "AI, automation, IoT, and infrastructure — built to world-class engineering standards.",
    primaryCta: { label: "Start a Project", action: "modal" },
    secondaryCta: { label: "Explore Engineering", action: { to: "/services" } },
  },
  {
    id: "research",
    image: "/assets/hero/slide5-research.webp",
    eyebrow: "Research → Engineering → Products",
    headlinePrefix: "Research that becomes ",
    headlineAccent: "real products.",
    subtext: "Whitepapers, prototypes, and technology foresight — turned into shipped, market-ready products.",
    primaryCta: { label: "Start with Ideation", action: "modal" },
    secondaryCta: { label: "Visit Research Institute", action: { to: "/research-institute" } },
  },
];
