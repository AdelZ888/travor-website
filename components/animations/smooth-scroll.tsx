"use client"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Using native CSS smooth scroll instead of Lenis for better performance
  // The smooth scroll is handled in globals.css with scroll-behavior: smooth
  return <>{children}</>
}
