'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const courses = [
  {
    id: 1,
    title: 'Learn node',
    desc: 'API DEVELOPMENT WITH NODE.JS ...........',
    slug: 'nodejs',
  },
  {
    id: 2,
    title: 'Learn javascript',
    desc: 'STEP BY STEP GUIDE TO LEARN JAVASCRIPT ...........',
    slug: 'js',
  },
];
export default function Courses(){
  const router = useRouter();
    return (
        <div>
          <h1>COURSES</h1>
          <button onClick={() => router.push('/')} >Go back to Home</button>

          {courses.map(course => (
            <div key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.desc}</p>
              <Link href={`/courses/${course.slug}`}>Learn More</Link>
            </div>
          ))}
        </div>
    )
}