"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const interests = [
  "Agentic Systems",
  "Machine Learning",
  "Full Stack Development",
  "Computer Vision",
  "Generative Models",
  "Deep Learning Models",
  "Reinforcement Learning",
  "Realtime Data Streams",
  "Tool-Integrated Workflows",
]

export default function Hero() {
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentInterest = interests[currentInterestIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentInterest.substring(0, displayText.length + 1))
        setTypingSpeed(50)

        if (displayText === currentInterest) {
          // Wait before starting to delete
          setTypingSpeed(1000)
          setIsDeleting(true)
        }
      } else {
        setDisplayText(currentInterest.substring(0, displayText.length - 1))
        setTypingSpeed(30)

        if (displayText === "") {
          setIsDeleting(false)
          setCurrentInterestIndex((currentInterestIndex + 1) % interests.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentInterestIndex, displayText, isDeleting, typingSpeed])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/test.jpg?height=1080&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Hi I&apos;m Brandon</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Nice to meet you! I&apos;m a current Computer Engineering student at the University of Waterloo.
        </p>

        <div className="text-xl md:text-2xl text-white mb-12">
          <span>I&apos;m Passionate about </span>
          <span className={cn("inline-block text-primary font-semibold", isDeleting ? "animate-pulse" : "")}>
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </div>
      </div>
    </section>
  )
}
