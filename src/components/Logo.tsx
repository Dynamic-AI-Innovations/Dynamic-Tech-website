import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import logoLight from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";

/**
 * The wordmark in logo.svg is a hardcoded navy (#0A1F5C), invisible on a
 * dark navbar/footer. Swap to the white-wordmark variant in dark mode.
 */
const Logo = ({ className = "" }: { className?: string }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const src = mounted && resolvedTheme === "dark" ? logoDark : logoLight;

  return <img src={src} alt="Dynamics Technology" className={className} />;
};

export default Logo;
