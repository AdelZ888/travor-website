"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { useState } from "react"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"

interface Project {
  id: string
  title: string
  location: string
  category: string
  surface: string
  duration: string
  year: string
  mainImage: string
  description: string
  challenge: string
  solution: string
  features: string[]
  gallery: string[]
  beforeImage?: string
  afterImage?: string
}

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] lg:h-[70vh]">
        <Image
          src={project.gallery[selectedImage] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/20" />
        
        {/* Back Link */}
        <Link
          href="/realisations"
          className="absolute top-8 left-6 lg:left-8 inline-flex items-center gap-2 text-sm font-light text-primary-foreground/90 hover:text-primary-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux réalisations
        </Link>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-xs font-light tracking-[0.3em] uppercase text-primary mb-4">
                {project.category}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
                {project.title}
              </h1>
              
              <p className="mt-8 text-lg font-light text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Challenge & Solution */}
              <div className="mt-12 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground">
                    Le défi
                  </h2>
                  <p className="mt-4 text-base font-light text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground">
                    Notre solution
                  </h2>
                  <p className="mt-4 text-base font-light text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-12">
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Points clés du projet
                </h2>
                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm font-light text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before/After Comparison */}
              {project.beforeImage && project.afterImage && (
                <div className="mt-16">
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                    La transformation
                  </h2>
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    beforeAlt={`${project.title} - Avant`}
                    afterAlt={`${project.title} - Après`}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-sm p-8 sticky top-28">
                <h3 className="text-xs font-medium tracking-widest uppercase text-foreground mb-6">
                  Informations
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                      Lieu
                    </dt>
                    <dd className="mt-1 text-base font-light text-foreground">
                      {project.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                      Surface
                    </dt>
                    <dd className="mt-1 text-base font-light text-foreground">
                      {project.surface}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                      Durée
                    </dt>
                    <dd className="mt-1 text-base font-light text-foreground">
                      {project.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                      Année
                    </dt>
                    <dd className="mt-1 text-base font-light text-foreground">
                      {project.year}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 pt-8 border-t border-border">
                  <Link
                    href="/contact"
                    className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground bg-primary rounded-sm transition-all hover:bg-terracotta-dark uppercase"
                  >
                    Discuter de votre projet
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
              Galerie photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-sm transition-all ${
                    selectedImage === index ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Photo ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
