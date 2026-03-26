import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Smartphone, Brain, Cpu, Palette, Shield, Server, Monitor } from "lucide-react";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const services = [
  { icon: Code2, category: "Software Engineering", title: "Custom Software Development", desc: "End-to-end bespoke software — ERP, CRM, SaaS platforms — built for scale and security." },
  { icon: Globe, category: "Web Development", title: "Websites & Web Applications", desc: "Responsive, SEO-optimised sites and progressive web apps that engage and convert." },
  { icon: Smartphone, category: "Mobile Development", title: "iOS & Android Applications", desc: "Native and cross-platform mobile apps engineered for performance and exceptional UX." },
  { icon: Brain, category: "Artificial Intelligence", title: "AI Solutions & Automation", desc: "NLP, computer vision, predictive analytics, and intelligent process automation." },
  { icon: Cpu, category: "Internet of Things", title: "IoT System Design", desc: "End-to-end connected ecosystems — sensors, firmware, cloud integration, and dashboards." },
  { icon: Palette, category: "UI/UX Design", title: "Human-Centred Design", desc: "Full product design from research and wireframing to complete design systems." },
  { icon: Shield, category: "Cloud & Security", title: "Cloud Solutions & Cybersecurity", desc: "AWS, Azure, GCP migration paired with robust security consulting." },
  { icon: Server, category: "IT Services", title: "Managed IT & Infrastructure", desc: "Proactive monitoring, helpdesk support, network administration, and advisory." },
  { icon: Monitor, category: "Hardware Supply", title: "Premium Technology Products", desc: "Dell, HP, Lenovo, MacBook, smartphones — new, open-box & refurbished." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">What We Build</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg max-w-3xl">
          Extended Service <span className="text-gradient-primary">Portfolio</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p className="body-lg text-muted-foreground max-w-2xl mt-4">
          From strategy through to deployment — across every domain of modern technology.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {services.map((s, i) => (
          <FadeUp key={s.category} delay={0.15 + i * 0.06}>
            <div className="glass-card rounded-xl p-6 h-full hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <p className="label-caps text-primary/60 mb-1">{s.category}</p>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
