"use client"

import { useState } from "react"

export function BoopDivider({ targetId }: { targetId: string }) {
  const [booped, setBooped] = useState(false)

  const handleBoop = () => {
    setBooped(true)

    setTimeout(() => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }, 400)

    setTimeout(() => setBooped(false), 1000)
  }

  return (
    <div className="relative py-12 flex flex-col items-center justify-center gap-3">
      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center px-8 lg:px-32 pointer-events-none">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30" />
        <div className="w-32" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-accent/30 to-accent/30" />
      </div>

      {/* Boop button */}
      <button
        onClick={handleBoop}
        className={`
          relative z-10 group cursor-pointer
          px-6 py-3 rounded-full
          bg-gradient-to-r from-primary/10 to-accent/10
          border border-primary/20
          hover:border-primary/50 hover:from-primary/20 hover:to-accent/20
          hover:shadow-lg hover:shadow-primary/20
          active:scale-90
          transition-all duration-300 ease-out
          ${booped ? "scale-125 shadow-2xl shadow-primary/40 border-primary/60" : ""}
        `}
      >
        <span
          className={`
            text-sm font-medium tracking-wide
            bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
            transition-all duration-300
            ${booped ? "scale-110" : "group-hover:tracking-wider"}
          `}
        >
          {booped ? "boop!" : "boop to continue"}
        </span>

        {/* Ripple effect on boop */}
        {booped && (
          <>
            <span className="absolute inset-0 rounded-full animate-ping bg-primary/20" />
            <span className="absolute inset-0 rounded-full animate-ping bg-accent/10 animation-delay-100" />
          </>
        )}
      </button>

      {/* Subtle hint arrow */}
      <div
        className={`
          text-primary/40 transition-all duration-500
          ${booped ? "translate-y-2 opacity-0" : "animate-bounce"}
        `}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-60">
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
