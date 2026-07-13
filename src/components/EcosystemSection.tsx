import { motion, useInView } from "framer-motion";
import { useRef, type ComponentType, type SVGProps } from "react";
import {
  FoundersIcon,
  GovernmentsIcon,
  IndustriesIcon,
  StartupsIcon,
  InvestorsIcon,
  EnterprisesIcon,
  TalentIcon,
  ResearchIcon,
} from "@/components/icons/EcosystemIcons";

type Node = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const nodes: Node[] = [
  { icon: FoundersIcon, title: "Founders", desc: "Launch with a venture studio behind you — from idea to funded, scaling company." },
  { icon: GovernmentsIcon, title: "Governments", desc: "Modernize public infrastructure and services with digital-public-infrastructure expertise." },
  { icon: IndustriesIcon, title: "Industries", desc: "Transform legacy operations with AI, automation, and world-class engineering." },
  { icon: StartupsIcon, title: "Startups", desc: "Scale product, engineering, and go-to-market with a partner that builds alongside you." },
  { icon: InvestorsIcon, title: "Investors", desc: "Discover and back the innovation coming out of Africa's fastest-growing ecosystem." },
  { icon: EnterprisesIcon, title: "Enterprises", desc: "Digitize at scale — cloud, data, and infrastructure built for African markets." },
  { icon: TalentIcon, title: "Talent", desc: "Grow inside an ecosystem that turns engineers and researchers into builders." },
  { icon: ResearchIcon, title: "Research", desc: "Turn research and foresight into shipped, market-ready products." },
];

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const EcosystemSection = () => (
  <section id="ecosystem" className="section-padding py-24 lg:py-32 bg-ink text-white">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <FadeUp>
          <p className="label-caps text-accent mb-4">The Ecosystem</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="heading-lg text-white">
            One ecosystem. <span className="text-gradient-accent">Eight ways in.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="body-lg text-white/60 mt-6">
            Dynamics Technology isn't a vendor you hire once. It's the infrastructure
            Africa's next generation of builders operate inside of.
          </p>
        </FadeUp>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
        {nodes.map((n, i) => (
          <FadeUp key={n.title} delay={0.1 + i * 0.06}>
            <div className="glass-card-dark rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
              <n.icon className="w-7 h-7 text-accent mb-5" />
              <h3 className="font-display font-semibold text-white mb-2">{n.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{n.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
