export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === "undefined") return false;
  
  try {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) return false;

    const parsed = JSON.parse(consent);
    // Επιστρέφει true μόνο αν το αντικείμενο υπάρχει και η ιδιότητα analytics είναι true
    return parsed && typeof parsed === 'object' && parsed.analytics === true;
  } catch (error) {
    console.error("Error reading analytics consent:", error);
    return false;
  }
};
