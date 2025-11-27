"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Moon } from "lucide-react"

export function CalendarTranslator() {
  const [gregorianDate, setGregorianDate] = useState("")
  const [lunarDate, setLunarDate] = useState<{
    moon: number
    day: number
    moonName: string
    dayOfWeek: string
  } | null>(null)

  const moonNames = [
    "Magnetic Moon",
    "Lunar Moon",
    "Electric Moon",
    "Self-Existing Moon",
    "Overtone Moon",
    "Rhythmic Moon",
    "Resonant Moon",
    "Galactic Moon",
    "Solar Moon",
    "Planetary Moon",
    "Spectral Moon",
    "Crystal Moon",
    "Cosmic Moon",
  ]

  const dayNames = ["Dali", "Seli", "Gamma", "Kali", "Alpha", "Limi", "Silio"]

  const convertToLunar = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()

    // July 26 is day 1 of the 13-moon calendar
    const startOfYear = new Date(year, 6, 26) // July 26

    let dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1

    // If date is before July 26, use previous calendar year
    if (dayOfYear < 1) {
      const prevStartOfYear = new Date(year - 1, 6, 26)
      dayOfYear = Math.floor((date.getTime() - prevStartOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1
    }

    // Handle Day Out of Time (July 25)
    if (dayOfYear > 364) {
      setLunarDate({
        moon: 0,
        day: 0,
        moonName: "Day Out of Time",
        dayOfWeek: "Out of Time",
      })
      return
    }

    // Calculate moon and day
    const moon = Math.floor((dayOfYear - 1) / 28) + 1
    const day = ((dayOfYear - 1) % 28) + 1
    const dayOfWeek = dayNames[(day - 1) % 7]

    setLunarDate({
      moon,
      day,
      moonName: moonNames[moon - 1],
      dayOfWeek,
    })
  }

  const handleConvert = () => {
    if (gregorianDate) {
      convertToLunar(gregorianDate)
    }
  }

  const handleTodayClick = () => {
    const today = new Date().toISOString().split("T")[0]
    setGregorianDate(today)
    convertToLunar(today)
  }

  return (
    <section id="translator" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl animate-[warp-pulse_4s_ease-in-out_infinite]" />
      </div>

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 warp-element">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-foreground">Calendar Translator</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Convert any Gregorian calendar date to the 13-moon lunar calendar.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 lg:p-12 warp-element hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 border-primary/20 bg-gradient-to-br from-card via-primary/5 to-card">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="gregorian-date" className="text-base">
                Gregorian Date
              </Label>
              <div className="flex gap-3">
                <Input
                  id="gregorian-date"
                  type="date"
                  value={gregorianDate}
                  onChange={(e) => setGregorianDate(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleTodayClick} variant="outline" className="warp-element bg-transparent">
                  Today
                </Button>
              </div>
            </div>

            <Button
              onClick={handleConvert}
              className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all warp-element"
              size="lg"
              disabled={!gregorianDate}
            >
              Convert to Lunar Calendar
            </Button>

            {lunarDate && (
              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Moon className="h-8 w-8 text-primary animate-pulse" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">13-Moon Date</h3>
                </div>

                {lunarDate.moonName === "Day Out of Time" ? (
                  <div className="text-center space-y-4 p-8 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg border-2 border-accent/30 warp-element">
                    <p className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      Day Out of Time
                    </p>
                    <p className="text-foreground/80">
                      A day for forgiveness, celebration, and preparation for the new year. This day (July 25) exists
                      outside the normal calendar cycle.
                    </p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg warp-element hover:shadow-lg hover:shadow-primary/20 transition-all">
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Moon</p>
                      <p className="text-3xl font-bold text-primary">{lunarDate.moon}</p>
                      <p className="text-lg text-foreground font-serif">{lunarDate.moonName}</p>
                    </div>

                    <div className="space-y-2 p-6 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-lg warp-element hover:shadow-lg hover:shadow-accent/20 transition-all">
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Day</p>
                      <p className="text-3xl font-bold text-primary">{lunarDate.day}</p>
                      <p className="text-lg text-foreground font-serif">{lunarDate.dayOfWeek}</p>
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    <strong>Note:</strong> The 13-moon calendar begins on July 26 (Gregorian) and consists of 13 perfect
                    moons of 28 days each, plus one "Day Out of Time" on July 25.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The 13-moon calendar synchronizes with actual lunar cycles and creates a fractal, harmonic relationship with
            natural time. Each moon has 28 days (4 weeks of 7 days), mirroring the average menstrual cycle and the
            moon's orbit around Earth.
          </p>
        </div>
      </div>
    </section>
  )
}
