import { ArrowRight } from "lucide-react";
import { WIYO_WHATSAPP_URL } from "@/lib/contact";

export default function MobileCTABar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-center gap-2 p-3 border-t backdrop-blur-md"
      style={{
        background: "rgba(8,12,33,0.92)",
        borderColor: "var(--border-subtle)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)",
      }}
    >
      <a
        href={WIYO_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WIYO on WhatsApp"
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-white"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 16px rgba(37,211,102,.28)",
        }}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2a10 10 0 0 0-8.6 15.07L2 22l5.06-1.36A10 10 0 1 0 12 2zm5.42 14.16c-.23.65-1.34 1.23-1.85 1.27-.5.05-1.03.07-1.66-.1a15.18 15.18 0 0 1-1.5-.56 11.5 11.5 0 0 1-4.43-3.92c-.34-.45-.92-1.21-.92-2.3 0-1.1.58-1.64.78-1.87.2-.23.43-.29.58-.29h.41c.13 0 .31-.05.48.37l.7 1.7c.06.13.1.28.02.45-.09.18-.13.29-.27.44-.13.16-.28.35-.4.46-.13.13-.27.27-.12.53.16.27.73 1.2 1.57 1.95 1.07.95 1.97 1.25 2.25 1.39.28.13.44.11.6-.07.16-.18.7-.81.88-1.09.18-.27.36-.23.6-.14.25.1 1.6.75 1.88.88.28.13.46.2.53.31.07.12.07.7-.16 1.36z" />
        </svg>
      </a>
      <a href="/#cta" className="btn-primary min-h-12 flex-1 justify-center text-[14px]">
        Book a Live Demo
        <ArrowRight size={14} strokeWidth={1.8} />
      </a>
    </div>
  );
}
