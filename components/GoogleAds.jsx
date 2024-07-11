import React from "react";
import Script from "next/script";

const GoogleAds = ({ gTagId }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gTagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gTagId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAds;
