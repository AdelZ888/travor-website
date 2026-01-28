"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

interface TrailDot {
  id: number
  x: number
  y: number
}

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [cursorVariant, setCursorVariant] = useState<"default" | "text" | "view" | "drag">("default")
  const [trail, setTrail] = useState<TrailDot[]>([])
  const trailId = useRef(0)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Different spring configs for different feels
  const smoothSpring = { damping: 30, stiffness: 200, mass: 0.5 }
  const snappySpring = { damping: 25, stiffness: 400 }
  
  const cursorXSpring = useSpring(cursorX, smoothSpring)
  const cursorYSpring = useSpring(cursorY, smoothSpring)
  
  // Faster follower for the outer ring
  const ringXSpring = useSpring(cursorX, { damping: 20, stiffness: 150, mass: 0.8 })
  const ringYSpring = useSpring(cursorY, { damping: 20, stiffness: 150, mass: 0.8 })

  const addTrailDot = useCallback((x: number, y: number) => {
    const id = trailId.current++
    setTrail(prev => [...prev.slice(-12), { id, x, y }])
    setTimeout(() => {
      setTrail(prev => prev.filter(dot => dot.id !== id))
    }, 500)
  }, [])

  useEffect(() => {
    let lastTrailTime = 0
    const trailInterval = 30

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
      
      // Add trail dots with throttling
      const now = Date.now()
      if (now - lastTrailTime > trailInterval) {
        addTrailDot(e.clientX, e.clientY)
        lastTrailTime = now
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const addHoverListeners = () => {
      // Standard hover elements
      const hoverElements = document.querySelectorAll("a, button, [data-cursor-hover]")
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true)
          setCursorVariant("default")
        })
        el.addEventListener("mouseleave", () => {
          setIsHovering(false)
          setCursorText("")
          setCursorVariant("default")
        })
      })

      // Elements with custom cursor text
      const textElements = document.querySelectorAll("[data-cursor-text]")
      textElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true)
          setCursorText((el as HTMLElement).dataset.cursorText || "")
          setCursorVariant("text")
        })
        el.addEventListener("mouseleave", () => {
          setIsHovering(false)
          setCursorText("")
          setCursorVariant("default")
        })
      })

      // View elements (for images/cards)
      const viewElements = document.querySelectorAll("[data-cursor-view]")
      viewElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true)
          setCursorText("Voir")
          setCursorVariant("view")
        })
        el.addEventListener("mouseleave", () => {
          setIsHovering(false)
          setCursorText("")
          setCursorVariant("default")
        })
      })

      // Drag elements
      const dragElements = document.querySelectorAll("[data-cursor-drag]")
      dragElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true)
          setCursorText("Glisser")
          setCursorVariant("drag")
        })
        el.addEventListener("mouseleave", () => {
          setIsHovering(false)
          setCursorText("")
          setCursorVariant("default")
        })
      })
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    
    const timeout = setTimeout(addHoverListeners, 100)
    
    // Re-add listeners on route change (for Next.js)
    const observer = new MutationObserver(() => {
      setTimeout(addHoverListeners, 100)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [cursorX, cursorY, addTrailDot])

  // Hide on mobile/touch devices
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches)
  }, [])

  if (isMobile) return null

  const getCursorSize = () => {
    if (cursorVariant === "text" || cursorVariant === "view" || cursorVariant === "drag") return 100
    if (isClicking) return 8
    if (isHovering) return 60
    return 14
  }

  const getRingSize = () => {
    if (cursorVariant === "text" || cursorVariant === "view" || cursorVariant === "drag") return 120
    if (isClicking) return 30
    if (isHovering) return 90
    return 50
  }

  return (
    <>
      {/* Trail effect */}
      <div className="fixed inset-0 pointer-events-none z-[9996]">
        <AnimatePresence>
          {trail.map((dot, index) => (
            <motion.div
              key={dot.id}
              className="absolute rounded-full"
              initial={{ 
                x: dot.x - 3, 
                y: dot.y - 3, 
                scale: 1, 
                opacity: 0.6 
              }}
              animate={{ 
                scale: 0, 
                opacity: 0 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                width: 6,
                height: 6,
                background: `rgba(201, 106, 50, ${0.3 + (index / trail.length) * 0.4})`,
                boxShadow: `0 0 ${8 + index}px rgba(201, 106, 50, 0.3)`,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Main cursor - blend mode for inversion effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center overflow-hidden"
          animate={{
            width: getCursorSize(),
            height: getCursorSize(),
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ 
            duration: 0.25, 
            ease: [0.23, 1, 0.32, 1],
            width: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
            height: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
          }}
        >
          {/* Cursor text */}
          <AnimatePresence mode="wait">
            {cursorText && (
              <motion.span
                key={cursorText}
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-black text-xs font-medium uppercase tracking-wider whitespace-nowrap"
              >
                {cursorText}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      
      {/* Outer ring - elegant thin border */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringXSpring,
          y: ringYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-terracotta/40"
          animate={{
            width: getRingSize(),
            height: getRingSize(),
            opacity: isVisible ? 0.6 : 0,
            scale: isHovering ? 1 : 0.95,
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.23, 1, 0.32, 1],
          }}
        />
      </motion.div>

      {/* Magnetic glow effect on hover */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9997]"
            style={{
              x: ringXSpring,
              y: ringYSpring,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
              animate={{
                width: getRingSize() + 30,
                height: getRingSize() + 30,
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              style={{
                background: `radial-gradient(circle, rgba(201, 106, 50, 0.15) 0%, transparent 70%)`,
                filter: "blur(10px)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click ripple effect */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9996]"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
          >
            <motion.div
              className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-terracotta/50"
              initial={{ width: 20, height: 20, opacity: 1 }}
              animate={{ width: 80, height: 80, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
