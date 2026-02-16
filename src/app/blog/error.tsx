"use client"
// takes error as a prop
export default function ErrorBoundary({error}: {
    error: Error
}) {
  return (
    <div>{error.message}</div>
  )
}
