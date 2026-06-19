import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

const partners = [
  "African Kingdom Business Forum",
  "SwapConnect",
  "ACCADI",
  "Nehi Construction",
  "Smarttouchfix",
  "JK. Murgan",
  "Thrivehill Studio",
  "TheDigitalLasisi",
  "Queens Delight Concepts",
];

const metrics = [
  { value: "10+", label: "Services & Capabilities" },
  { value: "5",   label: "Technology Domains" },
  { value: "9+",  label: "Partners & Clients" },
  { value: "Pan‑African", label: "Market Reach" },
];

const edgeFade = {
  maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
  WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
} as CSSProperties;

const ProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="border-b border-border bg-white">
      {/* Metrics row */}
      <div ref={ref} className="section-padding py-10 border-b border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={[
                "text-center px-3 py-2 lg:px-8",
                i % 2 === 1 ? "border-l border-border" : "",
                i >= 2 ? "border-t border-border lg:border-t-0" : "",
                i > 0 ? "lg:border-l" : "",
              ].filter(Boolean).join(" ")}
            >
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                {m.value}
              </p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest leading-snug">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partner trust strip */}
      <div className="py-7">
        <p className="label-caps text-muted-foreground/40 text-center mb-5">
          Trusted by
        </p>
        <div className="overflow-hidden" style={edgeFade}>
          <div
            className="flex animate-marquee whitespace-nowrap"
            style={{ animationDuration: "42s" }}
          >
            {[...partners, ...partners].map((name, i) => (
              <span key={i} className="mx-7 text-sm font-medium text-muted-foreground">
                {name}
                <span className="ml-7 text-border">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
