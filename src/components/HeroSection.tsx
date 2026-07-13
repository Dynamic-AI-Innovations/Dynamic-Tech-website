import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import IdeationModal from "@/components/IdeationModal";
import HeroBackground from "@/components/HeroBackground";

const headlineLines = [
  { text: "Ideas become ", accent: "industries." },
  { text: "Engineering becomes ", accent: "impact." },
  { text: "Innovation becomes ", accent: "legacy." },
];

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <HeroBackground />

        <div className="relative z-10 section-padding pt-24 md:pt-28 pb-16 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="label-caps text-accent mb-5 md:mb-7"
          >
            Building Africa's Silicon Valley
          </motion.p>

          <h1 className="heading-hero max-w-5xl text-white">
            {headlineLines.map((line, i) => (
              <motion.span
                key={line.accent}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.22, duration: 0.7 }}
                className="block"
              >
                {line.text}
                <span className="text-gradient-accent">{line.accent}</span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="body-lg text-white/70 max-w-2xl mt-6 md:mt-8"
          >
            We are not a software company, an agency, or a consultancy. We are the
            ecosystem where founders launch, governments modernize, industries
            transform, and research becomes product — engineered from Africa, for the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-10 md:mt-12"
          >
            <Button variant="hero" size="lg" className="text-base px-8 py-6 w-full sm:w-auto" onClick={() => setModalOpen(true)}>
              Enter the Ecosystem <ArrowRight className="ml-1" size={18} />
            </Button>
            <Button
              size="lg"
              className="text-base px-8 py-6 w-full sm:w-auto border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 transition-all duration-300 font-semibold rounded-md"
              onClick={() => document.getElementById("ecosystem")?.scrollIntoView({ behavior: "smooth" })}
            >
              What We're Building
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-0 right-0 z-10 hidden md:flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="label-caps">Scroll</span>
            <span className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </motion.div>
      </section>

      <IdeationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default HeroSection;
