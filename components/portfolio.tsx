"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Cliff Detection System",
    image: "/cliffimage_resized.png?height=400&width=600",
    hover: "Computer Vision Project: Cliff Detection",
    description:
      "A sophisticated computer vision system using PyTorch and OpenCV to identify and analyze cliff formations.",
    github: "https://github.com/brandonwkong/CLIF",
  },
  {
    id: 2,
    title: "Smart Todo Application",
    image: "/mockuptodo_resized.png?height=400&width=600",
    hover: "Full Stack: Smart Todo App",
    description: "A modern todo app with real-time updates and task categorization. Built with React and Node.js.",
    github: "https://github.com/brandonwkong/To-Do-App",
  },
  {
    id: 3,
    title: "Pokemon Search Engine",
    image: "/pokesearch_resized.png?height=400&width=600",
    hover: "PokeSearch: A Comprehensive Pokemon Web Scraper",
    description: "A powerful Pokemon filter/search engine built with modern web technologies.",
    github: "https://github.com/brandonwkong/PokeSearch",
  },
  {
    id: 4,
    title: "JARVIS: My Personal Assistant",
    image: "/personal_assistant.jpg?height=400&width=600",
    hover: "JARVIS: My Personal Assistant",
    description: "A RAG-powered personal assistant that knows everything about me.",
    github: "https://github.com/brandonwkong/JARVIS",
  },
  {
    id: 5,
    title: "Project 5",
    image: "/coming_soon.png?height=400&width=600",
    hover: "In Development",
    description: "Currently working on it!",
    github: "https://github.com/yourusername/project5",
  },
  {
    id: 6,
    title: "Project 6",
    image: "/coming_soon.png?height=400&width=600",
    hover: "Coming Soon",
    description: "Stay tuned for this exciting new project!",
    github: "https://github.com/yourusername/project6",
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const carouselRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Auto scroll carousel
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

  const handleScroll = (direction) => {
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

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Portfolio</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore some of my best works! These projects showcase my skills in various technologies and domains.
        </p>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg"
            aria-label="Previous projects"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg"
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
            <div className="flex gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[300px] md:min-w-[350px] snap-start portfolio-card"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="h-64 relative rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.hover}</p>
                      <span className="mt-4 text-sm text-white/60">Click to learn more</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.description}</DialogDescription>
            </DialogHeader>

            <div className="relative h-64 w-full my-4 rounded-lg overflow-hidden">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <Button variant="outline" asChild>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
