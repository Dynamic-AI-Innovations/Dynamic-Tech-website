import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

const tabs = [
  { id: "rbd",     label: "Research & Business Dev" },
  { id: "design",  label: "Creative & Brand Design" },
  { id: "writing", label: "Content & Documentation" },
  { id: "tech",    label: "Software & Automation" },
];

const portfolioData = {
  rbd: [
    {
      gradient: "linear-gradient(135deg, #1a2a5e, #3b2d8a)",
      tag: "Market Research",
      title: "FinTech Market Entry Strategy",
      desc: "Strategic entry report for a UK-backed fintech expanding into West Africa — covering regulatory landscape, competitor mapping, and a full go-to-market roadmap.",
    },
    {
      gradient: "linear-gradient(135deg, #0f3460, #16213e)",
      tag: "Feasibility Study",
      title: "Agri-Tech Platform Viability",
      desc: "Assessed commercial viability for a digital agri-marketplace connecting smallholder farmers to institutional buyers across three Nigerian states.",
    },
    {
      gradient: "linear-gradient(135deg, #2d1b69, #11998e)",
      tag: "Competitive Intelligence",
      title: "EdTech Sector Benchmark Report",
      desc: "Competitive intelligence brief benchmarking 14 EdTech players across pricing, UX, and curriculum depth — directly informing a Series A pitch deck.",
    },
  ],
  design: [
    {
      gradient: "linear-gradient(135deg, #f64f59, #c471ed 50%, #12c2e9)",
      tag: "Brand Identity",
      title: "Full Brand System — B2B Logistics",
      desc: "Complete brand identity — logo, colour palette, typography, and guidelines — for a B2B logistics startup ahead of their public launch.",
    },
    {
      gradient: "linear-gradient(135deg, #ff6b6b, #ffa07a)",
      tag: "UI/UX Design",
      title: "Telehealth App Interface",
      desc: "End-to-end Figma prototypes for a telehealth platform — patient booking flow, doctor dashboard, and prescription management designed for low-bandwidth users.",
    },
    {
      gradient: "linear-gradient(135deg, #834d9b, #d04ed6)",
      tag: "Campaign Design",
      title: "E-Commerce Marketing Suite",
      desc: "Full set of digital marketing assets — social banners, email templates, and product display graphics — for a fashion brand's relaunch campaign.",
    },
  ],
  writing: [
    {
      gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
      tag: "Technical Writing",
      title: "Payments API Developer Docs",
      desc: "Complete developer documentation for a payments API — endpoint references, integration guides, error codes, and quickstart tutorials used by 200+ developers.",
    },
    {
      gradient: "linear-gradient(135deg, #005c97, #363795)",
      tag: "Corporate Writing",
      title: "Annual Sustainability Report",
      desc: "Structured and wrote the annual impact report for a mid-size manufacturer — executive narratives, data storytelling, and stakeholder-ready formatting.",
    },
    {
      gradient: "linear-gradient(135deg, #134e5e, #71b280)",
      tag: "Content Strategy",
      title: "12-Month Editorial Playbook",
      desc: "Full content strategy and editorial calendar for a digital media company — tripling organic reach within six months of rollout.",
    },
  ],
  tech: [
    {
      gradient: "linear-gradient(135deg, #1a4f8a, #005f5a)",
      tag: "Custom Software",
      title: "Fleet & Dispatch ERP",
      desc: "Custom logistics ERP for a 120-truck fleet — real-time tracking, automated billing, route optimisation, and driver performance analytics in one dashboard.",
    },
    {
      gradient: "linear-gradient(135deg, #0f0c29, #302b63 50%, #24243e)",
      tag: "Process Automation",
      title: "HR Workflow Automation",
      desc: "Automated onboarding, leave management, and payroll reconciliation for a 300-person company — cutting HR administrative time by 70%.",
    },
    {
      gradient: "linear-gradient(135deg, #1a1a2e, #16213e 50%, #0f3460)",
      tag: "Web Platform",
      title: "Property Listing & Rental Platform",
      desc: "Full-stack real estate platform with agent portals, automated lease generation, tenant screening, and integrated payment collection.",
    },
  ],
};

interface PortfolioSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const PortfolioSection = ({ activeTab, onTabChange }: PortfolioSectionProps) => (
  <section id="portfolio" className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">Our Work</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg max-w-3xl">
          Portfolio <span className="text-gradient-primary">Showcase</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p className="body-lg text-muted-foreground max-w-2xl mt-4">
          From strategy to execution — a snapshot of how we deliver across every discipline.
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <Tabs value={activeTab} onValueChange={onTabChange} className="mt-14">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-full border border-border px-5 py-2 text-sm text-muted-foreground bg-transparent
                  data-[state=active]:bg-primary/10 data-[state=active]:border-primary/50
                  data-[state=active]:text-primary data-[state=active]:shadow-none
                  hover:text-foreground hover:border-border/80 transition-all duration-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {portfolioData[tab.id as keyof typeof portfolioData].map((item, i) => (
                  <FadeUp key={item.title} delay={i * 0.08}>
                    <div className="glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                      <div className="h-44 w-full flex-shrink-0" style={{ background: item.gradient }} />
                      <div className="p-6 flex flex-col flex-1">
                        <span className="label-caps text-primary/70 mb-2 block">{item.tag}</span>
                        <h3 className="font-display font-semibold text-base mb-2 leading-snug">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </FadeUp>
    </div>
  </section>
);

export default PortfolioSection;
