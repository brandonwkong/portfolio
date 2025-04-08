"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md py-2" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Brandon.
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About Me", "Portfolio"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-primary transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md py-4 md:hidden">
            <ul className="flex flex-col items-center space-y-4">
              {["Home", "About Me", "Portfolio"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
