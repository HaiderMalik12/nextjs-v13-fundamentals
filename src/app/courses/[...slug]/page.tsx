import { courses } from "@/data/courses";

const getData = (slug: string) => {
 return courses.find(course => course.slug === slug);
}

export default function Topic({params} : { params : {slug : string[]}}){

    // find the course on the based on slug
    console.log(params.slug[0]);
    const course = getData(params.slug[0]);
    
    // access the slug
 return (
    <div>
        <h1>{course?.title}</h1>
        <p>{course?.desc}</p>
    </div>
 )
}