import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import IdeationModal from "@/components/IdeationModal";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Partners", to: "/partners" },
  { label: "Store",    to: "https://paystack.shop/dynamics-technology-store", external: true },
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const handlePortfolioSelect = (tab: string) => {
    navigate(`/portfolio?tab=${tab}`);
    setOpen(false);
    setDropdownOpen(false);
    setMobilePortfolioOpen(false);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card"
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Dynamics Technology" className="h-9 md:h-11 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
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
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Portfolios
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
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

          <div className="hidden lg:block">
            <Button variant="hero" size="lg" onClick={() => setModalOpen(true)}>
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                {navLinks.map((link) =>
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
