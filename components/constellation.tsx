"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export interface ConstellationNode {
  id: string | number
  label: string
  sublabel?: string
  dim?: boolean
  onSelect?: () => void
}

interface ConstellationProps {
  nodes: ConstellationNode[]
  positions: [number, number][]
  edges: [number, number][]
  className?: string
}

export default function Constellation({ nodes, positions, edges, className }: ConstellationProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const clearIfActive = (i: number) => setActiveIndex((prev) => (prev === i ? null : prev))

  return (
    <div className={cn("relative w-full aspect-[16/10] max-w-4xl mx-auto", className)}>
      <svg className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        {edges.map(([a, b], i) => {
          const [x1, y1] = positions[a]
          const [x2, y2] = positions[b]
          return (
            <line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1}
            />
          )
        })}
      </svg>

      {nodes.map((node, i) => {
        const [x, y] = positions[i]
        const active = activeIndex === i
        return (
          <button
            key={node.id}
            type="button"
            aria-label={node.label}
            onClick={node.onSelect}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => clearIfActive(i)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => clearIfActive(i)}
            className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full outline-none md:h-12 md:w-12"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span
              className={cn(
                "block rounded-full bg-white transition-all duration-300",
                node.dim ? "h-1.5 w-1.5 opacity-40" : "h-2.5 w-2.5 md:h-3 md:w-3",
              )}
              style={{
                boxShadow: active
                  ? "0 0 16px 6px hsl(var(--primary) / 0.8)"
                  : node.dim
                  ? "none"
                  : "0 0 8px 2px rgba(255,255,255,0.5)",
              }}
            />

            <span
              className={cn(
                "pointer-events-none absolute top-full z-10 mt-2 whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-3 py-1.5 text-xs backdrop-blur-sm transition-opacity duration-200",
                active ? "opacity-100" : "opacity-0",
              )}
            >
              <span className="block font-semibold text-primary">{node.label}</span>
              {node.sublabel && <span className="block text-white/70">{node.sublabel}</span>}
            </span>
          </button>
        )
      })}
    </div>
  )
}
