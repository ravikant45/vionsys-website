import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Landing Page - Vionsys IT Solutions India Pvt. Ltd.",
  openGraph: {
    images:"/opangraph.png",
  },
  twitter: {
    images:"/opangraph.png",
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
    
      <main className={GeistSans.className}>
        <GoogleTagManager gtmId="GTM-MQT388RN"/>
        <Toaster position="bottom-center" />
        {children}
      </main>

  );
}
