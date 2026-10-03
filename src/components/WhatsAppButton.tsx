import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/+2349112802448"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200"
  >
    <WhatsAppIcon size={28} />
  </a>
);

export default WhatsAppButton;
