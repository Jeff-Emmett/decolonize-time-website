import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { TimeSystemsSection } from "@/components/time-systems-section"
import { KairosChronosSection } from "@/components/kairos-chronos-section"
import { IndigenousWisdomSection } from "@/components/indigenous-wisdom-section"
import { CalendarTranslator } from "@/components/calendar-translator"
import { AlternativeTimekeeping } from "@/components/alternative-timekeeping"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TimeSystemsSection />
      <KairosChronosSection />
      <IndigenousWisdomSection />
      <CalendarTranslator />
      <AlternativeTimekeeping />
      <Footer />
    </main>
  )
}
