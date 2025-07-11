import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { trioslk } from "@/data/links"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="relative h-16 w-40">
              <Image 
                src="/logo/logo-white.png" 
                alt="trios.lk Logo" 
                fill 
                className="object-contain w-full h-full" 
              />
            </div>
            <p className="text-gray-300 text-sm">Event planner • Digital creator • Designer</p>
            <div className="flex space-x-4 pt-2">
              <Link href={trioslk.facebook} className="text-gray-300 hover:text-red-500 transition-colors" target="_blank">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href={trioslk.tiktok} className="text-gray-300 hover:text-red-500 transition-colors" target="_blank">
                {/* <Tiktok className="h-5 w-5" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                </svg>
                <span className="sr-only">Tiktok</span>
              </Link>
              {/* <Link href="https://youtube.com" className="text-gray-300 hover:text-red-500 transition-colors" target="_blank">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link> */}
              <Link href={trioslk.instagram} className="text-gray-300 hover:text-red-500 transition-colors" target="_blank">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/triovents" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Triovents
                </Link>
              </li>
              <li>
                <Link href="/triosigns" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Triosigns
                </Link>
              </li>
              <li>
                <Link href="/triography" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Triography
                </Link>
              </li>
              <li>
                <Link href="/trioslk-academy" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Trioslk Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/triovents" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Event Planning
                </Link>
              </li>
              <li>
                <Link href="/triosigns" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Signage Solutions
                </Link>
              </li>
              <li>
                <Link href="/triography" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/trioslk-academy" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Training Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  216/B Gananamoli Mawatha Makola North Makola, Makola, Sri Lanka
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+94 74 269 9814</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">trioslk3@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} trios.lk. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-red-500 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-red-500 text-sm">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="text-gray-400 hover:text-red-500 text-sm">
              Refund Policy
            </Link>
            <p className="text-gray-500 text-sm">
              Powered by 
              <Link 
                href="https://octacodz.vercel.app/" 
                className="text-red-500 hover:text-red-400 transition-colors" target="_blank">
                <span className="text-red-400">OctaCodz</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
