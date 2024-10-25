import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/app/ui/footer/Footer";
import ClientNavbar from "./componets/Navbar/ClientNavbar" // Ensure correct path
import Script from "next/script";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Landing Page - Vionsys IT Solutions India Pvt. Ltd.",
  openGraph: {
    images: "/opangraph.png",
  },
  twitter: {
    images: "/opangraph.png",
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

        {/* Load gtag.js with your Google Analytics ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-WK7D7TXFNR`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WK7D7TXFNR');
          `}
        </Script>
        <Script id="gtag-event" strategy="afterInteractive">
          {`
            if (typeof gtag === 'function') {
              gtag('event', 'conversion_event_signup', {
                // <event_parameters>
              });
            }
          `}
        </Script>
      </head>
      <body className={GeistSans.className}>
        <Toaster position="bottom-center" />
        <ClientNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
