"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Smartphone, Globe, Database, Cpu } from "lucide-react"

const domains = [
  {
    name: "App Dev",
    icon: Smartphone,
    color: "from-blue-400 to-blue-600",
    description: "Create innovative mobile applications for iOS and Android platforms.",
  },
  {
    name: "Web Dev",
    icon: Globe,
    color: "from-green-400 to-green-600",
    description: "Design and develop responsive, dynamic websites and web applications.",
  },
  {
    name: "Blockchain",
    icon: Database,
    color: "from-yellow-400 to-yellow-600",
    description: "Explore decentralized technologies and build secure, transparent systems.",
  },
  {
    name: "AI/ML",
    icon: Cpu,
    color: "from-red-400 to-red-600",
    description: "Develop intelligent systems using machine learning and artificial intelligence.",
  },
]

export function Domains() {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
      >
        Our Domains
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="domain-card relative overflow-hidden rounded-lg shadow-lg bg-blue-200 group cursor-pointer"
            onMouseEnter={() => setHoveredDomain(domain.name)}
            onMouseLeave={() => setHoveredDomain(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-75 transition-opacity duration-300 group-hover:opacity-100`}
            />
            <div className="relative p-6 flex flex-col items-center h-full justify-between">
              <motion.div
                animate={{
                  scale: hoveredDomain === domain.name ? 1.2 : 1,
                  rotate: hoveredDomain === domain.name ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="text-white mb-4"
              >
                <domain.icon size={64} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">{domain.name}</h3>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredDomain === domain.name ? 1 : 0,
                  height: hoveredDomain === domain.name ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-white text-center"
              >
                {domain.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

