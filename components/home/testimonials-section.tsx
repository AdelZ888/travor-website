"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    content: "TRAVOR a transformé notre appartement haussmannien en un lieu de vie moderne tout en préservant son charme d'origine. Un travail remarquable, dans les délais et le budget prévus.",
    author: "Marie & Pierre D.",
    project: "Rénovation complète, Paris 8ème",
    rating: 5,
  },
  {
    content: "Une équipe à l'écoute, professionnelle et créative. Notre salle de bain est devenue un véritable espace de détente. Je recommande sans hésitation.",
    author: "Sophie L.",
    project: "Salle de bain, Paris 16ème",
    rating: 5,
  },
  {
    content: "Du premier rendez-vous à la livraison, l'accompagnement a été exemplaire. Notre cuisine est exactement comme nous l'avions imaginée, voire mieux !",
    author: "François M.",
    project: "Cuisine sur-mesure, Neuilly",
    rating: 5,
  },
  {
    content: "Professionnalisme, qualité des finitions et respect des engagements. TRAVOR a su comprendre nos attentes et les dépasser. Un grand merci à toute l'équipe.",
    author: "Anne-Claire & Thomas B.",
    project: "Rénovation maison, Versailles",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="animate-on-scroll opacity-0 text-xs font-light tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
            Témoignages
          </p>
          <h2 className="animate-on-scroll opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary-foreground">
            Ils nous font confiance
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="mt-16 relative">
          <div className="animate-on-scroll opacity-0 max-w-3xl mx-auto text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-primary-foreground leading-relaxed">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mt-8">
              <p className="text-base font-medium text-primary-foreground">
                {testimonials[currentIndex].author}
              </p>
              <p className="mt-1 text-sm font-light text-primary-foreground/70">
                {testimonials[currentIndex].project}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary-foreground w-6"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
