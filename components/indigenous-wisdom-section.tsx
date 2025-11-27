"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export function IndigenousWisdomSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in")
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="indigenous" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full border-4 border-primary blur-sm animate-[float-drift_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full border-4 border-accent blur-sm animate-[float-drift_18s_ease-in-out_infinite]" />
      </div>

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 warp-element">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-foreground">Indigenous Time Wisdom</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ancient cultures across the globe developed sophisticated time-keeping systems aligned with natural cycles.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 via-card to-accent/5 warp-element hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-2 border-primary/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <img
                  src="/turtle-shell-pattern-showing-13-segments.jpg"
                  alt="Turtle shell with 13 segments"
                  className="relative w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-3xl font-bold text-foreground">The Turtle's Teaching</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Many Indigenous North American nations recognize the turtle as a timekeeper. The turtle's back has 13
                  large segments, representing the 13 moons of the year. The 28 smaller scales around the edge represent
                  the 28 days in each lunar month.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  This isn't coincidence—it's nature's calendar, carried on the back of one of Earth's oldest creatures.
                  The turtle reminds us that we are part of natural time, not separate from it.
                </p>
                <p className="text-accent font-semibold">
                  "Turtle Island" (North America) itself is named for this sacred relationship between land, time, and
                  life.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card
            ref={(el) => (cardsRef.current[0] = el)}
            className="p-6 warp-element opacity-0 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <h4 className="font-serif text-xl font-bold mb-3 text-foreground">Maya Tzolk'in</h4>
            <p className="text-sm text-muted-foreground mb-3">Sacred 260-day Calendar</p>
            <p className="text-foreground/80 text-sm leading-relaxed">
              The Maya Tzolk'in combines 13 numbers with 20 day signs, creating a 260-day sacred cycle that aligns with
              human gestation and agricultural rhythms.
            </p>
          </Card>

          <Card
            ref={(el) => (cardsRef.current[1] = el)}
            className="p-6 warp-element opacity-0 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <h4 className="font-serif text-xl font-bold mb-3 text-foreground">Māori Maramataka</h4>
            <p className="text-sm text-muted-foreground mb-3">Lunar Planting Calendar</p>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Māori people of New Zealand follow the moon phases for planting, fishing, and harvesting, with each lunar
              night having specific energies and activities.
            </p>
          </Card>

          <Card
            ref={(el) => (cardsRef.current[2] = el)}
            className="p-6 warp-element opacity-0 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <h4 className="font-serif text-xl font-bold mb-3 text-foreground">Lakota Winter Count</h4>
            <p className="text-sm text-muted-foreground mb-3">Pictorial Year Tracking</p>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Lakota nations recorded history through winter counts, with each year marked by a significant event rather
              than an arbitrary number, honoring cyclical time.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
