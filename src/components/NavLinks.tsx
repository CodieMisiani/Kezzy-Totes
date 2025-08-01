"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/shop" },
    { name: "New Arrivals", href: "/new" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => {
        const isActive =
          // link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          pathname.startsWith(link.href) && link.href !== "/";
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative font-medium transition-all duration-300 group
              ${
                isActive
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }
            `}
          >
            {link.name}

            {/* Smooth sliding underline */}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full bg-green-600
                origin-left scale-x-0 group-hover:scale-x-100
                transition-transform duration-300 ease-out
                ${isActive ? "scale-x-100" : ""}
              `}
            />

            {/* Subtle hover scale for 2025 feel */}
            <span
              className="absolute inset-0 group-hover:scale-105 transition-transform duration-300 ease-out"
              aria-hidden="true"
            />
          </Link>
        );
      })}
    </nav>
  );
}
