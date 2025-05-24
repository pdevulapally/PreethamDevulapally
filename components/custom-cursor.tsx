"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverOn = () => setLinkHovered(true)
    const handleLinkHoverOff = () => setLinkHovered(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", () => setHidden(true))
    window.addEventListener("mouseenter", () => setHidden(false))

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverOn)
      link.addEventListener("mouseleave", handleLinkHoverOff)
    })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", () => setHidden(true))
      window.removeEventListener("mouseenter", () => setHidden(false))

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverOn)
        link.removeEventListener("mouseleave", handleLinkHoverOff)
      })
    }
  }, [])

  // Don't show custom cursor on mobile/touch devices
  if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) {
    return null
  }

  if (hidden) return null

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
          clicked ? "w-6 h-6" : "w-5 h-5"
        } bg-white transition-all duration-200 ease-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-white mix-blend-difference ${
          linkHovered ? "w-12 h-12" : "w-8 h-8"
        } transition-all duration-300 ease-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  )
}
