interface Project {
  title: string
  description: string
  github: string
  liveDemo?: string
}

const projects: Project[] = [
  {
    title: "ClassiMail: Email Classifier + Recommendation System",
    description:
      "Full-stack Gmail classifier using OpenAI to categorize job-related emails with real-time filtering and sender extraction, plus a PyTorch model predicting email relevance and engagement.",
    github: "https://github.com/brandonwkong/ClassiMail",
    liveDemo: "https://drive.google.com/file/d/1CwpzmS7WAL7apENXoomJolU38X7EUD08/view?usp=sharing",
  },
  {
    title: "HealthAI: Agentic Healthcare + Triage System",
    description:
      "Agentic healthcare intake and triage system using LangGraph to orchestrate multi-step patient workflows with safety gating, MCP-based tool execution, and RAG-grounded triage decisions.",
    github: "https://github.com/brandonwkong/HealthAI",
  },
  {
    title: "JARVIS: My Personal Assistant",
    description:
      "Python-based AI assistant with RAG and SQLite, designed for context-aware responses and continuous learning.",
    github: "https://github.com/brandonwkong/JARVIS",
  },
  {
    title: "Cliff Detection System",
    description:
      "Computer vision system built with PyTorch and OpenCV to detect and analyze two-hand gestures in real time.",
    github: "https://github.com/brandonwkong/CLIF",
  },
  {
    title: "MNIST Neural Net",
    description:
      "Neural network built from scratch with NumPy to classify MNIST digits using backpropagation and optimization.",
    github: "https://github.com/brandonwkong/To-Do-App",
  },
]

export default function Portfolio() {
  return (
    <ul className="divide-y divide-white/10">
      {projects.map((project) => (
        <li key={project.title} className="py-5">
          <h3 className="text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-white/50">{project.description}</p>
          <div className="mt-2 flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              GitHub →
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                Demo →
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
