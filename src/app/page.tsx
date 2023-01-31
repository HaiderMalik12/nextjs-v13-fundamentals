import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

const getData = async() => {
  const results = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  return results.json();
}

export default async function Home() {
  const post = await getData();
  return (
    <main>
      <Link href="/">Home</Link> | 
      <Link href="/dashboard">Dashboard</Link> |
      <Link href ="/courses">Courses</Link>

      <p>{post.title}</p>
      <p>{post.body}</p>
    </main>
  )
}
