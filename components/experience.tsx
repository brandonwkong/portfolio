"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Constellation from "@/components/constellation"

interface Company {
  name: string
  logo: string
  link?: string
  description: string
  role: string
}

const companies: Company[] = [
  {
    name: "Royal Bank of Canada",
    logo: "/rbc.jpg",
    link: "https://www.rbc.com",
    description: "GenAI systems + ML pipelines",
    role: "AI Intern",
  },
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

// Crux / the Southern Cross: Gacrux (top), Acrux (bottom), Mimosa (left arm),
// Delta Crucis (right arm), Epsilon Crucis (small offset star near the crossing)
const positions: [number, number][] = [
  [50, 8],
  [50, 88],
  [18, 52],
  [80, 42],
  [64, 60],
]

const edges: [number, number][] = [
  [0, 1],
  [2, 3],
  [3, 4],
]

export default function Experience() {
  const [selected, setSelected] = useState<Company | null>(null)

  return (
    <div id="experience">
      <h2 className="sr-only">Experience</h2>
      <Constellation
        positions={positions}
        edges={edges}
        nodes={companies.map((company) => ({
          id: company.name,
          label: company.name,
          sublabel: company.role,
          onSelect: () => setSelected(company),
        }))}
      />

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selected.name}</DialogTitle>
              <DialogDescription className="text-primary font-medium">{selected.role}</DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-4 my-4">
              <div className="relative h-16 w-16 shrink-0 rounded-md overflow-hidden bg-white/5">
                <Image src={selected.logo} alt={selected.name} fill className="object-contain p-2" />
              </div>
              <p className="text-white/70">{selected.description}</p>
            </div>

            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Visit website →
              </a>
            )}
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
