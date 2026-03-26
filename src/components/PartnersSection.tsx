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
  { name: "African Kingdom Business Forum", sector: "Business & Trade", initials: "AK" },
  { name: "SwapConnect", sector: "Technology", initials: "SC" },
  { name: "ACCADI", sector: "Anglican Community", initials: "AC" },
  { name: "Nehi Construction", sector: "Construction & Infrastructure", initials: "NC" },
  { name: "Smarttouchfix", sector: "Tech Repairs & Solutions", initials: "SF" },
  { name: "JK. Murgan", sector: "Business Services", initials: "JM" },
  { name: "Thrivehill Studio", sector: "Creative & Design", initials: "TH" },
  { name: "TheDigitalLasisi", sector: "Digital Marketing", initials: "DL" },
  { name: "Queens Delight Concepts", sector: "Lifestyle & Commerce", initials: "QD" },
];

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-14">
        {partners.map((p, i) => (
          <FadeUp key={p.name} delay={0.15 + i * 0.05}>
            <div className="glass-card rounded-xl p-5 text-center hover:border-primary/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 font-display font-bold text-primary group-hover:bg-primary/15 transition-colors">
                {p.initials}
              </div>
              <p className="font-display font-medium text-sm">{p.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{p.sector}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
