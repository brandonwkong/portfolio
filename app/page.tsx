import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Experience from "@/components/experience"
import {Footer} from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <About />
      <Portfolio />
      <Footer />
    </main>
  )
}
