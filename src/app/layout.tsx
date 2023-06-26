import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebUtility',
  description: 'Basic web utility',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon8.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
