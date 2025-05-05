"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  title: string
  image: string
  hover: string
  description: string
  github: string
  liveDemo?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "ClassiMail: Your Personal Email Classifier",
    image: "/classimail.png?height=400&width=600",
    hover: "ClassiMail: Your Personal Email Classifier",
    description: "A email classifier tailored toward filtering job related emails.",
    github: "https://github.com/brandonwkong/ClassiMail",
    liveDemo: "https://drive.google.com/file/d/129fDm8NhaXMkF5i6ZonVf7cuJiil6Y-q/view?usp=sharing",
  },
  {
    id: 2,
    title: "JARVIS: My Personal Assistant",
    image: "/jarvis2.png?height=400&width=600",
    hover: "JARVIS: My Personal Assistant",
    description: "A RAG-powered personal assistant that knows everything about me.",
    github: "https://github.com/brandonwkong/JARVIS",
  },
  {
    id: 3,
    title: "Cliff Detection System",
    image: "/cliff.png?height=400&width=600",
    hover: "Computer Vision Project: Cliff Detection",
    description:
      "A sophisticated computer vision system using PyTorch and OpenCV to identify and analyze cliff formations.",
    github: "https://github.com/brandonwkong/CLIF",
  },
  {
    id: 4,
    title: "MNIST Neural Net",
    image: "/MNIST_NN.png?height=400&width=600",
    hover: "Full Stack: Smart Todo App",
    description: "A modern todo app with real-time updates and task categorization. Built with React and Node.js.",
    github: "https://github.com/brandonwkong/To-Do-App",
  },
  {
    id: 5,
    title: "PokeSearch: A Comprehensive Pokemon Web Scraper",
    image: "/pokesearch_resized.png?height=400&width=600",
    hover: "PokeSearch: A Comprehensive Pokemon Web Scraper",
    description: "A powerful Pokemon filter/search engine built with modern web technologies.",
    github: "https://github.com/brandonwkong/PokeSearch",
  },
  {
    id: 6,
    title: "Project 5",
    image: "/coming_soon.png?height=400&width=600",
    hover: "In Development",
    description: "Currently working on it!",
    github: "https://github.com/yourusername/project5",
  },
  {
    id: 7,
    title: "Project 6",
    image: "/coming_soon.png?height=400&width=600",
    hover: "Coming Soon",
    description: "Stay tuned for this exciting new project!",
    github: "https://github.com/yourusername/project6",
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollWidth, clientWidth } = carouselRef.current
        const maxScroll = scrollWidth - clientWidth

        let newPosition = scrollPosition + clientWidth / 3
        if (newPosition > maxScroll) {
          newPosition = 0
        }

        carouselRef.current.scrollTo({
          left: newPosition,
          behavior: "smooth",
        })

        setScrollPosition(newPosition)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [scrollPosition])

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 3 : clientWidth / 3

      carouselRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      })

      setScrollPosition(scrollLeft + scrollAmount)
    }
  }

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Portfolio</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore some of my best works! These projects showcase my skills in various technologies and domains.
        </p>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg"
            aria-label="Previous projects"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg"
            aria-label="Next projects"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
          >
            <div className="flex gap-8">
            {projects.slice(0, 5).map((project) => ( // Only show first 4 projects
              <Link key={project.id} href={`/projects/${project.id}`} passHref>
                <div className="min-w-[400px] md:min-w-[450px] snap-start portfolio-card" onClick={() => openProjectModal(project)}>
                  <div className="h-80 relative rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <span className="mt-4 text-base text-white/60">Click to learn more</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-lg">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="relative h-80 w-full my-4 rounded-lg overflow-hidden">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <Button variant="outline" size="lg" asChild>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" asChild>
                {selectedProject?.liveDemo ? (
                  <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                ) : (
                  <span className="text-gray-400">Live Demo (Coming Soon!)</span>
                )}
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}