"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Palette, Smartphone, Globe, Database, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Services() {
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

  const services = [
    {
      icon: Code,
      title: t("webDevelopment"),
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly"],
    },
    {
      icon: Palette,
      title: t("uiuxDesign"),
      description: "Beautiful, intuitive designs that provide exceptional user experiences across all devices.",
      features: ["User Research", "Prototyping", "Design Systems"],
    },
    {
      icon: Database,
      title: t("backendDevelopment"),
      description: "Scalable backend solutions with robust APIs and database management systems.",
      features: ["API Development", "Database Design", "Cloud Integration"],
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("servicesTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word === "Services" || word === "Xizmatlarimiz" || word === "Услуги" ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                  {index < t("servicesTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("servicesDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-gradient-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
