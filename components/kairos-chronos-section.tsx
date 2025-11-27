"use client"

import { Card } from "@/components/ui/card"
import { Timer, Heart } from "lucide-react"
import { useRef, useEffect } from "react"

export function KairosChronosSection() {
  const chronosRef = useRef<HTMLDivElement>(null)
  const kairosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const addTiltEffect = (element: HTMLElement) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        element.style.transform = `
          perspective(1000px)
          rotateY(${x * 15}deg)
          rotateX(${-y * 15}deg)
          translateZ(20px)
        `
      }

      const handleMouseLeave = () => {
        element.style.transform = ""
      }

      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    const cleanups: (() => void)[] = []
    if (chronosRef.current) cleanups.push(addTiltEffect(chronosRef.current))
    if (kairosRef.current) cleanups.push(addTiltEffect(kairosRef.current))

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])

  return (
    <section id="kairos" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <path
            d="M 500,500 m -200,0 a 200,200 0 1,0 400,0 a 200,200 0 1,0 -400,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          <path
            d="M 500,500 m -300,0 a 300,300 0 1,0 600,0 a 300,300 0 1,0 -600,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
          />
        </svg>
      </div>

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 warp-element">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-foreground">Kairos vs Chronos</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ancient Greeks understood two fundamentally different types of time. Modern society has forgotten one of
            them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Chronos */}
          <Card
            ref={chronosRef}
            className="p-8 lg:p-10 transition-all duration-200 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-muted">
                <Timer className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-foreground">Chronos</h3>
            </div>
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Quantitative Time</p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Sequential, measurable, clock time. The time of schedules, deadlines, and productivity. Chronos marches
              forward in a straight line, dividing life into units to be managed and optimized.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground">→</span>
                <span className="text-sm text-foreground/70">Linear and mechanical</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground">→</span>
                <span className="text-sm text-foreground/70">External and imposed</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground">→</span>
                <span className="text-sm text-foreground/70">Creates stress and urgency</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground">→</span>
                <span className="text-sm text-foreground/70">The time of capitalism</span>
              </div>
            </div>
          </Card>

          {/* Kairos */}
          <Card
            ref={kairosRef}
            className="p-8 lg:p-10 bg-gradient-to-br from-primary/5 via-card to-accent/5 border-primary/20 transition-all duration-200 ease-out hover:shadow-2xl hover:shadow-primary/20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-foreground">Kairos</h3>
            </div>
            <p className="text-sm uppercase tracking-wide text-primary mb-4">Qualitative Time</p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              The right moment, opportune time. The time of seasons, ripeness, and synchronicity. Kairos is felt rather
              than measured—it's the perfect moment to act, create, or rest.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <span className="text-sm text-foreground/70">Cyclical and organic</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <span className="text-sm text-foreground/70">Internal and intuitive</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <span className="text-sm text-foreground/70">Creates flow and presence</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <span className="text-sm text-foreground/70">The time of nature</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 lg:p-12 bg-card max-w-4xl mx-auto warp-element hover:shadow-xl transition-all duration-300">
          <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Moving Toward Kairos</h3>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Our obsession with Chronos time—scheduling every minute, optimizing productivity, racing against
              deadlines—has created an epidemic of burnout and disconnection. We've lost touch with the natural rhythms
              that governed human life for millennia.
            </p>
            <p>
              Indigenous cultures worldwide have always lived in Kairos time, following the seasons, the moon, and the
              natural cycles of the land. They plant when the earth is ready, harvest when the crops are ripe, and rest
              when darkness falls.
            </p>
            <p className="font-semibold text-primary">
              The future isn't about abandoning time entirely—it's about using less Chronos and more Kairos. It's about
              remembering that not everything that matters can be measured, and that the most important moments in life
              happen in their own time.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
