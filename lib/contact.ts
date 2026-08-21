export const WIYO_WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WIYO_WHATSAPP_NUMBER || "971586152039"
).replace(/\D/g, "");

export const WIYO_WHATSAPP_DISPLAY = "+971 58 615 2039";
export const WIYO_WHATSAPP_MESSAGE =
  "Hi WIYO team, I'd like to see a demo for my real estate agency.";

export const WIYO_WHATSAPP_URL = `https://wa.me/${WIYO_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WIYO_WHATSAPP_MESSAGE,
)}`;
