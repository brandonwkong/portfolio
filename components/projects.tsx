import ProjectCard, { type Project } from "@/components/project-card"
import ScrollReveal from "@/components/scroll-reveal"

const projects: Project[] = [
  {
    title: "ClassiMail: Email Classifier + Recommendation System",
    description:
      "Full-stack Gmail classifier using OpenAI to categorize job-related emails with real-time filtering and sender extraction, plus a PyTorch model predicting email relevance and engagement.",
    tech: ["Python", "Flask", "Next", "OpenAI", "SQLite", "Prometheus", "Grafana"],
    github: "https://github.com/brandonwkong/ClassiMail",
    liveDemo: "https://drive.google.com/file/d/1CwpzmS7WAL7apENXoomJolU38X7EUD08/view?usp=sharing",
  },
  {
    title: "HealthAI: Agentic Healthcare + Triage System",
    description:
      "Agentic healthcare intake and triage system using LangGraph to orchestrate multi-step patient workflows with safety gating, MCP-based tool execution, and RAG-grounded triage decisions.",
    tech: ["LangGraph", "MCP", "RAG", "Python"],
    github: "https://github.com/brandonwkong/HealthAI",
  },
  {
    title: "JARVIS: My Personal Assistant",
    description:
      "Python-based AI assistant with RAG and SQLite, designed for context-aware responses and continuous learning.",
    tech: ["Python", "SQLite"],
    github: "https://github.com/brandonwkong/JARVIS",
  },
  {
    title: "Cliff",
    description:
      "Computer vision system built with PyTorch and OpenCV to detect and analyze two-hand gestures in real time.",
    tech: ["2023 Hackathon Finalist", "PyTorch", "OpenCV", "Computer Vision"],
    github: "https://github.com/brandonwkong/CLIF",
  },
  {
    title: "MNIST Neural Net",
    description:
      "Neural network built from scratch with NumPy to classify MNIST digits using backpropagation and optimization.",
    tech: ["Python", "NumPy", "PyTorch"],
    github: "https://github.com/brandonwkong/To-Do-App",
  },
]

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project, i) => (
        <ScrollReveal key={project.title} delay={(i % 4) * 100}>
          <ProjectCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  )
}
