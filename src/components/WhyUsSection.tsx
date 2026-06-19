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

const reasons = [
  { title: "Innovation at the Core", desc: "Every engagement starts with the right problem." },
  { title: "Africa-Based, Globally Capable", desc: "World-class standards with genuine African market intelligence." },
  { title: "Full-Spectrum Capability", desc: "Strategy, design, software, AI, IoT, infrastructure — one roof." },
  { title: "Radically Client-Centric", desc: "We own outcomes, not just deliverables." },
  { title: "Agile & Responsive", desc: "The speed of a startup, the rigour of an enterprise consultancy." },
  { title: "Radical Transparency", desc: "No hidden costs. No surprises. Full visibility from day one." },
  { title: "Long-Term Partnership", desc: "We stay. Relationships that strengthen over years." },
  { title: "Competitive Investment", desc: "World-class consulting at rates that make sense for African business." },
];

const WhyUsSection = () => (
  <section id="why-us" className="section-padding py-24 lg:py-32 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">The Dynamics Difference</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg">Why choose <span className="text-gradient-primary">Dynamics?</span></h2>
      </FadeUp>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-14">
        {reasons.map((r, i) => (
          <FadeUp key={r.title} delay={0.15 + i * 0.06}>
            <div className="glass-card rounded-xl p-4 md:p-6 h-full hover:border-primary/30 transition-all duration-300">
              <h3 className="font-display font-semibold text-sm md:text-base mb-1.5 md:mb-2">{r.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
