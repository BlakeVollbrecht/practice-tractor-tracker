import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/themeProvider"
import { MainNav } from "@/components/mainNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tractor Tracker",
  description:
    "Tracks tractors on trajected treks to traverse trails and trim tracts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="border-b">
            <div className="flex h-16 items-center px-4 max-w-screen-xl mx-auto">
              <Link href="/">
                <h1>Tractor Tracker</h1>
              </Link>
              <MainNav className="ml-12 mr-6" />
              <div className="ml-auto flex items-center space-x-4">
                <a
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                  href="https://github.com/blakevollbrecht"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  By Blake
                </a>
              </div>
            </div>
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
