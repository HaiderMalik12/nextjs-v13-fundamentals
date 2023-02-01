import { courses } from "@/data/courses";
import Link from "next/link";


export default function Courses(){
    return (
        <div>
          <h1>COURSES</h1>
           <Link href="/">Go Back to Home</Link>
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

/**
 * You have to create array of courses slug. It will tell the next.js that you
 * you can have these number of pages
 * Next.js will generate all the pages a head of time.
 * @returns returns the array of paths/slugs
 */
export async function generateStaticParams() {
  // need to fetch data from external
  // It should be server component
  return courses.map((course) => course.slug);
}