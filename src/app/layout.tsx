import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

export const metadata: Metadata = {
    title: "Safe-Flow | AI-Guided Breath & Emotional Regulation",
    description: "AI-guided breath and emotional regulation personalized for your rhythm, protected by design. Start your journey toward balance, clarity, and inner peace.",
    keywords: ["breathing", "meditation", "emotional regulation", "AI", "wellness", "mindfulness", "stress relief"],
    authors: [{ name: "A-X Software SASU" }],
    openGraph: {
        title: "Safe-Flow | Find Your Flow, Feel Safe Doing It",
        description: "AI-guided breath and emotional regulation personalized for your rhythm, protected by design.",
        url: "https://safe-flow.ai",
        siteName: "Safe-Flow",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Safe-Flow | AI-Guided Breath & Emotional Regulation",
        description: "Personalized breathing exercises and emotional regulation, protected by design.",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
