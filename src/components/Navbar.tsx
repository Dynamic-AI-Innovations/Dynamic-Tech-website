import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import IdeationModal from "@/components/IdeationModal";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Partners", to: "/partners" },
  { label: "Store",    to: "https://paystack.shop/dynamics-technology-store", external: true },
];

const ecosystemItems = [
  { label: "Ecosystem Overview", to: "/#ecosystem" },
  { label: "Innovation Lab",     to: "/innovation-lab" },
  { label: "Venture Studio",     to: "/venture-studio" },
  { label: "Research Institute", to: "/research-institute" },
];

const portfolioItems = [
  { label: "Research & Business Dev", tab: "rbd" },
  { label: "Creative & Brand Design", tab: "design" },
  { label: "Content & Documentation", tab: "writing" },
  { label: "Software & Automation",   tab: "tech" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const ecosystemHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const portfolioHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const handlePortfolioSelect = (tab: string) => {
    navigate(`/portfolio?tab=${tab}`);
    setOpen(false);
    setPortfolioOpen(false);
    setMobilePortfolioOpen(false);
  };

  const handleEcosystemEnter = () => {
    if (ecosystemHoverTimeout.current) clearTimeout(ecosystemHoverTimeout.current);
    setEcosystemOpen(true);
  };
  const handleEcosystemLeave = () => {
    ecosystemHoverTimeout.current = setTimeout(() => setEcosystemOpen(false), 150);
  };

  const handlePortfolioEnter = () => {
    if (portfolioHoverTimeout.current) clearTimeout(portfolioHoverTimeout.current);
    setPortfolioOpen(true);
  };
  const handlePortfolioLeave = () => {
    portfolioHoverTimeout.current = setTimeout(() => setPortfolioOpen(false), 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card shadow-sm border-b border-border"
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <Logo className="h-9 md:h-11 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Home
            </Link>

            {/* Ecosystem dropdown */}
            <div className="relative" onMouseEnter={handleEcosystemEnter} onMouseLeave={handleEcosystemLeave}>
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Ecosystem
                <ChevronDown size={13} className={`transition-transform duration-200 ${ecosystemOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {ecosystemOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 glass-card rounded-xl py-2 z-50"
                  >
                    {ecosystemItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setEcosystemOpen(false)}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Portfolios dropdown */}
            <div className="relative" onMouseEnter={handlePortfolioEnter} onMouseLeave={handlePortfolioLeave}>
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Portfolios
                <ChevronDown size={13} className={`transition-transform duration-200 ${portfolioOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {portfolioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 glass-card rounded-xl py-2 z-50"
                  >
                    {portfolioItems.map((item) => (
                      <button
                        key={item.tab}
                        onClick={() => handlePortfolioSelect(item.tab)}
                        className="w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button variant="hero" size="lg" onClick={() => setModalOpen(true)}>
              Get Started
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="section-padding py-6 flex flex-col gap-4">
                <Link to="/" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>

                {/* Mobile ecosystem accordion */}
                <div>
                  <button
                    onClick={() => setMobileEcosystemOpen(!mobileEcosystemOpen)}
                    className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Ecosystem
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileEcosystemOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileEcosystemOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-border pl-4">
                          {ecosystemItems.map((item) => (
                            <Link
                              key={item.label}
                              to={item.to}
                              onClick={() => { setOpen(false); setMobileEcosystemOpen(false); }}
                              className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.slice(1).map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}

                {/* Mobile portfolios accordion */}
                <div>
                  <button
                    onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                    className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Portfolios
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${mobilePortfolioOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobilePortfolioOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-border pl-4">
                          {portfolioItems.map((item) => (
                            <button
                              key={item.tab}
                              onClick={() => handlePortfolioSelect(item.tab)}
                              className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Button
                  variant="hero"
                  className="mt-2 w-full"
                  onClick={() => { setOpen(false); setModalOpen(true); }}
                >
                  Get Started
                </Button>
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
