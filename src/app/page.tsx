import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Link href="/">Home</Link> | 
      <Link href="/dashboard">Dashboard</Link>
    </main>
  )
}
