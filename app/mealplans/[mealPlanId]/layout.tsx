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
        <div>
            <Navigation />
            <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-700 via-teal-800 to-green-900 space-y-10 pt-32">
                {children}
            </main>
        </div>
    )
}
