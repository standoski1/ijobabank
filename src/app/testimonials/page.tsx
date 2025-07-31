"use client"

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-blue-900">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-blue-900 font-bold text-lg">KP</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">KeyPrime</h1>
                    <p className="text-blue-200 text-sm">Trust Banking</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</a>
              <a href="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</a>
              <a href="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</a>
              <a href="/testimonials" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">TESTIMONIALS</a>
              <a href="/faqs" className="text-white hover:text-blue-200 transition-colors font-medium">FAQS</a>
              <a href="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="/login" className="text-white hover:text-blue-200 transition-colors font-medium">SIGN IN</a>
              <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">OPEN ACCOUNT</a>
            </div>
          </div>
        </div>
      </header>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-blue-400 mb-4"
            >
              TESTIMONIALS
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold text-white"
            >
              WHAT OUR CLIENTS SAYS
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="text-blue-400 text-4xl font-bold">"</div>
                <div className="flex-1">
                  <p className="text-gray-700 text-lg mb-6">
                    Loving you guys the more with your smooth operations and quick transactions.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center border-2 border-blue-200">
                      <span className="text-blue-900 font-bold text-sm">ES</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">ETHAN SMITH</p>
                      <p className="text-gray-600 text-sm">CLIENT</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="text-blue-400 text-4xl font-bold">"</div>
                <div className="flex-1">
                  <p className="text-gray-700 text-lg mb-6">
                    Banking made easy! Quick response and fast transactions. You guys are the best.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-200">
                      <span className="text-white font-bold text-sm">JR</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">JOHN RODGER</p>
                      <p className="text-gray-600 text-sm">CLIENT</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              FREQUENTLY ASK QUESTION <span className="text-blue-600">(FAQ)</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our banking services
            </p>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-200">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="font-medium">Chat</span>
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
} 