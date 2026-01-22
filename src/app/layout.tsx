
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Prince Kumar | Software Developer",
  description: "Prince Kumar is a full-stack developer with a passion for creating beautiful and functional websites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-50 ${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}

