"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MagneticButton } from "@/components/animations"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-secondary rounded-sm p-6 sm:p-10 md:p-12 lg:p-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative animated gradient */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 50%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.h2 
            className="relative font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Prêt à transformer votre intérieur ?
          </motion.h2>
          <motion.p 
            className="relative mt-6 text-lg font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Contactez-nous pour discuter de votre projet. Notre équipe est à votre 
            disposition pour vous accompagner dans la réalisation de vos envies.
          </motion.p>
          <motion.div 
            className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MagneticButton strength={0.2}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide text-primary-foreground bg-primary rounded-sm transition-all hover:bg-terracotta-dark uppercase"
              >
                Demander un devis gratuit
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide text-foreground border border-border rounded-sm transition-all hover:bg-foreground hover:text-background uppercase"
              >
                +33 1 23 45 67 89
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
