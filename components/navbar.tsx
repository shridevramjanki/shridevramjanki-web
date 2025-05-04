"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-amber-100">
            <Image src="/images/logo.png" alt="Gau Seva Logo" width={40} height={40} className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-orange-600">श्री देव राम जानकी गौशाला</span>
            <span className="text-xs text-green-700">Cow Protection Trust</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 transition hover:text-orange-600">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 transition hover:text-orange-600">
            About Us
          </Link>
          <Link href="/projects" className="text-sm font-medium text-gray-700 transition hover:text-orange-600">
            Our Projects
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-gray-700 transition hover:text-orange-600">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 transition hover:text-orange-600">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
            <Phone className="h-3 w-3" />
            <span>+91 98765 43210</span>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">Donate Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Projects
            </Link>
            <Link
              href="/gallery"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="mt-2 w-full bg-orange-600 hover:bg-orange-700">Donate Now</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
