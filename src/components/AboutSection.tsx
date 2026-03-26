import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Service Capabilities" },
  { value: "5", label: "Technology Domains" },
  { value: "Pan-African", label: "Market Reach" },
  { value: "100%", label: "Client Satisfaction Focus" },
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
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">Who We Are</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg max-w-3xl">
          Africa-based. <span className="text-gradient-primary">Globally capable.</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="body-lg text-muted-foreground max-w-3xl mt-6">
          Dynamics Technology is not a typical technology vendor. We are the partner you call when you need to think bigger, build bolder, and deliver smarter. We combine the strategic depth of a global consultancy with the cultural intelligence that only an Africa-based firm can offer.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <blockquote className="mt-10 pl-6 border-l-2 border-primary/40">
          <p className="text-lg italic text-muted-foreground">
            "We are not just building technology companies. We are building Africa's Silicon Valley — one bold solution at a time."
          </p>
        </blockquote>
      </FadeUp>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={0.3 + i * 0.1}>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
