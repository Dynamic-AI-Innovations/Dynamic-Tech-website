import { motion, useInView } from "framer-motion";
import { useRef, type ComponentType, type SVGProps } from "react";
import { WhitepaperIcon, ReportIcon, PolicyIcon, ForesightIcon, MarketIntelIcon } from "@/components/icons/EcosystemIcons";

type Capability = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const capabilities: Capability[] = [
  { icon: WhitepaperIcon, title: "Whitepapers", desc: "Original research on the technology and market shifts shaping Africa." },
  { icon: ReportIcon, title: "Innovation Reports", desc: "Ongoing analysis of what's working across Africa's innovation ecosystem." },
  { icon: PolicyIcon, title: "Policy Research", desc: "Evidence to help governments write digital policy that actually works." },
  { icon: ForesightIcon, title: "Technology Foresight", desc: "Tracking the technologies that will matter in African markets next." },
  { icon: MarketIntelIcon, title: "Market Intelligence", desc: "Grounded data for founders, investors, and partners making real decisions." },
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

const ResearchInstituteSection = () => (
  <>
    <section className="section-padding py-24 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <p className="label-caps text-primary mb-4">The Research Institute</p>
        <h1 className="heading-lg">
          The evidence behind <span className="text-gradient-primary">every decision.</span>
        </h1>
        <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-6">
          Before Dynamics Technology builds, it researches. The Institute is where that research is
          turned into evidence founders, investors, and governments can act on.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 max-w-6xl mx-auto">
        {capabilities.map((c, i) => (
          <FadeUp key={c.title} delay={0.1 + i * 0.08}>
            <div className="glass-card rounded-2xl p-6 h-full hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <c.icon className="w-7 h-7 text-primary mb-5" />
              <h3 className="font-display font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>

    <section className="section-padding py-16 lg:py-20 bg-muted border-y border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="label-caps text-accent mb-4">Publications</p>
        <h2 className="heading-md">Our first publications are in progress.</h2>
        <p className="body-lg text-muted-foreground mt-4">
          The Institute is newly formed — whitepapers and reports will be published here as they're completed.
        </p>
      </div>
    </section>
  </>
);

export default ResearchInstituteSection;
