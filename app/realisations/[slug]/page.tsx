import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectDetail } from "@/components/portfolio/project-detail"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const projects = {
  diderot: {
    id: "diderot",
    title: "Diderot",
    location: "Paris 12ème",
    category: "Rénovation complète",
    surface: "85 m²",
    duration: "4 mois",
    year: "2024",
    mainImage: "/images/projects/diderot.jpg",
    description: "Transformation complète d'un appartement familial de 85m² dans un immeuble haussmannien du 12ème arrondissement. Le projet consistait à repenser entièrement les espaces pour créer un lieu de vie lumineux et fonctionnel, adapté aux besoins d'une famille avec deux enfants.",
    challenge: "L'enjeu principal était de conserver le charme de l'ancien tout en apportant une touche de modernité. Nous avons dû composer avec les contraintes structurelles de l'immeuble tout en optimisant chaque mètre carré.",
    solution: "Nous avons opté pour une démarche d'ouverture des espaces, en supprimant les cloisons non porteuses pour créer un grand séjour lumineux intégrant la cuisine. La création d'une suite parentale avec salle de bain attenante a permis de répondre aux besoins de confort de la famille.",
    features: [
      "Ouverture cuisine/séjour de 45m²",
      "Suite parentale avec dressing",
      "Salle de bain en marbre",
      "Parquet Point de Hongrie restauré",
      "Moulures et cheminée d'origine préservées",
    ],
    gallery: [
      "/images/projects/diderot.jpg",
      "/images/services/renovation.jpg",
      "/images/services/cuisine.jpg",
    ],
    // Ajoute tes vraies images avant/après ici :
    beforeImage: "/images/services/renovation.jpg",
    afterImage: "/images/projects/diderot.jpg",
  },
  eylau: {
    id: "eylau",
    title: "Eylau",
    location: "Paris 16ème",
    category: "Salle de bain haut de gamme",
    surface: "12 m²",
    duration: "6 semaines",
    year: "2024",
    mainImage: "/images/projects/eylau.jpg",
    description: "Création d'une salle de bain d'exception dans un appartement du 16ème arrondissement. L'objectif était de transformer cet espace en un véritable spa privé, alliant luxe et fonctionnalité.",
    challenge: "Intégrer une baignoire îlot, une douche à l'italienne spacieuse et un double vasque dans un espace de 12m² tout en préservant une sensation d'amplitude et de sérénité.",
    solution: "L'utilisation de grands formats de marbre blanc veiné, associée à des miroirs sur toute la hauteur et un éclairage soigneusement pensé, a permis de créer un espace qui semble plus grand qu'il ne l'est. La robinetterie en laiton brossé apporte une touche de chaleur.",
    features: [
      "Baignoire îlot en solid surface",
      "Douche à l'italienne XXL",
      "Double vasque en marbre",
      "Robinetterie Dornbracht",
      "Chauffage au sol",
      "Miroirs rétroéclairés",
    ],
    gallery: [
      "/images/projects/eylau.jpg",
      "/images/services/salle-de-bain.jpg",
    ],
  },
  versailles: {
    id: "versailles",
    title: "Versailles",
    location: "Yvelines",
    category: "Maison contemporaine",
    surface: "180 m²",
    duration: "6 mois",
    year: "2023",
    mainImage: "/images/projects/versailles.jpg",
    description: "Rénovation complète d'une maison des années 70 à Versailles. Le projet visait à transformer cette demeure datée en un espace de vie contemporain et lumineux, tout en préservant le caractère unique du lieu.",
    challenge: "La maison souffrait d'un cloisonnement excessif et d'un manque de lumière naturelle. L'enjeu était de créer des espaces ouverts et de maximiser les apports lumineux tout en améliorant significativement la performance énergétique.",
    solution: "Nous avons procédé à une restructuration complète des espaces, avec la création de grandes baies vitrées donnant sur le jardin. Une extension vitrée a été ajoutée pour agrandir l'espace de vie. L'isolation a été entièrement reprise pour atteindre les standards actuels.",
    features: [
      "Extension vitrée de 30m²",
      "Cuisine ouverte sur jardin",
      "4 chambres dont suite parentale",
      "Isolation thermique renforcée",
      "Chauffage par pompe à chaleur",
      "Domotique intégrée",
    ],
    gallery: [
      "/images/projects/versailles.jpg",
      "/images/services/renovation.jpg",
      "/images/services/haussmannien.jpg",
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]
  
  if (!project) {
    return {
      title: "Projet non trouvé | TRAVOR",
    }
  }

  return {
    title: `${project.title} - ${project.category} | TRAVOR`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  )
}
