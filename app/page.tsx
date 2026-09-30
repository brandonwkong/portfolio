"use client"

import { useEffect, useState } from "react"
import Navbar, { type Tab } from "@/components/navbar"
import Experience from "@/components/experience"
import Portfolio from "@/components/portfolio"

function tabFromHash(): Tab {
  return typeof window !== "undefined" && window.location.hash === "#projects" ? "projects" : "experience"
}

export default function Home() {
  const [active, setActive] = useState<Tab>("experience")

  useEffect(() => {
    setActive(tabFromHash())
    const onHashChange = () => setActive(tabFromHash())
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const handleChange = (tab: Tab) => {
    setActive(tab)
    window.location.hash = tab === "projects" ? "projects" : "experience"
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar active={active} onChange={handleChange} />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-semibold">Brandon Kong</h1>
        <p className="mt-2 text-white/50">3rd-year Computer Engineering student at the University of Waterloo working at the intersection of AI and software. Interested in distributed systems, scaling, and all things AI!</p>

        <div className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-white/40">
            {active === "experience" ? "Experience" : "Projects"}
          </h2>
          <div className="mt-4">{active === "experience" ? <Experience /> : <Portfolio />}</div>
        </div>

        <footer className="mt-16 flex gap-6 border-t border-white/10 pt-8 text-sm text-white/40">
          <a href="https://github.com/brandonwkong" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-kong-24b9a6285/"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:b2kong@uwaterloo.ca" className="hover:text-white transition-colors">
            Email
          </a>
        </footer>
      </div>
    </main>
  )
}
