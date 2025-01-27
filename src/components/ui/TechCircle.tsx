'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Cpu, Cloud, Wifi, Smartphone, Zap } from 'lucide-react'

interface TechCircleProps {
  className: string
  mousePosition: { x: number; y: number }
  animationType: 'rotate' | 'pulse' | 'bounce' | 'morph'
}

export function TechCircle({ className, mousePosition, animationType }: TechCircleProps) {
  const icons = [Code, Database, Globe, Cpu, Cloud, Wifi, Smartphone, Zap]
  const Icon = icons[Math.floor(Math.random() * icons.length)]

  const getAnimation = () => {
    switch (animationType) {
      case 'rotate':
        return {
          rotate: [0, 360],
          transition: {
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }
        }
      case 'pulse':
        return {
          scale: [1, 1.1, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      case 'bounce':
        return {
          y: [0, -20, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      case 'morph':
        return {
          borderRadius: ["50%", "25%", "50%"],
          rotate: [0, 45, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
    }
  }

  return (
    <motion.div
      className={`${className} bg-indigo-900 bg-opacity-30 rounded-full flex items-center justify-center`}
      animate={{
        x: mousePosition.x * 0.02,
        y: mousePosition.y * 0.02,
        ...getAnimation(),
      }}
      transition={{
                rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        },
        x: { type: "spring", stiffness: 50, damping: 30 },
        y: { type: "spring", stiffness: 50, damping: 30 },
      }}
    >
      <Icon className="w-1/2 h-1/2 text-indigo-400" />
    </motion.div>
  )
}

