"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "@/components/motion"
import Link from "next/link"
import { Camera, Users, Award, ChevronRight, Images } from "lucide-react"
import AnimatedFAQ from "@/components/animated-faq"
import ImageLightbox from "@/components/image-lightbox"
import { faqs, galleryItems } from "@/data/triography"

export default function TriographyPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index) // Reset to first image
    setLightboxOpen(true)
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/triography.jpg" alt="Triography" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Triography
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Capturing moments, creating memories that last a lifetime
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/triography/portfolio">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600">
                  View Portfolio
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black border-white hover:bg-white hover:text-red-600"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            >
              Our Photography Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              We offer a wide range of professional photography services to capture your special moments and tell your
              unique story
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="/images/triography/22_Unlocked_and_Unapologetic.png"
                  alt="Event Photography"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">Event Photography</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Capture the essence and emotions of your special events, from corporate gatherings to personal
                  celebrations.
                </p>
                <Link
                  href="/triography/portfolio"
                  className="text-red-600 dark:text-red-400 font-medium flex items-center"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="/images/project-2.jpg"
                  alt="Portrait Photography"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">Portrait Photography</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Professional portraits that highlight your personality and create lasting impressions for personal or
                  business use.
                </p>
                <Link
                  href="/triography/portfolio"
                  className="text-red-600 dark:text-red-400 font-medium flex items-center"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="/images/project-3.jpg"
                  alt="Commercial Photography"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">Commercial Photography</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  High-quality product and brand photography to showcase your offerings and enhance your marketing
                  materials.
                </p>
                <Link
                  href="/triography/portfolio"
                  className="text-red-600 dark:text-red-400 font-medium flex items-center"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Why Choose Triography</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                At Triography, we combine technical expertise with creative vision to deliver exceptional photography
                that tells your unique story. Our team is dedicated to capturing authentic moments and creating stunning
                visuals that exceed your expectations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <Camera className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Professional Equipment</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We use top-of-the-line cameras, lenses, and lighting equipment to ensure the highest quality
                      results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Experienced Team</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our photographers have years of experience across various photography styles and industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <Award className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Attention to Detail</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We focus on capturing the perfect shot with meticulous attention to composition, lighting, and
                      timing.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image src="/images/project-1.jpg" alt="Professional Photography" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            >
              Our Portfolio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Browse through a selection of our recent photography work
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0,6).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-72 rounded-lg overflow-hidden shadow-md cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Button className="bg-black/5 hover:bg-black/10 text-white">
                      <Images className="h-5 w-5 mr-2" />
                      View Image
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/triography/portfolio">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Find answers to common questions about our photography services
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <AnimatedFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Capture Your Special Moments?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss your photography needs and book a session with our professional team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Contact Us Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={galleryItems.slice(0,6)}
        initialIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
}
