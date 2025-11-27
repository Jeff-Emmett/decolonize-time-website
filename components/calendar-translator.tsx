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
    <section id="translator" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-foreground">Calendar Translator</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Convert any Gregorian calendar date to the 13-moon lunar calendar.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 lg:p-12">
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
                <Button onClick={handleTodayClick} variant="outline">
                  Today
                </Button>
              </div>
            </div>

            <Button
              onClick={handleConvert}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
              disabled={!gregorianDate}
            >
              Convert to Lunar Calendar
            </Button>

            {lunarDate && (
              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Moon className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">13-Moon Date</h3>
                </div>

                {lunarDate.moonName === "Day Out of Time" ? (
                  <div className="text-center space-y-4 p-8 bg-accent/10 rounded-lg">
                    <p className="text-3xl font-bold text-accent">Day Out of Time</p>
                    <p className="text-foreground/80">
                      A day for forgiveness, celebration, and preparation for the new year. This day (July 25) exists
                      outside the normal calendar cycle.
                    </p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 p-6 bg-primary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">Moon</p>
                      <p className="text-3xl font-bold text-primary">{lunarDate.moon}</p>
                      <p className="text-lg text-foreground font-serif">{lunarDate.moonName}</p>
                    </div>

                    <div className="space-y-2 p-6 bg-secondary/20 rounded-lg">
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
