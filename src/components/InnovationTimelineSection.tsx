import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { label: "Research", desc: "Foresight, market intelligence, and problem definition." },
  { label: "Prototype", desc: "Ideas take physical and digital form." },
  { label: "MVP", desc: "A real product, in real users' hands." },
  { label: "Launch", desc: "Engineered, tested, and shipped to market." },
  { label: "Scale", desc: "Growth infrastructure and go-to-market." },
  { label: "Global Product", desc: "Built in Africa, competing worldwide." },
];

const InnovationTimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-24 lg:py-32 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="label-caps text-primary mb-4">How It Happens</p>
          <h2 className="heading-lg">
            From <span className="text-gradient-primary">research</span> to a{" "}
            <span className="text-gradient-accent">global product.</span>
          </h2>
        </div>

        <div ref={ref} className="mt-20">
          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-0 right-0 top-[13px] h-px bg-border" />
            <motion.div
              className="absolute left-0 top-[13px] h-px bg-gradient-to-r from-primary via-accent to-primary origin-left"
              style={{ right: 0 }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <div className="grid grid-cols-6 gap-4 relative">
              {steps.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                >
                  <div className="w-[27px] h-[27px] rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-display font-semibold text-primary">
                    {i + 1}
                  </div>
                  <p className="font-display font-semibold text-foreground mt-4">{s.label}</p>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet: vertical timeline */}
          <div className="lg:hidden relative pl-10">
            <div className="absolute left-[13px] top-1 bottom-1 w-px bg-border" />
            <motion.div
              className="absolute left-[13px] top-1 w-px bg-gradient-to-b from-primary via-accent to-primary origin-top"
              style={{ bottom: 4 }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <div className="flex flex-col gap-10">
              {steps.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="relative"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <div className="absolute -left-10 top-0 w-[27px] h-[27px] rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-display font-semibold text-primary">
                    {i + 1}
                  </div>
                  <p className="font-display font-semibold text-foreground">{s.label}</p>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationTimelineSection;
