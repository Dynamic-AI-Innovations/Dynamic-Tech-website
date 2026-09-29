import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {children}
    <Footer />
    <WhatsAppButton />
    <CookieConsentBanner />
  </div>
);

export default Layout;
