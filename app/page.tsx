import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Portfolio from "@/components/sections/Portfolio"
import Team from "@/components/sections/Team"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import ScrollToTop from "@/components/ui/ScrollToTop"
import Header from "@/components/sections/Header"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
