"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Company {
  name: string
  logo: string
  link?: string
  description: string
  role: string
}

const companies: Company[] = [
  {
    name: "Rogers Communications",
    logo: "/rogers.png",
    link: "https://www.rogers.com",
    description: "Multi-agent systems and ML pipelines",
    role: "Machine Learning Intern",
  },
  {
    name: "Kisoji",
    logo: "/kisoji.png",
    link: "https://www.kisojibiotech.com/",
    description: "AI antibody generation and cancer research",
    role: "Machine Learning Engineer",
  },
  {
    name: "Adanomad",
    logo: "/adanomad.png",
    link: "https://adanomad.com",
    description: "Digital innovation and agentic systems",
    role: "AI Full Stack Software Engineer",
  },
  {
    name: "University of Waterloo",
    logo: "/vip.png",
    link: "https://vip.uwaterloo.ca/",  
    description: "Satellite imagery and CV algorithms",
    role: "Software Developer",
  },
]

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-transparent">




      <div className="w-full px-8 md:px-12">

        <h2 className="text-4xl font-bold mb-12 text-center">
            My Experiences
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {companies.map((company, index) => (
            <Link
              key={company.name}
              href={company.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className={`relative rounded-lg border border-slate-800 bg-slate-900/50 p-3 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:border-primary/20 ${
                  hoveredIndex === index ? "h-32 w-64 md:h-36 md:w-72 scale-110" : "h-24 w-48 md:h-28 md:w-56"
                }`}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  fill
                  className="object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 p-2"
                />
              </div>

              <div
                className={`absolute -bottom-28 left-1/2 -translate-x-1/2 w-48 rounded-lg border border-primary/30 bg-slate-900/95 p-3 backdrop-blur-sm transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="text-xs text-primary font-semibold mb-1">{company.role}</div>
                <div className="text-xs text-slate-300">{company.description}</div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-primary/30" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
