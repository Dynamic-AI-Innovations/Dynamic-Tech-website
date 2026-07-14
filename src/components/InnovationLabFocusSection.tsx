import { motion, useInView } from "framer-motion";
import { useRef, type ComponentType, type SVGProps } from "react";
import { AIIcon, ClimateIcon, HealthIcon, InvestorsIcon, GovernmentsIcon } from "@/components/icons/EcosystemIcons";

type Focus = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const focusAreas: Focus[] = [
  { icon: AIIcon, title: "Artificial Intelligence", desc: "Applied AI for African languages, agriculture, and everyday operations." },
  { icon: ClimateIcon, title: "Climate & Energy", desc: "Tools for climate resilience, clean energy access, and resource efficiency." },
  { icon: HealthIcon, title: "HealthTech", desc: "Diagnostics, patient access, and health-data infrastructure for underserved regions." },
  { icon: InvestorsIcon, title: "FinTech", desc: "Financial inclusion, payments infrastructure, and access to capital." },
  { icon: GovernmentsIcon, title: "GovTech", desc: "Digital public infrastructure and citizen-facing government services." },
];

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
};

const InnovationLabFocusSection = () => (
  <section className="section-padding py-24 lg:py-32 bg-muted">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <FadeUp>
          <p className="label-caps text-primary mb-4">Current Exploration</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="heading-lg">
            What we're <span className="text-gradient-primary">exploring now.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="body-lg text-muted-foreground mt-6">
            These are active exploration themes, not shipped products — the Lab's job is to find out
            which ones deserve to become one.
          </p>
        </FadeUp>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {focusAreas.map((f, i) => (
          <FadeUp key={f.title} delay={0.15 + i * 0.08}>
            <div className="glass-card rounded-2xl p-6 h-full hover:border-accent/30 hover:shadow-md transition-all duration-300">
              <f.icon className="w-7 h-7 text-accent mb-5" />
              <h3 className="font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default InnovationLabFocusSection;
