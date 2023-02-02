import { delay } from "lib/delay";

export async function Todos(){
    
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    await delay(5000);

    return(
       <div>Todos: {todos.length}</div>
    )
}