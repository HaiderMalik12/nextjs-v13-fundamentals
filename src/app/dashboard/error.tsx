'use client';

import { useEffect } from "react";

export default function Error({
    error,
    reset
} :{
    error: Error,
    reset: () => void
}){

    // How this component will be triggered
    useEffect(() =>{
        console.log('inside useEffect');
        console.error(error);
    },[error])
    return(
        <div>
          <div>Something went wrong</div>
          <button onClick={() => reset()}>Try Again</button>
        </div>
    )
}