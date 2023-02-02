import { delay } from "lib/delay";

export async function Comments(){
    
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await res.json();
    await delay(5000);

    return(
       <div>Comments: {comments.length}</div>
    )
}