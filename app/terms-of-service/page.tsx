import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Scale, AlertTriangle, Shield } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/terms-hero.png" alt="Terms of Service" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Please read these terms carefully before using our services. By using our services, you agree to be bound
              by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-red-600 dark:text-red-400 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
              <div className="flex items-center mb-2">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-400">Last Updated</h2>
              </div>
              <p className="text-blue-700 dark:text-blue-300">
                These Terms of Service were last updated on January 7, 2025. We reserve the right to modify these terms
                at any time with notice to users.
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Welcome to Trios.lk</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The following Terms govern your use of the Trios.lk website ("Site"). By accessing or using the Site,
                you agree to adhere to these Terms and comply with all applicable laws and regulations. Trios.lk and its
                parent company reserve the right to amend these Terms at any time, with changes taking effect
                immediately upon posting on the Site.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We encourage you to review this page periodically. Violation of these Terms may result in the
                termination of your access to the Site, prohibition from future use, cancellation of your service
                bookings, and/or legal action as deemed appropriate.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We strive to offer a seamless and efficient way for you to book our creative services online. By booking
                services through Trios.lk, you agree to the terms outlined below.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Definitions</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">"Trios.lk"</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Refers to the creative services company with its registered office at 216/B Gananamoli Mawatha,
                    Makola North, Makola, Sri Lanka.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">"Website"</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Refers to the online portal www.trios.lk or any other electronic websites or domains provided by
                    Trios.lk, including all webpages, subdomains, and related content, accessible via personal
                    computers, laptops, tablets, mobile phones, or any other devices.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">"Customer"</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Refers to any individual or organization using the Website to book or attempt to book any services,
                    including but not limited to event planning, photography, signage, or educational programs.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">"Services"</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Refers to all services provided by Trios.lk including Triovents (event planning), Triosigns
                    (signage), Triography (photography), and Trioslk Academy (educational programs), as well as any other
                    services offered through the Website.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Booking Policy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white flex items-center">
                <Scale className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
                Service Booking Policy
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Booking Confirmation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>All service bookings are subject to availability and written confirmation</li>
                    <li>Booking requests must be submitted through our Website or official communication channels</li>
                    <li>We reserve the right to refuse service for any reason</li>
                    <li>Service details, dates, and pricing must be confirmed in writing before commencement</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Payment terms will be specified in your service agreement</li>
                    <li>A deposit may be required to secure your booking</li>
                    <li>Final payment is typically due before or on the day of service delivery</li>
                    <li>Late payments may incur additional fees as specified in your agreement</li>
                    <li>All prices are in Sri Lankan Rupees unless otherwise specified</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Service Modifications</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Changes to bookings may incur additional fees and are subject to availability</li>
                    <li>Modification requests must be made in writing</li>
                    <li>Significant changes may require a new service agreement</li>
                    <li>Last-minute changes may not be accommodated</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service-Specific Terms */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Service-Specific Terms</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-400">
                    Triovents - Event Planning
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300 text-sm">
                    <li>Event details must be finalized at least 30 days before the event</li>
                    <li>Venue and vendor availability is subject to third-party confirmation</li>
                    <li>Weather-dependent events may require contingency planning</li>
                    <li>Client approval required for all major decisions</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-400">
                    Triography - Photography
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 text-sm">
                    <li>Photo delivery timeline will be specified in the service agreement</li>
                    <li>Weather conditions may affect outdoor photography sessions</li>
                    <li>Copyright remains with Trios.lk unless otherwise agreed</li>
                    <li>Usage rights will be clearly defined in the agreement</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-400">Triosigns - Signage</h3>
                  <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 text-sm">
                    <li>Design approval required before production begins</li>
                    <li>Material specifications will be confirmed in writing</li>
                    <li>Installation services subject to site accessibility</li>
                    <li>Custom work is non-refundable once production starts</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-400">
                    Trioslk Academy - Education
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300 text-sm">
                    <li>Course enrollment requires advance registration</li>
                    <li>Minimum enrollment numbers may be required</li>
                    <li>Course materials and schedules provided upon enrollment</li>
                    <li>Attendance requirements may apply for certification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Customer Responsibilities</h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">By using our services, you agree to:</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Provide accurate and complete information when booking services
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Communicate clearly about your requirements and expectations
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Provide necessary access and cooperation for service delivery
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Make payments according to agreed terms and schedules
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Respect intellectual property rights and not infringe on copyrights or trademarks
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Use our services only for lawful purposes and in accordance with these Terms
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
                Limitation of Liability
              </h2>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                <p className="text-yellow-800 dark:text-yellow-300">
                  <strong>Important:</strong> Trios.lk shall not be liable for any issues, losses, damages, or physical
                  injuries resulting from events or services for which the customer engaged our services, except where
                  such liability cannot be excluded by law.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Service Limitations</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    While we strive to provide high-quality services, we cannot guarantee:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>
                      That external factors (weather, third-party vendors, venues) will not affect service delivery
                    </li>
                    <li>That all creative work will meet subjective expectations</li>
                    <li>That technical equipment will never malfunction</li>
                    <li>That all planned elements will proceed exactly as envisioned</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Force Majeure</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We shall not be liable for any failure or delay in performance due to circumstances beyond our
                    reasonable control, including but not limited to acts of God, natural disasters, war, terrorism,
                    labor disputes, government actions, or pandemic-related restrictions.
                  </p>
                </div>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Indemnification</h2>

              <p className="text-gray-600 dark:text-gray-300">
                You agree to indemnify, defend, and hold harmless Trios.lk, its officers, directors, employees, and
                agents from and against any claims, liabilities, damages, losses, costs, or expenses (including
                reasonable attorney fees) arising out of or relating to:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mt-4">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Any content you provide to us</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Governing Law and Disputes</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Governing Law</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    These Terms shall be governed by and construed in accordance with the laws of Sri Lanka, without
                    regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Dispute Resolution</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We encourage resolving disputes through direct communication. If a dispute cannot be resolved
                    informally:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Both parties agree to first attempt mediation</li>
                    <li>Any legal proceedings shall be conducted in the courts of Sri Lanka</li>
                    <li>You agree to submit to the personal jurisdiction of such courts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Termination</h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We may terminate or suspend your access to our services immediately, without prior notice or liability,
                for any reason, including but not limited to:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mb-6">
                <li>Breach of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Violation of intellectual property rights</li>
                <li>Behavior that harms our business or other users</li>
              </ul>

              <p className="text-gray-600 dark:text-gray-300">
                Upon termination, your right to use our services will cease immediately. All provisions of these Terms
                that by their nature should survive termination shall survive, including ownership provisions, warranty
                disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Changes to Terms</h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mb-6">
                <li>Provide at least 30 days notice prior to any new terms taking effect</li>
                <li>Notify you via email or through a prominent notice on our website</li>
                <li>Update the "Last Updated" date at the top of these Terms</li>
              </ul>

              <p className="text-gray-600 dark:text-gray-300">
                Your continued use of our services after any changes indicates your acceptance of the new Terms. If you
                do not agree to the new Terms, please stop using our services.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Severability and Entire Agreement</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Severability</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions
                    will remain in full force and effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Entire Agreement</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    These Terms, together with our Privacy Policy and any service-specific agreements, constitute the
                    entire agreement between you and Trios.LK regarding the use of our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-800 dark:text-red-400 flex items-center">
                <Shield className="h-6 w-6 mr-3" />
                Contact Us
              </h2>

              <p className="text-red-700 dark:text-red-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <strong className="text-red-800 dark:text-red-400 w-20">Email:</strong>
                  <a href="mailto:trioslk3@gmail.com" className="text-red-600 dark:text-red-400 hover:underline">
                    trioslk3@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <strong className="text-red-800 dark:text-red-400 w-20">Phone:</strong>
                  <a href="tel:+94742699814" className="text-red-600 dark:text-red-400 hover:underline">
                    +94 74 269 9814
                  </a>
                </div>
                <div className="flex items-start">
                  <strong className="text-red-800 dark:text-red-400 w-20">Address:</strong>
                  <span className="text-red-700 dark:text-red-300">
                    216/B Gananamoli Mawatha
                    <br />
                    Makola North, Makola
                    <br />
                    Sri Lanka
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
