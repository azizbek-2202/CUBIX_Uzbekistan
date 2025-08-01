"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Code2, MessageSquare, Award, Users, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function WhyChooseUs() {
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

  const features = [
    {
      icon: Clock,
      title: t("fastDelivery"),
      description: t("fastDeliveryDesc"),
    },
    {
      icon: Code2,
      title: t("modernStack"),
      description: t("modernStackDesc"),
    },
    {
      icon: MessageSquare,
      title: t("transparentCommunication"),
      description: t("transparentCommunicationDesc"),
    },
    {
      icon: Award,
      title: t("qualityAssurance"),
      description: t("qualityAssuranceDesc"),
    },
    {
      icon: Users,
      title: t("expertTeam"),
      description: t("expertTeamDesc"),
    },
    {
      icon: Zap,
      title: t("agileMethodology"),
      description: t("agileMethodologyDesc"),
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("whyChooseTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word === "Kubix" ? <span className="text-gradient">{word}</span> : word}
                  {index < t("whyChooseTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("whyChooseDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-gradient-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            { number: "150+", label: t("projectsCompleted") },
            { number: "50+", label: t("happyClients") },
            { number: "5+", label: t("yearsExperience") },
            { number: "24/7", label: t("supportAvailable") },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}