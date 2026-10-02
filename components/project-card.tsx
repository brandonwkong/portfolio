import TechBadge from "@/components/tech-badge"

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  liveDemo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col gap-7 rounded-[28px] bg-white/10 p-11 py-14 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.55)]">
      <h3 className="text-3xl font-bold leading-snug text-white transition-colors group-hover:text-white/80">
        {project.title}
      </h3>
      <p className="text-lg leading-relaxed text-white/60">{project.description}</p>

      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
      )}

      <div className="mt-2 flex gap-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-white/50 transition-colors hover:text-white"
        >
          GitHub →
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-white/50 transition-colors hover:text-white"
          >
            Demo →
          </a>
        )}
      </div>
    </div>
  )
}
