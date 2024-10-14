import { GeistSans } from "geist/font/sans"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html>
            <body className={GeistSans.className}>
                {children}
            </body>
        </html>
    )
}