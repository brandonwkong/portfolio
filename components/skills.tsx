import TechBadge from "@/components/tech-badge"
import ScrollReveal from "@/components/scroll-reveal"

const skillGroups = [
  {
    title: "Coding Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: ["Next.js", "React", "Express", "LangChain", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn"],
  },
  {
    title: "Tools",
    skills: ["OpenAI", "AWS", "Docker", "Prometheus", "Grafana", "MongoDB", "Supabase", "Git", "Bash", "VS Code"],
  },
]

export default function Skills() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {skillGroups.map((group, i) => (
        <ScrollReveal key={group.title} delay={i * 120}>
          <div className="h-full rounded-[28px] bg-white/10 p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.55)]">
            <h3 className="text-lg font-bold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
