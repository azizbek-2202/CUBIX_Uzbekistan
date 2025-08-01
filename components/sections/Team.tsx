"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, Github, Facebook } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import direktor from "@/public/img/Direktor.jpg"
import fullStack from "@/public/img/FullStack.jpg"
import designer from "@/public/img/Azimjon.jpg"
import backend from "@/public/img/saidnur.jpg"
// import ux from "@/public/img/Ux.jpg"
import projectManager from "@/public/img/shohruh.jpg"

export default function Team() {
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

  const team = [
    {
      name: "Azizbek Abdurahimov",
      position: t("ceoFounder"),
      image: direktor,
      bio: t("ceoFounderBio"),
      social: {
        linkedin: "https://www.linkedin.com/in/azizbek-abdurahimov-198035344/",
        facebook: "https://twitter.com/azizbek_2202",
        github: "https://github.com/azizbek-2202",
      },
    },
    {
      name: "Abdullohaziz Jumanazarov",
      position: t("fullStackDeveloper"),
      image: fullStack ? fullStack : "/placeholder.svg?height=300&width=300",
      bio: t("fullStackDeveloperBio"),
      social: {
        linkedin: "https://www.linkedin.com/in/abdullohaziz-jumanazarov",
        facebook: "https://www.facebook.com/share/1FJXgQ3iHb/?mibextid=wwXIfr",
        github: "https://github.com/SAMURAY-A",
      },
    },
    {
      name: "Azimjon Adashboyev",
      position: t("leadDesigner"),
      image: designer ? designer : "/placeholder.svg?height=300&width=300",
      bio: t("leadDesignerBio"),
      social: {
        linkedin: "https://www.linkedin.com/in/azimjon-adashboyev",
        facebook: "https://facebook.com/azimjon_adashboyev",
        github: "https://github.com/azimjon-adashboyev",
      },
    },
    {
      name: "Saidnurmuhammadulloxon Nasimxonov",
      position: t("backendDeveloper"),
      image: backend ? backend : "/placeholder.svg?height=300&width=300",
      bio: t("backendDeveloperBio"),
      social: {
        linkedin: "https://www.linkedin.com/in/nasimxonov-saidnurmuhammadulloxon",
        facebook: "https://www.facebook.com/share/1EZgVoM8BE/",
        github: "https://github.com/nasimxonov",
      },
    },
    {
      name: "Madina Abdullaeva",
      position: t("uxDeveloper"),
      // image: ux ? ux : "/placeholder.svg?height=300&width=300",
      image: "/placeholder.svg?height=300&width=300",
      bio: t("uxDeveloperBio"),
      social: {
        linkedin: "https://www.linkedin.com/in/madina-abdullaeva",
        facebook: "https://twitter.com/madina_abdullaeva",
        github: "https://github.com/madina-abdullaeva",
      },
    },
    {
      name: "Shohruh Valiyev",
      position: t("projectManager"),
      image: projectManager ? projectManager : "/placeholder.svg?height=300&width=300",
      bio: t("projectManagerBio"),
      social: {
        linkedin: "https://www.linkedin.com/in/valiyev-shohruhbek-356345378/",
        facebook: "#",
        github: "https://github.com/ValiyevShohruhbek",
      },
    },
  ]

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("teamTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word === "Team" || word === "Jamoa" || word === "Команда" ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                  {index < t("teamTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("teamDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`relative group bg-gradient-card shadow-sm rounded-2xl p-8 text-center hover:text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r to-green-400 from-green-700 opacity-0 group-hover:opacity-30 dark:group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  width={128}
                  height={128}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:opacity-90">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 group-hover:opacity-90">{member.position}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:opacity-90">{member.bio}</p>
              <div className="flex justify-center gap-4 group-hover:opacity-90 opacity-90 transition-opacity duration-300">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
