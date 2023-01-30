'use client'
import { useRouter } from "next/navigation";
export default function Courses(){
  const router = useRouter();
    return (
        <div>
          <h1>COURSES</h1>
          <button onClick={() => router.push('/')} >Go back to Home</button>
        </div>
    )
}