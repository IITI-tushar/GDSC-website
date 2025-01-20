"use client"
import { useEffect } from 'react'
import styles from '../app/solarSystem.module.css'
import Sun from './ui/Sun'
import Planet from './ui/planets'
import { SparklesCore } from './ui/sparkles'

export default function SolarSystem() {
  useEffect(() => {
    createStars()
  }, [])

  const createStars = () => {
    const container = document.querySelector("body")
    if (container) {
      for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div")
        star.className = styles.star
        star.style.width = ".1px"
        star.style.height = ".1px"
        star.style.top = `${Math.random() * 100}%`
        star.style.left = `${Math.random() * 100}%`
        container.appendChild(star)
      }
    }
  }

  return (
    <div className={styles.container}>

      <Sun />
      <Planet name="mercury" />
      <Planet name="venus" />
      <Planet name="earth">
        <Planet name="moon" />
      </Planet>
      <Planet name="mars" />
      <Planet name="jupiter" />
      <Planet name="saturn" />
      <Planet name="uranus" />
      <Planet name="neptune" />
      <Planet name="pluto" />
    </div>
  )
}

