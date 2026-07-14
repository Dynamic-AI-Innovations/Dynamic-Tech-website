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

const stages = [
  { label: "Explore", desc: "We track emerging technology and unmet needs across African markets." },
  { label: "Prototype", desc: "Small teams build fast, disposable prototypes to test real assumptions." },
  { label: "Incubate", desc: "What survives contact with users gets a team, a budget, and a runway." },
];

const InnovationLabHero = () => (
  <section className="section-padding py-24 lg:py-32">
    <div className="max-w-4xl mx-auto text-center">
      <FadeUp>
        <p className="label-caps text-accent mb-4">The Innovation Lab</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h1 className="heading-lg">
          Where research becomes a <span className="text-gradient-accent">first prototype.</span>
        </h1>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-6">
          The Lab is where Dynamics Technology explores what's next before the market asks for it —
          testing ideas against real African problems before a single customer is promised anything.
        </p>
      </FadeUp>
    </div>

    <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-16">
      {stages.map((s, i) => (
        <FadeUp key={s.label} delay={0.3 + i * 0.1}>
          <div className="glass-card rounded-2xl p-6 h-full">
            <p className="label-caps text-accent/70 mb-2">0{i + 1}</p>
            <h3 className="font-display font-semibold mb-2">{s.label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </FadeUp>
      ))}
    </div>
  </section>
);

export default InnovationLabHero;
