import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  className?: string
}

export default function TestimonialCard({ quote, author, role, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center space-y-4 rounded-lg border p-6 text-center shadow-sm transition-all hover:shadow-md",
        className,
      )}
    >
      <Quote className="h-8 w-8 text-primary opacity-50" />
      <p className="text-gray-600 dark:text-gray-300">{quote}</p>
      <div className="mt-4">
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
  )
}

