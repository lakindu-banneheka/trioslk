import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, MapPin, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedFAQ from "@/components/animated-faq"
import { motion } from "@/components/motion"

export default function TrioventsPage() {
  // FAQ data
  const faqs = [
    {
      question: "How far in advance should I book your event planning services?",
      answer:
        "We recommend booking our services at least 3-6 months in advance for corporate events and 6-12 months for weddings and large-scale events. However, we can accommodate shorter timelines depending on availability and the complexity of your event. For peak seasons, earlier booking is advised to secure your preferred date.",
    },
    {
      question: "What is your pricing structure for event planning?",
      answer:
        "Our pricing varies based on the scope, size, and complexity of your event. We offer different packages to suit various budgets and requirements, from full-service planning to day-of coordination. We provide transparent, detailed quotes after an initial consultation where we discuss your specific needs and expectations. Contact us for a customized quote based on your event requirements.",
    },
    {
      question: "Do you handle all aspects of event planning or can I choose specific services?",
      answer:
        "We offer both comprehensive event planning services and à la carte options. You can choose full-service planning or select specific services such as venue selection, vendor management, or day-of coordination. Our flexible approach allows you to customize our services based on your needs and budget, ensuring you get exactly the support you require for your event.",
    },
    {
      question: "Can you work within my budget?",
      answer:
        "Yes, we pride ourselves on working with clients across various budget ranges. We'll help you prioritize elements of your event to maximize your budget while still creating a memorable experience. Our team is skilled at finding creative solutions and negotiating with vendors to ensure you get the best value without compromising on quality.",
    },
    {
      question: "Do you have preferred vendors or can I choose my own?",
      answer:
        "We have a network of trusted vendors we regularly work with, but we're also happy to work with vendors of your choice. Our goal is to ensure your event reflects your vision and preferences. If you have specific vendors in mind, we'll collaborate with them seamlessly. If you need recommendations, we can suggest reliable professionals from our network who match your style and budget.",
    },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/triovents-hero.jpg" alt="Triovents" fill className="object-cover" priority />
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
            {/* Corporate Events */}
            <Card className="overflow-hidden transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="relative h-48">
                <Image src="/images/corporate-events.jpg" alt="Corporate Events" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                    <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 dark:text-white">Corporate Events</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  Conferences, seminars, product launches, team building activities, and corporate celebrations
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Venue selection and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Audio-visual setup and technical support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Catering and hospitality services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Social Events */}
            <Card className="overflow-hidden transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="relative h-48">
                <Image src="/images/social-events.jpg" alt="Social Events" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                    <Calendar className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 dark:text-white">Social Events</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  Weddings, anniversaries, birthday celebrations, engagement parties, and family gatherings
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Theme development and decor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Entertainment and music coordination
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Photography and videography services
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Special Events */}
            <Card className="overflow-hidden transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="relative h-48">
                <Image src="/images/special-events.jpg" alt="Special Events" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-red-600 dark:text-red-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 dark:text-white">Special Events</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  Festivals, concerts, charity galas, award ceremonies, and cultural celebrations
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Logistics and vendor management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Marketing and promotion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Ticketing and registration systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
            {/* Event 1 */}
            <div className="group relative overflow-hidden rounded-lg">
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
            </div>

            {/* Event 2 */}
            <div className="group relative overflow-hidden rounded-lg">
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
            </div>

            {/* Event 3 */}
            <div className="group relative overflow-hidden rounded-lg">
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
            </div>
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
            {/* Testimonial 1 */}
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

            {/* Testimonial 2 */}
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

            {/* Testimonial 3 */}
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
      </section>

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
                className="text-white border-white hover:bg-white hover:text-red-600 group"
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
