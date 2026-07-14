import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import IdeationModal from "@/components/IdeationModal";
import { heroSlides } from "@/config/heroSlides";

type EmblaApi = UseEmblaCarouselType[1];

const AUTOPLAY_DELAY = 7000;

const HeroSlider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [api, setApi] = useState<EmblaApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();

  const onSelect = useCallback((emblaApi: EmblaApi) => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const handleSecondaryCta = (action: { scrollTo: string } | { to: string }) => {
    if ("scrollTo" in action) {
      document.getElementById(action.scrollTo)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(action.to);
    }
  };

  const plugins = prefersReducedMotion
    ? [Fade()]
    : [Fade(), Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false, stopOnMouseEnter: true })];

  const current = heroSlides[selectedIndex];

  return (
    <>
      <section
        className="relative min-h-screen overflow-hidden bg-[#04081a]"
        aria-roledescription="carousel"
        aria-label="Featured highlights"
      >
        <div aria-live="polite" className="sr-only">
          {`Slide ${selectedIndex + 1} of ${heroSlides.length}: ${current.eyebrow}`}
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={plugins}
          tabIndex={0}
          className="h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
        >
          <CarouselContent className="ml-0 h-screen">
            {heroSlides.map((slide, index) => {
              const isActive = index === selectedIndex;
              return (
                <CarouselItem key={slide.id} className="pl-0 relative h-screen">
                  <img
                    src={slide.image}
                    alt=""
                    aria-hidden="true"
                    loading={index === 0 ? undefined : "lazy"}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(4,8,26,0.94) 0%, rgba(4,8,26,0.82) 32%, rgba(4,8,26,0.52) 58%, rgba(4,8,26,0.18) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#04081a]/55 via-transparent to-[#04081a]/75" />
                  <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#04081a]/85 via-[#04081a]/65 to-[#04081a]/40" />

                  <div className="relative z-10 h-full flex flex-col justify-center section-padding pt-24 pb-24">
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                      animate={isActive ? { opacity: 1, y: 0 } : undefined}
                      transition={{ duration: 0.6, delay: 0.25 }}
                      className="max-w-3xl"
                    >
                      <p className="label-caps text-accent mb-5 md:mb-7">{slide.eyebrow}</p>
                      <h1 className="heading-hero text-white">
                        {slide.headlinePrefix}
                        <span className="text-gradient-accent">{slide.headlineAccent}</span>
                      </h1>
                      <p className="body-lg text-white/70 max-w-2xl mt-6 md:mt-8">{slide.subtext}</p>
                      <div className="flex flex-col sm:flex-row gap-3 mt-10 md:mt-12">
                        <Button
                          variant="hero"
                          size="lg"
                          className="text-base px-8 py-6 w-full sm:w-auto"
                          tabIndex={isActive ? 0 : -1}
                          onClick={() =>
                            slide.primaryCta.action === "modal" ? setModalOpen(true) : navigate(slide.primaryCta.action.to)
                          }
                        >
                          {slide.primaryCta.label} <ArrowRight className="ml-1" size={18} />
                        </Button>
                        <Button
                          size="lg"
                          className="text-base px-8 py-6 w-full sm:w-auto border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 transition-all duration-300 font-semibold rounded-md"
                          tabIndex={isActive ? 0 : -1}
                          onClick={() => handleSecondaryCta(slide.secondaryCta.action)}
                        >
                          {slide.secondaryCta.label}
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Prev / Next controls */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => api?.scrollPrev()}
          className="hidden md:flex items-center justify-center absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => api?.scrollNext()}
          className="hidden md:flex items-center justify-center absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2.5">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
              aria-current={index === selectedIndex}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-8 bg-accent" : "w-1.5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      <IdeationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default HeroSlider;
