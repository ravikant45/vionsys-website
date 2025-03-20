import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../ui/navbar/Navbar";
import Footer from "../ui/footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Providers from "@/utils/Providers";
import ChatBot from "@/services/ChatBot";
import { BaseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Kharadi's Best Software Company - Vionsys IT Solutions India",
  openGraph: {
    images: "/opangraph.png",
  },
  twitter: {
    images: "/opengraph.png",
  },
  keywords:
    "Vionsys, Vionsys IT Solutions, Vionsys IT Solutions India, Vionsys IT Solutions India pvt. ltd.",
  publisher: "Vionsys IT solutions India pvt. ltd.",
  description:
    "Welcome to Vionsys IT Solutions. We are into specialized IT services that will help your business grow faster. At Vionsys we provide crafting innovations.",

  alternates: {
    canonical: `${BaseUrl}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={GeistSans.className}>
      <GoogleTagManager gtmId="GTM-MQT388RN" />
      <Providers>
        <Navbar />
        <Toaster position="bottom-center" />
        <main>{children}</main>
        <ChatBot />
        <Footer />
      </Providers>
    </div>
  );
}
