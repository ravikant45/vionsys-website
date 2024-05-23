import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Vionsys IT Solutions India Pvt. Ltd.",
    template: "Vionsys IT Solutions India Pvt. Ltd.",
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
    <html lang="en">
      <body className={GeistSans.className}>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
