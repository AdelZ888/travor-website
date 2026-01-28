import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

interface ProcessStep {
  title: string
  description: string
}

interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  longDescription: string
  process: ProcessStep[]
  features: string[]
  pricing: string
  duration: string
}

interface ServiceDetailProps {
  service: Service
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh]">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <p className="text-xs font-light tracking-[0.3em] uppercase text-primary-foreground/80 mb-4">
              Nos services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary-foreground">
              {service.title}
            </h1>
            <p className="mt-4 text-xl font-light text-primary-foreground/90 max-w-2xl">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Notre processus
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={step.title} className="relative">
                <span className="font-serif text-5xl font-medium text-primary/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm font-light text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Pricing */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Features */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                Ce qui est inclus
              </h2>
              <ul className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-base font-light text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Card */}
            <div>
              <div className="bg-secondary rounded-sm p-8 lg:p-12">
                <h3 className="text-xs font-medium tracking-widest uppercase text-foreground mb-6">
                  Informations pratiques
                </h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm font-light uppercase tracking-wide text-muted-foreground">
                      Tarif indicatif
                    </dt>
                    <dd className="mt-2 font-serif text-2xl font-medium text-foreground">
                      {service.pricing}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-light uppercase tracking-wide text-muted-foreground">
                      Durée moyenne
                    </dt>
                    <dd className="mt-2 font-serif text-2xl font-medium text-foreground">
                      {service.duration}
                    </dd>
                  </div>
                </dl>
                <p className="mt-8 text-sm font-light text-muted-foreground">
                  Chaque projet étant unique, nous vous invitons à nous contacter 
                  pour obtenir un devis personnalisé et adapté à vos besoins.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 group w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary rounded-sm transition-all hover:bg-terracotta-dark uppercase"
                >
                  Demander un devis gratuit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-primary-foreground">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mt-4 text-lg font-light text-primary-foreground/80 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour échanger sur votre projet 
            et vous accompagner dans sa réalisation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-primary bg-primary-foreground rounded-sm transition-all hover:bg-primary-foreground/90 uppercase"
            >
              Nous contacter
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground border border-primary-foreground/30 rounded-sm transition-all hover:bg-primary-foreground/10 uppercase"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
