"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

const services = [
  {
    title: "Rénovation complète",
    description: "Transformation totale de votre espace de vie. De la conception à la livraison, nous orchestrons chaque détail.",
    image: "/images/services/renovation.jpg",
    href: "/services/renovation-complete",
  },
  {
    title: "Salle de bain",
    description: "Créez votre oasis de bien-être. Design contemporain, matériaux nobles et finitions exceptionnelles.",
    image: "/images/services/salle-de-bain.jpg",
    href: "/services/salle-de-bain",
  },
  {
    title: "Cuisine",
    description: "Le coeur de votre foyer réinventé. Ergonomie parfaite et esthétique raffinée pour un quotidien sublime.",
    image: "/images/services/cuisine.jpg",
    href: "/services/cuisine",
  },
  {
    title: "Haussmannien",
    description: "L'art de sublimer le patrimoine parisien. Restauration respectueuse et modernisation élégante.",
    image: "/images/services/haussmannien.jpg",
    href: "/services/haussmannien",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.p 
            className="text-xs font-light tracking-[0.3em] uppercase text-primary mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nos expertises
          </motion.p>
          <motion.h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Des services sur-mesure pour chaque projet
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg font-light text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Notre équipe d{"'"}experts vous accompagne à chaque étape de votre projet 
            de rénovation, avec une attention particulière aux détails.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link
                href={service.href}
                className="group relative overflow-hidden rounded-sm aspect-[4/3] block"
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-foreground/40"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                  <motion.h3 
                    className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-primary-foreground"
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="mt-2 text-xs sm:text-sm font-light text-primary-foreground/80 max-w-md line-clamp-2 sm:line-clamp-none"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.div 
                    className="mt-4 flex items-center gap-2 text-primary-foreground"
                    initial={{ x: 0 }}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm font-light uppercase tracking-wide">Découvrir</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
