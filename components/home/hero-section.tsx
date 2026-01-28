"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MagneticButton, SlotMachineCounter, GlowingCounter } from "@/components/animations"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.03,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    })
  }

  const title1 = "L'excellence au service"
  const title2 = "de votre intérieur"

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Rénovation intérieure haut de gamme"
          fill
          className="object-cover scale-110"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </motion.div>

      {/* Floating particles effect - using fixed positions to avoid hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { x: 10, y: 20, size: 3, duration: 15 },
          { x: 85, y: 15, size: 2, duration: 18 },
          { x: 25, y: 70, size: 4, duration: 22 },
          { x: 60, y: 40, size: 3, duration: 20 },
          { x: 45, y: 85, size: 2, duration: 16 },
          { x: 90, y: 60, size: 3, duration: 25 },
          { x: 15, y: 50, size: 4, duration: 19 },
          { x: 70, y: 25, size: 2, duration: 21 },
          { x: 35, y: 90, size: 3, duration: 17 },
          { x: 80, y: 75, size: 4, duration: 23 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary-foreground/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center pt-20"
        style={{ y: textY, opacity }}
      >
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            variants={itemVariants}
            className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-primary-foreground/90 mb-6"
          >
            Paris & Île-de-France
          </motion.p>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-balance overflow-hidden">
            <span className="block overflow-hidden text-primary-foreground">
              {title1.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden animate-gradient-text">
              {title2.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + title1.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-8 text-lg md:text-xl font-light text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
          >
            Rénovation intérieure haut de gamme. Appartements haussmanniens, cuisines, 
            salles de bain. Un accompagnement sur-mesure pour des projets d{"'"}exception.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton strength={0.2}>
              <Link
                href="/realisations"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary rounded-sm transition-all hover:bg-terracotta-dark uppercase"
              >
                Découvrir nos réalisations
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground border border-primary-foreground/30 rounded-sm transition-all hover:bg-primary-foreground/10 uppercase"
              >
                Nous contacter
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Stats */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-medium text-foreground tabular-nums">
                <SlotMachineCounter value={12} suffix="+" duration={1.8} />
              </div>
              <p className="mt-2 text-xs md:text-sm font-light text-muted-foreground uppercase tracking-wide">Années d{"'"}expérience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-medium text-foreground tabular-nums">
                <SlotMachineCounter value={150} suffix="+" duration={2.2} />
              </div>
              <p className="mt-2 text-xs md:text-sm font-light text-muted-foreground uppercase tracking-wide">Projets livrés</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-medium text-foreground tabular-nums">
                <GlowingCounter value={4.9} decimals={1} duration={1.5} />
              </div>
              <p className="mt-2 text-xs md:text-sm font-light text-muted-foreground uppercase tracking-wide">Note Google</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
