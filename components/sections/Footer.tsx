"use client"

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import Logo from "@/public/img/kubix-logo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3">
              <Image
                src={Logo}
                alt="Kubix Logo"
                width={380}
                height={160}
                className="h-36 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">{t("footerDescription")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/CUBIX_UZB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin path="" className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kubix_uzbekistan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {[
                { key: "about", label: t("about") },
                { key: "services", label: t("services") },
                { key: "portfolio", label: t("portfolio") },
                { key: "team", label: t("team") },
                { key: "contact", label: t("contact") },
              ].map((link) => (
                <li key={link.key}>
                  <a href={`#${link.key}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("services")}</h3>
            <ul className="space-y-3">
              {[
                t("webDevelopment"),
                t("mobileDevelopment"),
                t("uiuxDesign"),
                t("digitalMarketing"),
                t("consulting"),
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">cubixuzbekistan@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">+998 88 458 21 12</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">Uzbekistan, Namangan</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Kubix. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
