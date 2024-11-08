import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Vionsys IT Solutions India Pvt. Ltd.",
  openGraph: {
    images: "/src/app/opengraph-image.png",
  },
  twitter: {
    images: "/src/app/opengraph-image.png",
  },
  description:
    "Welcome to Vionsys IT Solutions. We specialize in delivering advanced IT services to drive your business forward. Our offerings include custom software development, robust cybersecurity measures, and efficient cloud solutions. At Vionsys, we are committed to crafting innovative software tailored to your unique requirements, ensuring your business thrives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-MQT388RN" />

        {/* Google Analytics gtag.js */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-WK7D7TXFNR`}
          strategy="afterInteractive"
        />

        {/* Initialize gtag */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WK7D7TXFNR');
          `}
        </Script>

        {/* Google tag (gtag.js) event */}
        <Script id="gtag-conversion-event" strategy="afterInteractive">
          {`
            gtag('event', 'conversion_event_signup', {
              // <event_parameters> can be specified here if needed
            });
          `}
        </Script>
         {/* New Google tag (gtag.js) event for conversion_event_signup_4 */}
         <Script id="gtag-conversion-event-signup-4" strategy="afterInteractive">
          {`
            gtag('event', 'conversion_event_signup_4', {
              // <event_parameters> can be specified here if needed
            });
          `}
        </Script>
      </head>
      <body className={GeistSans.className}>
        <Toaster position="bottom-center" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
