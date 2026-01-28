import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Rénovation complète", href: "/services/renovation-complete" },
    { name: "Salle de bain", href: "/services/salle-de-bain" },
    { name: "Cuisine", href: "/services/cuisine" },
    { name: "Haussmannien", href: "/services/haussmannien" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-medium tracking-tight text-foreground">
                TRAVOR
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-light">
              Rénovation intérieure haut de gamme à Paris et Île-de-France. 
              12 ans d{"'"}expérience, 150+ projets livrés.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com/travor.75"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-foreground mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-foreground mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-foreground mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <a
                  href="mailto:contact@travor.fr"
                  className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@travor.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <a
                  href="tel:+33123456789"
                  className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm font-light text-muted-foreground">
                  Paris & Île-de-France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-muted-foreground font-light">
              © {new Date().getFullYear()} TRAVOR. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/mentions-legales"
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-light"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-light"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
