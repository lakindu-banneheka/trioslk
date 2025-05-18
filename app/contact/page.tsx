"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, CheckCircle2, Loader2 } from "lucide-react"
import { motion } from "@/components/motion"
import Link from "next/link"
import AnimatedFAQ from "@/components/animated-faq"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const faqs = [
    {
      question: "How quickly can you respond to inquiries?",
      answer:
        "We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, we recommend calling our office directly.",
    },
    {
      question: "Do you offer services outside of Colombo?",
      answer:
        "Yes, we offer our services throughout Sri Lanka. For events and projects outside of Colombo, additional travel fees may apply depending on the location.",
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "You can request a quote by filling out our contact form, sending us an email, or calling our office. Please provide as much detail as possible about your project to help us provide an accurate estimate.",
    },
    {
      question: "Can I visit your office to discuss my project in person?",
      answer:
        "We welcome in-person consultations at our office. We recommend scheduling an appointment in advance to ensure that our team is available to meet with you.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including bank transfers, credit/debit cards, and cash payments. For large projects, we typically require a deposit upfront with the balance due upon completion.",
    },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/contact-hero.png" alt="Contact Us" fill className="object-cover" priority />
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200"
            >
              Get in touch with our team to discuss your project or inquire about our services. We're here to help bring
              your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 md:p-8 dark:bg-gray-800">
                <CardContent className="p-0">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Send Us a Message</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  {isSubmitted ? (
                    <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-700 dark:text-green-300">
                        Thank you for contacting us. We'll respond to your inquiry as soon as possible.
                      </p>
                      <Button
                        className="mt-6 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="dark:text-gray-200">
                            Your Name <span className="text-red-600 dark:text-red-400">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="dark:text-gray-200">
                            Email Address <span className="text-red-600 dark:text-red-400">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="dark:text-gray-200">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+94 71 234 5678"
                            className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="dark:text-gray-200">
                            Subject <span className="text-red-600 dark:text-red-400">*</span>
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            placeholder="Event Inquiry"
                            required
                            className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="dark:text-gray-200">
                          Message <span className="text-red-600 dark:text-red-400">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or inquiry..."
                          rows={6}
                          required
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                      {error && (
                        <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-md text-sm">
                          {error}
                        </div>
                      )}
                      <Button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Have questions or want to discuss your project? Contact us using the information below or send us a
                  message using the form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30">
                      <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      216/B Gananamoli Mawatha
                      <br />
                      Makola North, Makola
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30">
                      <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        href="tel:+94742699814"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        +94 74 269 9814
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30">
                      <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        href="mailto:triosk3@gmail.com"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        triosk3@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monday - Friday:</span>
                    <span className="font-medium dark:text-white">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Saturday:</span>
                    <span className="font-medium dark:text-white">9:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Sunday:</span>
                    <span className="font-medium dark:text-white">Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Find Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Visit our office to discuss your project in person
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798466127767!2d79.9223!3d7.0194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDEnMTAuMCJOIDc5wrA1NycyMC4zIkU!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Trios.LK Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 dark:bg-gray-800">
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
              Find answers to common questions about our services
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss your requirements and discover how Trios.LK can help bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="tel:+94742699814">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-red-600 group"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span>Call Us</span>
              </Button>
            </Link>
            <Link href="mailto:triosk3@gmail.com">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 group">
                <Mail className="mr-2 h-4 w-4" />
                <span>Email Us</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
