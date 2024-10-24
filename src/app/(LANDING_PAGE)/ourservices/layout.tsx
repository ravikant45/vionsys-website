import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/app/ui/footer/Footer";
import ClientNavbar from "./componets/Navbar/ClientNavbar";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Landing Page - Vionsys IT Solutions India Pvt. Ltd.",
  openGraph: {
    images: "/opangraph.png",
  },
  twitter: {
    images: "/opangraph.png",
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
    <html lang="eng">
      <GoogleTagManager gtmId="GTM-MQT388RN" />
      <head>
        <Script id="gtag-event" strategy="afterInteractive">
          {`
            gtag('event', 'conversion_event_signup', {
              // <event_parameters>
            });
          `}
        </Script>
        <main className={GeistSans.className}>
          <Toaster position="bottom-center" />
          <ClientNavbar />
          {children}
          <Footer />
        </main>
      </head>
    </html>
  );
}
