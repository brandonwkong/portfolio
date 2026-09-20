interface Company {
  name: string
  role: string
  description: string
  link?: string
}

const companies: Company[] = [
  {
    name: "Royal Bank of Canada",
    role: "AI Intern",
    description: "GenAI systems + ML pipelines",
    link: "https://www.rbc.com",
  },
  {
    name: "Rogers Communications",
    role: "Machine Learning Intern",
    description: "Multi-agent systems and ML pipelines",
    link: "https://www.rogers.com",
  },
  {
    name: "Kisoji",
    role: "Machine Learning Engineer",
    description: "AI antibody generation and cancer research",
    link: "https://www.kisojibiotech.com/",
  },
  {
    name: "Adanomad",
    role: "AI Full Stack Software Engineer",
    description: "Digital innovation and agentic systems",
    link: "https://adanomad.com",
  },
  {
    name: "University of Waterloo",
    role: "Software Developer",
    description: "Satellite imagery and CV algorithms",
    link: "https://vip.uwaterloo.ca/",
  },
]

export default function Experience() {
  return (
    <ul className="divide-y divide-white/10">
      {companies.map((company) => (
        <li key={company.name} className="py-5">
          <a
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-white group-hover:text-white/70 transition-colors">
                {company.name}
              </h3>
              <span className="text-sm text-white/40 whitespace-nowrap">{company.role}</span>
            </div>
            <p className="mt-1 text-sm text-white/50">{company.description}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}
