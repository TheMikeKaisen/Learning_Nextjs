// This layout demonstrates Parallel Routes in Next.js App Router.
//
// Each prop (users, revenue, notifications) represents a named slot.
// These slots are defined using folders like:
//
// app/dashboard/
//   ├── layout.tsx
//   ├── @users/page.tsx
//   ├── @revenue/page.tsx
//   ├── @notifications/page.tsx
//   └── page.tsx
//
// The "@" prefix tells Next.js this is a parallel route segment.
// These segments render IN PARALLEL inside this layout.
//
// Unlike nested routes, these are not children of each other.
// They are independent route trees mounted into this layout.

export default function ComplexDashboardLayout({
  // "children" represents the default route segment (page.tsx)
  // This is the main content of the route.
  children,

  // These are parallel route slots.
  // Each one corresponds to a folder prefixed with "@"
  // and renders independently.
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return(
    <div>
      {/* Default route content */}
      <div>{children}</div>

      {/* Parallel section container */}
      <div style={{ display: "flex" }}>

        {/* Left column: users + revenue */}
        {/* These two are separate route trees.
            They can:
            - Fetch data independently
            - Stream independently
            - Suspend independently
            - Error independently
        */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>

        {/* Right column: notifications */}
        {/* This is another independent route segment.
            It does NOT depend on users or revenue.
            If it suspends or errors, the others remain unaffected.
        */}
        <div style={{ display: "flex", flex: 1 }}>
          {notifications}
        </div>
      </div>
    </div>
  )
}
