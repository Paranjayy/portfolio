"use client"

import { useMotionValueEvent, useScroll, motion } from "motion/react"
import { useState } from "react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest)
  })

  if (progress <= 0.01) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-foreground/80"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
