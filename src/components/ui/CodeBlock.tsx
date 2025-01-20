'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function CodeBlock() {
  const [text, setText] = useState('')
  const codeSnippet = `
function GDSC() {
  const skills = ['Coding', 'Innovation', 
  'Collaboration'];
  return skills.map(skill => Learn(skill));
}

GDSC();
`.trim()

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      setText(codeSnippet.slice(0, i + 1)) // Slice ensures no skipped or extra characters
      i++
      if (i >= codeSnippet.length) {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [codeSnippet])

  return (
    <motion.div
      className="absolute right-4 md:right-10 top-1/4 bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs md:max-w-sm"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <pre className="text-indigo-600 font-mono text-xs md:text-sm overflow-x-auto">
        <code>{text}</code>
      </pre>
    </motion.div>
  )
}
