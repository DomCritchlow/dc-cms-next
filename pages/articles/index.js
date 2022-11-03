import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import aboutme from '../api/aboutme'

export default function Home() {
    const me = aboutme()

  return (
    <div className={styles.container}>
        
    </div>
  )
}
