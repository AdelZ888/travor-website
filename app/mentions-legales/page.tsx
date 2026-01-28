import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales | TRAVOR",
  description: "Mentions légales du site TRAVOR - Entreprise de rénovation intérieure haut de gamme à Paris et Île-de-France.",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-12">
              Mentions légales
            </h1>

            <div className="prose prose-lg max-w-none">
              {/* Éditeur */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  1. Éditeur du site
                </h2>
                <div className="space-y-2 text-base font-light text-muted-foreground">
                  <p><strong className="text-foreground">Raison sociale :</strong> TRAVOR</p>
                  <p><strong className="text-foreground">Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</p>
                  <p><strong className="text-foreground">Capital social :</strong> 5 000,00 €</p>
                  <p><strong className="text-foreground">Siège social :</strong> [À COMPLÉTER]</p>
                  <p><strong className="text-foreground">SIREN :</strong> 938 187 515</p>
                  <p><strong className="text-foreground">SIRET :</strong> 938 187 515 00011</p>
                  <p><strong className="text-foreground">RCS :</strong> Paris B 938 187 515</p>
                  <p><strong className="text-foreground">Numéro de TVA intracommunautaire :</strong> FR81938187515</p>
                  <p><strong className="text-foreground">Code NAF :</strong> 43.21A - Travaux d{"'"}installation électrique dans tous locaux</p>
                </div>
              </div>

              {/* Directeur de publication */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  2. Directeur de la publication
                </h2>
                <div className="space-y-2 text-base font-light text-muted-foreground">
                  <p><strong className="text-foreground">Nom :</strong> [À COMPLÉTER]</p>
                  <p><strong className="text-foreground">Qualité :</strong> Président</p>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  3. Contact
                </h2>
                <div className="space-y-2 text-base font-light text-muted-foreground">
                  <p><strong className="text-foreground">Email :</strong> contact@travor.fr</p>
                  <p><strong className="text-foreground">Téléphone :</strong> [À COMPLÉTER]</p>
                </div>
              </div>

              {/* Hébergeur */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  4. Hébergement
                </h2>
                <div className="space-y-2 text-base font-light text-muted-foreground">
                  <p><strong className="text-foreground">Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong className="text-foreground">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                  <p><strong className="text-foreground">Site web :</strong> vercel.com</p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  5. Propriété intellectuelle
                </h2>
                <p className="text-base font-light text-muted-foreground leading-relaxed">
                  L{"'"}ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
                  est la propriété exclusive de TRAVOR ou de ses partenaires et est protégé par les lois françaises 
                  et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-base font-light text-muted-foreground leading-relaxed mt-4">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
                  éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation 
                  écrite préalable de TRAVOR.
                </p>
              </div>

              {/* Données personnelles */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  6. Protection des données personnelles
                </h2>
                <p className="text-base font-light text-muted-foreground leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
                  et Libertés, vous disposez d{"'"}un droit d{"'"}accès, de rectification, de suppression et d{"'"}opposition 
                  aux données personnelles vous concernant.
                </p>
                <p className="text-base font-light text-muted-foreground leading-relaxed mt-4">
                  Les informations recueillies via le formulaire de contact sont destinées uniquement à TRAVOR 
                  et sont utilisées pour répondre à vos demandes. Elles ne sont en aucun cas cédées à des tiers.
                </p>
                <p className="text-base font-light text-muted-foreground leading-relaxed mt-4">
                  Pour exercer vos droits, vous pouvez nous contacter à l{"'"}adresse : contact@travor.fr
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  7. Cookies
                </h2>
                <p className="text-base font-light text-muted-foreground leading-relaxed">
                  Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne 
                  collectent aucune donnée personnelle et ne sont pas utilisés à des fins de suivi publicitaire.
                </p>
                <p className="text-base font-light text-muted-foreground leading-relaxed mt-4">
                  Des cookies d{"'"}analyse (Vercel Analytics) peuvent être utilisés pour mesurer l{"'"}audience du site 
                  de manière anonyme.
                </p>
              </div>

              {/* Responsabilité */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  8. Limitation de responsabilité
                </h2>
                <p className="text-base font-light text-muted-foreground leading-relaxed">
                  TRAVOR s{"'"}efforce d{"'"}assurer l{"'"}exactitude et la mise à jour des informations diffusées sur ce site. 
                  Toutefois, TRAVOR ne peut garantir l{"'"}exactitude, la précision ou l{"'"}exhaustivité des informations 
                  mises à disposition.
                </p>
                <p className="text-base font-light text-muted-foreground leading-relaxed mt-4">
                  TRAVOR décline toute responsabilité pour toute imprécision, inexactitude ou omission portant 
                  sur des informations disponibles sur ce site.
                </p>
              </div>

              {/* Droit applicable */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  9. Droit applicable
                </h2>
                <p className="text-base font-light text-muted-foreground leading-relaxed">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, 
                  les tribunaux français seront seuls compétents.
                </p>
              </div>
            </div>

            <p className="mt-16 text-sm font-light text-muted-foreground">
              Dernière mise à jour : Janvier 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
