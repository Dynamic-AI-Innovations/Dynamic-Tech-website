import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import IdeationModal from "@/components/IdeationModal";
import HeroBackground from "@/components/HeroBackground";

const pillars = [
  {
    num: "01", label: "IDEATE", title: "Innovation Consulting",
    desc: "The right problem, framed correctly. Research and insight turned into a clear, executable plan.",
  },
  {
    num: "02", label: "ENGINEER", title: "Full-Stack Delivery",
    desc: "AI, IoT, mobile, web and hardware — engineered to world-class standards, built for African markets.",
  },
  {
    num: "03", label: "TRANSFORM", title: "Strategic Partnership",
    desc: "We stay, scale, and drive growth alongside you — long after launch.",
  },
];

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <HeroBackground />

        <div className="relative z-10 section-padding pt-32 pb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="label-caps text-primary mb-6">
            Africa's Innovation & Transformation Consultancy
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="heading-xl max-w-4xl text-white">
            We Ideate.{" "}
            <span className="text-gradient-accent">We Engineer.</span>{" "}
            <span className="text-gradient-primary">We Transform.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="body-lg text-white/70 max-w-2xl mt-6">
            From idea to live product — Africa's leading Innovation & Transformation Consultancy.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-wrap gap-4 mt-10">
            <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={() => setModalOpen(true)}>
              Start with Ideation <ArrowRight className="ml-1" size={18} />
            </Button>
            <Button size="lg" className="text-base px-8 py-6 border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 transition-all duration-300 font-semibold rounded-md" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
        </div>

        <div className="relative z-10 section-padding pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.num} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.15 }} className="rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/15 bg-white/8 backdrop-blur-sm">
                <p className="label-caps text-primary mb-2">{p.num} / {p.label}</p>
                <h3 className="font-display font-semibold text-lg mb-2 text-white">{p.title}</h3>
                <p className="text-sm text-white/60">{p.desc}</p>
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
