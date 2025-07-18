'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, ArrowRight, Instagram } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { teamMembers, whyChooseUs } from "@/data/about"
import { motion } from "@/components/motion"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative h-[50vh] min-h-[400px] w-full overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero/1.jpeg" alt="About TRIOSlk" fill className="object-cover" priority />
          
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TRIOSLK</h1>
            <p className="text-lg md:text-xl text-gray-200">
              We are a creative agency specializing in event planning, signage solutions, photography, and educational
              programs.
            </p>
           
          </div>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, Trioslk began as a small event planning company with a vision to provide comprehensive
                creative services under one roof. Over the years, we have expanded our offerings to include signage
                solutions, professional photography, and educational programs through our Trioslk Academy.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been marked by a commitment to excellence, creativity, and customer satisfaction. We
                have had the privilege of working with a diverse range of clients, from individuals planning their
                special day to large corporations hosting major events.
              </p>
              <p className="text-gray-600">
                Today, Trioslk stands as a testament to our dedication to quality and innovation. We continue to grow
                and evolve, always staying true to our core values and mission to bring our clients' visions to life.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/our-story.jpeg" alt="Our Story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Trusted Partners Who Help Bring the Vision to Life</p>
          </div>

          {/* Our Partners carousel */}
          <Carousel opts={{ loop: true, align: 'start' }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]} className="py-8">
            <CarouselContent className="!flex-nowrap">
              {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((i, idx) => (
                <CarouselItem key={idx} className="!basis-1/3 flex items-center justify-center px-4">
                  <Image
                    src={`/images/partners/${i}.jpeg`}
                    alt={`Partner ${i}`}
                    width={200}
                    height={70}
                    className="mx-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700" asChild>
              <Link href="/contact" className="flex items-center">
                Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Team */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the talented professionals behind Trioslk</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {teamMembers.map((member, index) => (
              <div className="bg-white rounded-lg overflow-hidden shadow-sm" key={index}>
                <div className="relative h-80">
                  <Image src={member.image} alt="Team Member" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">
                    {member.description}
                  </p>
                  <div className="flex space-x-3">
                    {member.socialmeadia.facebook && 
                      <a href={member.socialmeadia.facebook} className="text-gray-400 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.049c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.049H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                    }
                    { member.socialmeadia.instagram &&
                      <a href={member.socialmeadia.instagram} className="text-gray-400 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5" />
                      </a>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12"> */}
            {/* <Button className="bg-red-600 hover:bg-red-700">Join Our Team</Button> */}
          {/* </div> */}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeIn' }}
        viewport={{ once: true }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Trioslk</h2>
              <p className="text-gray-600 mb-8">
                At Trioslk, we are committed to delivering exceptional services that exceed our clients' expectations.
                Here's what sets us apart:
              </p>

              <div className="space-y-6">

                {whyChooseUs.map((item, index) => (
                  <div className="flex" key={index}>
                    <div className="mr-4 flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Client-Centered Approach</h3>
                    <p className="text-gray-600">
                      We prioritize our clients' needs and goals, working closely with them to ensure their vision is
                      brought to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/why-choose-us.jpeg" alt="Why Choose Trioslk" fill className="object-cover" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="py-16 md:py-24 bg-red-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discover how Trioslk can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white bg-white/5 hover:text-red-600">
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
      </motion.section>
    </div>
  )
}
