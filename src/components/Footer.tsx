const Footer = () => (
  <footer className="section-padding py-12 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
          D
        </div>
        <span className="font-display font-semibold text-sm">Dynamics Technology</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dynamics Technology. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["About", "Services", "Partners", "Contact"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
