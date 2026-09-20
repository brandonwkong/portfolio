"use client"

import { useRouter } from "next/navigation"
import Constellation from "@/components/constellation"

interface Project {
  id: number
  title: string
  image: string
  hover: string
  description: string
  github: string
  liveDemo?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ClassiMail: Email Classifier + Recommendation System",
    image: "/classimail.png?height=400&width=600",
    hover: "ClassiMail: Email Classifier + Recommendation System",
    description: "Built a full-stack Gmail classifier using OpenAI to categorize job-related emails with real-time filtering and sender extraction. Introduced a trained PyTorch model to predict email relevance and engagement from engineered features, improving prioritization accuracy.",
    github: "https://github.com/brandonwkong/ClassiMail",
    liveDemo: "https://drive.google.com/file/d/1CwpzmS7WAL7apENXoomJolU38X7EUD08/view?usp=sharing",
  },
  {
    id: 2,
    title: "HealthAI: Agentic Healthcare + Triage System",
    image: "/healthai.png?height=400&width=600",
    hover: "HealthAI: Agentic Healthcare + Triage System",
    description: "Built an agentic healthcare intake and triage system using LangGraph to orchestrate multi-step patient workflows with deterministic branching, safety gating, and MCP-based tool execution. Integrated LlamaIndex-powered RAG retrieval to ground triage decisions in medical knowledge and developed post-triage automation for alerts, logging, and appointment scheduling.",
    github: "https://github.com/brandonwkong/HealthAI",
  },
  {
    id: 3,
    title: "JARVIS: My Personal Assistant",
    image: "/jarvis2.png?height=400&width=600",
    hover: "JARVIS: My Personal Assistant",
    description: "Python-based AI assistant with RAG and SQLite, designed for context-aware responses and continuous learning.",
    github: "https://github.com/brandonwkong/JARVIS",
  },
  {
    id: 4,
    title: "Cliff Detection System",
    image: "/cliff.png?height=400&width=600",
    hover: "Computer Vision Project: Cliff Detection",
    description: "Computer vision system built with PyTorch and OpenCV to detect and analyze two-hand gestures in real time.",
    github: "https://github.com/brandonwkong/CLIF",
  },
  {
    id: 5,
    title: "MNIST Neural Net",
    image: "/MNIST_NN.png?height=400&width=600",
    hover: "Full Stack: Smart Todo App",
    description: "Implemented a neural network from scratch with NumPy to classify MNIST digits using backpropagation and optimization.",
    github: "https://github.com/brandonwkong/To-Do-App",
  },
  {
    id: 6,
    title: "Project 5",
    image: "/coming_soon.png?height=400&width=600",
    hover: "In Development",
    description: "Currently working on it!",
    github: "https://github.com/yourusername/project5",
  },
]

// The Sickle of Leo: a backward-question-mark curve of 6 stars, from
// Regulus (bottom) up through Eta, Algieba, Adhafera, Rasalas, to Epsilon Leonis
const positions: [number, number][] = [
  [50, 90],
  [46, 72],
  [40, 52],
  [36, 32],
  [46, 16],
  [68, 10],
]

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
]

export default function Portfolio() {
  const router = useRouter()

  return (
    <div id="portfolio">
      <h2 className="sr-only">Projects</h2>
      <Constellation
        positions={positions}
        edges={edges}
        nodes={projects.map((project) => ({
          id: project.id,
          label: project.title,
          sublabel: project.hover !== project.title ? project.hover : undefined,
          dim: project.github.includes("yourusername"),
          onSelect: () => router.push(`/projects/${project.id}`),
        }))}
      />
    </div>
  )
}
