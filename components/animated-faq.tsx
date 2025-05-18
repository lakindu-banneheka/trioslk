"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "@/components/motion"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400"
      >
        <h3 className="text-lg font-bold dark:text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-2"
        >
          <ChevronDown className="h-5 w-5 text-red-500 dark:text-red-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 pt-4">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function AnimatedFAQ({ faqs }: { faqs: FAQItemProps[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}
