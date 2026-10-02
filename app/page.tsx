import Image from "next/image"
import Navbar from "@/components/navbar"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import ScrollReveal from "@/components/scroll-reveal"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />

      <div className="mx-auto max-w-[2080px] px-6 py-20 sm:px-12 lg:px-24">
        <section id="home" className="flex flex-col items-center gap-10 py-10 text-center sm:py-16">
          <ScrollReveal>
            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-[0_20px_45px_-10px_rgba(0,0,0,0.55)] sm:h-64 sm:w-64">
              <Image src="/me.PNG" alt="Brandon Kong" fill sizes="256px" className="object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl font-extrabold sm:text-5xl">Hi, I&apos;m Brandon</h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-white/70">
              I'm a 3rd-year Computer Engineering student at the University of Waterloo working at the intersection of AI
              and software. Interested in distributed systems, scaling, and all things AI!
            </p>
          </ScrollReveal>
        </section>

        <section id="experience" className="grid grid-cols-1 gap-16 py-16 lg:grid-cols-2 lg:gap-10">
          <div>
            <ScrollReveal>
              <h2 className="mb-6 text-3xl font-extrabold text-white">Experience</h2>
            </ScrollReveal>
            <Experience />
          </div>

          <div>
            <ScrollReveal>
              <h2 className="mb-6 text-3xl font-extrabold text-white">Projects</h2>
            </ScrollReveal>
            <Projects />
          </div>
        </section>

        <section id="skills" className="py-16">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-extrabold text-white">Skills</h2>
          </ScrollReveal>
          <Skills />
        </section>

        <footer className="mt-8 border-t border-white/10 pt-8">
          <div className="flex gap-7">
            <a
              href="https://github.com/brandonwkong"
              aria-label="GitHub"
              className="text-white/80 transition-transform duration-200 hover:scale-110 hover:text-white"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-kong-24b9a6285/"
              aria-label="LinkedIn"
              className="text-[#0A66C2] transition-transform duration-200 hover:scale-110"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:b2kong@uwaterloo.ca"
              aria-label="Email"
              className="text-[#EA4335] transition-transform duration-200 hover:scale-110"
            >
              <MdEmail size={32} />
            </a>
          </div>
          <p className="mt-6 text-base text-white/40">&copy; Brandon Kong 2026</p>
        </footer>
      </div>
    </main>
  )
}
