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

const steps = [
  { num: "01", title: "Problem Definition & Framing", desc: "Articulate the real challenge, not just the symptom." },
  { num: "02", title: "Human-Centred Research", desc: "User interviews and market research grounded in real needs." },
  { num: "03", title: "Ideation Workshops", desc: "Facilitated sessions to surface and stress-test the best concepts." },
  { num: "04", title: "Solution Architecture", desc: "Platform, framework, and integration decisions — ready to build." },
  { num: "05", title: "Feasibility & Business Case", desc: "Technical feasibility, commercial viability, and ROI — evidence-based." },
  { num: "06", title: "Prototype & PoC", desc: "Rapid prototypes that validate with real users before full build." },
  { num: "07", title: "Roadmap & Blueprint", desc: "Phased milestones from validated concept to live product." },
];

const CoreServiceSection = () => (
  <section id="core-service" className="section-padding py-24 lg:py-32 bg-secondary/20">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-accent mb-4">Core Service</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg max-w-3xl">
          Ideation & Solution <span className="text-gradient-accent">Development</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="body-lg text-muted-foreground max-w-2xl mt-4">
          Before we write a single line of code — we think. Deeply, rigorously, and with your interests at the centre of every decision.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {steps.map((s, i) => (
          <FadeUp key={s.num} delay={0.2 + i * 0.08}>
            <div className="glass-card rounded-xl p-6 h-full hover:border-accent/30 transition-all duration-300">
              <p className="label-caps text-accent/60 mb-4">{s.num}</p>
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default CoreServiceSection;
