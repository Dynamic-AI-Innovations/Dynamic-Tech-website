import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

import logoServiceLinka  from "@/assets/partners/servicelinka.png";
import logoSwapConnect   from "@/assets/partners/swapconnect.png";
import logoAcadi         from "@/assets/partners/acadi.png";
import logoNehi          from "@/assets/partners/nehi.png";
import logoSmartTouchFix from "@/assets/partners/smarttouchfix.png";
import logoThrivehill    from "@/assets/partners/thrivehill.png";

const built = [
  { name: "ServiceLinka", src: logoServiceLinka, dark: false },
  { name: "SwapConnect",  src: logoSwapConnect,  dark: false },
  { name: "ACCADI",       src: logoAcadi,        dark: false },
  { name: "Nehi Constructs", src: logoNehi,      dark: false },
  { name: "SmartTouchFix", src: logoSmartTouchFix, dark: false },
  { name: "Thrivehill Studio", src: logoThrivehill, dark: true },
];

const edgeFade = {
  maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
  WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
} as CSSProperties;

const VentureStudioPartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding py-24 lg:py-32 bg-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <p className="label-caps text-primary mb-4">Built With The Studio</p>
          <h2 className="heading-lg max-w-2xl">
            Organisations we've <span className="text-gradient-primary">built with.</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mt-6">
            Real teams the Venture Studio has put product, engineering, and design capacity behind.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden mt-14"
          style={edgeFade}
        >
          <div className="flex items-center animate-marquee" style={{ animationDuration: "36s" }}>
            {[...built, ...built].map((p, i) => (
              <div
                key={i}
                className={`flex-shrink-0 mx-8 flex items-center justify-center ${p.dark ? "bg-gray-900 rounded-lg px-3 py-1.5" : ""}`}
              >
                <img src={p.src} alt={p.name} loading="lazy" className="h-10 w-auto max-w-[120px] object-contain" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VentureStudioPartnersSection;
