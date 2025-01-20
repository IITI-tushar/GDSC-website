'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { TechCircle } from './ui/TechCircle'
import { CodeBlock } from './ui/CodeBlock'
import { SpaceObjects } from './ui/SpaceObjects'
import { Typewriter2 } from './ui/typewriter2'
import Navbar from './ui/Navbar'
import Footer from './ui/Footer'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const aboutRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-800 overflow-hidden">
      <Navbar />
      <SpaceObjects />  
      <main className="min-h-screen relative py-10">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold text-center mb-8"
          >
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <span className="text-red-500">Google</span>{" "}
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="inline-block"
            >
              <span className="text-blue-500">Developers</span>{" "}
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="inline-block"
            >
              <span className="text-yellow-500">Student</span>{" "}
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="inline-block"
            >
              <span className="text-green-500">Club</span>
            </motion.span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-2xl md:text-4xl font-semibold text-indigo-600 text-center mb-12"
          >
            IIT Indore
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16"
          >
            Explore the universe of technology, innovation, and collaboration
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#about"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Our Galaxy
            </a>
          </motion.div>
        </div>
        
        {/* Animated tech elements */}
        <TechCircle
          className="w-24 md:w-32 h-24 md:h-32 absolute top-1/4 left-1/4"
          mousePosition={mousePosition}
          animationType="rotate"
        />
        <TechCircle
          className="w-20 md:w-24 h-20 md:h-24 absolute top-3/4 right-1/4"
          mousePosition={mousePosition}
          animationType="pulse"
        />
        <TechCircle
          className="w-32 md:w-40 h-32 md:h-40 absolute bottom-1/4 left-1/3"
          mousePosition={mousePosition}
          animationType="bounce"
        />
        <TechCircle
          className="w-24 md:w-28 h-24 md:h-28 absolute top-1/3 right-1/5"
          mousePosition={mousePosition}
          animationType="morph"
        />
        <TechCircle
          className="w-28 md:w-36 h-28 md:h-36 absolute bottom-1/5 left-1/5"
          mousePosition={mousePosition}
          animationType="rotate"
        />
        <TechCircle
          className="w-16 md:w-20 h-16 md:h-20 absolute top-1/2 right-1/3"
          mousePosition={mousePosition}
          animationType="pulse"
        />

        {/* Code Block */}
        <CodeBlock />
      </main>

      {/* About section */}
      <motion.div
        ref={aboutRef}
        style={{ opacity }}
        className="min-h-screen flex items-center justify-center relative z-10 bg-gradient-to-b from-indigo-100 to-blue-200"
        id="about"
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-indigo-800">About Us</h2>
          <Typewriter2 text="We are a community of students passionate about technology and innovation. Our mission is to bridge the gap between theory and practice, fostering a culture of continuous learning and collaboration." />
        </div>
      </motion.div>
      <Footer />

    </div>
  )
}

