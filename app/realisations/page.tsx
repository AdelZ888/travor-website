import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Réalisations | TRAVOR",
  description: "Découvrez nos projets de rénovation intérieure haut de gamme à Paris et Île-de-France. Appartements haussmanniens, cuisines, salles de bain.",
}

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-light tracking-[0.3em] uppercase text-primary mb-4">
                Portfolio
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
                Nos réalisations
              </h1>
              <p className="mt-6 text-lg font-light text-muted-foreground leading-relaxed">
                Chaque projet est une histoire unique. Découvrez comment nous avons transformé 
                ces espaces en lieux de vie d{"'"}exception, alliant esthétique et fonctionnalité.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  )
}
