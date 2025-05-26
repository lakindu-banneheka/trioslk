import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ImageIcon, Megaphone, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react"
import { featuredEvents } from "@/data/featured-events"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import HeroCarousel from "@/components/hero-carousel"

const heroImages = [
  "/images/hero/1.jpeg",
  "/images/hero/2.jpeg",
  "/images/hero/3.jpeg",
  "/images/hero/4.jpeg",
  "/images/hero/5.jpeg"
]


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroCarousel />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bringing Your <span className="text-red-500">Vision</span> to Life
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Event planning, signage solutions, photography, and educational programs - all under one creative roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#services">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-white/5">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of creative services designed to meet your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Triovents */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 bg-black">
                <Image src="/logo/triovents-logo.png" alt="Triovents" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Calendar className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Triovents</h3>
                <p className="text-gray-600 text-center mb-4">
                  Professional event planning and management services for all occasions
                </p>
                <Link
                  href="/triovents"
                  className="flex items-center justify-center text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Triosigns */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 bg-black">
                <Image src="/logo/triosigns-logo.png" alt="Triosigns" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Megaphone className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Triosigns</h3>
                <p className="text-gray-600 text-center mb-4">Creative signage solutions for businesses and events</p>
                <Link
                  href="/triosigns"
                  className="flex items-center justify-center text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Triography */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 bg-black">
                <Image src="/logo/triography-logo.png" alt="Triography" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-red-100 rounded-full">
                    <ImageIcon className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Triography</h3>
                <p className="text-gray-600 text-center mb-4">
                  Professional photography services capturing your special moments
                </p>
                <Link
                  href="/triography"
                  className="flex items-center justify-center text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Trios Academy */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48">
                <Image src="/images/trios-academy.jpg" alt="Trios Academy" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-red-100 rounded-full">
                    <GraduationCap className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Trios Academy</h3>
                <p className="text-gray-600 text-center mb-4">
                  Educational programs and courses to develop your creative skills
                </p>
                <Link
                  href="/trios-academy"
                  className="flex items-center justify-center text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/team/team.jpeg" alt="About Trios.LK" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About TriosLK</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2017, TriosLk has grown from a small planning team to a full-service event planning company known for excellence, 
                creativity, and attention to detail. With years of experience and a diverse portfolio of concerts, weddings, corporate events, 
                parties, and more, we know how to make each occasion uniquely yours.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Professional team with years of industry experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Comprehensive services under one creative roof</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Commitment to quality and customer satisfaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Innovative solutions tailored to your needs</span>
                </li>
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent work across our different service areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            { featuredEvents.slice(0,3).map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-lg">
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
                    {project.title}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.description}</h3>
                  <Link href={project.link} className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Event
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/triovents/all-events" >
              <Button className="bg-red-600 hover:bg-red-700">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with Trios.LK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6">
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
                    <p className="text-gray-700 italic">
                      "TriosLK handled our corporate event with professionalism and creativity. The attention to detail
                      was impressive, and our guests were thoroughly impressed."
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src="/images/testimonial-1.jpg" alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500">Marketing Director, ABC Corp</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6">
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
                    <p className="text-gray-700 italic">
                      "The signage solutions provided by Trios.LK transformed our retail space. Their team was
                      responsive, creative, and delivered on time and within budget."
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src="/images/testimonial-2.jpg" alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Michael Chen</h4>
                      <p className="text-sm text-gray-500">Owner, StyleHub Boutique</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6">
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
                    <p className="text-gray-700 italic">
                      "The photography services from Triography captured our wedding day perfectly. The team was
                      professional, unobtrusive, and delivered stunning photos that we'll cherish forever."
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src="/images/testimonial-3.jpg" alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Priya & Raj Patel</h4>
                      <p className="text-sm text-gray-500">Wedding Clients</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how TriosLK can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white bg-white/5 hover:bg-white hover:text-red-600">
                Contact Us
              </Button>
            </Link>
            <Link href="/#services">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
