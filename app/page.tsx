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
      <section id="work" className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          <Experience />
          <Portfolio />
        </div>
      </section>
      <About />
      <Footer />
    </main>
  )
}
