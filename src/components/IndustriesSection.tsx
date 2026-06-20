import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Banknote, GraduationCap, HeartPulse, ShoppingBag,
  Truck, Leaf, Landmark, Zap, Tv2,
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

const industries = [
  {
    Icon: Banknote,
    title: "Financial Services & Fintech",
    desc: "Digital banking, payment platforms, lending systems",
    from: "from-emerald-50", border: "border-l-emerald-400", hover: "hover:border-l-emerald-500",
    iconBg: "bg-emerald-100", iconColor: "text-emerald-700",
  },
  {
    Icon: GraduationCap,
    title: "Education & EdTech",
    desc: "LMS platforms, school administration, e-learning",
    from: "from-blue-50", border: "border-l-blue-400", hover: "hover:border-l-blue-500",
    iconBg: "bg-blue-100", iconColor: "text-blue-700",
  },
  {
    Icon: HeartPulse,
    title: "Healthcare & MedTech",
    desc: "Patient management, telehealth, health informatics",
    from: "from-rose-50", border: "border-l-rose-400", hover: "hover:border-l-rose-500",
    iconBg: "bg-rose-100", iconColor: "text-rose-600",
  },
  {
    Icon: ShoppingBag,
    title: "E-Commerce & Retail",
    desc: "Online marketplaces, inventory, fulfilment",
    from: "from-amber-50", border: "border-l-amber-400", hover: "hover:border-l-amber-500",
    iconBg: "bg-amber-100", iconColor: "text-amber-700",
  },
  {
    Icon: Truck,
    title: "Logistics & Supply Chain",
    desc: "Fleet management, real-time tracking, route optimisation",
    from: "from-orange-50", border: "border-l-orange-400", hover: "hover:border-l-orange-500",
    iconBg: "bg-orange-100", iconColor: "text-orange-700",
  },
  {
    Icon: Leaf,
    title: "Agriculture & AgriTech",
    desc: "Precision agriculture IoT, farm management",
    from: "from-lime-50", border: "border-l-lime-500", hover: "hover:border-l-lime-600",
    iconBg: "bg-lime-100", iconColor: "text-lime-700",
  },
  {
    Icon: Landmark,
    title: "Government & Public Sector",
    desc: "Citizen portals, e-governance platforms",
    from: "from-slate-100", border: "border-l-slate-400", hover: "hover:border-l-slate-500",
    iconBg: "bg-slate-200", iconColor: "text-slate-700",
  },
  {
    Icon: Zap,
    title: "Energy & Utilities",
    desc: "Smart metering, energy management systems",
    from: "from-yellow-50", border: "border-l-yellow-400", hover: "hover:border-l-yellow-500",
    iconBg: "bg-yellow-100", iconColor: "text-yellow-700",
  },
  {
    Icon: Tv2,
    title: "Media & Entertainment",
    desc: "Content management, streaming platforms",
    from: "from-purple-50", border: "border-l-purple-400", hover: "hover:border-l-purple-500",
    iconBg: "bg-purple-100", iconColor: "text-purple-700",
  },
];

const IndustriesSection = () => (
  <section className="section-padding py-24 lg:py-32 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">Sectors</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg">Industries We <span className="text-gradient-primary">Serve</span></h2>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14">
        {industries.map((ind, i) => (
          <FadeUp key={ind.title} delay={0.10 + i * 0.05}>
            <div className={`
              flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br ${ind.from} to-white
              border border-border border-l-[3px] ${ind.border} ${ind.hover}
              hover:shadow-md transition-all duration-300 group h-full
            `}>
              <div className={`w-10 h-10 rounded-lg ${ind.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                <ind.Icon size={18} className={ind.iconColor} strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-sm leading-snug mb-1">{ind.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
