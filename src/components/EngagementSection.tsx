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
  { num: "01", title: "Discover", desc: "Deep understanding of your business model, objectives, and challenges." },
  { num: "02", title: "Define", desc: "Scope, deliverables, success metrics, and timeline — precisely defined." },
  { num: "03", title: "Design", desc: "Architecture, UX, and visual design — validated through prototyping." },
  { num: "04", title: "Develop", desc: "Agile sprints, continuous integration, and iterative refinement." },
  { num: "05", title: "Deploy", desc: "Testing, performance benchmarking, security validation — then launch." },
  { num: "06", title: "Evolve", desc: "Ongoing support and continuous improvement as you grow." },
];

const EngagementSection = () => (
  <section className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">How We Work</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg">Our Engagement <span className="text-gradient-primary">Model</span></h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {steps.map((s, i) => (
          <FadeUp key={s.num} delay={0.15 + i * 0.08}>
            <div className="relative glass-card rounded-xl p-6 h-full hover:border-primary/30 transition-all duration-300">
              <span className="font-display text-5xl font-bold text-primary/10 absolute top-4 right-5">{s.num}</span>
              <h3 className="font-display font-semibold text-lg mb-2 mt-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default EngagementSection;
