import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import IdeationModal from "@/components/IdeationModal";
import heroBg from "@/assets/hero-bg.jpg";

const pillars = [
  { num: "01", label: "IDEATE", title: "Innovation Consulting", desc: "Human-centred strategy that turns challenges into validated, investor-ready blueprints." },
  { num: "02", label: "ENGINEER", title: "Full-Stack Delivery", desc: "Software, AI, IoT, web, mobile & hardware — built to international standards." },
  { num: "03", label: "TRANSFORM", title: "Strategic Partnership", desc: "Long-term consultancy that drives lasting competitive advantage across Africa." },
];

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>

        <div className="relative z-10 section-padding pt-32 pb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="label-caps text-primary mb-6">
            Africa's Innovation & Transformation Consultancy
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="heading-xl max-w-4xl">
            We Ideate.{" "}
            <span className="text-gradient-accent">We Engineer.</span>{" "}
            <span className="text-gradient-primary">We Transform.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="body-lg text-muted-foreground max-w-2xl mt-6">
            From bold idea to market-ready solution — Dynamics Technology is Africa's most ambitious Innovation & Transformation Consultancy, delivering world-class technology across every domain.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-wrap gap-4 mt-10">
            <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={() => setModalOpen(true)}>
              Start with Ideation <ArrowRight className="ml-1" size={18} />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
        </div>

        <div className="relative z-10 section-padding pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.num} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.15 }} className="glass-card rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group">
                <p className="label-caps text-primary mb-2">{p.num} / {p.label}</p>
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IdeationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default HeroSection;
