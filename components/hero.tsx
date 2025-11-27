"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return

      const rect = titleRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height

      titleRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${-y * 10}deg)
      `
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

        {/* Floating infinity symbols */}
        <div className="absolute top-1/4 left-1/4 text-9xl text-primary/10 animate-[float-drift_8s_ease-in-out_infinite]">
          ∞
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-9xl text-accent/10 animate-[float-drift_10s_ease-in-out_infinite] animation-delay-2000">
          ∞
        </div>
      </div>

      <div className="container relative z-10 px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1
            ref={titleRef}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight transition-transform duration-200 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="inline-block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Decolonize Time
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed warp-element">
            Breaking free from the imposed 12-60 frequency. Reconnecting with the 13-20 lunar cycles through the
            spiraling dance of space-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="warp-element bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <a href="#systems">Enter the Vortex</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="warp-element border-primary/50 hover:border-accent hover:shadow-lg hover:shadow-accent/50 bg-transparent"
            >
              <a href="#translator">Translate Time</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce warp-element">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
