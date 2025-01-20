import Image from 'next/image'
import styles from '../../app/solarSystem.module.css'

export default function Sun() {
  return (
    <div className={styles.sun}>
      <Image src="/sun.png" alt="sun" width={130} height={130} />
    </div>
  )
}

