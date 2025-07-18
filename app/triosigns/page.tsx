'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Layers, PenTool, Megaphone, ArrowRight } from "lucide-react"
import { motion } from "@/components/motion"
import Link from "next/link"

export default function TriosignsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero/trio-signs-hero.png" alt="Triosigns" fill className="object-cover" priority />
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
              Triosigns
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200"
            >
              Professional signage solutions for businesses and events. From digital prints to large format displays, we
              create impactful visual communications.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Signage Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We offer comprehensive signage solutions tailored to your specific needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Printing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                <div className="relative h-48">
                  <Image src="/images/digital-printing.png" alt="Digital Printing" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-red-100 rounded-full">
                      <PenTool className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Digital Printing</h3>
                  <p className="text-gray-600 text-center mb-4">
                    High-quality digital printing services for various applications
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Banners and posters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Brochures and flyers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Business cards and stationery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Large Format Printing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                <div className="relative h-48">
                  <Image src="/images/large-format.png" alt="Large Format Printing" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-red-100 rounded-full">
                      <Layers className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Large Format Printing</h3>
                  <p className="text-gray-600 text-center mb-4">
                    Eye-catching large format prints for maximum visibility
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Billboards and hoardings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Vehicle wraps and graphics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Exhibition displays and backdrops</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Signage Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                <div className="relative h-48">
                  <Image src="/images/signage-solutions.png" alt="Signage Solutions" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-red-100 rounded-full">
                      <Megaphone className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Signage Solutions</h3>
                  <p className="text-gray-600 text-center mb-4">
                    Custom signage for businesses, events, and public spaces
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Indoor and outdoor signs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Directional and wayfinding signage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">LED and illuminated signs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Signage Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We follow a structured approach to ensure every signage project meets your expectations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Consultation</h3>
                <p className="text-gray-600 text-center">
                  We discuss your requirements, objectives, and budget to understand your signage needs.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-red-200 -z-10 transform -translate-x-8"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Design</h3>
                <p className="text-gray-600 text-center">
                  Our creative team develops designs that align with your brand and objectives.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-red-200 -z-10 transform -translate-x-8"></div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Production</h3>
                <p className="text-gray-600 text-center">
                  We produce your signage using high-quality materials and state-of-the-art technology.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-red-200 -z-10 transform -translate-x-8"></div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Installation</h3>
                <p className="text-gray-600 text-center">
                  Our team handles the professional installation of your signage at your location.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Featured Signage Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Explore some of our recent signage projects and success stories
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/images/signage-project-1.png"
                  alt="Retail Signage"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                  Retail
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Shopping Mall Signage</h3>
                <p className="text-gray-200 text-sm">
                  Complete signage solution for a major shopping mall, including directional signs and store fronts.
                </p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/images/signage-project-2.png"
                  alt="Corporate Signage"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                  Corporate
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Office Building Branding</h3>
                <p className="text-gray-200 text-sm">
                  Corporate signage and branding for a new office building, including reception and wayfinding.
                </p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/images/signage-project-3.png"
                  alt="Event Signage"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                  Event
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Music Festival Signage</h3>
                <p className="text-gray-200 text-sm">
                  Comprehensive signage and branding for a major music festival, including stage banners and directional
                  signs.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/triosigns/projects">
              <Button className="bg-red-600 hover:bg-red-700 group">
                <span>View All Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
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
            Ready to Create Impactful Signage?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss your signage requirements and discover how Triosigns can help your business
            stand out.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white bg-white/5 hover:text-red-600 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/triosigns/quote">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 group">
                <span>Request a Quote</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
