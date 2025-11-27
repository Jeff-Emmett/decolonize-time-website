import { Card } from "@/components/ui/card"

export function IndigenousWisdomSection() {
  return (
    <section id="indigenous" className="py-20 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-foreground">Indigenous Time Wisdom</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ancient cultures across the globe developed sophisticated time-keeping systems aligned with natural cycles.
          </p>
        </div>

        {/* Turtle Shell */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/turtle-shell-pattern-showing-13-segments.jpg"
                  alt="Turtle shell with 13 segments"
                  className="w-full h-auto rounded-lg"
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

        {/* Indigenous Calendars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6">
            <h4 className="font-serif text-xl font-bold mb-3 text-foreground">Maya Tzolk'in</h4>
            <p className="text-sm text-muted-foreground mb-3">Sacred 260-day Calendar</p>
            <p className="text-foreground/80 text-sm leading-relaxed">
              The Maya Tzolk'in combines 13 numbers with 20 day signs, creating a 260-day sacred cycle that aligns with
              human gestation and agricultural rhythms.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-serif text-xl font-bold mb-3 text-foreground">Māori Maramataka</h4>
            <p className="text-sm text-muted-foreground mb-3">Lunar Planting Calendar</p>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Māori people of New Zealand follow the moon phases for planting, fishing, and harvesting, with each lunar
              night having specific energies and activities.
            </p>
          </Card>

          <Card className="p-6">
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
