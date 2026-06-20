import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imgStep1 from "@/assets/step-01-problem-definition.jpg";
import imgStep2 from "@/assets/step-02-human-research.jpg";
import imgStep3 from "@/assets/step-03-ideation-workshop.jpg";
import imgStep4 from "@/assets/step-04-solution-architecture.jpg";
import imgStep5 from "@/assets/step-05-feasibility.jpg";
import imgStep6 from "@/assets/step-06-prototype.jpg";
import imgAfrica from "@/assets/slide-africa.webp";

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
  { img: imgStep1, num: "01", title: "Problem Definition & Framing", desc: "Articulate the real challenge, not just the symptom." },
  { img: imgStep2, num: "02", title: "Human-Centred Research",        desc: "User interviews and market research grounded in real needs." },
  { img: imgStep3, num: "03", title: "Ideation Workshops",            desc: "Facilitated sessions to surface and stress-test the best concepts." },
  { img: imgStep4, num: "04", title: "Solution Architecture",         desc: "Platform, framework, and integration decisions — ready to build." },
  { img: imgStep5, num: "05", title: "Feasibility & Business Case",   desc: "Technical feasibility, commercial viability, and ROI — evidence-based." },
  { img: imgStep6, num: "06", title: "Prototype & PoC",               desc: "Rapid prototypes that validate with real users before full build." },
  { img: imgAfrica, num: "07", title: "Roadmap & Blueprint",          desc: "Phased milestones from validated concept to live product." },
];

const CoreServiceSection = () => (
  <section id="core-service" className="section-padding py-24 lg:py-32 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-accent mb-4">Core Service</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg max-w-3xl">
          Ideation & Solution <span className="text-gradient-accent">Development</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="body-lg text-muted-foreground max-w-2xl mt-4">
          Before we write a single line of code, we think. Rigorously, with your interests at the centre of every decision.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {steps.map((s, i) => (
          <FadeUp key={s.num} delay={0.2 + i * 0.08}>
            <div className="glass-card rounded-xl overflow-hidden h-full hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
              {/* Image header */}
              <div className="h-32 md:h-40 w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Card body */}
              <div className="p-6">
                <p className="label-caps text-accent/60 mb-3">{s.num}</p>
                <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default CoreServiceSection;
