import ExperienceCard, { type Company } from "@/components/experience-card"
import ScrollReveal from "@/components/scroll-reveal"

const companies: Company[] = [
  {
    name: "Tesla",
    role: "Software Engineer Intern",
    dates: "Sept - Dec 2026",
    description: "Service organization model training and organization wide infrastructure",
    tech: ["Python", "PyTorch", "Infrastructure"],
    link: "https://www.tesla.com/",
  },
  {
    name: "Royal Bank of Canada",
    role: "Software Engineer Intern, AI",
    dates: "May - Aug 2026",
    description: "GenAI systems and ML pipelines",
    tech: ["GenAI", "Python", "ML Pipelines"],
    link: "https://www.rbc.com",
  },
  {
    name: "Rogers Communications",
    role: "Machine Learning Intern",
    dates: "Sept - Dec 2025",
    description: "Multi-agent systems",
    tech: ["Python", "AWS"],
    link: "https://www.rogers.com",
  },
  {
    name: "Kisoji",
    role: "Machine Learning Engineer Intern",
    dates: "May - Aug 2025",
    description: "AI antibody generation and model tuning",
    tech: ["Python", "PyTorch", "FastAPI"],
    link: "https://www.kisojibiotech.com/",
  },
  {
    name: "Adanomad",
    role: "Software Engineer Intern",
    dates: "Jan - April 2025",
    description: "Agents and workflows",
    tech: ["Python", "TypeScript", "OpenAI", "Next.js", "Supabase"],
    link: "https://adanomad.com",
  },
  {
    name: "University of Waterloo",
    role: "Software Developer",
    dates: "May - Aug 2024",
    description: "Satellite imagery and CV algorithms",
    tech: ["Python", "C++", "CLI", ".NET"],
    link: "https://vip.uwaterloo.ca/",
  },
]

export default function Experience() {
  return (
    <div className="flex flex-col gap-6">
      {companies.map((company, i) => (
        <ScrollReveal key={company.name} delay={(i % 4) * 100}>
          <ExperienceCard company={company} />
        </ScrollReveal>
      ))}
    </div>
  )
}
