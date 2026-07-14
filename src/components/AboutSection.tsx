import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { title: "Strategy",       desc: "We define the right problem before we touch the technology." },
  { title: "Engineering",    desc: "Full-stack delivery — software, AI, IoT, hardware." },
  { title: "Partnership",    desc: "We stay engaged long after launch." },
];

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const AboutSection = () => (
  <section id="about" className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
      <div>
        <FadeUp>
          <p className="label-caps text-primary mb-4">Who We Are</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="heading-lg">
            Africa-based. <span className="text-gradient-primary">Globally capable.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="body-lg text-muted-foreground mt-6">
            We combine global consultancy standards with genuine African market intelligence — the partner you call when the stakes are high.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <blockquote className="mt-10 pl-6 border-l-2 border-primary/40">
            <p className="text-lg italic text-muted-foreground">
              "We are not just building technology companies. We are building Africa's Silicon Valley — one bold solution at a time."
            </p>
          </blockquote>
        </FadeUp>
      </div>

      <div className="mt-14 lg:mt-0 flex flex-col gap-px border border-border rounded-2xl overflow-hidden">
        {pillars.map((p, i) => (
          <FadeUp key={p.title} delay={0.2 + i * 0.1}>
            <div className="bg-card px-8 py-7 hover:bg-muted transition-colors duration-200">
              <p className="font-display font-semibold text-foreground mb-1">{p.title}</p>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
