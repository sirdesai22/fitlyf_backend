import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center space-y-4 rounded-lg border p-6 text-center shadow-sm transition-all hover:shadow-md",
        className,
      )}
    >
      <div className="rounded-full bg-primary/10 p-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}

