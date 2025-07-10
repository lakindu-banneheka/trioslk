'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, MapPin, CheckCircle2, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedFAQ from "@/components/animated-faq"
import { motion } from "@/components/motion"
import { eventServices, faqs } from "@/data/triovents"
import { featuredEvents } from "@/data/featured-events"
import { triovents } from "@/data/links"

export default function TrioventsPage() {


  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero/9.jpeg" alt="Triovents" fill className="object-cover" priority />
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
              Triovents
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200"
            >
              Professional event planning and management services for all occasions. From corporate events to weddings,
              we bring your vision to life.
            </motion.p>
          </div>
          {/* <div className="flex space-x-4 pt-2"> */}
            {/* <Link href={triovents.facebook} className="text-gray-300 hover:text-red-500 transition-colors" target="_blank">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link> */}
            {/* <Link href={triovents.tiktok} className="text-gray-300 hover:text-red-500 transition-colors" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
              <span className="sr-only">Tiktok</span>
            </Link> */}
            {/* <Link href="https://youtube.com" className="text-gray-300 hover:text-red-500 transition-colors" target="_blank">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link> */}
            {/* <Link href={triovents.instagram} className="text-gray-300 hover:text-red-500 transition-colors" target="_blank">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link> */}
          {/* </div> */}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            >
              Our Event Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              We offer comprehensive event planning and management services tailored to your specific needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { eventServices.map((service, index) => (
              <Card className="overflow-hidden transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700" key={index}>
                <div className="relative h-48">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-ellipsis mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    { service.features.map((feature, featureIndex) => (
                      <li className="flex items-start" key={featureIndex}>
                        <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            >
              Our Event Planning Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              We follow a structured approach to ensure every event is a success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 dark:bg-red-700 text-white text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-center dark:text-white">Consultation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  We meet with you to understand your vision, requirements, and budget for the event.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-red-200 dark:bg-red-800 -z-10 transform -translate-x-8"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 dark:bg-red-700 text-white text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-center dark:text-white">Planning</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  We develop a detailed event plan, including venue selection, vendor coordination, and timeline.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-red-200 dark:bg-red-800 -z-10 transform -translate-x-8"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 dark:bg-red-700 text-white text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-center dark:text-white">Execution</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Our team manages all aspects of the event, ensuring everything runs smoothly on the day.
                </p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-red-200 dark:bg-red-800 -z-10 transform -translate-x-8"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 dark:bg-red-700 text-white text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-center dark:text-white">Follow-up</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  We gather feedback and ensure all post-event details are handled professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            >
              Featured Events
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Explore some of our recent events and success stories
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { featuredEvents.slice(0,6).map((project, index) => (
              <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="relative h-80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    {/* <p className="text-gray-200 text-sm mb-2">{project.description}</p> */}
                    <div className="flex items-center text-gray-200 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center text-gray-200 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/triovents/all-events">
              <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 group">
                <span>View All Events</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Hear from our satisfied clients about their experience with Triovents
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 mb-4">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "Triovents handled our corporate conference with professionalism and attention to detail. The team
                      was responsive, creative, and ensured everything ran smoothly. Highly recommended!"
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src="/images/testimonial-1.jpg" alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, ABC Corp</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 mb-4">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "Our wedding day was perfect thanks to Triovents. They took care of every detail, allowing us to
                      relax and enjoy our special day. The decor and coordination were flawless."
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src="/images/testimonial-2.jpg" alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">Priya & Raj Patel</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Wedding Clients</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 mb-4">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "The music festival organized by Triovents exceeded our expectations. From artist management to
                      logistics and promotion, they handled everything professionally and creatively."
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src="/images/testimonial-3.jpg" alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">Michael Chen</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Festival Organizer</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 dark:bg-gray-900">
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
              Find answers to common questions about our event planning services
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
            Ready to Plan Your Next Event?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss your event requirements and discover how Triovents can bring your vision to
            life.
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
                className="text-white border-white bg-white/5 hover:bg-white hover:text-red-600 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/triovents/quote">
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
