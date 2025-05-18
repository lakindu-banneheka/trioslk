import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { motion } from "@/components/motion"

export default function AllEventsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/all-events-hero.png" alt="All Events" fill className="object-cover" priority />
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
              All Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200"
            >
              Explore our complete portfolio of events and celebrations we've organized
            </motion.p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/images/event-1.jpg"
                  alt="Corporate Conference"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                  Corporate
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Annual Tech Conference</h3>
                <div className="flex items-center text-gray-200 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>March 15-17, 2023</span>
                </div>
                <div className="flex items-center text-gray-200 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </motion.div>

            {/* Event 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/images/event-2.jpg"
                  alt="Luxury Wedding"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                  Wedding
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Beachfront Luxury Wedding</h3>
                <div className="flex items-center text-gray-200 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>February 12, 2023</span>
                </div>
                <div className="flex items-center text-gray-200 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Bentota, Sri Lanka</span>
                </div>
              </div>
            </motion.div>

            {/* Event 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/images/event-3.jpg"
                  alt="Music Festival"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                  Festival
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Summer Music Festival</h3>
                <div className="flex items-center text-gray-200 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 8-10, 2023</span>
                </div>
                <div className="flex items-center text-gray-200 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Negombo, Sri Lanka</span>
                </div>
              </div>
            </motion.div>

            {/* Event 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/images/event-4.png"
                  alt="Product Launch"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                  Corporate
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Product Launch Event</h3>
                <div className="flex items-center text-gray-200 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>April 22, 2023</span>
                </div>
                <div className="flex items-center text-gray-200 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </motion.div>

            {/* Event 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/images/event-5.png"
                  alt="Charity Gala"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                  Charity
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Annual Charity Gala</h3>
                <div className="flex items-center text-gray-200 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>May 5, 2023</span>
                </div>
                <div className="flex items-center text-gray-200 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </motion.div>

            {/* Event 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/images/event-6.png"
                  alt="Anniversary Celebration"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                  Social
                </span>
                <h3 className="text-xl font-bold text-white mb-2">25th Anniversary Celebration</h3>
                <div className="flex items-center text-gray-200 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June 18, 2023</span>
                </div>
                <div className="flex items-center text-gray-200 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Kandy, Sri Lanka</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 group">
                <span>Contact Us to Plan Your Event</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
