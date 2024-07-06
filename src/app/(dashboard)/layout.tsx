import Providers from "@/utils/Providers";
import { GeistSans } from "geist/font/sans";
import Sidebar from "../ui/dashboard/admin/Sidebar";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={GeistSans.className}>
            <Providers>
                <div className="bg-white">
                    <Sidebar />
                    <div className="flex-1 ml-44 px-4">
                        {children}
                    </div>
                </div>
            </Providers>
        </div>
    )
}

