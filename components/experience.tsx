import Image from "next/image"

interface Company {
  name: string
  role: string
  dates: string
  description?: string
  logo: string
  link?: string
}

const companies: Company[] = [
  {
    name: "Tesla",
    role: "Software Engineer Intern",
    dates: "Fall 2026",
    description: "Service organization model training and oragnization wide infrastructure",
    logo: "/tesla.jpg",
    link: 'https://www.tesla.com/'
  },
  {
    name: "Royal Bank of Canada",
    role: "Software Engineer Intern, AI",
    dates: "Summer 2026",
    description: "GenAI systems + ML pipelines",
    logo: "/rbc.png",
    link: "https://www.rbc.com",
  },
  {
    name: "Rogers Communications",
    role: "Machine Learning Intern",
    dates: "Fall 2025",
    description: "Multi-agent systems and ML pipelines",
    logo: "/rogers.png",
    link: "https://www.rogers.com",
  },
  {
    name: "Kisoji",
    role: "Machine Learning Engineer Intern",
    dates: "Summer 2025",
    description: "AI antibody generation and cancer research",
    logo: "/kisoji.png",
    link: "https://www.kisojibiotech.com/",
  },
  {
    name: "Adanomad",
    role: "Software Engineer Intern",
    dates: "Winter 2025",
    description: "Digital innovation and agentic systems",
    logo: "/adanomad.png",
    link: "https://adanomad.com",
  },
  {
    name: "University of Waterloo",
    role: "Software Developer",
    dates: "Summer 2024",
    description: "Satellite imagery and CV algorithms",
    logo: "/vip.png",
    link: "https://vip.uwaterloo.ca/",
  },
]

export default function Experience() {
  return (
    <ul className="divide-y divide-white/10">
      {companies.map((company) => {
        const Wrapper = company.link ? "a" : "div"
        return (
          <li key={company.name} className="py-5">
            <Wrapper
              {...(company.link
                ? { href: company.link, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-start gap-4 group"
            >
              <div className="relative mt-0.5 h-20 w-20 shrink-0 overflow-hidden rounded-md">
                <Image src={company.logo} alt="" fill sizes="80px" className="object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-white group-hover:text-white/70 transition-colors">
                    {company.name}
                  </h3>
                  <span className="text-sm text-white/40 whitespace-nowrap">{company.role}</span>
                </div>
                <div className="text-right text-xs text-white/30">{company.dates}</div>
                {company.description && (
                  <p className="mt-1 text-sm text-white/50">{company.description}</p>
                )}
              </div>
            </Wrapper>
          </li>
        )
      })}
    </ul>
  )
}
