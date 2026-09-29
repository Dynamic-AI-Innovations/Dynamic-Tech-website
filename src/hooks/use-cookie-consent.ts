import { useCallback, useEffect, useState } from "react";

export type ConsentStatus = "unset" | "granted" | "denied";

const STORAGE_KEY = "dt-analytics-consent";
const CONSENT_EVENT = "dt-analytics-consent-change";

function readStoredConsent(): ConsentStatus {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    return "unset";
  }
}

/**
 * Opt-in cookie consent: analytics only loads after an explicit "granted" choice.
 * Multiple components can use this hook at once (the banner and the page-view
 * tracker, at least) — a custom event keeps every instance in sync the moment
 * one of them writes a new choice, in addition to the native `storage` event
 * for cross-tab updates.
 */
export function useCookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>("unset");

  useEffect(() => {
    setStatus(readStoredConsent());

    const onChange = () => setStatus(readStoredConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const setConsent = useCallback((next: Exclude<ConsentStatus, "unset">) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private browsing, etc.) — consent just won't persist across reloads.
    }
    setStatus(next);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }, []);

  return { status, grant: () => setConsent("granted"), deny: () => setConsent("denied") };
}
