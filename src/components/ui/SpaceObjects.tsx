'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const spaceObjects = [
  { name: 'satellite', emoji: '🛰️' },
  { name: 'rocket', emoji: '🚀' },
  { name: 'star', emoji: '⭐' },
  { name: 'moon', emoji: '🌙' },
  { name: 'planet', emoji: '🪐' },
]

export function SpaceObjects() {
  const [objects, setObjects] = useState<
    { x: number; y: number; rotation: number; scale: number; object: typeof spaceObjects[number] }[]
  >([])

  useEffect(() => {
    // Increase the number of space objects
    const newObjects = Array.from({ length: 25 }, () => ({
      x: Math.random() * 100, // Random starting position
      y: Math.random() * 100,
      rotation: Math.random() * 360, // Random initial rotation
      scale: Math.random() * 0.5 + 0.5, // Random initial scale
      object: spaceObjects[Math.floor(Math.random() * spaceObjects.length)], // Random object
    }))
    setObjects(newObjects)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {objects.map((obj, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          style={{
            left: `${obj.x}%`,
            top: `${obj.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50], // Random horizontal movement
            y: [0, Math.random() * 100 - 50], // Random vertical movement
            rotate: [0, obj.rotation], // Smooth rotation
            scale: [obj.scale, obj.scale * 1.2, obj.scale], // Scaling effect
          }}
          transition={{
            duration: Math.random() * 15 + 10, // Random animation duration
            repeat: Infinity, // Infinite loop
            repeatType: 'mirror', // Smooth back-and-forth animation
            ease: 'easeInOut', // Smooth animation
          }}
        >
          {obj.object.emoji}
        </motion.div>
      ))}
    </div>
  )
}
