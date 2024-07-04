import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../ui/navbar/Navbar";
import Footer from "../ui/footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Providers from "@/utils/Providers";

export const metadata: Metadata = {
  title: {
    default: "Vionsys IT Solutions India Pvt. Ltd.",
    template: "%s - Vionsys IT Solutions India Pvt. Ltd.",
  },
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

    <main className={GeistSans.className}>
      <GoogleTagManager gtmId="GTM-MQT388RN" />
      <Providers>
        <Navbar />
        <Toaster position="bottom-center" />
        {children}
        <Footer />
      </Providers>
    </main>
  );
}
