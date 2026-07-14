import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imgProfessional from "@/assets/slide-professional.jpeg";
import imgBuildings    from "@/assets/slide-buildings.jpg";
import imgAfrica       from "@/assets/slide-africa.webp";
import imgHero         from "@/assets/hero-bg.jpg";
import imgServer       from "@/assets/slide-server.jpg";
import imgBuild        from "@/assets/slide-build.jpg";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const steps = [
  { img: imgProfessional, num: "01", title: "Discover", desc: "Deep understanding of your business model, objectives, and challenges." },
  { img: imgBuildings,    num: "02", title: "Define",   desc: "Scope, deliverables, success metrics, and timeline — precisely defined." },
  { img: imgAfrica,       num: "03", title: "Design",   desc: "Architecture, UX, and visual design — validated through prototyping." },
  { img: imgHero,         num: "04", title: "Develop",  desc: "Agile sprints, continuous integration, and iterative refinement." },
  { img: imgServer,       num: "05", title: "Deploy",   desc: "Testing, performance benchmarking, security validation — then launch." },
  { img: imgBuild,        num: "06", title: "Evolve",   desc: "Ongoing support and continuous improvement as you grow." },
];

const EngagementSection = () => (
  <section className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">How We Build Together</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg">Building <span className="text-gradient-primary">alongside you.</span></h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {steps.map((s, i) => (
          <FadeUp key={s.num} delay={0.15 + i * 0.08}>
            <div className="glass-card rounded-xl overflow-hidden h-full hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              {/* Image header */}
              <div className="h-32 md:h-40 w-full overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Step number overlay on image */}
                <span className="absolute top-3 right-4 font-display text-4xl font-bold text-white/30 leading-none select-none">
                  {s.num}
                </span>
              </div>
              {/* Card body */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default EngagementSection;
