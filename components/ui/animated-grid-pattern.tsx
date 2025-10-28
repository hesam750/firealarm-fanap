"use client"

import { cn } from "@/lib/utils"

interface AnimatedGridPatternProps {
  className?: string
  strokeColor?: string
  cellSize?: number
  opacity?: number
}

// Magic UI–style animated grid background (no external deps)
// Uses SVG pattern + subtle translate animation to feel premium and alive.
export function AnimatedGridPattern({
  className,
  strokeColor = "currentColor",
  cellSize = 32,
  opacity = 0.25,
}: AnimatedGridPatternProps) {
  const patternId = "grid-pattern-" + cellSize
  return (
    <svg
      aria-hidden
      className={cn("absolute inset-0 -z-10 pointer-events-none", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width={cellSize} height={cellSize} patternUnits="userSpaceOnUse">
          <path d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`} fill="none" stroke={strokeColor} strokeWidth="0.5" strokeOpacity={opacity} />
        </pattern>
      </defs>
      {/* Move the pattern slowly to avoid distraction */}
      <rect x="0" y="0" width="100%" height="100%" fill={`url(#${patternId})`}>
        <animateTransform attributeName="transform" type="translate" from={`0 0`} to={`${cellSize} ${cellSize}`} dur="24s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}

export default AnimatedGridPattern