import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  { category: "Software Engineering", title: "Custom Software Development", desc: "Bespoke ERP, CRM, and SaaS — built for scale and security." },
  { category: "Web Development", title: "Websites & Web Applications", desc: "Responsive, SEO-optimised sites and web apps that convert." },
  { category: "Mobile Development", title: "iOS & Android Applications", desc: "Native and cross-platform apps, engineered for performance." },
  { category: "Artificial Intelligence", title: "AI Solutions & Automation", desc: "NLP, computer vision, predictive analytics, and process automation." },
  { category: "Internet of Things", title: "IoT System Design", desc: "Connected ecosystems: sensors, firmware, cloud, dashboards." },
  { category: "UI/UX Design", title: "Human-Centred Design", desc: "Research through wireframing to full design systems." },
  { category: "Cloud & Security", title: "Cloud Solutions & Cybersecurity", desc: "AWS, Azure, GCP migration paired with robust security consulting." },
  { category: "IT Services", title: "Managed IT & Infrastructure", desc: "Monitoring, helpdesk, network admin, and advisory." },
  { category: "Hardware Supply", title: "Premium Technology Products", desc: "Dell, HP, Lenovo, MacBook, smartphones — new, open-box & refurbished." },
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
            <div className="glass-card rounded-xl p-6 h-full hover:border-primary/30 transition-all duration-300">
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
