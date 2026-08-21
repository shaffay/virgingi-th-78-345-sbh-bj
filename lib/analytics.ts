type EventProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Analytics-neutral marketing events. GTM consumes dataLayer when configured;
 * the CustomEvent keeps the same contract available to any future provider.
 */
export function trackMarketingEvent(
  event: string,
  properties: EventProperties = {},
) {
  if (typeof window === "undefined") return;
  const payload = { event, ...properties };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
  window.dispatchEvent(new CustomEvent("wiyo:analytics", { detail: payload }));
}

export function getCampaignContext() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    landingPage: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || undefined,
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    utmContent: params.get("utm_content") || undefined,
    utmTerm: params.get("utm_term") || undefined,
  };
}
