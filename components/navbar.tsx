"use client"

export type Tab = "experience" | "projects"

export default function Navbar({
  active,
  onChange,
}: {
  active: Tab
  onChange: (tab: Tab) => void
}) {
  const tabs: { id: Tab; label: string }[] = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <span className="text-sm font-medium text-white/90">Brandon Kong</span>
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`text-sm transition-colors ${
                active === tab.id ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
