"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Bishes Tech Logo"
            width={45}
            height={45}
            className="object-contain rounded-lg"
          />
          <span className="text-white font-bold text-lg tracking-tight">
            Bishesh<span className="text-orange-500">Tech</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
          <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Services</Link>
          <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">Portfolio</Link>
          <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white flex flex-col gap-1.5"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="text-gray-400 hover:text-white text-sm">Home</Link>
          <Link href="/services" className="text-gray-400 hover:text-white text-sm">Services</Link>
          <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm">Portfolio</Link>
          <Link href="/about" className="text-gray-400 hover:text-white text-sm">About</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link>
          <Link href="/contact" className="bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}