import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

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
  { quote: "The laptop I bought is of exceptional quality and the service from start to finish was excellent. I wouldn't hesitate to recommend Dynamics Technology to anyone looking for quality technology.", name: "Martha Adekanbi", role: "Technology Products Customer" },
  { quote: "Awesome customer care. My issue was resolved affordably and quickly by a team that was professional, attentive, and genuinely invested in getting it right.", name: "Mofe Ojo", role: "IT Support Client" },
  { quote: "Excellent service, great devices, and unbeatable deals. Dynamics Technology delivers on every promise they make. I highly recommend them.", name: "Precious Adegboyega-Loto", role: "Technology Products & Services Client" },
];

const TestimonialsSection = () => (
  <section className="section-padding py-24 lg:py-32">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="label-caps text-primary mb-4">Client Voices</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="heading-lg">What our clients <span className="text-gradient-primary">say</span></h2>
      </FadeUp>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {testimonials.map((t, i) => (
          <FadeUp key={t.name} delay={0.15 + i * 0.1}>
            <div className="glass-card rounded-xl p-8 h-full flex flex-col">
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{t.quote}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
