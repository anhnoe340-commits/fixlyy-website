// Simple mock analytics to satisfy requirements without a real GA hook
export const trackEvent = (eventName, data = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, data);
  } else {
    console.log(`[Analytics Event]: ${eventName}`, data);
  }
};
