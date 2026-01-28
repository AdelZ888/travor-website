"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface WallPiece {
  id: number
  x: number
  y: number
  width: number
  height: number
  rotation: number
  delay: number
  offsetX: number
  offsetY: number
}

const wallPieces: WallPiece[] = [
  { id: 0, x: 0, y: 0, width: 13, height: 17, rotation: -12, delay: 0.00, offsetX: 0.5, offsetY: 1.2 },
  { id: 1, x: 12.5, y: 0, width: 12, height: 16, rotation: 8, delay: 0.03, offsetX: -0.8, offsetY: 0.6 },
  { id: 2, x: 25, y: 0, width: 13, height: 17, rotation: -5, delay: 0.05, offsetX: 1.1, offsetY: 0.9 },
  { id: 3, x: 37.5, y: 0, width: 12, height: 16, rotation: 10, delay: 0.02, offsetX: -0.3, offsetY: 1.5 },
  { id: 4, x: 50, y: 0, width: 13, height: 17, rotation: -8, delay: 0.06, offsetX: 0.7, offsetY: 0.4 },
  { id: 5, x: 62.5, y: 0, width: 12, height: 16, rotation: 6, delay: 0.04, offsetX: -1.0, offsetY: 1.1 },
  { id: 6, x: 75, y: 0, width: 13, height: 17, rotation: -10, delay: 0.01, offsetX: 0.2, offsetY: 0.8 },
  { id: 7, x: 87.5, y: 0, width: 13, height: 17, rotation: 7, delay: 0.07, offsetX: -0.5, offsetY: 1.3 },
  
  { id: 8, x: 0, y: 16, width: 12, height: 18, rotation: 9, delay: 0.08, offsetX: 0.9, offsetY: 0.5 },
  { id: 9, x: 12.5, y: 16, width: 13, height: 17, rotation: -7, delay: 0.10, offsetX: -0.6, offsetY: 1.0 },
  { id: 10, x: 25, y: 16, width: 12, height: 18, rotation: 11, delay: 0.09, offsetX: 0.4, offsetY: 0.7 },
  { id: 11, x: 37.5, y: 16, width: 13, height: 17, rotation: -9, delay: 0.12, offsetX: -0.9, offsetY: 1.4 },
  { id: 12, x: 50, y: 16, width: 12, height: 18, rotation: 5, delay: 0.11, offsetX: 1.2, offsetY: 0.3 },
  { id: 13, x: 62.5, y: 16, width: 13, height: 17, rotation: -6, delay: 0.13, offsetX: -0.4, offsetY: 0.9 },
  { id: 14, x: 75, y: 16, width: 12, height: 18, rotation: 8, delay: 0.14, offsetX: 0.6, offsetY: 1.6 },
  { id: 15, x: 87.5, y: 16, width: 13, height: 17, rotation: -11, delay: 0.15, offsetX: -0.7, offsetY: 0.6 },
  
  { id: 16, x: 0, y: 33, width: 13, height: 17, rotation: -4, delay: 0.16, offsetX: 0.8, offsetY: 1.1 },
  { id: 17, x: 12.5, y: 33, width: 12, height: 18, rotation: 12, delay: 0.18, offsetX: -1.1, offsetY: 0.4 },
  { id: 18, x: 25, y: 33, width: 13, height: 17, rotation: -10, delay: 0.17, offsetX: 0.3, offsetY: 0.8 },
  { id: 19, x: 37.5, y: 33, width: 12, height: 18, rotation: 7, delay: 0.20, offsetX: -0.2, offsetY: 1.2 },
  { id: 20, x: 50, y: 33, width: 13, height: 17, rotation: -8, delay: 0.19, offsetX: 1.0, offsetY: 0.5 },
  { id: 21, x: 62.5, y: 33, width: 12, height: 18, rotation: 9, delay: 0.21, offsetX: -0.8, offsetY: 1.0 },
  { id: 22, x: 75, y: 33, width: 13, height: 17, rotation: -5, delay: 0.22, offsetX: 0.5, offsetY: 0.7 },
  { id: 23, x: 87.5, y: 33, width: 12, height: 18, rotation: 6, delay: 0.23, offsetX: -0.3, offsetY: 1.5 },
  
  { id: 24, x: 0, y: 50, width: 12, height: 17, rotation: 10, delay: 0.24, offsetX: 0.7, offsetY: 0.9 },
  { id: 25, x: 12.5, y: 50, width: 13, height: 16, rotation: -6, delay: 0.26, offsetX: -0.5, offsetY: 1.3 },
  { id: 26, x: 25, y: 50, width: 12, height: 17, rotation: 8, delay: 0.25, offsetX: 0.9, offsetY: 0.6 },
  { id: 27, x: 37.5, y: 50, width: 13, height: 16, rotation: -11, delay: 0.28, offsetX: -1.0, offsetY: 1.1 },
  { id: 28, x: 50, y: 50, width: 12, height: 17, rotation: 4, delay: 0.27, offsetX: 0.4, offsetY: 0.4 },
  { id: 29, x: 62.5, y: 50, width: 13, height: 16, rotation: -9, delay: 0.29, offsetX: -0.6, offsetY: 1.4 },
  { id: 30, x: 75, y: 50, width: 12, height: 17, rotation: 7, delay: 0.30, offsetX: 1.1, offsetY: 0.8 },
  { id: 31, x: 87.5, y: 50, width: 13, height: 16, rotation: -7, delay: 0.31, offsetX: -0.4, offsetY: 1.0 },
  
  { id: 32, x: 0, y: 66, width: 13, height: 18, rotation: -8, delay: 0.32, offsetX: 0.6, offsetY: 0.5 },
  { id: 33, x: 12.5, y: 66, width: 12, height: 17, rotation: 11, delay: 0.34, offsetX: -0.9, offsetY: 1.2 },
  { id: 34, x: 25, y: 66, width: 13, height: 18, rotation: -5, delay: 0.33, offsetX: 0.2, offsetY: 0.7 },
  { id: 35, x: 37.5, y: 66, width: 12, height: 17, rotation: 9, delay: 0.36, offsetX: -0.7, offsetY: 1.5 },
  { id: 36, x: 50, y: 66, width: 13, height: 18, rotation: -10, delay: 0.35, offsetX: 0.8, offsetY: 0.3 },
  { id: 37, x: 62.5, y: 66, width: 12, height: 17, rotation: 6, delay: 0.37, offsetX: -0.3, offsetY: 0.9 },
  { id: 38, x: 75, y: 66, width: 13, height: 18, rotation: -4, delay: 0.38, offsetX: 1.0, offsetY: 1.6 },
  { id: 39, x: 87.5, y: 66, width: 12, height: 17, rotation: 8, delay: 0.39, offsetX: -0.5, offsetY: 0.6 },
  
  { id: 40, x: 0, y: 83, width: 12, height: 18, rotation: 5, delay: 0.40, offsetX: 0.4, offsetY: 1.1 },
  { id: 41, x: 12.5, y: 83, width: 13, height: 17, rotation: -9, delay: 0.42, offsetX: -0.8, offsetY: 0.4 },
  { id: 42, x: 25, y: 83, width: 12, height: 18, rotation: 10, delay: 0.41, offsetX: 0.7, offsetY: 0.8 },
  { id: 43, x: 37.5, y: 83, width: 13, height: 17, rotation: -6, delay: 0.44, offsetX: -0.2, offsetY: 1.2 },
  { id: 44, x: 50, y: 83, width: 12, height: 18, rotation: 7, delay: 0.43, offsetX: 0.9, offsetY: 0.5 },
  { id: 45, x: 62.5, y: 83, width: 13, height: 17, rotation: -11, delay: 0.45, offsetX: -1.1, offsetY: 1.0 },
  { id: 46, x: 75, y: 83, width: 12, height: 18, rotation: 4, delay: 0.46, offsetX: 0.3, offsetY: 0.7 },
  { id: 47, x: 87.5, y: 83, width: 13, height: 17, rotation: -7, delay: 0.47, offsetX: -0.6, offsetY: 1.3 },
]

