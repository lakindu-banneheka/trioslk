"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Calendar, Clock, Heart, Instagram, Facebook, MessageCircle, Gift, Ticket, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "@/components/motion"
import Image from "next/image"
import { triosweddings } from "@/data/links"

export default function WeddingAnnouncementPopup() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has seen the popup before
        const hasSeenPopup = localStorage.getItem("trios-wedding-popup-seen")

        // if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 0)

            return () => clearTimeout(timer)
        // }
    }, [])


    const handleClose = () => {
        setIsVisible(false)
        // Mark popup as seen so it doesn't show again
        localStorage.setItem("trios-wedding-popup-seen", "true")
    }

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
        handleClose()
        }
    }

    if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg"
        >
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              {/* Header with close button */}
              <div className="relative bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-6 text-center">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/50 transition-colors"
                  aria-label="Close popup"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>

                {/* Logo */}
                <div className="mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm">
                    {/* <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-rose-500" /> */}
                    <Image
                        src="/logo/trioslk-weddings-logo.png"
                        alt="Trioslk Weddings Logo"
                        width={32}
                        height={32}                        
                        className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <h2 id="popup-title" className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  TRIOSLK WEDDINGS
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2 sm:px-0">
                  Where Your Dream Day Begins
                </p>
              </div>

              {/* Event Announcement */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-semibold text-sm sm:text-base">Wedding Show 2025</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">July 11, 12 & 13, 2025</span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">BMICH</span>
                </div>
                {/* Special Offers */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <Gift className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm font-medium">Special Giveaways</span>
                  </div>
                  <div className="bg-white/20 rounded-full px-3 py-1 mb-2">
                    <span className="text-xs sm:text-sm font-bold">50% OFF on selected wedding packages</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Ticket className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm">Exclusive Concert Tickets for couples</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm opacity-90 px-2 sm:px-0">
                  Stay connected with us on social media for more exciting updates!
                </p>
              </div>

              {/* Links */}
              <div className="p-4 sm:p-6 space-y-3">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScb6PMZSfFrYZFkAkyuyq7ELowqERZB5bnwhAkVFIQmANslaw/viewform"
                    target="_blank"
                    onClick={handleClose}
                    className="block w-full p-3 sm:p-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full text-center font-medium transition-colors text-sm sm:text-base"
                >
                  Getting Married? Register & Book Now!
                </a>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <a
                    href={triosweddings.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                  >
                    <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm font-medium">Instagram</span>
                  </a>

                  <a
                    href={triosweddings.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                  >
                    <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm font-medium">Facebook</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <a
                    href={triosweddings.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">TikTok</span>
                  </a>

                  <a
                    href={triosweddings.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                  >
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
