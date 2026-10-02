export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-slate-900/80 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-slate-800">
      {label}
    </span>
  )
}
