import { Card } from "@/components/ui/card"
import { Clock, Moon, Calendar } from "lucide-react"

export function TimeSystemsSection() {
  return (
    <section id="systems" className="py-20 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            The System Construct of Time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our modern calendar is not natural law—it's a colonial construct designed to disconnect us from Earth's
            rhythms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* 12-60 System */}
          <Card className="p-8 bg-card border-2 border-destructive/20">
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

          {/* 13-20 System */}
          <Card className="p-8 bg-card border-2 border-primary/30">
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

        <Card className="p-8 lg:p-12 bg-secondary/20 max-w-4xl mx-auto">
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
