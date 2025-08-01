"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import project1 from "@/public/img/comft-store.png"
import project2 from "@/public/img/marketRp.png"
import project3 from "@/public/img/zanjir.png"
import project4 from "@/public/img/market-rp.png"
import Image from "next/image"
import { link } from "fs"


export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
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

  const projects = [
    {
      id: 1,
      title: t("project1"),
      description: t("project1Description"),
      image: project1,
      tech: ["React", "Tailwind CSS", "Reducx", "Node.js"],
      category: "Web Development",
      link: "https://react-vite-comfy-store-v2.netlify.app/",
      github: ""
    },
    {
      id: 2,
      title: t("project2"),
      description: t("project2Description"),
      image: project2,
      tech: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind"],
      category: "Web Development",
      link: "https://comft-store.comhttps://market-rp.vercel.app/",
      github: "https://github.com/azizbek-2202/marketRp"
    },
    {
      id: 3,
      title: t("project3"),
      description: t("project3Description"),
      image: project3,
      tech: ["React Native", "Firebase", "Redux", "Biometrics"],
      category: "Web Development",
      link: "https://market-rp-izon.vercel.app/",
      github: "https://github.com/azizbek-2202/market-rp"
    },
    {
      id: 4,
      title: t("project4"),
      description: t("project4Description"),
      image: project4,
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      category: "AI/ML",
      link: "https://comft-store.com",
      github: "https://github.com/user/project1"
    },
    {
      id: 5,
      title: t("project5"),
      description: t("project5Description"),
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Vue.js", "Laravel", "MySQL", "Maps API"],
      category: "Web Development",
      link: "https://comft-store.com",
      github: "https://github.com/user/project1"
    },
    {
      id: 6,
      title: t("project6"),
      description: t("project6Description"),
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Angular", "Express.js", "Redis", "Chart.js"],
      category: "SaaS Platform",
      link: "https://comft-store.com",
      github: "https://github.com/user/project1"
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 2)) % Math.ceil(projects.length / 2))
  }

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("portfolioTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word === "Portfolio" ? (
                    <span className="text-gradient">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                  {index < t("portfolioTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("portfolioDescription")}</p>
        </div>

        {/* Rest of the portfolio component with dark mode classes added */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 px-4">
                    {projects.slice(slideIndex * 2, slideIndex * 2 + 2).map((project, index) => (
                      <div
                        key={project.id}
                        className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            width={600}
                            height={400}
                            alt={project.title}
                            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                            <div className="flex gap-3">
                              <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                              </Button>
                              <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                              </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {project.category}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
