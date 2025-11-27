"use client"

import { Card } from "@/components/ui/card"
import { Sunrise, Wind, Leaf, Waves } from "lucide-react"
import { useRef, useEffect } from "react"

export function AlternativeTimekeeping() {
  const methodRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in")
            }, index * 150)
          }
        })
      },
      { threshold: 0.1 },
    )

    methodRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const methods = [
    {
      icon: Sunrise,
      title: "Solar Rhythms",
      description:
        "Wake with sunrise, rest with sunset. Align your circadian rhythm with the natural light-dark cycle.",
      practices: [
        "Morning sun exposure within 30 minutes of waking",
        "Outdoor time during solar noon",
        "Reduce artificial light after sunset",
        "Honor solstices and equinoxes",
      ],
    },
    {
      icon: Wind,
      title: "Seasonal Living",
      description: "Tune into the four seasons and their unique energies for work, rest, growth, and reflection.",
      practices: [
        "Spring: Plant seeds, start projects, expand",
        "Summer: Full expression, activity, growth",
        "Autumn: Harvest results, prepare, consolidate",
        "Winter: Rest, dream, restore, plan",
      ],
    },
    {
      icon: Leaf,
      title: "Moon Phases",
      description: "Follow the lunar cycle for planting, creating, releasing, and restoring.",
      practices: [
        "New Moon: Set intentions, begin new projects",
        "Waxing Moon: Build, grow, take action",
        "Full Moon: Culmination, celebration, illuminate",
        "Waning Moon: Release, rest, reflect",
      ],
    },
    {
      icon: Waves,
      title: "Body Wisdom",
      description: "Listen to your body's natural rhythms for hunger, energy, and rest instead of external schedules.",
      practices: [
        "Eat when truly hungry, not by clock",
        "Rest when tired, move when energized",
        "Honor menstrual cycles (if applicable)",
        "Track personal energy patterns",
      ],
    },
  ]

  return (
    <section id="alternatives" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path
            d="M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
            fill="currentColor"
            className="text-primary"
          />
          <path
            d="M0,600 Q250,500 500,600 T1000,600 L1000,1000 L0,1000 Z"
            fill="currentColor"
            className="text-accent"
          />
        </svg>
      </div>

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 warp-element">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Natural Time-Keeping Methods
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Practical ways to align your body and mind with the flow of work in line with natural rhythms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {methods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card
                key={index}
                ref={(el) => (methodRefs.current[index] = el)}
                className="p-8 opacity-0 warp-element hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border-primary/10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 shrink-0">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">{method.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{method.description}</p>
                  </div>
                </div>
                <div className="space-y-2 pl-3">
                  {method.practices.map((practice, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-sm">→</span>
                      <span className="text-sm text-foreground/80">{practice}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-card to-accent/10 max-w-4xl mx-auto warp-element hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20">
          <h3 className="font-serif text-3xl font-bold mb-6 text-center text-foreground">
            The Future: Less Clock, More Life
          </h3>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Imagine a world where we measure time not by the minute, but by the season. Where we work when inspired,
              rest when weary, and celebrate when the moment is ripe. Where children learn by following their curiosity
              rather than bells, and communities gather by the moon rather than the calendar.
            </p>
            <p>
              This isn't regression—it's remembering. Indigenous cultures have lived this way sustainably for thousands
              of years. Modern neuroscience confirms what they always knew: our bodies thrive on natural rhythms, not
              rigid schedules.
            </p>
            <p className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The path forward isn't to reject all structure, but to choose structure that serves life rather than
              productivity. To use less Chronos and more Kairos. To decolonize time itself.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
