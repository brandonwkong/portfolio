"use client"

import { useParams, useRouter } from "next/navigation"
import { projects } from "@/components/portfolio"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const project = projects.find(p => p.id === Number(params.id))

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/#portfolio">
          <Button>Return to Portfolio</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20">

        <Button 
            variant="ghost" 
            onClick={() => router.back()}
            className="mb-6"
        >
            ← Back to Portfolio
        </Button> 

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="relative h-[400px] w-full my-8 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-lg mb-8">{project.description}</p>
      
      <div className="flex gap-4">
        <Button variant="outline" size="lg" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
        </Button>
        {project.liveDemo && (
          <Button size="lg" asChild>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}