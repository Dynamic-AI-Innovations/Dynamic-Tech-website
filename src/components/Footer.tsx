import logo from "@/assets/logo.jpg";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/ddynamicstechnology/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/18YqKpy8gp/?mibextid=wwXIfr", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/ddynamictech?s=21", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/dynamics-technology/", label: "LinkedIn" },
];

const Footer = () => (
  <footer className="section-padding py-12 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Dynamics Technology" className="h-8 w-auto" />
      </a>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dynamics Technology. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
