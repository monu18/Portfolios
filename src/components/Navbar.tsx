"use client";

import Link from "next/link";
import { useState } from "react";
import portfolioData from "@/utils/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 md:px-8 h-16 flex flex-col justify-center">
      <div className="flex justify-start items-center space-x-32">
        <Link href="/" className="text-2xl font-bold w-100">{portfolioData.name}</Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden block"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu Items - Desktop */}
        <div className="hidden md:flex justify-between items-center space-x-6 w-full">
         <div className="space-x-8 text-lg">
           <Link href="/">Home</Link>
           <Link href="/about">About</Link>
           <Link href="/blog">Blog</Link>
           <Link href="/project">Project</Link>
           <Link href="https://drive.google.com/file/d/1ZazheHVzqjJjKWzmF0SVrWEiiR_rO1OY/view">Resume</Link>
          <Link href="/about">GitHub</Link>
           <Link href="/blog">LinkedIn</Link>
           <Link href="/project">Mail</Link>
         </div>

         {/* <div className="space-x-8">
          
         </div> */}
        </div>


        
      </div>

      {/* Menu Items - Mobile */}
      {isOpen && (
        <div className="mt-2 flex flex-col space-y-2 md:hidden">
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}