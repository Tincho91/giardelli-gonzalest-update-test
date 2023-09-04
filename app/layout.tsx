import { Urbanist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Giardelli-Gonzalez',
  description: 'Búsqueda de empleos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body className={font.className}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <ToastProvider />
              <ModalProvider />
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
          </body>
        </html>
    </ClerkProvider >
  )
}