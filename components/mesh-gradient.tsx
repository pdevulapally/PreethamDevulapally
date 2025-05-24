"use client"

import { useEffect, useRef } from "react"

export default function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient points
    const gradientPoints = [
      { x: canvas.width * 0.1, y: canvas.height * 0.1, color: "#6366f1" }, // Primary color
      { x: canvas.width * 0.8, y: canvas.height * 0.3, color: "#8b5cf6" }, // Accent color
      { x: canvas.width * 0.5, y: canvas.height * 0.9, color: "#3b82f6" }, // Secondary color
      { x: canvas.width * 0.9, y: canvas.height * 0.8, color: "#6366f1" }, // Primary color
    ]

    // Animation variables
    let animationFrameId: number
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update gradient points positions slightly for subtle movement
      gradientPoints.forEach((point, index) => {
        point.x += Math.sin(Date.now() * 0.0005 + index) * 0.5
        point.y += Math.cos(Date.now() * 0.0005 + index) * 0.5
      })

      // Draw gradient
      const gradient = createMeshGradient(ctx, canvas.width, canvas.height, gradientPoints)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    // Create mesh gradient
    const createMeshGradient = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      points: { x: number; y: number; color: string }[],
    ) => {
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.8)

      // Add base color
      gradient.addColorStop(0, "#0f172a") // Background color
      gradient.addColorStop(1, "#0f172a") // Background color

      // Draw radial gradients for each point
      points.forEach((point) => {
        const pointGradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, width * 0.4)
        pointGradient.addColorStop(0, point.color + "40") // 25% opacity
        pointGradient.addColorStop(1, "transparent")

        // Draw the gradient
        ctx.globalCompositeOperation = "lighter"
        ctx.fillStyle = pointGradient
        ctx.fillRect(0, 0, width, height)
      })

      return gradient
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" aria-hidden="true" />
}
