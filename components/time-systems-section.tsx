"use client"

import { Card } from "@/components/ui/card"
import { Clock, Moon, Calendar } from "lucide-react"
import { useEffect, useRef } from "react"

export function TimeSystemsSection() {
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (card1Ref.current) observer.observe(card1Ref.current)
    if (card2Ref.current) observer.observe(card2Ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="systems" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-[float-drift_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent animate-[float-drift_12s_ease-in-out_infinite]" />
      </div>

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 warp-element">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            The System Construct of Time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our modern calendar is not natural law—it's a colonial construct designed to disconnect us from Earth's
            rhythms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card
            ref={card1Ref}
            className="p-8 bg-card border-2 border-destructive/20 warp-element hover:shadow-2xl hover:shadow-destructive/20 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-destructive/10">
                <Clock className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">12-60 Frequency</h3>
                <p className="text-sm text-muted-foreground">The Imposed System</p>
              </div>
            </div>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>12 irregular months (28-31 days)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>60-second minutes, 60-minute hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Disconnected from lunar cycles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Created for taxation & control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Promotes linear, mechanical thinking</span>
              </li>
            </ul>
          </Card>

          <Card
            ref={card2Ref}
            className="p-8 bg-gradient-to-br from-card via-primary/5 to-card border-2 border-primary/30 warp-element hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Moon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">13-20 Frequency</h3>
                <p className="text-sm text-muted-foreground">The Natural Rhythm</p>
              </div>
            </div>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>13 perfect 28-day lunar months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>20 solar seals (fingers + toes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Aligned with moon phases & menstruation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Honors cyclical, fractal nature</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>365 days (13 × 28 + 1 day out of time)</span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="p-8 lg:p-12 bg-secondary/20 max-w-4xl mx-auto warp-element hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-lg bg-accent/20 shrink-0">
              <Calendar className="h-10 w-10 text-accent" />
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">Why This Matters</h3>
              <p className="text-foreground/80 leading-relaxed">
                The Gregorian calendar was imposed globally through colonization, severing indigenous peoples from their
                ancestral time-keeping systems. By adopting the 12-60 frequency, we've internalized a mechanical,
                productivity-focused relationship with time that disconnects us from natural cycles, our bodies, and the
                Earth.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The 13-moon calendar reflects the actual lunar cycles we observe in nature. Thirteen moons of 28 days
                each creates a perfect, fractal harmony that resonates with human biology and Earth's rhythms.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
