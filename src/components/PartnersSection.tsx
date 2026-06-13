import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const partners = [
  { name: "African Kingdom Business Forum", sector: "Business & Trade",          initials: "AK" },
  { name: "SwapConnect",                    sector: "Technology",                 initials: "SC" },
  { name: "ACCADI",                         sector: "Anglican Community",         initials: "AC" },
  { name: "Nehi Construction",              sector: "Construction & Infrastructure", initials: "NC" },
  { name: "Smarttouchfix",                  sector: "Tech Repairs & Solutions",   initials: "SF" },
  { name: "JK. Murgan",                     sector: "Business Services",          initials: "JM" },
  { name: "Thrivehill Studio",              sector: "Creative & Design",          initials: "TH" },
  { name: "TheDigitalLasisi",               sector: "Digital Marketing",          initials: "DL" },
  { name: "Queens Delight Concepts",        sector: "Lifestyle & Commerce",       initials: "QD" },
];

const PartnerCard = ({ p }: { p: typeof partners[number] }) => (
  <div className="inline-flex flex-shrink-0 items-center gap-3 glass-card rounded-xl px-5 py-4 mx-3 min-w-[210px] hover:border-primary/30 transition-colors duration-300">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm flex-shrink-0">
      {p.initials}
    </div>
    <div className="min-w-0">
      <p className="font-display font-semibold text-sm leading-tight truncate">{p.name}</p>
      <p className="text-xs text-muted-foreground mt-0.5 truncate">{p.sector}</p>
    </div>
  </div>
);

const edgeFade = {
  maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
} as React.CSSProperties;

const PartnersSection = () => (
  <section id="partners" className="py-24 lg:py-32">
    <div className="section-padding max-w-6xl mx-auto mb-14">
      <FadeUp>
        <p className="label-caps text-primary mb-4">Ecosystem</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg">Our Trusted <span className="text-gradient-primary">Partners</span></h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p className="body-lg text-muted-foreground max-w-2xl mt-4">
          A growing network of forward-thinking organisations who share our vision for Africa's digital future.
        </p>
      </FadeUp>
    </div>

    {/* Row 1 — scrolls left */}
    <div className="overflow-hidden" style={edgeFade}>
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{ animationDuration: "40s" }}
      >
        {[...partners, ...partners].map((p, i) => (
          <PartnerCard key={i} p={p} />
        ))}
      </div>
    </div>

    {/* Row 2 — scrolls right */}
    <div className="overflow-hidden mt-4" style={edgeFade}>
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{ animationDuration: "34s", animationDirection: "reverse" }}
      >
        {[...partners, ...partners].map((p, i) => (
          <PartnerCard key={i} p={p} />
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
