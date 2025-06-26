"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { eklavyaLogo } from "@/assets";

const links = [
  { name: "Home", href: "/" },
  { name: "Parents", href: "/parent" },
  { name: "Teachers", href: "/teacher" },
  { name: "About us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
            <Image
              src={eklavyaLogo}
              alt="Eklavya Logo"
              width={32}
              height={32}
              className="brightness-0 invert"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              className={`${
                pathname === link.href
                  ? "text-[#5FBE7A] font-semibold"
                  : "text-gray-700 hover:text-green-600"
              } transition-all duration-200 ease-in`}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-green-600 font-medium">
            Sign in
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Create free account
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
