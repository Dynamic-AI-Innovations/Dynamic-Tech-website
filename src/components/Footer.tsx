import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="section-padding py-12 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Dynamics Technology" className="h-8 w-auto" />
      </a>
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
