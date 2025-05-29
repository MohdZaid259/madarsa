"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import mosque from '@/public/mosque.jpg'

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Admission", href: "/admission" },
  { name: "Faculty", href: "/faculty" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="container border-b mx-auto px-2 pr-4 md:px-8 pb-0 pt-2 md:py-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-end gap-4">
          <img src={mosque.src} className="md:w-12 w-8 aspect-square object-cover" alt="logo" />
          <Link href="/" className="font-amiri md:text-3xl text-xl  font-bold text-green-700">
            Gulshan-e-Rabiya
          </Link>
          </div>

          <div className="flex items-center gap-4">

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="rounded-xl hover:underline nav-link">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        <nav
          className={`md:hidden mt-4 flex flex-col space-y-2 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="nav-link block rounded-xl hover:underline" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

