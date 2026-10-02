import TechBadge from "@/components/tech-badge"

export interface Company {
  name: string
  role: string
  dates: string
  description?: string
  tech: string[]
  link?: string
}

export default function ExperienceCard({ company }: { company: Company }) {
  const Wrapper = company.link ? "a" : "div"

  return (
    <Wrapper
      {...(company.link ? { href: company.link, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex flex-col gap-3 rounded-[28px] bg-white/10 p-11 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.55)]"
    >
      <span className="text-xl font-semibold text-white/60">{company.dates}</span>

      <h3 className="text-3xl font-bold leading-snug text-white transition-colors group-hover:text-white/80">
        {company.role} <span className="text-white/50">|</span> {company.name}
      </h3>
      {company.description && (
        <p className="text-lg leading-relaxed text-white/60">{company.description}</p>
      )}
      {company.tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {company.tech.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
      )}
    </Wrapper>
  )
}
