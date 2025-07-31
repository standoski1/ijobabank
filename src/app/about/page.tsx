"use client"

import { motion } from 'framer-motion'
import { MessageCircle, ChevronRight } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <a href="/about" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">ABOUT</a>
              <a href="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</a>
              <a href="/testimonials" className="text-white hover:text-blue-200 transition-colors font-medium">TESTIMONIALS</a>
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              WE PROVIDE FINANCIAL SOLUTION FOR YOUR BUSINESS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              For all your personal financial goals, we're here to make sure life happens on your terms!
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
                SIGN IN
              </a>
              <a href="/faqs" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors font-semibold border border-blue-200">
                FAQS
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                WELCOME TO <span className="text-blue-600">KEYPRIME TRUST BANKING</span>
              </h2>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We provide comprehensive internet banking services that allow you to access your account 
                    from anywhere in the world. Our secure platform ensures your financial data is protected 
                    at all times.
                  </p>
                  <p>
                    Access your account via PC or smart devices with our mobile banking app. We offer 
                    24/7 customer support to assist you with any banking needs.
                  </p>
                  <p>
                    Our secure financial transactions are backed by state-of-the-art encryption technology, 
                    ensuring your money and personal information remain safe and confidential.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {['B', 'A', 'N', 'K', 'I', 'N', 'G'].map((letter, index) => (
                    <div key={index} className="bg-blue-600 text-white rounded-lg p-4 text-center font-bold text-lg">
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">Deposits</span>
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">Payments</span>
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">Internet Banking</span>
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">Mobile Banking</span>
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Money Savings Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-900 text-white rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 font-bold text-2xl">W</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Money Savings</h3>
              <p className="text-blue-200">
                Register with us and start saving for your personal financial goals.
              </p>
            </motion.div>

            {/* Online Shopping Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-blue-400 text-blue-900 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 font-bold text-2xl">🛒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Online Shoppings</h3>
              <p className="text-blue-800">
                Shop online at affordable prices. We deliver direct to your address without delay.
              </p>
            </motion.div>

            {/* Credit/Debit Cards Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-900 text-white rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 font-bold text-2xl">💳</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Credit / Debit Cards</h3>
              <p className="text-blue-200">
                Get a Credit / Debit Cards and have it delivered to your home.
              </p>
            </motion.div>
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