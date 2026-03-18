type ConsentState = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __ccConsentInitialized?: boolean;
  }
}

export const CONSENT_KEY = "cc_consent";
const GTAG_ID = "G-K5T4DC0105";
const ADSENSE_CLIENT_ID = "ca-pub-7832617939593023";

const GTAG_SCRIPT_SELECTOR = "script[data-cc-script='gtag']";
const ADSENSE_SCRIPT_SELECTOR = "script[data-cc-script='adsense']";

export function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === "accepted" || stored === "declined") return stored;
  return null;
}

function ensureGtagScriptLoaded() {
  if (document.querySelector(GTAG_SCRIPT_SELECTOR)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
  script.setAttribute("data-cc-script", "gtag");
  document.head.appendChild(script);
}

function ensureAdSenseScriptLoaded() {
  if (document.querySelector(ADSENSE_SCRIPT_SELECTOR)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
  script.crossOrigin = "anonymous";
  script.setAttribute("data-cc-script", "adsense");
  document.head.appendChild(script);
}

function updateGoogleConsent(consent: Exclude<ConsentState, null>) {
  if (!window.gtag) return;

  const granted = consent === "accepted" ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: granted,
    ad_user_data: granted,
    ad_personalization: granted,
    analytics_storage: granted,
  });
}

function applyConsent(consent: Exclude<ConsentState, null>) {
  ensureGtagScriptLoaded();

  if (consent === "accepted") {
    ensureAdSenseScriptLoaded();
  }

  updateGoogleConsent(consent);
}

export function setConsent(consent: Exclude<ConsentState, null>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, consent);
  applyConsent(consent);
}

export function initializeConsentMode() {
  if (typeof window === "undefined") return;
  if (window.__ccConsentInitialized) return;

  window.__ccConsentInitialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });

  window.gtag("config", GTAG_ID, {
    anonymize_ip: true,
  });

  const storedConsent = getStoredConsent();
  if (storedConsent) {
    applyConsent(storedConsent);
  }
}
