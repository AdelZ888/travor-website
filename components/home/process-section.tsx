"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Rencontre & Écoute",
    description: "Nous échangeons sur vos envies, votre budget et vos contraintes. Une première visite permet d'évaluer le potentiel de votre espace.",
  },
  {
    number: "02",
    title: "Conception & Devis",
    description: "Notre équipe élabore des propositions sur-mesure avec plans 3D et un devis détaillé. Chaque projet est unique.",
  },
  {
    number: "03",
    title: "Réalisation",
    description: "Nos artisans qualifiés prennent en charge les travaux. Un chef de projet dédié coordonne l'ensemble et vous tient informé.",
  },
  {
    number: "04",
    title: "Livraison",
    description: "Réception soignée de votre projet. Nous vérifions chaque détail et vous accompagnons pour une prise en main sereine.",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.p 
            className="text-xs font-light tracking-[0.3em] uppercase text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Notre méthode
          </motion.p>
          <motion.h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Un accompagnement de A à Z
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg font-light text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            De la première rencontre à la livraison finale, nous vous guidons 
            à chaque étape pour une expérience sereine et un résultat à la hauteur de vos attentes.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              {/* Animated connector line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  style={{ originX: 0 }}
                />
              )}
              
              <motion.div 
                className="relative"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className="font-serif text-5xl font-medium text-primary/20 block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  whileHover={{ color: "var(--primary)", scale: 1.1 }}
                >
                  {step.number}
                </motion.span>
                <motion.h3 
                  className="mt-4 font-serif text-xl font-medium text-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="mt-3 text-sm font-light text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
