import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ecosystemStats, type EcosystemStat } from "@/config/ecosystemStats";

const Counter = ({ stat, active }: { stat: EcosystemStat; active: boolean }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!active || !nodeRef.current) return;
    const node = nodeRef.current;
    const controls = animate(0, stat.value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = Math.round(v).toString();
      },
    });
    return () => controls.stop();
  }, [active, stat.value]);

  return (
    <span className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
      <span ref={nodeRef}>0</span>
      {stat.suffix}
    </span>
  );
};

const AfricaDashboardSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding py-24 lg:py-32 bg-ink text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-2xl">
          <p className="label-caps text-accent mb-4">The Africa Dashboard</p>
          <h2 className="heading-lg text-white">
            The ecosystem, <span className="text-gradient-accent">at scale.</span>
          </h2>
          <p className="body-lg text-white/60 mt-6">
            Illustrative figures — updated as the ecosystem grows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {ecosystemStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-dark rounded-2xl p-8"
            >
              <Counter stat={stat} active={inView} />
              <p className="text-sm text-white/55 mt-3 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfricaDashboardSection;
