'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface TypewriterProps {
  text: string
}

export function Typewriter2({ text }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const controls = useAnimation()

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
        controls.start({ opacity: 1 })
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [text, controls])

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={controls}
      className="text-xl text-center max-w-3xl mx-auto text-black"
    >
      {displayedText}
    </motion.p>
  )
}

