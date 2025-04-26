"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      className={cn(
        "bg-transparent hover:bg-transparent",
        isActive &&
          "bg-gray-300 text-gray-800 dark:bg-secondary dark:text-gray-300 dark:hover:text-gray-300"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();

  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    // Toggle between light and dark based on the resolved theme
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

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
      <div className="ml-auto items-center">
        <Button
          variant="outline"
          className="border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-sky-300 dark:hover:bg-amber-600 transition-colors text-lg"
        >
          Login
        </Button>
        <Button
          variant="outline"
          className="border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-sky-300 dark:hover:bg-amber-600 transition-colors text-lg"
        >
          Register
        </Button>
        <Button
          onClick={toggleTheme}
          variant="outline"
          className="border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-sky-300 dark:hover:bg-amber-600 transition-colors text-lg"
        >
          Theme
        </Button>
      </div>
    </nav>
  );
};
