"use client"

import { useEffect, useRef } from "react"

export function SpaceTimeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Torus particles
    const particles: Array<{
      x: number
      y: number
      z: number
      angle: number
      speed: number
      radius: number
    }> = []

    // Create torus particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.002 + 0.001,
        radius: Math.random() * 200 + 100,
      })
    }

    let time = 0

    function animate() {
      if (!canvas || !ctx) return

      ctx.fillStyle = "rgba(18, 18, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      // Draw infinity symbols and toruses
      particles.forEach((p, i) => {
        p.angle += p.speed

        // Torus path (parametric equations)
        const R = p.radius // Major radius
        const r = R * 0.3 // Minor radius

        const torusX = (R + r * Math.cos(p.angle)) * Math.cos(p.angle * 2)
        const torusY = (R + r * Math.cos(p.angle)) * Math.sin(p.angle * 2)

        p.x = canvas.width / 2 + torusX + Math.sin(time + i * 0.1) * 50
        p.y = canvas.height / 2 + torusY + Math.cos(time + i * 0.1) * 50

        // Depth effect
        const scale = 1000 / (1000 + p.z)
        const size = 2 * scale

        // Color based on position and depth
        const hue = ((p.angle * 180) / Math.PI + time * 50) % 360
        const alpha = Math.max(0.3, scale)

        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${alpha})`
        ctx.fill()

        // Connect nearby particles for web effect
        particles.forEach((p2, j) => {
          if (j <= i) return
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `hsla(${hue}, 70%, 50%, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw infinity symbols
      for (let i = 0; i < 3; i++) {
        const centerX = canvas.width / 2 + Math.sin(time * 0.5 + i * 2) * 200
        const centerY = canvas.height / 3 + Math.cos(time * 0.3 + i * 1.5) * 150
        const scale = 30 + Math.sin(time + i) * 10

        ctx.beginPath()
        for (let t = 0; t < Math.PI * 2; t += 0.01) {
          const x = centerX + (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t))
          const y = centerY + (scale * Math.cos(t) * Math.sin(t)) / (1 + Math.sin(t) * Math.sin(t))
          if (t === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.strokeStyle = `hsla(${(time * 50 + i * 60) % 360}, 80%, 60%, 0.3)`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" style={{ mixBlendMode: "screen" }} />
}
