import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { isAnalyticsConfigured } from "@/lib/analytics";

const CookieConsentBanner = () => {
  const { status, grant, deny } = useCookieConsent();

  if (!isAnalyticsConfigured() || status !== "unset") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        role="region"
        aria-label="Cookie consent"
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[60] card-outline p-5 shadow-lg"
      >
        <p className="text-sm text-foreground">
          We use privacy-friendly analytics to understand site traffic. No personal data is sold or shared.
        </p>
        <div className="flex gap-3 mt-4">
          <Button size="sm" variant="hero" onClick={grant}>
            Accept
          </Button>
          <Button size="sm" variant="outline" onClick={deny}>
            Decline
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
