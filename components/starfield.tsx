"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  radius: number
  baseAlpha: number
  phase: number
  speed: number
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let stars: Star[] = []
    let width = 0
    let height = 0
    let animationFrame = 0

    const buildStars = () => {
      const count = Math.floor((width * height) / 3000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.005,
      }))
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildStars()
    }

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height)
      for (const star of stars) {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.baseAlpha})`
        ctx.fill()
      }
    }

    let t = 0
    const tick = () => {
      t += 1
      ctx.clearRect(0, 0, width, height)
      for (const star of stars) {
        const alpha = star.baseAlpha + Math.sin(t * star.speed + star.phase) * 0.3
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, alpha))})`
        ctx.fill()
      }
      animationFrame = requestAnimationFrame(tick)
    }

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(animationFrame)
      } else if (!reduceMotion) {
        animationFrame = requestAnimationFrame(tick)
      }
    }

    resize()
    if (reduceMotion) {
      drawStatic()
    } else {
      animationFrame = requestAnimationFrame(tick)
    }

    window.addEventListener("resize", resize)
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
