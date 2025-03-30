"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function AppScreenshot() {
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
    <div
      ref={ref}
      className={cn(
        "relative mx-auto max-w-[320px] transition-all duration-1000 transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      <div className="rounded-[40px] bg-gray-900 p-2 shadow-xl min-w-[300px]">
        <div className="overflow-hidden rounded-[32px] bg-white">
          <div className="bg-gray-100 h-12 flex items-center justify-center">
            <div className="w-16 h-6 bg-black rounded-full mx-auto"></div>
          </div>
          <div className="relative">
            <img
              src="/screenshot.png?height=600&width=300"
              alt="FitLyf App Screenshot"
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-lg font-bold">Today&apos;s Journal</div>
              <div className="text-sm opacity-80">Calories: 1,850 / 2,000</div>
              <div className="mt-2 flex gap-2">
                <div className="h-2 flex-1 rounded-full bg-white/20">
                  <div className="h-full w-3/4 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs">
                <div>Protein: 120g</div>
                <div>Carbs: 180g</div>
                <div>Fat: 60g</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/20 blur-xl"></div>
    </div>
  )
}

