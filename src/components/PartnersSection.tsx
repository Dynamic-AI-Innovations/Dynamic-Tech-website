import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import logoServiceLinka  from "@/assets/partners/servicelinka.png";
import logoAcadi         from "@/assets/partners/acadi.png";
import logoSwapConnect   from "@/assets/partners/swapconnect.png";
import logoNehi          from "@/assets/partners/nehi.png";
import logoIntercessors  from "@/assets/partners/intercessors-for-africa.png";
import logoJkMurgan      from "@/assets/partners/jk-murgan.jpg";
import logoApostolic     from "@/assets/partners/apostolic-altar.jpg";
import logoSmartTouchFix   from "@/assets/partners/smarttouchfix.png";
import logoThrivehill      from "@/assets/partners/thrivehill.png";
import logoDigitalLasisi   from "@/assets/partners/thedigitallasisi.png";
import logoQueensDelight   from "@/assets/partners/queens-delight.png";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const partners: { name: string; sector: string; initials: string; logo?: string }[] = [
  { name: "ServiceLinka",                   sector: "Service Marketplace",           initials: "SL", logo: logoServiceLinka },
  { name: "SwapConnect",                    sector: "Technology",                    initials: "SC", logo: logoSwapConnect },
  { name: "ACCADI",                         sector: "Anglican Community Dev",        initials: "AC", logo: logoAcadi },
  { name: "Nehi Constructs Limited",        sector: "Construction & Infrastructure", initials: "NC", logo: logoNehi },
  { name: "Intercessors for Africa",        sector: "Faith & Community",             initials: "IF", logo: logoIntercessors },
  { name: "JK. Murgan",                     sector: "Business Services",             initials: "JK", logo: logoJkMurgan },
  { name: "Apostolic Altar Christian Net.", sector: "Faith & Community",             initials: "AA", logo: logoApostolic },
  { name: "SmartTouchFix",                  sector: "Tech Repairs & Solutions",      initials: "SF", logo: logoSmartTouchFix },
  { name: "Thrivehill Studio",              sector: "Creative & Design",             initials: "TH", logo: logoThrivehill },
  { name: "TheDigitalLasisi",               sector: "Digital Marketing",             initials: "DL", logo: logoDigitalLasisi },
  { name: "Queens Delight Concepts",        sector: "Lifestyle & Commerce",          initials: "QD", logo: logoQueensDelight },
];

const PartnerCard = ({ p, delay }: { p: typeof partners[number]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay }}
    className="glass-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center h-36 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
  >
    {p.logo ? (
      <img
        src={p.logo}
        alt={p.name}
        className="max-h-16 max-w-[140px] object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
      />
    ) : (
      <>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-base group-hover:bg-primary/20 transition-colors duration-300">
          {p.initials}
        </div>
        <p className="text-xs font-medium text-muted-foreground leading-tight line-clamp-2">{p.name}</p>
      </>
    )}
  </motion.div>
);

const PartnersSection = () => (
  <section id="partners" className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-14">
        {partners.map((p, i) => (
          <PartnerCard key={p.name} p={p} delay={0.08 + i * 0.05} />
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
