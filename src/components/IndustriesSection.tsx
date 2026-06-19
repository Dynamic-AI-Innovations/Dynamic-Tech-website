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

const industries = [
  { title: "Financial Services & Fintech", desc: "Digital banking, payment platforms, lending systems" },
  { title: "Education & EdTech", desc: "LMS platforms, school administration, e-learning" },
  { title: "Healthcare & MedTech", desc: "Patient management, telehealth, health informatics" },
  { title: "E-Commerce & Retail", desc: "Online marketplaces, inventory, fulfilment" },
  { title: "Logistics & Supply Chain", desc: "Fleet management, real-time tracking, route optimisation" },
  { title: "Agriculture & AgriTech", desc: "Precision agriculture IoT, farm management" },
  { title: "Government & Public Sector", desc: "Citizen portals, e-governance platforms" },
  { title: "Energy & Utilities", desc: "Smart metering, energy management systems" },
  { title: "Media & Entertainment", desc: "Content management, streaming platforms" },
];

const IndustriesSection = () => (
  <section className="section-padding py-24 lg:py-32 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">Sectors</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg">Industries We <span className="text-gradient-primary">Serve</span></h2>
      </FadeUp>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
        {industries.map((ind, i) => (
          <FadeUp key={ind.title} delay={0.12 + i * 0.05}>
            <div className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300">
              <h3 className="font-display font-semibold text-sm mb-1">{ind.title}</h3>
              <p className="text-xs text-muted-foreground">{ind.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
