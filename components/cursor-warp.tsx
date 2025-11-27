"use client"

import { useEffect, useRef, useState } from "react"

export function CursorWarp() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      setIsMoving(true)

      const elements = document.querySelectorAll(".warp-element")
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const dx = e.clientX - centerX
        const dy = e.clientY - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Black hole effect with stronger pull and rotation
        if (distance < 300) {
          const strength = Math.pow((300 - distance) / 300, 2) // Quadratic falloff for stronger pull

          // Pull toward cursor (negative direction)
          const pullX = -(dx / distance) * strength * 40
          const pullY = -(dy / distance) * strength * 40

          // Calculate angle for rotation around cursor
          const angle = Math.atan2(dy, dx)
          const rotationStrength = strength * 15 // Degrees of twist

          // Perpendicular vector for tangential twist
          const twistX = -Math.sin(angle) * strength * 15
          const twistY = Math.cos(angle) * strength * 15

          // Combine pull + twist + rotation
          const totalX = pullX + twistX
          const totalY = pullY + twistY

          // Scale down as it gets pulled in (singularity effect)
          const scale = 1 - strength * 0.3
          ;(el as HTMLElement).style.transform =
            `translate(${totalX}px, ${totalY}px) scale(${scale}) rotate(${rotationStrength}deg)`
          ;(el as HTMLElement).style.filter = `blur(${strength * 2}px) brightness(${1 - strength * 0.3})`
        } else {
          ;(el as HTMLElement).style.transform = ""
          ;(el as HTMLElement).style.filter = ""
        }
      })

      clearTimeout(timeout)
      timeout = setTimeout(() => setIsMoving(false), 100)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {/* Custom cursor - black hole singularity */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative">
          <div className="w-3 h-3 bg-black border-2 border-white rounded-full animate-pulse" />

          {/* Accretion disk effect */}
          <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-16 h-16 border border-white/30 rounded-full animate-spin"
              style={{ animationDuration: "1s" }}
            />
          </div>
          <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-24 h-24 border border-cyan-400/20 rounded-full animate-spin"
              style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
            />
          </div>

          {/* Orbiting matter being pulled in */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: "0.8s" }}>
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-10 blur-sm" />
          </div>
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "1.2s", animationDirection: "reverse" }}
          >
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-magenta-400 rounded-full -translate-x-1/2 -translate-y-14 blur-sm" />
          </div>

          {/* Gravitational wave ripples on movement */}
          {isMoving && (
            <>
              <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border-2 border-primary/40 rounded-full animate-[ripple_0.8s_ease-out]" />
              </div>
              <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="w-40 h-40 border border-accent/30 rounded-full animate-[ripple_1s_ease-out]"
                  style={{ animationDelay: "0.1s" }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div
        ref={trailRef}
        className="fixed pointer-events-none z-40"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div className="w-12 h-12 bg-gradient-radial from-primary/30 via-accent/20 to-transparent rounded-full blur-2xl animate-pulse" />
      </div>
    </>
  )
}
