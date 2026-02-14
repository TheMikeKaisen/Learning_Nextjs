import { notFound } from 'next/navigation'
import React from 'react'

export default async function ReviewPage(
    {params} : {
        params: Promise<{productId: string, reviewId: string}>
    }
    
) {

    const {productId, reviewId} = await params

    if(parseInt(reviewId)>1000){
        notFound();
    }
  return (
    <div>
    <div>ReviewId: {reviewId}</div>
    <div>ProductId: {productId}</div>
    </div>
  )
}
