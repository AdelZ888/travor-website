import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const services = {
  "renovation-complete": {
    id: "renovation-complete",
    title: "Rénovation complète",
    subtitle: "Transformation totale de votre espace de vie",
    description: "De la conception à la livraison, nous orchestrons chaque détail pour créer l'intérieur de vos rêves. Notre équipe pluridisciplinaire prend en charge l'intégralité de votre projet de rénovation.",
    image: "/images/services/renovation.jpg",
    longDescription: "Une rénovation complète est bien plus qu'un simple rafraîchissement. C'est l'opportunité de repenser entièrement votre espace de vie pour qu'il corresponde parfaitement à vos besoins et à votre style de vie. Chez TRAVOR, nous abordons chaque projet avec une vision globale, en intégrant architecture intérieure, design et artisanat d'exception.",
    process: [
      {
        title: "Audit & Diagnostic",
        description: "Visite approfondie de votre bien, analyse technique et évaluation du potentiel de transformation.",
      },
      {
        title: "Conception & Design",
        description: "Élaboration des plans, choix des matériaux et visualisation 3D de votre futur intérieur.",
      },
      {
        title: "Chiffrage détaillé",
        description: "Devis précis et transparent, incluant tous les corps de métier et les fournitures.",
      },
      {
        title: "Coordination des travaux",
        description: "Un chef de projet dédié supervise l'ensemble des intervenants et vous tient informé.",
      },
      {
        title: "Livraison & Garanties",
        description: "Réception soignée avec levée des réserves et mise en place des garanties.",
      },
    ],
    features: [
      "Étude personnalisée de votre projet",
      "Plans d'architecte et visualisation 3D",
      "Coordination de tous les corps de métier",
      "Suivi de chantier hebdomadaire",
      "Respect des délais et du budget",
      "Garantie décennale sur tous les travaux",
    ],
    pricing: "À partir de 1 200€/m²",
    duration: "3 à 6 mois selon la surface",
  },
  "salle-de-bain": {
    id: "salle-de-bain",
    title: "Salle de bain",
    subtitle: "Créez votre oasis de bien-être",
    description: "Design contemporain, matériaux nobles et finitions exceptionnelles pour un espace de détente unique. Nous créons des salles de bain qui allient fonctionnalité et esthétique raffinée.",
    image: "/images/services/salle-de-bain.jpg",
    longDescription: "La salle de bain est devenue un véritable espace de vie, un lieu de détente et de ressourcement. Nos créations s'inspirent des spas les plus prestigieux pour vous offrir une expérience sensorielle unique au quotidien. Chaque projet est pensé dans les moindres détails : ergonomie, matériaux, éclairage, ventilation.",
    process: [
      {
        title: "Prise de mesures",
        description: "Relevé précis de votre salle de bain actuelle et identification des contraintes techniques.",
      },
      {
        title: "Conception 3D",
        description: "Visualisation réaliste de votre future salle de bain avec différentes options d'aménagement.",
      },
      {
        title: "Sélection des matériaux",
        description: "Accompagnement dans le choix des carrelages, sanitaires et robinetterie.",
      },
      {
        title: "Travaux",
        description: "Démolition, plomberie, électricité, carrelage et installation des équipements.",
      },
      {
        title: "Finitions",
        description: "Joints, installation des accessoires et nettoyage complet.",
      },
    ],
    features: [
      "Conception sur-mesure",
      "Matériaux premium (marbre, pierre naturelle)",
      "Robinetterie haut de gamme",
      "Éclairage d'ambiance LED",
      "Chauffage au sol en option",
      "Ventilation optimisée",
    ],
    pricing: "À partir de 15 000€",
    duration: "4 à 8 semaines",
  },
  cuisine: {
    id: "cuisine",
    title: "Cuisine",
    subtitle: "Le cœur de votre foyer réinventé",
    description: "Ergonomie parfaite et esthétique raffinée pour un quotidien sublime. Nous concevons des cuisines qui allient praticité, style et convivialité.",
    image: "/images/services/cuisine.jpg",
    longDescription: "La cuisine est le cœur battant de votre maison, un lieu de partage et de création. Nos cuisines sur-mesure sont pensées pour optimiser chaque centimètre carré tout en créant un espace esthétique et accueillant. Nous travaillons avec les meilleurs fabricants pour vous proposer des solutions durables et élégantes.",
    process: [
      {
        title: "Étude de vos besoins",
        description: "Analyse de vos habitudes culinaires et définition de vos priorités.",
      },
      {
        title: "Conception ergonomique",
        description: "Plans détaillés avec optimisation du triangle d'activité et des rangements.",
      },
      {
        title: "Choix des matériaux",
        description: "Sélection des façades, plans de travail et équipements électroménagers.",
      },
      {
        title: "Installation",
        description: "Pose par nos artisans qualifiés avec raccordements techniques.",
      },
      {
        title: "Mise en service",
        description: "Vérification du bon fonctionnement et formation à l'utilisation des équipements.",
      },
    ],
    features: [
      "Agencement optimisé sur-mesure",
      "Électroménager intégré premium",
      "Plans de travail en matériaux nobles",
      "Rangements intelligents",
      "Éclairage fonctionnel et d'ambiance",
      "Îlot central sur demande",
    ],
    pricing: "À partir de 25 000€",
    duration: "6 à 10 semaines",
  },
  haussmannien: {
    id: "haussmannien",
    title: "Haussmannien",
    subtitle: "L'art de sublimer le patrimoine parisien",
    description: "Restauration respectueuse et modernisation élégante des appartements d'exception. Nous préservons l'âme de votre bien tout en l'adaptant au confort contemporain.",
    image: "/images/services/haussmannien.jpg",
    longDescription: "Les appartements haussmanniens sont un patrimoine architectural unique qu'il convient de préserver et de sublimer. Notre expertise dans la rénovation de ces biens d'exception nous permet d'allier restauration du cachet d'origine et intégration des conforts modernes. Chaque projet est une mission de conservation et de mise en valeur.",
    process: [
      {
        title: "Diagnostic patrimonial",
        description: "Évaluation de l'état des éléments d'époque et identification des priorités de restauration.",
      },
      {
        title: "Projet de restauration",
        description: "Définition du parti pris esthétique : conservation, restauration ou restitution.",
      },
      {
        title: "Travaux de restauration",
        description: "Intervention d'artisans spécialisés : staffeurs, ébénistes, marbriers.",
      },
      {
        title: "Modernisation technique",
        description: "Mise aux normes électriques, plomberie et intégration domotique discrète.",
      },
      {
        title: "Finitions d'exception",
        description: "Peintures traditionnelles, dorures et patines selon les techniques d'époque.",
      },
    ],
    features: [
      "Restauration des moulures et corniches",
      "Rénovation parquet Point de Hongrie",
      "Restauration cheminées d'époque",
      "Mise aux normes discrète",
      "Menuiseries et ferronneries d'origine",
      "Peintures et dorures traditionnelles",
    ],
    pricing: "Sur devis personnalisé",
    duration: "Variable selon l'ampleur des travaux",
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services[slug as keyof typeof services]
  
  if (!service) {
    return {
      title: "Service non trouvé | TRAVOR",
    }
  }

  return {
    title: `${service.title} | TRAVOR - Rénovation Haut de Gamme`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services[slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </>
  )
}
