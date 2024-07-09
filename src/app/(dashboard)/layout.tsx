import Providers from "@/utils/Providers";
import { GeistSans } from "geist/font/sans";
import Sidebar from "../ui/dashboard/admin/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={GeistSans.className}>
      <Providers>
        <Sidebar />
        {children}
      </Providers>
    </div>
  );
}
