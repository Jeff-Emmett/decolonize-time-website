import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="container px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="font-serif text-2xl font-bold text-foreground">decolonizeti.me</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This website honors the indigenous peoples worldwide who have maintained sacred relationships with time,
            land, and natural cycles through millennia of colonial oppression.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>in harmony with the rhythms of the Earth</span>
          </div>
          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              {new Date().getFullYear()} • Time is not linear, it is fractal and sacred
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
