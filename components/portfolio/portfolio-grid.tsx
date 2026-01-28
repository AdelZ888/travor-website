"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "Tous les projets" },
  { id: "renovation", name: "Rénovation complète" },
  { id: "salle-de-bain", name: "Salle de bain" },
  { id: "cuisine", name: "Cuisine" },
  { id: "haussmannien", name: "Haussmannien" },
]

const projects = [
  {
    id: "diderot",
    title: "Diderot",
    location: "Paris 12ème",
    category: "renovation",
    categoryLabel: "Rénovation complète",
    surface: "85 m²",
    image: "/images/projects/diderot.jpg",
    description: "Transformation complète d'un appartement familial avec ouverture des espaces et création d'une suite parentale.",
  },
  {
    id: "eylau",
    title: "Eylau",
    location: "Paris 16ème",
    category: "salle-de-bain",
    categoryLabel: "Salle de bain",
    surface: "12 m²",
    image: "/images/projects/eylau.jpg",
    description: "Création d'une salle de bain spa avec douche à l'italienne et baignoire îlot en marbre.",
  },
  {
    id: "versailles",
    title: "Versailles",
    location: "Yvelines",
    category: "renovation",
    categoryLabel: "Maison contemporaine",
    surface: "180 m²",
    image: "/images/projects/versailles.jpg",
    description: "Rénovation d'une maison des années 70 en demeure contemporaine avec extensions vitrées.",
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="pb-24 lg:pb-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm font-light tracking-wide transition-all rounded-sm",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/realisations/${project.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
              <div className="mt-4">
                <p className="text-xs font-light uppercase tracking-wide text-primary">
                  {project.categoryLabel}
                </p>
                <h3 className="mt-1 font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-light text-muted-foreground">
                  {project.location} — {project.surface}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-light">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
