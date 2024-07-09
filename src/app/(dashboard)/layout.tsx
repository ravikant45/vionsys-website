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
        <div className="bg-white overflow-x-hidden w-screen">
          <Sidebar />
          <div className="flex-1 md:ml-40 ml-16 z-0">{children}</div>
        </div>
      </Providers>
    </div>
  );
}
