import Providers from "@/utils/Providers";
import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
