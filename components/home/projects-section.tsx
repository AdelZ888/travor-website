"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TiltCard, MagneticButton } from "@/components/animations"

const projects = [
  {
    title: "Diderot",
    location: "Paris 12ème",
    type: "Rénovation complète",
    image: "/images/projects/diderot.jpg",
    href: "/realisations/diderot",
  },
  {
    title: "Eylau",
    location: "Paris 16ème",
    type: "Salle de bain haut de gamme",
    image: "/images/projects/eylau.jpg",
    href: "/realisations/eylau",
  },
  {
    title: "Versailles",
    location: "Yvelines",
    type: "Maison contemporaine",
    image: "/images/projects/versailles.jpg",
    href: "/realisations/versailles",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <motion.p 
              className="text-xs font-light tracking-[0.3em] uppercase text-primary mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nos réalisations
            </motion.p>
            <motion.h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Des projets d{"'"}exception
            </motion.h2>
          </div>
          <MagneticButton strength={0.15}>
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-2 text-sm font-light uppercase tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Voir tous les projets
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Projects Grid with TiltCards */}
        <motion.div 
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              custom={index}
            >
              <TiltCard tiltStrength={8} scale={1.02}>
                <Link href={project.href} className="group block">
                  <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <motion.div 
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-xs font-light uppercase tracking-wide text-muted-foreground">
                      {project.type}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-light text-muted-foreground">
                      {project.location}
                    </p>
                  </motion.div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
