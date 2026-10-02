"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between gap-4 px-6 py-8 sm:px-12 lg:px-24">
        <a href="#home" className="shrink-0 text-3xl font-bold text-white sm:text-4xl">
          Brandon Kong
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-white/80 transition-colors hover:text-white sm:text-2xl"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 px-6 pb-6 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xl font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
