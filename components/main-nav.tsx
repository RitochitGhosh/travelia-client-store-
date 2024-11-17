"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Poppins } from "next/font/google";

interface MainNavProps {
  data: Category[];
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-xs font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500",
            poppins.className // Correctly included here
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
