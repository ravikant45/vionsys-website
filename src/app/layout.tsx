import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script"; // Import next/script for custom scripts

export const metadata: Metadata = {
  title: "Vionsys IT Solutions India Pvt. Ltd.",

  openGraph: {
    images: "/src/app/opengraph-image.png",
  },
  twitter: {
    images: "/src/app/opengraph-image.png",
  },

  description:
    "Welcome to Vionsys IT Solutions. We specialize in delivering advanced IT services to drive your business forward. Our offerings include custom software development, robust cybersecurity measures and efficient cloud solutions. At Vionsys, we are committed to crafting innovative software tailored to your unique requirements ensuring your business thrives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MQT388RN" />
      <head>
        {/* Google tag (gtag.js) event */}
        <Script id="gtag-event" strategy="afterInteractive">
          {`
            gtag('event', 'conversion_event_signup', {
              // <event_parameters>
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
