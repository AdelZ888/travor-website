import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Services | TRAVOR - Rénovation Haut de Gamme",
  description: "Découvrez nos services de rénovation intérieure : rénovation complète, salle de bain, cuisine, appartement haussmannien. Accompagnement sur-mesure à Paris.",
}

const services = [
  {
    title: "Rénovation complète",
    description: "Transformation totale de votre espace de vie. De la conception à la livraison, nous orchestrons chaque détail pour créer l'intérieur de vos rêves.",
    image: "/images/services/renovation.jpg",
    href: "/services/renovation-complete",
    features: ["Étude personnalisée", "Plans 3D", "Coordination des corps de métier", "Garantie décennale"],
  },
  {
    title: "Salle de bain",
    description: "Créez votre oasis de bien-être. Design contemporain, matériaux nobles et finitions exceptionnelles pour un espace de détente unique.",
    image: "/images/services/salle-de-bain.jpg",
    href: "/services/salle-de-bain",
    features: ["Conception sur-mesure", "Matériaux premium", "Robinetterie haut de gamme", "Éclairage d'ambiance"],
  },
  {
    title: "Cuisine",
    description: "Le cœur de votre foyer réinventé. Ergonomie parfaite et esthétique raffinée pour un quotidien sublime.",
    image: "/images/services/cuisine.jpg",
    href: "/services/cuisine",
    features: ["Agencement optimisé", "Électroménager intégré", "Plans de travail sur-mesure", "Rangements intelligents"],
  },
  {
    title: "Haussmannien",
    description: "L'art de sublimer le patrimoine parisien. Restauration respectueuse et modernisation élégante des appartements d'exception.",
    image: "/images/services/haussmannien.jpg",
    href: "/services/haussmannien",
    features: ["Restauration moulures", "Parquet Point de Hongrie", "Cheminées d'époque", "Modernisation technique"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-light tracking-[0.3em] uppercase text-primary mb-4">
                Nos expertises
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
                Des services sur-mesure
              </h1>
              <p className="mt-6 text-lg font-light text-muted-foreground leading-relaxed">
                Chaque projet mérite une attention particulière. Notre équipe d{"'"}experts vous accompagne 
                à chaque étape, de la conception à la réalisation, avec une exigence de qualité absolue.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-24 lg:pb-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Link href={service.href} className="block relative overflow-hidden rounded-sm aspect-[4/3] group">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base font-light text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm font-light text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="mt-8 group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-primary hover:text-terracotta-dark transition-colors"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
              Vous avez un projet en tête ?
            </h2>
            <p className="mt-4 text-lg font-light text-muted-foreground max-w-2xl mx-auto">
              Contactez-nous pour une première consultation gratuite et sans engagement.
            </p>
            <Link
              href="/contact"
              className="mt-8 group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary rounded-sm transition-all hover:bg-terracotta-dark uppercase"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
