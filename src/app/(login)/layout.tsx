import Providers from "@/utils/Providers";
import { GeistSans } from "geist/font/sans";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={GeistSans.className}>
            <Providers>
                <div className="flex h-screen">
                    <div className="flex-1 overflow-auto">
                        {children}
                    </div>
                </div>
            </Providers>
        </div>
    )
}

