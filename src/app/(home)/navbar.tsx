"use client"

import Link from "next/link"
import { Poppins } from "next/font/google"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
})

interface NavbarItemProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      className={cn(
        "bg-transparent hover:bg-transparent",
        isActive && "bg-gray-300 text-gray-800 dark:hover:text-gray-300"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/build", children: "Build" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
]

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="h-20 flex border-b justify-between font-medium ">
      <Link href="/" className="pl-5 flex items-center">
        <span className={cn("text-3xl font-semibold", poppins.className)}>
          mth
        </span>
      </Link>
      <div className="items-center ml-auto gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="ml-auto items-center p-5">
        <ThemeToggle />
      </div>
    </nav>
  )
}
