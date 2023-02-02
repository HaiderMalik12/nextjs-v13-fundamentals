import { courses } from "@/data/courses";

const getData = (slug: string) => {
   
 // add some delay for 5 seconds
 // it should return a promise
 // you can use setTimeout
 return new Promise((resolve, reject) => {
    // add delay here
    // assuming that record is fetching from DB
    setTimeout(() => {
        const data = courses.find(course => course.slug === slug);
        return resolve(data);
    }, 5000);
 })
}

export default async function Topic({params} : { params : {slug : string[]}}){

    // find the course on the based on slug
    console.log(params.slug[0]);
    const course = await getData(params.slug[0]);
    
    // access the slug
 return (
    <div>
        <h1>{course?.title}</h1>
        <p>{course?.desc}</p>
    </div>
 )
}