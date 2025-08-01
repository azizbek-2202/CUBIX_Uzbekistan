"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import jahongir from "@/public/testimonal/jahongir.png"
import madina from "@/public/testimonal/madina.png"
import salohiddin from "@/public/testimonal/salohiddin.png"
import robert from "@/public/testimonal/robert.png"
import ahmed from "@/public/testimonal/ahmed.png"
import Liza from "@/public/testimonal/liza.png"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Jahongir Ahmedov",
      position: t("ceoTechStart"),
      image: jahongir,
      content: t("testimonial1"),
      rating: 5,
    },
    {
      name: "Madina Karimova",
      position: t("founderEcoSolutions"),
      image: madina,
      content: t("testimonial2"),
      rating: 5,
    },
    {
      name: "Robert Chen",
      position: t("ctoFinanceFlow"),
      image: robert,
      content: t("testimonial3"),
      rating: 5,
    },
    {
      name: "Salohiddin Jamilov",
      position: t("marketingDirectorBrandBoost"),
      image: salohiddin,
      content: t("testimonial4"),
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      position: t("founderHealthTech"),
      image: ahmed,
      content: t("testimonial5"),
      rating: 5,
    },
    {
      name: "Liza Johnson",
      position: t("vpOperationsLogiFlow"),
      image: Liza,
      content: t("testimonial6"),
      rating: 5,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("testimonialsTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word === "Clients" || word === "Mijozlarimiz" || word === "Клиенты" ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                  {index < t("testimonialsTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("testimonialsDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-gradient-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200 dark:text-blue-800" />

              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  width={64}
                  height={64}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
