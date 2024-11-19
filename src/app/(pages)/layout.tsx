import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../ui/navbar/Navbar";
import Footer from "../ui/footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Providers from "@/utils/Providers";
import ChatBot from "@/services/ChatBot";

export const metadata: Metadata = {
  title: "Kharadi's Best Software Company - Vionsys IT Solutions India",
  openGraph: {
    images: "/opangraph.png",
  },
  twitter: {
    images: "/opengraph.png",
  },

  description:
    "Welcome to Vionsys IT Solutions. We are into specialized IT services that will help your business grow faster. At Vionsys we provide crafting innovations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={GeistSans.className}>
      <GoogleTagManager gtmId="GTM-MQT388RN" />
      <Providers>
        <Navbar />
        <Toaster position="bottom-center" />
        {children}
        <ChatBot />
        <Footer />
      </Providers>
    </main>
  );
}
