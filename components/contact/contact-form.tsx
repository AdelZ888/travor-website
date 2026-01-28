"use client"

import React from "react"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

const propertyTypes = [
  { id: "apartment", label: "Appartement" },
  { id: "house", label: "Maison" },
  { id: "other", label: "Autre" },
]

const projectTypes = [
  { id: "complete", label: "Rénovation complète" },
  { id: "bathroom", label: "Salle de bain" },
  { id: "kitchen", label: "Cuisine" },
  { id: "haussmannien", label: "Haussmannien" },
  { id: "other", label: "Autre" },
]

const budgetRanges = [
  { id: "15-30", label: "15 000€ - 30 000€" },
  { id: "30-50", label: "30 000€ - 50 000€" },
  { id: "50-100", label: "50 000€ - 100 000€" },
  { id: "100-200", label: "100 000€ - 200 000€" },
  { id: "200+", label: "200 000€ et plus" },
]

const timelineOptions = [
  { id: "asap", label: "Dès que possible" },
  { id: "1-3", label: "Dans 1 à 3 mois" },
  { id: "3-6", label: "Dans 3 à 6 mois" },
  { id: "6+", label: "Dans plus de 6 mois" },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "",
    projectType: "",
    surface: "",
    budget: "",
    timeline: "",
    address: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-secondary rounded-sm p-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">
          Message envoyé !
        </h3>
        <p className="mt-4 text-base font-light text-muted-foreground max-w-md mx-auto">
          Merci pour votre demande. Notre équipe vous contactera sous 48h 
          pour échanger sur votre projet.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Info */}
      <div>
        <h3 className="text-xs font-medium tracking-widest uppercase text-foreground mb-6">
          Vos coordonnées
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-light text-foreground mb-2">
              Prénom *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              placeholder="Jean"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-light text-foreground mb-2">
              Nom *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              placeholder="Dupont"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-light text-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              placeholder="jean.dupont@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-light text-foreground mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div>
        <h3 className="text-xs font-medium tracking-widest uppercase text-foreground mb-6">
          Votre projet
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="propertyType" className="block text-sm font-light text-foreground mb-2">
              Type de bien *
            </label>
            <select
              id="propertyType"
              name="propertyType"
              required
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="">Sélectionnez</option>
              {propertyTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="projectType" className="block text-sm font-light text-foreground mb-2">
              Type de projet *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="">Sélectionnez</option>
              {projectTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="surface" className="block text-sm font-light text-foreground mb-2">
              Surface (m²) *
            </label>
            <input
              type="number"
              id="surface"
              name="surface"
              required
              min="1"
              value={formData.surface}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              placeholder="80"
            />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-light text-foreground mb-2">
              Budget estimé *
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="">Sélectionnez</option>
              {budgetRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-light text-foreground mb-2">
              Délai souhaité *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="">Sélectionnez</option>
              {timelineOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-light text-foreground mb-2">
              Adresse du bien
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              placeholder="Paris 16ème"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <h3 className="text-xs font-medium tracking-widest uppercase text-foreground mb-6">
          Décrivez votre projet
        </h3>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-secondary border-0 rounded-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
          placeholder="Parlez-nous de votre projet, vos envies, vos contraintes..."
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs font-light text-muted-foreground">
          * Champs obligatoires. Vos données sont confidentielles.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary rounded-sm transition-all hover:bg-terracotta-dark disabled:opacity-50 disabled:cursor-not-allowed uppercase"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
          {!isSubmitting && (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </button>
      </div>
    </form>
  )
}
