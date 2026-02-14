// This handles 404 only for the /products route segment.
// If notFound() is called inside:
//   - /products/page.tsx
//   - /products/[productId]/page.tsx
// Then THIS file is rendered instead of the global one.
// not-found.tsx file does not take any props 
// to access the pathnam, we have to use a hook called usePathname
// hooks can only be used on the client side

"use client";
import { usePathname } from "next/navigation"
export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2]
    const reviewId = pathname.split('/')[4]
  return (
    <div>
      <h1>Review id {reviewId} Not Found</h1>
      <p>The product id {productId} you requested does not exist.</p>
    </div>
  )
}