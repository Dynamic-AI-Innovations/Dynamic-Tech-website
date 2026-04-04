import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slideAfrica from "@/assets/slide-africa.webp";
import slideBuild from "@/assets/slide-build.jpg";
import slideProfessional from "@/assets/slide-professional.jpeg";
import slideServer from "@/assets/slide-server.jpg";
import slideBuildings from "@/assets/slide-buildings.jpg";

const slides = [
  { src: slideAfrica, alt: "Africa's digital transformation", caption: "Powering Africa's Digital Future" },
  { src: slideBuild, alt: "Build Ship Scale", caption: "Build. Ship. Scale." },
  { src: slideProfessional, alt: "Professional consulting", caption: "World-Class Consulting" },
  { src: slideServer, alt: "Enterprise infrastructure", caption: "Enterprise-Grade Infrastructure" },
  { src: slideBuildings, alt: "Corporate excellence", caption: "Scaling Businesses Globally" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.45, 0, 0.15, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 section-padding pb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
              {slides[current].caption}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 md:right-12 lg:right-20 xl:right-32 flex items-center gap-3 z-10">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
