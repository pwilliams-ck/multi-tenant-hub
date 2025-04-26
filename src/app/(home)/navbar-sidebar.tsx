import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
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
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-left p-4 hover:bg-black hover:text-white dark:hover:bg-secondary flex items-center text-base font-medium"
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Button
              onClick={toggleTheme}
              variant="outline"
              className="bg-background border-transparent dark:bg-background hover:bg-black hover:text-white dark:hover:bg-secondary text-base font-medium"
            >
              Theme
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
