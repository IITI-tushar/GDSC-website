import { ReactNode } from 'react'
import styles from '../../app/solarSystem.module.css'

interface PlanetProps {
  name: string
  children?: ReactNode
  style?: React.CSSProperties; 
}

export default function Planet({ name, children }: PlanetProps) {
  return (
    <div className={styles[name]}>
      {children}
    </div>
  )
}

