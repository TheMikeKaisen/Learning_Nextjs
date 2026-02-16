"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkItems() {
  const pathname = usePathname();
  const items = [1, 2, 3, 4];

  return (
    <div className="flex gap-4">
      {items.map((id) => {
        const href = `/items/${id}`;
        const isActive = pathname === href;

        return (
          <Link
            key={id}
            href={href}
            className={isActive ? "text-blue-600 font-bold" : "text-gray-500"}
          >
            Item {id}
          </Link>
        );
      })}
    </div>
  );
}
