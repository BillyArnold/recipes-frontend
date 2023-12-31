import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Navigation from '@/components/navigation/navigation'

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
            <body className={inter.className}>
                <Navigation />
                <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-teal-300 to-green-400 space-y-10 pt-20">
                    {children}
                </main>
            </body>
        </html>
    )
}
