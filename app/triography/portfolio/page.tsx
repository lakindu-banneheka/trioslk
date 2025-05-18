"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "@/components/motion"
import ImageLightbox from "@/components/image-lightbox"

// Define the categories for filtering
const categories = ["All", "Wedding", "Corporate", "Events", "Portrait", "Product"]

// Define the gallery items with their categories
const galleryItems = [
  {
    id: 1,
    src: "/images/gallery-1.png",
    alt: "Wedding Photography",
    title: "Beachfront Wedding",
    category: "Wedding",
    description:
      "Elegant beachfront wedding ceremony captured during sunset, showcasing the couple's special moment with the ocean as a backdrop.",
  },
  {
    id: 2,
    src: "/images/gallery-2.png",
    alt: "Corporate Event",
    title: "Annual Conference",
    category: "Corporate",
    description:
      "Professional coverage of a major corporate conference, highlighting key speakers and networking moments.",
  },
  {
    id: 3,
    src: "/images/gallery-3.png",
    alt: "Product Photography",
    title: "Product Launch",
    category: "Product",
    description:
      "High-quality product photography for a new tech gadget launch, emphasizing design details and features.",
  },
  {
    id: 4,
    src: "/images/gallery-4.png",
    alt: "Family Portrait",
    title: "Family Portrait",
    category: "Portrait",
    description: "Warm family portrait session capturing genuine connections and personalities in a natural setting.",
  },
  {
    id: 5,
    src: "/images/gallery-5.png",
    alt: "Music Festival",
    title: "Summer Music Festival",
    category: "Events",
    description:
      "Dynamic coverage of a summer music festival, capturing the energy of performances and audience engagement.",
  },
  {
    id: 6,
    src: "/images/gallery-6.png",
    alt: "Engagement Session",
    title: "Engagement Session",
    category: "Wedding",
    description:
      "Romantic engagement photoshoot in a scenic location, telling the couple's story through candid moments.",
  },
  {
    id: 7,
    src: "/images/gallery-7.png",
    alt: "Corporate Headshot",
    title: "Professional Headshot",
    category: "Corporate",
    description:
      "Professional headshot photography for corporate profiles, creating a polished and approachable image.",
  },
  {
    id: 8,
    src: "/images/gallery-8.png",
    alt: "Food Photography",
    title: "Culinary Showcase",
    category: "Product",
    description: "Appetizing food photography for a restaurant menu, highlighting texture, color, and presentation.",
  },
  {
    id: 9,
    src: "/images/gallery-9.png",
    alt: "Fashion Photography",
    title: "Fashion Collection",
    category: "Portrait",
    description: "Creative fashion photography showcasing a designer's latest collection with artistic composition.",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Filter gallery items based on active category
  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/portfolio-hero.png" alt="Photography Portfolio" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Photography Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200"
            >
              Explore our complete collection of photography work across various styles and occasions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-red-600 text-white dark:bg-red-500"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 group">
                <span>Contact Us for Your Photography Needs</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <ImageLightbox images={galleryItems} initialImageId={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  )
}
