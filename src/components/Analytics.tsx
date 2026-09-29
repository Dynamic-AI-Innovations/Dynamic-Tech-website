import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { initGA, trackPageview } from "@/lib/analytics";

/** Loads GA4 once consent is granted, then tracks every SPA route change as a page_view. */
const Analytics = () => {
  const { pathname, search } = useLocation();
  const { status } = useCookieConsent();

  useEffect(() => {
    if (status === "granted") initGA();
  }, [status]);

  useEffect(() => {
    if (status === "granted") trackPageview(pathname + search);
  }, [status, pathname, search]);

  return null;
};

export default Analytics;