interface WallDemolitionProps {
  children: React.ReactNode
}

export function WallDemolition({ children }: WallDemolitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={containerRef} className="relative">
      {/* Content behind the wall */}
      <div className="relative z-0">
        {children}
      </div>

      {/* Wall overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {wallPieces.map((piece) => (
          <WallPieceComponent
            key={piece.id}
            piece={piece}
            scrollProgress={scrollYProgress}
          />
        ))}
        
        {/* Dust particles */}
        <DustEffect scrollProgress={scrollYProgress} />
      </div>
    </div>
  )
}

function WallPieceComponent({
  piece,
  scrollProgress,
}: {
  piece: WallPiece
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const startFall = 0.2 + piece.delay
  const endFall = 0.6 + piece.delay
  
  const y = useTransform(
    scrollProgress,
    [startFall, endFall],
    [0, 150 + piece.offsetY * 80]
  )
  
  const opacity = useTransform(
    scrollProgress,
    [startFall, startFall + 0.05, endFall - 0.1, endFall],
    [1, 1, 0.5, 0]
  )
  
  const rotate = useTransform(
    scrollProgress,
    [startFall, endFall],
    [0, piece.rotation + piece.offsetX * 30]
  )
  
  const scale = useTransform(
    scrollProgress,
    [startFall, endFall],
    [1, 0.8 + piece.offsetY * 0.2]
  )

  const clipOffset = piece.id % 8

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${piece.x}%`,
        top: `${piece.y}%`,
        width: `${piece.width}%`,
        height: `${piece.height}%`,
        y,
        opacity,
        rotate,
        scale,
      }}
    >
      <div 
        className="w-full h-full bg-gradient-to-br from-stone-200 via-stone-300 to-stone-400 border border-stone-400/50 shadow-md"
        style={{
          clipPath: `polygon(
            ${2 + clipOffset}% ${clipOffset}%, 
            ${95 + clipOffset * 0.5}% ${2 + clipOffset * 0.5}%, 
            ${97 + clipOffset * 0.3}% ${95 + clipOffset * 0.5}%, 
            ${clipOffset * 0.5}% ${97 + clipOffset * 0.3}%
          )`,
        }}
      />
    </motion.div>
  )
}

function DustEffect({
  scrollProgress,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const opacity = useTransform(
    scrollProgress,
    [0.2, 0.4, 0.7, 0.9],
    [0, 0.6, 0.4, 0]
  )

  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-t from-stone-300/40 via-stone-200/20 to-transparent"
      style={{ opacity }}
    />
  )
}
