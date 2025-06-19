"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Parents", href: "/parent" },
  { name: "Teachers", href: "/teacher" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

function Header() {
  const pathname = usePathname();
  return (
    <div>
      <nav className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            className={`${
              pathname === link.href ? "text-green-600" : ""
            } transition-all duration-200 ease-in`}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Header;
