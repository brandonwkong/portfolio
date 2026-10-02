"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "li"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    let revealed = false
    const reveal = () => {
      if (revealed) return
      revealed = true
      setVisible(true)
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }

    // Fast flings/scrollbar drags can move an element from fully below the
    // viewport to fully above it between two sampled frames, so a plain
    // IntersectionObserver callback can be skipped entirely. A generous
    // rootMargin plus a manual scroll fallback below ensures nothing gets
    // stuck permanently hidden.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { threshold: 0, rootMargin: "300px 0px 300px 0px" },
    )
    observer.observe(el)

    let ticking = false
    const checkPosition = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight + 300 && rect.bottom > -300) reveal()
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(checkPosition)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    checkPosition()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const Comp = Tag as any

  return (
    <Comp
      ref={ref}
      className={`reveal transition-all ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDuration: "650ms", transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Comp>
  )
}
