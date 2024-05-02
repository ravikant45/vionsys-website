import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "./ui/footer/Footer";
import Navbar from "./ui/navbar/Navbar";
import { Toaster } from "react-hot-toast";

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
    "  Welcome­ to VionSys IT Solutions. We give you computer things to he­lp your business. From making software to kee­ping computers safe and cloud service­s, we help businesse­s do well with software solution. Our software pe­ople make programs for your nee­ds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Navbar />
        <Toaster position="bottom-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
