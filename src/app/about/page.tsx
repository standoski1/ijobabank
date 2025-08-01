"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield, 
  Users, 
  Globe, 
  Award,
  CheckCircle,
  TrendingUp,
  Heart,
  Star
} from 'lucide-react'

export default function About() {
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
              <Link href="/about" className="text-blue-200 font-medium">ABOUT</Link>
              <Link href="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
              <Link href="/testimonials" className="text-white hover:text-blue-200 transition-colors font-medium">TESTIMONIALS</Link>
              <Link href="/faqs" className="text-white hover:text-blue-200 transition-colors font-medium">FAQS</Link>
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
              About <span className="text-blue-300">KeyPrime</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto"
            >
              Trusted by millions of customers worldwide, we provide secure and innovative banking solutions for the modern world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2010, KeyPrime Trust Banking has been at the forefront of financial innovation, 
                  providing comprehensive banking solutions to individuals and businesses worldwide.
                </p>
                <p>
                  Our mission is to make banking accessible, secure, and convenient for everyone. 
                  We believe that financial services should be transparent, reliable, and designed 
                  to help our customers achieve their financial goals.
                </p>
                <p>
                  With over a decade of experience and millions of satisfied customers, we continue 
                  to evolve and adapt to the changing needs of the modern banking landscape.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-blue-600 rounded-xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">2.5M+</h3>
                    <p className="text-blue-200">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">150+</h3>
                    <p className="text-blue-200">Countries Served</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">15+</h3>
                    <p className="text-blue-200">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">99.9%</h3>
                    <p className="text-blue-200">Security Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security First</h3>
              <p className="text-gray-600">
                We prioritize the security of your financial data with state-of-the-art encryption 
                and multi-layer protection systems.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Every decision we make is centered around providing the best possible experience 
                for our customers.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to provide cutting-edge financial solutions that meet 
                the evolving needs of our customers.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency in all our operations, ensuring you always 
                know what&apos;s happening with your money.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Our services are available worldwide, providing consistent banking solutions 
                across different countries and cultures.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from customer service to 
                technological innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600">Meet the team driving our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Davis</h3>
              <p className="text-blue-600 font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-600">
                With over 20 years of banking experience, John leads our company with vision 
                and strategic direction.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">SM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Mitchell</h3>
              <p className="text-blue-600 font-semibold mb-4">Chief Technology Officer</p>
              <p className="text-gray-600">
                Sarah drives our technological innovation, ensuring we stay ahead of the curve 
                in digital banking solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">MR</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Rodriguez</h3>
              <p className="text-blue-600 font-semibold mb-4">Chief Financial Officer</p>
              <p className="text-gray-600">
                Michael ensures our financial stability and growth while maintaining the highest 
                standards of fiscal responsibility.
              </p>
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
              Ready to Join the <span className="text-blue-300">KeyPrime</span> Family?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Experience the future of banking with our secure and innovative solutions
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