"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const navItems = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Settings", href: "/settings" },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={
            "text-sm font-medium transition-colors hover:text-primary" +
            (item.href !== pathname ? " text-muted-foreground" : "")
          }
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
