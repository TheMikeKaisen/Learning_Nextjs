"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

// takes error as a prop
export default function ErrorBoundary({error, reset}: {
    error: Error
    // reset prop is going to reload the page on the client side!
    reset: ()=>void
}) {
    const router = useRouter();
    const reload = () => startTransition(()=> {
        router.refresh();
        reset();
    })
  return (
    <div>
        {error.message}
        <button onClick={()=>reload()}>
            Try Again
        </button>    
    </div>
  )
}
