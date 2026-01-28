import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Instagram, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | TRAVOR - Demandez votre devis gratuit",
  description: "Contactez TRAVOR pour votre projet de rénovation à Paris. Devis gratuit et sans engagement. Réponse sous 48h.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-light tracking-[0.3em] uppercase text-primary mb-4">
                Contact
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
                Parlons de votre projet
              </h1>
              <p className="mt-6 text-lg font-light text-muted-foreground leading-relaxed">
                Vous avez un projet de rénovation ? Remplissez le formulaire ci-dessous 
                ou contactez-nous directement. Nous vous répondons sous 48h.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-24 lg:pb-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
              {/* Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-secondary rounded-sm p-8 sticky top-28">
                  <h3 className="text-xs font-medium tracking-widest uppercase text-foreground mb-8">
                    Coordonnées
                  </h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                          Email
                        </p>
                        <a
                          href="mailto:contact@travor.fr"
                          className="mt-1 text-base font-light text-foreground hover:text-primary transition-colors"
                        >
                          contact@travor.fr
                        </a>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                          Téléphone
                        </p>
                        <a
                          href="tel:+33123456789"
                          className="mt-1 text-base font-light text-foreground hover:text-primary transition-colors"
                        >
                          +33 1 23 45 67 89
                        </a>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                          Zone d{"'"}intervention
                        </p>
                        <p className="mt-1 text-base font-light text-foreground">
                          Paris & Île-de-France
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                          Horaires
                        </p>
                        <p className="mt-1 text-base font-light text-foreground">
                          Lun - Ven : 9h - 18h
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Instagram className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                          Instagram
                        </p>
                        <a
                          href="https://instagram.com/travor.75"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 text-base font-light text-foreground hover:text-primary transition-colors"
                        >
                          @travor.75
                        </a>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-10 pt-8 border-t border-border">
                    <p className="text-sm font-light text-muted-foreground leading-relaxed">
                      Consultation gratuite et sans engagement. 
                      Nous nous déplaçons pour évaluer votre projet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
