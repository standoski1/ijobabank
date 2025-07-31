"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield, 
  CreditCard, 
  PiggyBank, 
  TrendingUp, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Search,
  ChevronRight,
  MessageCircle,
  Quote
} from 'lucide-react'

export default function Testimonials() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const testimonials = [
    {
      quote: "Loving you guys the more with your smooth operations and quick transactions.",
      name: "ETHAN SMITH",
      role: "CLIENT",
      image: "/api/placeholder/60/60"
    },
    {
      quote: "Banking made easy! Quick response and fast transactions. You guys are the best.",
      name: "JOHN RODGER",
      role: "CLIENT",
      image: "/api/placeholder/60/60"
    },
    {
      quote: "Excellent service and very professional team. Highly recommended!",
      name: "SARAH JOHNSON",
      role: "CLIENT",
      image: "/api/placeholder/60/60"
    },
    {
      quote: "The best banking experience I've ever had. Fast, secure, and reliable.",
      name: "MICHAEL BROWN",
      role: "CLIENT",
      image: "/api/placeholder/60/60"
    }
  ]

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
              <Link href="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
              <Link href="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</Link>
              <Link href="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
              <Link href="/testimonials" className="text-blue-200 bg-blue-700 px-3 py-1 rounded transition-colors font-medium">TESTIMONIALS</Link>
              <Link href="/faqs" className="text-white hover:text-blue-200 transition-colors font-medium">FAQS</Link>
              <Link href="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-white hover:text-blue-200 transition-colors font-medium">SIGN IN</Link>
              <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">OPEN ACCOUNT</Link>
              <Search className="w-5 h-5 text-white" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-blue-700"
            >
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-white hover:text-blue-200 transition-colors">HOME</Link>
                <Link href="/about" className="text-white hover:text-blue-200 transition-colors">ABOUT</Link>
                <Link href="/services" className="text-white hover:text-blue-200 transition-colors">SERVICES</Link>
                <Link href="/testimonials" className="text-blue-200 bg-blue-700 px-3 py-1 rounded transition-colors">TESTIMONIALS</Link>
                <Link href="/faqs" className="text-white hover:text-blue-200 transition-colors">FAQS</Link>
                <Link href="/contact" className="text-white hover:text-blue-200 transition-colors">CONTACT</Link>
                <div className="pt-4 space-y-2">
                  <Link href="/login" className="text-white hover:text-blue-200 transition-colors block">SIGN IN</Link>
                  <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors block text-center">OPEN ACCOUNT</Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-blue-300 mb-4"
            >
              TESTIMONIALS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-semibold text-white"
            >
              WHAT OUR CLIENTS SAYS
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Quote className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-200">
                        <span className="text-white font-bold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              FREQUENTLY ASK QUESTION <span className="text-blue-600">(FAQ)</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I open an account?</h3>
                <p className="text-gray-600">
                  You can open an account online through our secure portal or visit any of our branches. 
                  You'll need to provide valid identification and proof of address.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your interest rates?</h3>
                <p className="text-gray-600">
                  Our interest rates vary by account type and are competitive in the market. 
                  Please contact our customer service for current rates.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is online banking secure?</h3>
                <p className="text-gray-600">
                  Yes, our online banking platform uses state-of-the-art encryption and security measures 
                  to protect your personal and financial information.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I apply for a loan?</h3>
                <p className="text-gray-600">
                  You can apply for a loan online or visit a branch. We offer various loan types 
                  with competitive rates and flexible repayment terms.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What documents do I need?</h3>
                <p className="text-gray-600">
                  Typically, you'll need a government-issued ID, proof of income, and proof of address. 
                  Specific requirements may vary by service.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I contact customer service?</h3>
                <p className="text-gray-600">
                  You can reach our customer service team 24/7 through phone, email, or live chat. 
                  We're here to help with all your banking needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-lg">KP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">KeyPrime</h3>
                  <p className="text-blue-200 text-sm">Trust Banking</p>
                </div>
              </div>
              <p className="text-blue-200 mb-6">
                Providing secure and reliable banking solutions for individuals and businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="/faqs" className="text-blue-200 hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Online Banking</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Mobile Banking</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Credit Cards</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Loans</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Investment</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Insurance</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">info@keyprime.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">123 Banking Street, Financial District, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-sm">
                © 2025 KeyPrime Trust Banking. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

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