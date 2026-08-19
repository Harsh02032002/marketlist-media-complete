import { Phone } from "lucide-react";
import { contact } from "@/data/site";

/** WhatsApp SVG icon */
function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
      className="h-6 w-6"
    >
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.44.65 4.73 1.785 6.71L2 30l7.47-1.76A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 2c6.627 0 12 5.373 12 12S22.627 28 16 28a11.94 11.94 0 0 1-6.08-1.662l-.435-.26-4.43 1.043 1.073-4.306-.28-.45A11.95 11.95 0 0 1 4 16C4 9.373 9.373 4 16 4zm-3.5 6.5c-.28 0-.72.105-1.1.512-.38.407-1.4 1.367-1.4 3.336 0 1.968 1.43 3.87 1.63 4.14.2.267 2.79 4.36 6.87 5.943 3.41 1.327 4.08 1.067 4.82 1c.73-.067 2.37-.967 2.7-1.9.33-.934.33-1.734.23-1.9-.1-.167-.37-.267-.77-.467s-2.37-1.167-2.74-1.3c-.37-.133-.63-.2-.9.2-.27.4-1.03 1.3-1.27 1.567-.23.267-.47.3-.87.1-.4-.2-1.7-.63-3.23-2-1.19-1.066-2-2.39-2.23-2.79-.24-.4-.03-.617.17-.817.18-.18.4-.467.6-.7.2-.233.27-.4.4-.667.13-.267.07-.5-.03-.7-.1-.2-.88-2.166-1.22-2.966-.3-.7-.6-.7-.9-.7z" />
    </svg>
  );
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all hover:scale-110 hover:shadow-[#25D366]/60"
      >
        <WhatsAppIcon />
      </a>

      {/* Call */}
      <a
        href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
        aria-label={`Call ${contact.phones[0]}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-neon-blue text-background shadow-lg shadow-neon-blue/40 transition-all hover:scale-110 hover:shadow-neon-blue/60 glow-blue"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
