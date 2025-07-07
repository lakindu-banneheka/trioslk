import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CreditCard, Clock, AlertCircle, CheckCircle } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/refund-hero.png" alt="Refund Policy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Refund Policy</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Understand our refund and cancellation policies for all Trios.lk services.
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

      {/* Refund Policy Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
              <div className="flex items-center mb-2">
                <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-400">Last Updated</h2>
              </div>
              <p className="text-blue-700 dark:text-blue-300">
                This Refund Policy was last updated on January 7, 2025. We may update this policy from time to time to
                reflect changes in our services or legal requirements.
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">General Non-Refundable Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Services booked through Trios.lk are generally non-refundable, non-exchangeable, and non-transferable
                except under the specific conditions outlined in this Refunds Policy. It is the customer's
                responsibility to verify any requirements or restrictions before booking a service.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We understand that circumstances may change, and we aim to be fair and reasonable in our refund policies
                while protecting our business interests and those of our partners and vendors.
              </p>
            </div>

            {/* Circumstances for Refund Requests */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white flex items-center">
                <CheckCircle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
                Circumstances for Refund Requests
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Customers may request a refund in writing within 30 days of the scheduled service date or within 30 days
                of a service cancellation or postponement announcement under the following conditions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-400">Eligible for Refund</h3>
                  <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 text-sm">
                    <li>If we cancel the service due to our inability to deliver</li>
                    <li>If key personnel are unable to perform due to illness or emergency</li>
                    <li>If we reschedule the service to a date that doesn't work for you</li>
                    <li>If the service location is changed significantly</li>
                    <li>If we fail to deliver the agreed-upon service</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-400">Not Eligible for Refund</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300 text-sm">
                    <li>Minor changes to service timing or duration</li>
                    <li>Changes to supporting team members</li>
                    <li>Service quality issues or personal dissatisfaction</li>
                    <li>Events abandoned due to weather or force majeure</li>
                    <li>Customer-initiated cancellations without valid reason</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service-Specific Refund Policies */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Service-Specific Refund Policies</h2>

              {/* Triovents */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-6 dark:text-white bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                  Triovents - Event Planning Services
                </h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">
                      More than 60 days before event
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>Full refund available</strong> minus a 10% administrative fee
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>Refund processed within 7-10 business days</li>
                      <li>Any vendor deposits already paid may be subject to vendor policies</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-700 dark:text-yellow-400">
                      30-60 days before event
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>75% refund available</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>25% cancellation fee applies to cover planning costs</li>
                      <li>Vendor deposits may not be refundable</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-400">
                      14-30 days before event
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>50% refund available</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>50% cancellation fee due to advanced planning and vendor commitments</li>
                      <li>Some vendor costs may be non-refundable</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-400">
                      Less than 14 days before event
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>No refund available</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>Full payment is due as vendors and resources are committed</li>
                      <li>Rescheduling may be possible subject to availability</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Triography */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-6 dark:text-white bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                  Triography - Photography Services
                </h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">
                      More than 14 days before session
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>Full refund available</strong> minus booking fee
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>Booking fee (typically 20% of total) is non-refundable</li>
                      <li>Rescheduling is preferred over cancellation</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-700 dark:text-yellow-400">
                      7-14 days before session
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>50% refund available</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>50% cancellation fee applies</li>
                      <li>One-time rescheduling allowed without additional fees</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-400">
                      Less than 7 days before session
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>No refund available</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>Time slot cannot be filled on short notice</li>
                      <li>Emergency rescheduling may be considered case-by-case</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Triosigns */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-6 dark:text-white bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                  Triosigns - Signage Services
                </h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">
                      Before production begins
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>Full refund available</strong> minus design fees (if applicable)
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>Must cancel before materials are ordered or production starts</li>
                      <li>Design work completed may incur separate charges</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-700 dark:text-yellow-400">
                      After production begins
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>Partial refund available</strong> based on work completed
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>Material costs and completed work are non-refundable</li>
                      <li>Refund calculated on remaining work not yet completed</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-400">
                      Custom or completed work
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>No refund available</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>Custom signage cannot be resold to other customers</li>
                      <li>Completed installations are final</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Trios Academy */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-6 dark:text-white bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                  Trioslk Academy - Educational Programs
                </h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">
                      More than 7 days before course start
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>Full refund available</strong> minus registration fee
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>Registration fee (typically 15% of course fee) is non-refundable</li>
                      <li>Transfer to future course dates allowed</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-700 dark:text-yellow-400">
                      3-7 days before course start
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>75% refund available</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>25% cancellation fee applies</li>
                      <li>Course materials may be provided for self-study</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-400">
                      Less than 3 days or after course begins
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>No refund available</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4">
                      <li>Course materials and instructor time are committed</li>
                      <li>Make-up sessions may be available for missed classes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Processing */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white flex items-center">
                <Clock className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
                Refund Processing
              </h2>

              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <p className="text-blue-700 dark:text-blue-300 mb-4">
                  Refunds will be issued using the same payment method as the original transaction. For payments made
                  via credit or debit card, refunds will be processed to the original card. Trios.lk reserves the right
                  to retain up to 5% of the original purchase amount, in addition to any handling fees paid, to cover
                  administrative and bank processing fees.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">How to Request a Refund</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300">
                  <li>Contact Trios.lk via email at trioslk3@gmail.com</li>
                  <li>Provide your booking reference number, service details, and reason for refund request</li>
                  <li>Include your full name, email address, and telephone number for processing</li>
                  <li>We will review your request and respond within 2-3 business days</li>
                  <li>If approved, refunds will be processed within 7-14 business days</li>
                </ol>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Processing Times</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 dark:text-white">Credit Card Refunds</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">5-10 business days after processing</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 dark:text-white">Bank Transfer Refunds</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">3-7 business days after processing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exclusions and Important Notes */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Exclusions and Important Notes</h2>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-400">Please Note</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300 text-sm">
                      <li>All refund requests must be made in writing via email</li>
                      <li>Verbal cancellations are not accepted</li>
                      <li>Processing fees may apply to refunds</li>
                      <li>Third-party vendor fees may not be refundable</li>
                      <li>This policy may be superseded by specific contract terms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Travel and Accommodation:</strong> Any travel or accommodation costs incurred by clients are
                    not covered by our refund policy.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Third-Party Services:</strong> Refunds for third-party services (venues, vendors, etc.) are
                    subject to their individual policies.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Partial Services:</strong> If you have received partial services, refunds will be calculated
                    based on the remaining undelivered portion.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-800 dark:text-red-400">
                Contact Us About Refunds
              </h2>

              <p className="text-red-700 dark:text-red-300 mb-6">
                If you need to request a refund or have questions about our refund policy, please contact us:
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <b className="text-red-800 dark:text-red-400 w-20">Email:</b>
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

              <div className="mt-6 p-4 bg-red-100 dark:bg-red-800/30 rounded-lg">
                <p className="text-red-800 dark:text-red-300 text-sm">
                  <strong>For fastest processing:</strong> Please include your booking reference number, service type,
                  and preferred refund method in your initial contact.
                </p>
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
