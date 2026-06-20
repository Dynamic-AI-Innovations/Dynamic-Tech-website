import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

import logoServiceLinka  from "@/assets/partners/servicelinka.png";
import logoSwapConnect   from "@/assets/partners/swapconnect.png";
import logoAcadi         from "@/assets/partners/acadi.png";
import logoNehi          from "@/assets/partners/nehi.png";
import logoIntercessors  from "@/assets/partners/intercessors-for-africa.png";
import logoJkMurgan      from "@/assets/partners/jk-murgan.jpg";
import logoApostolic     from "@/assets/partners/apostolic-altar.jpg";
import logoSmartTouchFix from "@/assets/partners/smarttouchfix.png";
import logoThrivehill    from "@/assets/partners/thrivehill.png";
import logoDigitalLasisi from "@/assets/partners/thedigitallasisi.png";
import logoQueensDelight from "@/assets/partners/queens-delight.png";

const partners = [
  { name: "ServiceLinka",            src: logoServiceLinka,  dark: false },
  { name: "SwapConnect",             src: logoSwapConnect,   dark: false },
  { name: "ACCADI",                  src: logoAcadi,         dark: false },
  { name: "Nehi Constructs",         src: logoNehi,          dark: false },
  { name: "Intercessors for Africa", src: logoIntercessors,  dark: false },
  { name: "JK. Murgan",             src: logoJkMurgan,      dark: true  },
  { name: "Apostolic Altar",         src: logoApostolic,     dark: true  },
  { name: "SmartTouchFix",           src: logoSmartTouchFix, dark: false },
  { name: "Thrivehill Studio",       src: logoThrivehill,    dark: true  },
  { name: "TheDigitalLasisi",        src: logoDigitalLasisi, dark: false },
  { name: "Queens Delight",          src: logoQueensDelight, dark: false },
];

const metrics = [
  { value: "10+", label: "Services & Capabilities" },
  { value: "5",   label: "Technology Domains" },
  { value: "12+", label: "Partners & Clients" },
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

      {/* Partner logo strip */}
      <div className="py-6">
        <p className="label-caps text-muted-foreground/40 text-center mb-5">Trusted by</p>
        <div className="overflow-hidden" style={edgeFade}>
          <div className="flex items-center animate-marquee" style={{ animationDuration: "48s" }}>
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className={`flex-shrink-0 mx-8 flex items-center justify-center ${p.dark ? "bg-gray-900 rounded-lg px-3 py-1.5" : ""}`}
              >
                <img
                  src={p.src}
                  alt={p.name}
                  className="h-8 w-auto max-w-[100px] object-contain opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
