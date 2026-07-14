import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2, Globe, Smartphone, Sparkles, Wifi,
  Palette, ShieldCheck, Server, Package,
} from "lucide-react";

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
  {
    Icon: Code2,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-300/60",
    category: "Software Engineering",
    title: "Custom Software Development",
    desc: "Bespoke ERP, CRM, and SaaS — built for scale and security.",
  },
  {
    Icon: Globe,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    borderHover: "hover:border-indigo-300/60",
    category: "Web Development",
    title: "Websites & Web Applications",
    desc: "Responsive, SEO-optimised sites and web apps that convert.",
  },
  {
    Icon: Smartphone,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    borderHover: "hover:border-violet-300/60",
    category: "Mobile Development",
    title: "iOS & Android Applications",
    desc: "Native and cross-platform apps, engineered for performance.",
  },
  {
    Icon: Sparkles,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    borderHover: "hover:border-purple-300/60",
    category: "Artificial Intelligence",
    title: "AI Solutions & Automation",
    desc: "NLP, computer vision, predictive analytics, and process automation.",
  },
  {
    Icon: Wifi,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    borderHover: "hover:border-teal-300/60",
    category: "Internet of Things",
    title: "IoT System Design",
    desc: "Connected ecosystems: sensors, firmware, cloud, dashboards.",
  },
  {
    Icon: Palette,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    borderHover: "hover:border-rose-300/60",
    category: "UI/UX Design",
    title: "Human-Centred Design",
    desc: "Research through wireframing to full design systems.",
  },
  {
    Icon: ShieldCheck,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    borderHover: "hover:border-cyan-300/60",
    category: "Cloud & Security",
    title: "Cloud Solutions & Cybersecurity",
    desc: "AWS, Azure, GCP migration paired with robust security consulting.",
  },
  {
    Icon: Server,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300/60",
    category: "IT Services",
    title: "Managed IT & Infrastructure",
    desc: "Monitoring, helpdesk, network admin, and advisory.",
  },
  {
    Icon: Package,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    borderHover: "hover:border-amber-300/60",
    category: "Hardware Supply",
    title: "Premium Technology Products",
    desc: "Dell, HP, Lenovo, MacBook, smartphones — new, open-box & refurbished.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">The Engineering Behind It</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg max-w-3xl">
          One team. <span className="text-gradient-primary">Every domain.</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p className="body-lg text-muted-foreground max-w-2xl mt-4">
          The full engineering stack behind every company, government, and idea we help build.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {services.map((s, i) => (
          <FadeUp key={s.category} delay={0.12 + i * 0.06}>
            <div className={`glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg group relative overflow-hidden ${s.borderHover}`}>
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <s.Icon size={22} className={s.iconColor} strokeWidth={1.75} />
              </div>

              {/* Category badge */}
              <p className="label-caps text-[10px] text-muted-foreground/70 mb-2">{s.category}</p>

              {/* Title */}
              <h3 className="font-display font-semibold text-base leading-snug mb-2">{s.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
