import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/ddynamicstechnology/",                   label: "Instagram" },
  { icon: Facebook,  href: "https://www.facebook.com/share/18YqKpy8gp/?mibextid=wwXIfr",      label: "Facebook"  },
  { icon: Twitter,   href: "https://x.com/ddynamictech?s=21",                                  label: "X"         },
  { icon: Linkedin,  href: "https://www.linkedin.com/company/dynamics-technology/",             label: "LinkedIn"  },
];

const companyLinks = [
  { label: "About",      to: "/about"     },
  { label: "Services",   to: "/services"  },
  { label: "Portfolio",  to: "/portfolio" },
  { label: "Partners",   to: "/partners"  },
];

const ecosystemLinks = [
  { label: "Ecosystem Overview", to: "/#ecosystem" },
  { label: "Innovation Lab",     to: "/innovation-lab" },
  { label: "Venture Studio",     to: "/venture-studio" },
  { label: "Research Institute", to: "/research-institute" },
];

const Footer = () => (
  <footer className="section-padding py-12 border-t border-border">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
        <Link to="/" className="flex items-center">
          <Logo className="h-9 w-auto" />
        </Link>

        <div className="grid grid-cols-2 gap-x-10 gap-y-2">
          <div className="flex flex-col gap-2.5">
            <p className="label-caps text-muted-foreground mb-1">Company</p>
            {companyLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="label-caps text-muted-foreground mb-1">Ecosystem</p>
            {ecosystemLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href="tel:+2349112802448" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone size={13} /> +234 911 280 2448
          </a>
          <a href="mailto:ddynamictech@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail size={13} /> ddynamictech@gmail.com
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dynamics Technology. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
