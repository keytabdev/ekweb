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
    <header 
      className="bg-white"
      style={{ borderBottom: '1px #EDEDED solid' }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          paddingLeft: "144px",
          paddingRight: "144px",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        {/* Logo */}
        <div className="flex items-center" style={{ marginRight: '190px' }}>
          <div 
            className="rounded-lg flex items-center justify-center bg-eklavya-dark-green"
            style={{ width: '50px', height: '50px', borderRadius: '9.23px' }}
          >
            <Image
              src={eklavyaLogo}
              alt="Eklavya Logo"
              width={39}
              height={37}
              className="brightness-0 invert"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav
          className="hidden md:flex"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              className={`${
                pathname === link.href
                  ? "text-eklavya-dark-green"
                  : "text-eklavya-text-primary hover:text-green-600"
              } transition-all duration-200 ease-in`}
              style={{
                fontFamily: "Graphie",
                fontSize: "16px",
                fontWeight: pathname === link.href ? 700 : 400,
                lineHeight: "24px",
              }}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button 
            className="text-eklavya-text-primary hover:text-green-600 font-medium"
            style={{
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            Sign in
          </button>
          <button 
            className="text-eklavya-dark-green font-medium transition-colors bg-white"
            style={{
              display: "flex",
              padding: "10px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "8px",
              outline: "1px #5FBE7A solid",
              outlineOffset: "-1px",
              fontFamily: "Graphie",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "16px",
            }}
          >
            Create free account
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
