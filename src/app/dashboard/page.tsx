import { Comments } from "@/ui/Comments";
import { Todos } from "@/ui/todos";
import { Suspense } from "react";

export default function Dashboard(){
    throw new Error('ERROR IN DASHBORD')
    return (
        <div>
            <h1>Dashboard</h1>
            {/* Render the Todos */}
            <Suspense fallback={<p>...Loading</p>}>
               <Todos/>
            </Suspense>

            {/* Render the Comments */}
            <Suspense fallback={<p>...Loading</p>}>
               <Comments/>
            </Suspense>

            {/* Render the Posts */}
        </div>
    )
}