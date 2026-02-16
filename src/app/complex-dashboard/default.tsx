// This file acts as the fallback UI for the "@users" parallel route.
//
// In Next.js parallel routes, each named slot (e.g. @users)
// can define its own "default.tsx".
//
// This component renders when:
//
// 1. The current URL does NOT match a specific route inside @users.
// 2. The slot is expected by the layout but no active segment exists.
// 3. The app needs a safe fallback to prevent 404 for this slot.
//
// Without default.tsx:
// - This parallel route could throw a 404
// - Or render nothing unexpectedly
//
// Think of this file as:
// "The safe fallback UI for this slot."


export default function ComplexDashboardPage() {
  return <h1>Complex dashboard - default</h1>;
}