"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

const steps = [
  {
    title: "Log Your Meals",
    description: "Take a photo or manually enter what you ate throughout the day.",
    icon: "🍽️",
  },
  {
    title: "AI Analysis",
    description: "Our AI automatically calculates your macros and calorie intake.",
    icon: "🤖",
  },
  {
    title: "Track Progress",
    description: "View your nutrition trends and track your progress over time.",
    icon: "📊",
  },
  {
    title: "Share & Connect",
    description: "Share your journey with friends and motivate each other.",
    icon: "👥",
  },
]

export default function HowItWorks() {
  const [isMounted, setIsMounted] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div ref={ref} className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-center text-center transition-all duration-700 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            { "transition-delay-300": index === 1 },
            { "transition-delay-600": index === 2 },
            { "transition-delay-900": index === 3 },
          )}
        >
          <div className="relative mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
              {step.icon}
            </div>
            {/* {index < steps.length - 1 && (
              <div className="absolute left-full top-1/2 hidden h-px w-full -translate-y-1/2 transform bg-gray-200 lg:block"></div>
            )} */}
          </div>
          <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
        </div>
      ))}
    </div>
  )
}

