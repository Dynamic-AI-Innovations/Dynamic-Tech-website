import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const CTASection = () => (
  <section className="section-padding py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <FadeUp>
        <p className="label-caps text-primary mb-4">Start the Conversation</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg">
          Ready to <span className="text-gradient-primary">Transform?</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="body-lg text-muted-foreground max-w-2xl mx-auto mt-6">
          The future belongs to organisations that act on their ideas. We are Building Africa's Silicon Valley — and we want you to be part of it.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Start a Project <ArrowRight className="ml-1" size={18} />
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
            <a href="tel:+2349112802448">Call Us Now</a>
          </Button>
        </div>
      </FadeUp>

      <FadeUp delay={0.4}>
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
          <a href="tel:+2349112802448" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone size={14} /> +234 911 280 2448
          </a>
          <a href="mailto:ddynamictech@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail size={14} /> ddynamictech@gmail.com
          </a>
          <a href="https://dynamictech.com.ng" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Globe size={14} /> dynamictech.com.ng
          </a>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default CTASection;
