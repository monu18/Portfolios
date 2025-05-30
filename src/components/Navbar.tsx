"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import portfolioData from "@/utils/portfolioData";

/**
 * Navigation items. Add `icon: "/share.png"` to links that should display the share icon.
 */
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/project", label: "Project" },
  {
    href: portfolioData.resume,
    label: "Resume",
    external: true,
    icon: "/share.png",
  },
  {
    href: portfolioData.social.github, // update to real URL
    label: "GitHub",
    external: true,
    icon: "/share.png",
  },
  {
    href: portfolioData.social.linkedin, // update to real URL
    label: "LinkedIn",
    external: true,
    icon: "/share.png",
  },
  {
    href: portfolioData.social.mail,
    label: "Mail",
    external: true,
    icon: "/share.png",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClasses = (href:string) =>
    `transition-colors duration-200 ${
      pathname === href ? "text-green-600 font-semibold" : "text-gray-700"
    } hover:text-green-500`;

  /**
   * Helper to render link label with optional icon.
   */
  const renderLabelWithIcon = (label:string, icon:string) => (
    <span className="inline-flex items-center">
      {label}
      {icon && (
        <Image
          src={icon}
          alt="share icon"
          width={18}
          height={18}
          className="ml-1 inline"
        />
      )}
    </span>
  );

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 md:px-8 h-16 flex flex-col justify-center">
      <div className="flex justify-start items-center space-x-32">
        <Link
          href="/"
          className="text-2xl font-bold w-100 hover:text-green-600 transition-colors"
        >
          {portfolioData.name}
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
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
        <div className="mt-2 flex flex-col space-y-2 md:hidden">
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
