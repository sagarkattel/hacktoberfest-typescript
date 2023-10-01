import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Context from './components/Context';
import { Providers } from "@/redux/ReduxProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Context>
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
        </body>
      </Context>
    </html>
  )
}
