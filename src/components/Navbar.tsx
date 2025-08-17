"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import portfolioData from "@/utils/portfolioData";

/**
 * Navigation items. Add `icon: "/share.svg"` to links that should display the share icon.
 */
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/blog", label: "Blog" },
  { href: "/project", label: "Project" },
  // { href: "/publications", label: "Publications" },
  {
    href: portfolioData.resume,
    label: "Resume",
    external: true,
    icon: "/share.svg",
  },
  {
    href: portfolioData.social.linkedin, // update to real URL
    label: "LinkedIn",
    external: true,
    icon: "/share.svg",
  },
  {
    href: portfolioData.social.mail,
    label: "Mail",
    external: true,
    icon: "/share.svg",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `transition-colors duration-200 ${
      pathname === href ? "text-green-600 font-semibold" : "text-gray-700"
    } hover:text-green-500`;

  /**
   * Helper to render link label with optional icon.
   */
  const renderLabelWithIcon = (label: string, icon: string) => (
    <span className="inline-flex items-center">
      {label}
      {icon && (
        <Image
          src={icon}
          alt="share icon"
          width={18}
          height={18}
          className="ml-1 inline pt-0.5"
        />
      )}
    </span>
  );

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 md:px-8 h-16 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="md:text-2xl font-bold w-100 hover:text-green-600 transition-colors text-lg"
        >
          {portfolioData.name}
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Image src="/close.svg" alt="Close Menu" width={24} height={24} />
          ) : (
            <Image src="/ham.svg" alt="Open Menu" width={24} height={24} />
          )}
        </button>

        {/* Menu Items - Desktop */}
        <div className="hidden md:flex justify-between items-center space-x-6 w-full">
          <div className="space-x-8 text-lg">
            {navItems.map(({ href, label, external, icon }) => (
              <Link
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={linkClasses(href)}
              >
                {renderLabelWithIcon(label, icon!)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items - Mobile */}
      {isOpen && (
        <div
          className={`mt-8 flex flex-col space-y-3 md:hidden font-bold not-md:text-l pb-16 pt-4 ${
            isOpen
              ? "bg-white opacity-100 scale-100"
              : "opacity-0 hidden scale-95"
          } transition-all duration-200 ease-in-out`}
        >
          {navItems.map(({ href, label, icon, external }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={linkClasses(href)}
            >
              {renderLabelWithIcon(label, icon!)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
