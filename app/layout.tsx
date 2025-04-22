import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aaron Chaves Baltodano",
  description: "Portfolio personal de desarrollador front end con experiencia en tecnologías modernas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
