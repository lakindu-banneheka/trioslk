import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/privacy-policy.png" alt="Privacy Policy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-400">Last Updated</h2>
              </div>
              <p className="text-blue-700 dark:text-blue-300">
                This Privacy Policy was last updated on January 7, 2025. We may update this policy from time to time,
                and we will notify you of any significant changes.
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Trios.lk, we are committed to protecting your privacy. We will only collect, record, hold, store,
                disclose, transfer, and use your personal information as described below. Data protection is a priority,
                and we respect your privacy. We will use your personal information only in accordance with this Privacy
                Policy.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We collect information when necessary, and only if it is relevant to your interactions with us. We will
                retain your information for as long as required by law or for the purposes for which it was collected.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                You can browse our Website without providing personal details. You remain anonymous during your visit
                unless you have an account and log in with your username and password. For suggestions or complaints,
                please contact us at trioslk3@gmail.com.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white flex items-center">
                <Eye className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
                Collection of Personal Information from All Users
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Information You Provide to Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Trios.lk collects personal information when you voluntarily provide it through our services. This
                    may occur when you register for an account, book our services, contact us with inquiries, respond to
                    surveys, or engage with specific content on our platform. The personal information we may collect
                    includes, but is not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mb-6">
                    <li>Your name, address, email address, and contact number</li>
                    <li>Event preferences and requirements</li>
                    <li>Photography session details and preferences</li>
                    <li>Course enrollment information for Trioslk Academy</li>
                    <li>Payment information for our services</li>
                    <li>Any other information you choose to share that allows us to identify you personally</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You must ensure that the information you provide is accurate and up-to-date. We may request
                    documentation to verify the information you provide.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-400">
                      We may use your personal information for:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 text-sm">
                      <li>To facilitate your use of the services provided by Trios.lk</li>
                      <li>To process bookings and payments made through Trios.lk</li>
                      <li>To manage your account and our relationship with you</li>
                      <li>To verify and complete financial transactions</li>
                      <li>To improve the design and content of our Website</li>
                      <li>To identify visitors and analyze user behavior on the Website</li>
                      <li>
                        To provide you with relevant information or marketing material, where you have not objected to
                        receiving it
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Information We Automatically Collect</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We also gather certain technical data automatically when you use Trios.lk services. This includes
                    information sent to us from your computer, mobile device, or browser, such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mb-4">
                    <li>Your Internet Protocol (IP) address</li>
                    <li>Browser type and device information</li>
                    <li>Statistics about your activities on our platform</li>
                    <li>Browsing behavior, page visits, clicks, and searches</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-300">
                    We also collect data through Cookies. These technologies enable us to collect real-time information
                    about how you interact with our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Cookies and Tracking Technologies</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We and our partners use tracking technologies to evaluate your use of our services. Information
                    collected by these technologies may be shared with our vendors to help us analyze your experience on
                    Trios.lk.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Combining Data</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    If you provide personal information to Trios.lk, we may combine it with non-personal information
                    collected from third parties. When this combined data can be used to identify you, we treat it as
                    personal information, ensuring it remains protected until it can no longer be associated with you.
                  </p>
                </div>
              </div>
            </div>

            {/* Consent and Third Party Information */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
                Consent and Third Party Information
              </h2>

              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                  We collect your personal information only when you voluntarily submit it. If you choose not to provide
                  this information, or if you withdraw your consent for us to use your personal information, we may not
                  be able to offer our services. You can access and update your personal information anytime.
                </p>

                <p className="text-gray-600 dark:text-gray-300">
                  If you provide personal information about any third party, we assume you have obtained the necessary
                  consent to share and transfer their information to us.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                  <p className="text-yellow-800 dark:text-yellow-300">
                    <strong>Important:</strong> In exceptional circumstances, Trios.lk may be required to disclose your
                    personal information, such as when necessary to prevent threats to life or health, comply with law
                    enforcement, or fulfill legal and regulatory obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
                Information Sharing and Disclosure
              </h2>

              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Trios.lk may share your personal information with third parties and affiliates to complete
                  transactions, manage your account, fulfill legal requirements, or for marketing purposes. We ensure
                  that these third parties keep your information secure and only use it for the purposes for which it
                  was shared.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-400">What We Don't Do</h3>
                    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 text-sm">
                      <li>Trios.lk does not sell your personal information to third parties</li>
                      <li>
                        All credit/debit card details will not be stored, sold, shared, rented, or leased to any third
                        parties
                      </li>
                      <li>Personally identifiable information is never sold or shared without consent</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-400">
                      Trios.LK's Right to Disclose
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      You acknowledge and agree that Trios.lk has the right to disclose your personal information to
                      legal, regulatory, governmental, tax, law enforcement, or other authorities if we have reasonable
                      grounds to believe that such disclosure is necessary to comply with obligations, requirements, or
                      requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Changes to This Privacy Policy</h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Trios.lk regularly reviews this Privacy Policy and reserves the right to modify or change it at any
                time. Any changes will be published on the Website. When we make changes, we will:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mb-6">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Notify you of significant changes via email or website notice</li>
                <li>Provide a reasonable notice period before changes take effect</li>
              </ul>

              <p className="text-gray-600 dark:text-gray-300">
                Your continued use of our services after any changes indicates your acceptance of the updated Privacy
                Policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-800 dark:text-red-400">
                Contacting Trios.lk
              </h2>

              <p className="text-red-700 dark:text-red-300 mb-6">
                If you wish to withdraw your consent for the use of your personal information, request access to or
                correction of your information, or have any questions or concerns, please contact us:
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
