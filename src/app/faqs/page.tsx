"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageCircle
} from 'lucide-react'

const faqs = [
  {
    question: "How do I open an account with KeyPrime?",
    answer: "Opening an account is easy! Simply visit our signup page, fill out the required information, and verify your identity. You'll receive your account details within minutes."
  },
  {
    question: "What documents do I need to open an account?",
    answer: "You'll need a valid government-issued ID (passport, driver's license, or national ID), proof of address, and your Social Security Number or Tax ID."
  },
  {
    question: "Is my money safe with KeyPrime?",
    answer: "Absolutely! We use state-of-the-art encryption and security measures to protect your funds. Your deposits are also insured up to $250,000 by the FDIC."
  },
  {
    question: "How do I access my account online?",
    answer: "You can access your account through our secure website or mobile app. Simply log in with your email and password, or use biometric authentication on mobile devices."
  },
  {
    question: "What are the fees for using KeyPrime services?",
    answer: "We offer competitive rates with minimal fees. Most basic services are free, and we provide transparent pricing for all our products. Check our fee schedule for detailed information."
  },
  {
    question: "How do I transfer money to another account?",
    answer: "You can transfer money through our online banking platform or mobile app. Simply enter the recipient's account number and routing number, or use their email address if they're also a KeyPrime customer."
  },
  {
    question: "What should I do if I lose my debit card?",
    answer: "If you lose your card, immediately contact our 24/7 customer service or use our mobile app to freeze your card. We'll issue a replacement card within 3-5 business days."
  },
  {
    question: "How do I apply for a loan?",
    answer: "You can apply for a loan online through our website or mobile app. The process is quick and secure, with decisions typically made within 24 hours for personal loans."
  },
  {
    question: "What investment options do you offer?",
    answer: "We offer a wide range of investment products including savings accounts, CDs, mutual funds, and retirement accounts. Our investment advisors can help you create a personalized portfolio."
  },
  {
    question: "How do I contact customer support?",
    answer: "Our customer support team is available 24/7 through live chat, phone, or email. You can also visit any of our branches during business hours."
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-blue-900 font-bold text-lg">KP</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">KeyPrime Trust Banking</h1>
                    <p className="text-blue-200 text-sm">Trust Banking</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
              <Link href="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</Link>
              <Link href="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
              <Link href="/testimonials" className="text-white hover:text-blue-200 transition-colors font-medium">TESTIMONIALS</Link>
              <Link href="/faqs" className="text-blue-200 font-medium">FAQS</Link>
              <Link href="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT</Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login" className="text-white hover:text-blue-200 transition-colors font-medium">SIGN IN</Link>
              <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">OPEN ACCOUNT</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Frequently Asked <span className="text-blue-300">Questions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto"
            >
              Find answers to the most common questions about our banking services
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Still Need <span className="text-blue-600">Help</span>?
            </h2>
            <p className="text-xl text-gray-600">Our support team is here to help you 24/7</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Get instant help from our customer support team through live chat
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                Start Chat
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-6">
                Call our support team at 1-800-KEYPRIME for immediate assistance
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                Call Now
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send us an email and we&apos;ll respond within 24 hours
              </p>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold inline-block">
                Send Email
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get <span className="text-blue-300">Started</span>?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join millions of customers who trust KeyPrime for their banking needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-semibold text-lg">
                OPEN ACCOUNT
              </Link>
              <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors font-semibold text-lg border border-blue-200">
                CONTACT US
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 