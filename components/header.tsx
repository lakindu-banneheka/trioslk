"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion } from "@/components/motion"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Triovents", href: "/triovents" },
    { name: "Triosigns", href: "/triosigns" },
    { name: "Triography", href: "/triography" },
    { name: "Trioslk Academy", href: "/trioslk-academy" }
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm" : "bg-white dark:bg-gray-900",
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-24 md:h-14 md:w-36">
            <Image
              src="/logo/logo-black.png"
              alt="Trios.LK Logo"
              fill
              className="object-contain"
              // sizes="(max-width: 768px) 100vw, (min-width: 769px) 200px"
              loading="eager" // Ensure the logo loads immediately for better UX
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400 relative group",
                  pathname === link.href
                    ? "text-red-600 dark:text-red-400 font-semibold"
                    : "text-gray-700 dark:text-gray-200",
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-red-600 dark:bg-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200",
                    pathname === link.href ? "scale-x-100" : "",
                  )}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-red-600 dark:text-red-400" />
              <span className="text-sm dark:text-gray-200">triosk3@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-red-600 dark:text-red-400" />
              <span className="text-sm dark:text-gray-200">+94 74 269 9814</span>
            </div>
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-gray-700 dark:text-gray-200" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-red-600 dark:text-red-400 font-semibold"
                      : "text-gray-700 dark:text-gray-200",
                  )}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-sm dark:text-gray-200">triosk3@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-sm dark:text-gray-200">+94 74 269 9814</span>
              </div>
              <Link href="/contact" onClick={closeMenu}>
                <Button className="w-full mt-2 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
