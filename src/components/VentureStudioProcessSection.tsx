import { motion, useInView } from "framer-motion";
import { useRef, type ComponentType, type SVGProps } from "react";
import { IdeaIcon, ValidateIcon, BuildIcon, LaunchIcon, ScaleUpIcon } from "@/components/icons/EcosystemIcons";

type Stage = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  youGet: string;
};

const stages: Stage[] = [
  { icon: IdeaIcon, title: "Idea", youGet: "A thinking partner to pressure-test the problem before you build anything." },
  { icon: ValidateIcon, title: "Validate", youGet: "Market and user research to confirm someone will actually pay for this." },
  { icon: BuildIcon, title: "Build", youGet: "Product, engineering, and design capacity — a real team, not a template." },
  { icon: LaunchIcon, title: "Launch", youGet: "Go-to-market support and a working product in front of real users." },
  { icon: ScaleUpIcon, title: "Scale", youGet: "Growth infrastructure, and a warm path to the investors in our ecosystem." },
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

const VentureStudioProcessSection = () => (
  <section className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <p className="label-caps text-primary mb-4">The Venture Studio</p>
        <h1 className="heading-lg">
          You bring the founder. <span className="text-gradient-primary">We bring everything else.</span>
        </h1>
        <p className="body-lg text-muted-foreground mt-6">
          Most founders don't fail from a bad idea — they fail from building alone. The Venture Studio
          puts a full team behind you at every stage, from first sketch to a company that can stand on its own.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-14">
        {stages.map((s, i) => (
          <FadeUp key={s.title} delay={0.1 + i * 0.08}>
            <div className="glass-card rounded-2xl p-6 h-full hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <s.icon className="w-7 h-7 text-primary mb-5" />
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.youGet}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default VentureStudioProcessSection;
