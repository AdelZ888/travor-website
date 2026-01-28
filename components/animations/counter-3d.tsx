"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion"

interface Counter3DProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  decimals?: number
}

export function Counter3D({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2,
  className = "",
  decimals = 0
}: Counter3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (!isInView) return
    
    const controls = animate(0, value, {
      duration: duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        setDisplayValue(Number(latest.toFixed(decimals)))
      }
    })
    
    return () => controls.stop()
  }, [isInView, value, duration, decimals])

  const digits = displayValue.toString().split("")
  
  return (
    <div ref={ref} className={`inline-flex items-baseline ${className}`}>
      {prefix && <span className="mr-1">{prefix}</span>}
      <div className="flex">
        {digits.map((digit, index) => (
          <SlotDigit 
            key={`${index}-${digits.length}`} 
            digit={digit} 
            delay={index * 0.05}
            isInView={isInView}
          />
        ))}
      </div>
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </div>
  )
}

function SlotDigit({ digit, delay, isInView }: { digit: string; delay: number; isInView: boolean }) {
  const isNumber = !isNaN(Number(digit))
  
  if (!isNumber) {
    return <span className="mx-0.5">{digit}</span>
  }
  
  return (
    <div className="relative h-[1.1em] w-[0.65em] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ rotateX: -90, opacity: 0 }}
        animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
        transition={{
          delay: delay,
          duration: 0.6,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 200,
        }}
      >
        <motion.span
          className="block text-center"
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : {}}
          transition={{
            delay: delay,
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {digit}
        </motion.span>
      </motion.div>
    </div>
  )
}

interface SlotMachineCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function SlotMachineCounter({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2.5,
  className = ""
}: SlotMachineCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const valueStr = value.toString()
  const digits = valueStr.split("")
  
  return (
    <div ref={ref} className={`inline-flex items-baseline justify-center ${className}`}>
      {prefix && (
        <motion.span 
          className="mr-1"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {prefix}
        </motion.span>
      )}
      <div className="flex tracking-tight">
        {digits.map((digit, index) => (
          <SlotMachineDigit 
            key={index} 
            targetDigit={Number(digit)} 
            delay={index * 0.12}
            duration={duration}
            isInView={isInView}
          />
        ))}
      </div>
      {suffix && (
        <motion.span 
          initial={{ opacity: 0, x: 10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: digits.length * 0.12 + 0.3, duration: 0.5 }}
        >
          {suffix}
        </motion.span>
      )}
    </div>
  )
}

function SlotMachineDigit({ 
  targetDigit, 
  delay, 
  duration,
  isInView 
}: { 
  targetDigit: number
  delay: number
  duration: number
  isInView: boolean
}) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const totalSpins = 2
  const itemHeight = 1.15
  
  const finalPosition = -(totalSpins * 10 + targetDigit) * itemHeight
  
  return (
    <div className="relative h-[1.15em] w-[0.6em] overflow-hidden">
      <motion.div
        className="absolute w-full"
        initial={{ y: 0 }}
        animate={isInView ? { y: `${finalPosition}em` } : { y: 0 }}
        transition={{
          delay: delay,
          duration: duration,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {[...Array(totalSpins + 1)].map((_, spinIndex) => (
          <div key={spinIndex}>
            {numbers.map((num) => (
              <div 
                key={`${spinIndex}-${num}`}
                className="h-[1.15em] flex items-center justify-center"
              >
                <span className="block tabular-nums">{num}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

interface FlipCounterProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}

export function FlipCounter({ 
  value, 
  suffix = "", 
  prefix = "",
  className = ""
}: FlipCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentValue, setCurrentValue] = useState(0)
  
  useEffect(() => {
    if (!isInView) return
    
    const targetValue = value
    const stepDuration = 1500 / targetValue // Total animation ~1.5s
    let current = 0
    
    const interval = setInterval(() => {
      current += 1
      if (current >= targetValue) {
        setCurrentValue(targetValue)
        clearInterval(interval)
      } else {
        setCurrentValue(current)
      }
    }, stepDuration)
    
    return () => clearInterval(interval)
  }, [isInView, value])
  
  const digits = currentValue.toString().padStart(value.toString().length, "0").split("")
  
  return (
    <div ref={ref} className={`inline-flex items-baseline ${className}`}>
      {prefix && <span className="mr-1">{prefix}</span>}
      <div className="flex gap-0.5">
        {digits.map((digit, index) => (
          <FlipDigit 
            key={index} 
            digit={digit}
          />
        ))}
      </div>
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  )
}

function FlipDigit({ digit }: { digit: string }) {
  const [prevDigit, setPrevDigit] = useState(digit)
  const [isFlipping, setIsFlipping] = useState(false)
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsFlipping(true)
      const timeout = setTimeout(() => {
        setPrevDigit(digit)
        setIsFlipping(false)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [digit, prevDigit])
  
  return (
    <div 
      className="relative h-[1.4em] w-[0.9em] rounded-sm overflow-hidden"
      style={{
        perspective: "200px",
        background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)",
      }}
    >
      {/* Top half - static */}
      <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
        <div className="h-[1.4em] flex items-center justify-center">
          {isFlipping ? prevDigit : digit}
        </div>
      </div>
      
      {/* Bottom half - static */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
        <div className="h-[1.4em] flex items-center justify-center -translate-y-1/2">
          {digit}
        </div>
      </div>
      
      {/* Flip card animation */}
      {isFlipping && (
        <>
          {/* Top flipping part */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden origin-bottom"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -90 }}
            transition={{ duration: 0.15, ease: "easeIn" }}
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="h-[1.4em] flex items-center justify-center bg-background">
              {prevDigit}
            </div>
          </motion.div>
          
          {/* Bottom flipping part */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden origin-top"
            initial={{ rotateX: 90 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 0.15, ease: "easeOut", delay: 0.15 }}
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="h-[1.4em] flex items-center justify-center bg-background -translate-y-1/2">
              {digit}
            </div>
          </motion.div>
        </>
      )}
      
      {/* Center line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-foreground/10 -translate-y-1/2" />
    </div>
  )
}

interface GlowingCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  decimals?: number
}

export function GlowingCounter({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2,
  className = "",
  decimals = 0
}: GlowingCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    if (!isInView) return
    
    setIsAnimating(true)
    const controls = animate(0, value, {
      duration: duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        setDisplayValue(Number(latest.toFixed(decimals)))
      },
      onComplete: () => {
        setTimeout(() => setIsAnimating(false), 500)
      }
    })
    
    return () => controls.stop()
  }, [isInView, value, duration, decimals])

  return (
    <motion.div 
      ref={ref} 
      className={`inline-flex items-baseline relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-lg"
        animate={{
          boxShadow: isAnimating 
            ? [
                "0 0 20px rgba(201, 106, 50, 0)",
                "0 0 40px rgba(201, 106, 50, 0.4)",
                "0 0 20px rgba(201, 106, 50, 0.2)",
              ]
            : "0 0 20px rgba(201, 106, 50, 0)",
        }}
        transition={{
          duration: 0.5,
          repeat: isAnimating ? Infinity : 0,
          repeatType: "reverse",
        }}
        style={{
          transform: "scale(1.2)",
          filter: "blur(8px)",
        }}
      />
      
      {prefix && <span className="mr-1">{prefix}</span>}
      <motion.span
        animate={{
          color: isAnimating ? ["inherit", "#C96A32", "inherit"] : "inherit",
        }}
        transition={{
          duration: 0.3,
          repeat: isAnimating ? Infinity : 0,
        }}
      >
        {displayValue}
      </motion.span>
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </motion.div>
  )
}
