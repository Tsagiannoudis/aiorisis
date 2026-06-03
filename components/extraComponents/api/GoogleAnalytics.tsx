"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { hasAnalyticsConsent } from "../HelperCookieConsent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const GoogleAnalytics = () => {
  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false);

  useEffect(() => {
    setCanLoadAnalytics(hasAnalyticsConsent());
  }, []);

  if (!canLoadAnalytics || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
};


export default GoogleAnalytics;