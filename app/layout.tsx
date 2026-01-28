import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll, CustomCursor } from '@/components/animations'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { CursorGlow } from '@/components/ui/cursor-glow'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TRAVOR | Rénovation Intérieure Haut de Gamme à Paris',
  description: 'TRAVOR, spécialiste de la rénovation intérieure haut de gamme à Paris et Île-de-France. Appartements haussmanniens, cuisines, salles de bain. 12 ans d\'expérience, 150+ projets livrés.',
  keywords: ['rénovation', 'paris', 'haut de gamme', 'haussmannien', 'cuisine', 'salle de bain', 'luxe', 'intérieur'],
  authors: [{ name: 'TRAVOR' }],
  openGraph: {
    title: 'TRAVOR | Rénovation Intérieure Haut de Gamme',
    description: 'Spécialiste de la rénovation intérieure premium à Paris et Île-de-France',
    type: 'website',
    locale: 'fr_FR',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#FAF8F5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
