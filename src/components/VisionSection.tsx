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

const visionStats = [
  { value: "1.4B", desc: "People on the world's youngest continent" },
  { value: "$180B+", desc: "Projected African digital economy" },
  { value: "600M+", desc: "Mobile internet users across Africa" },
  { value: "Lagos", desc: "Africa's tech capital, our home" },
];

const VisionSection = () => (
  <section id="vision" className="section-padding py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="max-w-6xl mx-auto relative z-10">
      <FadeUp>
        <p className="label-caps text-primary mb-4">Our North Star</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg max-w-3xl">
          Building Africa's <span className="text-gradient-accent italic">Silicon Valley</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="body-lg text-muted-foreground max-w-3xl mt-6">
          Not by replicating what exists elsewhere — but by building something uniquely African, with homegrown innovation and world-class engineering.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <blockquote className="mt-8 pl-6 border-l-2 border-accent/40">
          <p className="text-lg italic text-muted-foreground">
            "We are not just building software. We are building a continent's digital future."
          </p>
        </blockquote>
      </FadeUp>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {visionStats.map((s, i) => (
          <FadeUp key={s.value} delay={0.3 + i * 0.1}>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-accent">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-3">{s.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
