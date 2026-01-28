import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À Propos | TRAVOR - Notre Histoire et Nos Valeurs",
  description: "Découvrez l'histoire de TRAVOR, spécialiste de la rénovation haut de gamme à Paris depuis 12 ans. Notre équipe, nos valeurs et notre engagement qualité.",
}

const values = [
  {
    icon: Shield,
    title: "Excellence",
    description: "Nous sélectionnons les meilleurs artisans et matériaux pour garantir une qualité irréprochable sur chaque projet.",
  },
  {
    icon: Clock,
    title: "Engagement",
    description: "Respect des délais et du budget annoncés. Nous nous engageons par écrit sur nos estimations.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "12 années d'expérience et plus de 150 projets réalisés dans la rénovation haut de gamme parisienne.",
  },
  {
    icon: Users,
    title: "Accompagnement",
    description: "Un interlocuteur unique tout au long de votre projet pour une communication fluide et transparente.",
  },
]

const guarantees = [
  {
    title: "Garantie décennale",
    description: "Tous nos travaux sont couverts par une assurance décennale pour votre tranquillité.",
  },
  {
    title: "Devis détaillé",
    description: "Un chiffrage précis et transparent, sans surprise en fin de chantier.",
  },
  {
    title: "Suivi personnalisé",
    description: "Reporting hebdomadaire et disponibilité de votre chef de projet dédié.",
  },
  {
    title: "SAV réactif",
    description: "Une équipe disponible après livraison pour intervenir en cas de besoin.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs font-light tracking-[0.3em] uppercase text-primary mb-4">
                  À propos
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
                  Notre passion, votre intérieur
                </h1>
                <p className="mt-6 text-lg font-light text-muted-foreground leading-relaxed">
                  Depuis 2012, TRAVOR accompagne les propriétaires parisiens dans leurs projets 
                  de rénovation intérieure. Notre mission : transformer vos espaces en lieux de vie 
                  d{"'"}exception, à votre image.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/team.jpg"
                  alt="L'équipe TRAVOR"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                Notre histoire
              </h2>
              <p className="mt-6 text-base font-light text-muted-foreground leading-relaxed">
                TRAVOR est né de la volonté de proposer une alternative aux acteurs traditionnels 
                de la rénovation. Fondée par un architecte d{"'"}intérieur passionné par le patrimoine 
                parisien, notre entreprise s{"'"}est construite sur une conviction simple : chaque projet 
                mérite une attention exceptionnelle.
              </p>
              <p className="mt-4 text-base font-light text-muted-foreground leading-relaxed">
                Au fil des années, nous avons constitué une équipe de professionnels partageant 
                les mêmes exigences de qualité et le même amour du travail bien fait. Architectes, 
                décorateurs, chefs de projet et artisans qualifiés travaillent main dans la main 
                pour donner vie à vos projets.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                Nos valeurs
              </h2>
              <p className="mt-4 text-lg font-light text-muted-foreground">
                Les piliers qui guident chacune de nos interventions
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zone */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                  Zone d{"'"}intervention
                </h2>
                <p className="mt-6 text-base font-light text-muted-foreground leading-relaxed">
                  Nous intervenons sur l{"'"}ensemble de Paris et de l{"'"}Île-de-France. 
                  Notre connaissance approfondie du patrimoine architectural parisien 
                  nous permet d{"'"}intervenir avec expertise sur tous types de biens :
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-base font-light text-foreground">Paris intra-muros (tous arrondissements)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-base font-light text-foreground">Hauts-de-Seine (92)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-base font-light text-foreground">Yvelines (78)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-base font-light text-foreground">Val-de-Marne (94)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-sm p-8 lg:p-12">
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  En chiffres
                </h3>
                <dl className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <dt className="font-serif text-4xl font-medium text-primary">12+</dt>
                    <dd className="mt-1 text-sm font-light text-muted-foreground">Années d{"'"}expérience</dd>
                  </div>
                  <div>
                    <dt className="font-serif text-4xl font-medium text-primary">150+</dt>
                    <dd className="mt-1 text-sm font-light text-muted-foreground">Projets livrés</dd>
                  </div>
                  <div>
                    <dt className="font-serif text-4xl font-medium text-primary">4.9</dt>
                    <dd className="mt-1 text-sm font-light text-muted-foreground">Note Google</dd>
                  </div>
                  <div>
                    <dt className="font-serif text-4xl font-medium text-primary">98%</dt>
                    <dd className="mt-1 text-sm font-light text-muted-foreground">Clients satisfaits</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                Nos garanties
              </h2>
              <p className="mt-4 text-lg font-light text-muted-foreground">
                Des engagements concrets pour votre tranquillité
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {guarantees.map((guarantee) => (
                <div key={guarantee.title} className="bg-secondary rounded-sm p-8">
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {guarantee.title}
                  </h3>
                  <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-primary-foreground">
              Envie de nous rencontrer ?
            </h2>
            <p className="mt-4 text-lg font-light text-primary-foreground/80 max-w-2xl mx-auto">
              Prenez rendez-vous pour une première consultation gratuite. 
              Nous serons ravis d{"'"}échanger sur votre projet.
            </p>
            <Link
              href="/contact"
              className="mt-8 group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-primary bg-primary-foreground rounded-sm transition-all hover:bg-primary-foreground/90 uppercase"
            >
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
