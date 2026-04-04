import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import IdeationModal from "@/components/IdeationModal";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Core Service", href: "#core-service" },
  { label: "Services", href: "#services" },
  { label: "Our Vision", href: "#vision" },
  { label: "Partners", href: "#partners" },
  { label: "Why Us", href: "#why-us" },
  { label: "Store", href: "https://paystack.shop/dynamics-technology-store", external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card"
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Dynamics Technology" className="h-10 md:h-12 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="hero" size="lg" onClick={() => setModalOpen(true)}>Get Started</Button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="section-padding py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="hero" className="mt-2 w-full" onClick={() => { setOpen(false); setModalOpen(true); }}>Get Started</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <IdeationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Navbar;
