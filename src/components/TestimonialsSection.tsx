import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

import logoServiceLinka from "@/assets/partners/servicelinka.png";
import logoNehi         from "@/assets/partners/nehi.png";
import logoAcadi        from "@/assets/partners/acadi.png";
import logoThrivehill   from "@/assets/partners/thrivehill.png";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const testimonials = [
  {
    logo: logoServiceLinka,
    logoDark: false,
    quote: "Dynamics Technology didn't just build our platform — they understood our vision from day one. Their ideation process surfaced challenges we hadn't even considered, and the solution they architected has scaled effortlessly as ServiceLinka has grown.",
    name: "ServiceLinka Team",
    role: "Service Marketplace Platform",
  },
  {
    logo: logoNehi,
    logoDark: false,
    quote: "Working with Dynamics Technology transformed how we manage projects and client communication. They delivered a robust, reliable system on time and on budget. For any construction firm looking to modernise operations, these are the people to call.",
    name: "Nehi Constructs Limited",
    role: "Construction & Infrastructure",
  },
  {
    logo: logoAcadi,
    logoDark: false,
    quote: "As a community-driven organisation, we needed technology that was both accessible and impactful. Dynamics Technology listened carefully and delivered a digital solution that has genuinely strengthened our reach across the diocese.",
    name: "ACCADI",
    role: "Anglican Community Development",
  },
  {
    logo: logoThrivehill,
    logoDark: true,
    quote: "The team at Dynamics Technology thinks like creatives and executes like engineers. They built our studio's digital infrastructure with precision and flair — exactly the blend a creative brand needs. A truly exceptional partnership.",
    name: "Thrivehill Studio",
    role: "Creative & Design Studio",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">Ecosystem Voices</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg">What builders in the <span className="text-gradient-primary">ecosystem say.</span></h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {testimonials.map((t, i) => (
          <FadeUp key={t.name} delay={0.12 + i * 0.1}>
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
              <Quote size={28} className="text-primary/25 mb-5" />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{t.quote}</p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${t.logoDark ? "bg-gray-900 p-1.5" : "bg-gray-50 p-1.5"}`}>
                  <img src={t.logo} alt={t.name} loading="lazy" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
