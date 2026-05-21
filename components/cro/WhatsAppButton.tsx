"use client";

const WA_NUMBER = "971500000000";
const WA_MESSAGE =
  "Hi WIYO team, I'd like to see a demo for my real estate agency.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WIYO on WhatsApp"
      className="fixed z-40 hidden md:flex items-center justify-center rounded-full transition-transform hover:scale-105"
      style={{
        right: "24px",
        bottom: "24px",
        width: "56px",
        height: "56px",
        background: "#25D366",
        boxShadow:
          "0 6px 24px rgba(37, 211, 102, 0.4), 0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2a10 10 0 0 0-8.6 15.07L2 22l5.06-1.36A10 10 0 1 0 12 2zm5.42 14.16c-.23.65-1.34 1.23-1.85 1.27-.5.05-1.03.07-1.66-.1a15.18 15.18 0 0 1-1.5-.56 11.5 11.5 0 0 1-4.43-3.92c-.34-.45-.92-1.21-.92-2.3 0-1.1.58-1.64.78-1.87.2-.23.43-.29.58-.29h.41c.13 0 .31-.05.48.37l.7 1.7c.06.13.1.28.02.45-.09.18-.13.29-.27.44-.13.16-.28.35-.4.46-.13.13-.27.27-.12.53.16.27.73 1.2 1.57 1.95 1.07.95 1.97 1.25 2.25 1.39.28.13.44.11.6-.07.16-.18.7-.81.88-1.09.18-.27.36-.23.6-.14.25.1 1.6.75 1.88.88.28.13.46.2.53.31.07.12.07.7-.16 1.36z"
          fill="white"
        />
      </svg>
    </a>
  );
}
