// @ts-nocheck
import React from "react";
import Script from "next/script";
import { SpeedInsights as VercelInsights } from "@vercel/speed-insights/next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface Props {
  ReCaptcha_Site_Key?: string | undefined;
}

function ReCaptcha_V3({
  ReCaptcha_Site_Key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
}: Props) {
  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${ReCaptcha_Site_Key}`}
      strategy="lazyOnload"
    />
  );
}

function getRecaptchaToken() {
  return new Promise<{ token: string }>((resolve) => {
    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "submit" }
      );

      resolve({ token });
    });
  });
}

interface CallRailProps {
  CALL_RAIL_SRC: string | undefined;
}

function CallRail({ CALL_RAIL_SRC }: CallRailProps) {
  return (
    <>
      <Script type="text/javascript" src={CALL_RAIL_SRC} />
    </>
  );
}

declare global {
  interface Window {
    gtag: any;
    fbq: any;
  }
}

interface GA4Props {
  GA4_ID: string | undefined;
}

function GA4({ GA4_ID }: GA4Props) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <Script id="ga4-analytics">
        {` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA4_ID}');
            `}
      </Script>
    </>
  );
}

interface MetaPixelProps {
  META_PIXEL_ID: string | undefined;
}

function Meta({ META_PIXEL_ID }: MetaPixelProps) {
  return (
    <>
      <Script id="Meta-Pixel">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');`}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

export const Tracking = {
  Meta,
  GA4,
  CallRail,
  ReCaptcha_V3,
  getRecaptchaToken,
  VercelInsights,
  VercelAnalytics,
};
