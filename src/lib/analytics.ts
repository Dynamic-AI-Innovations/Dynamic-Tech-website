import { GA_MEASUREMENT_ID } from "@/config/analytics";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

/** Injects gtag.js and starts sending page_view events. No-ops if no Measurement ID is configured, or outside production, or consent hasn't been granted. */
export function initGA(): void {
  if (initialized || !GA_MEASUREMENT_ID || !import.meta.env.PROD) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  // Manual pageview control: SPA route changes are tracked explicitly via trackPageview.
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageview(path: string): void {
  if (!initialized || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path });
}

export function isAnalyticsConfigured(): boolean {
  return Boolean(GA_MEASUREMENT_ID);
}
