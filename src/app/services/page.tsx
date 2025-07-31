"use client"

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function Services() {
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
              <a href="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</a>
              <a href="/services" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">SERVICES</a>
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SERVICES WE <span className="text-blue-600">PROVIDE</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 - Highlighted */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-600 text-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">FINANCIAL MANAGEMENT</h3>
              <p className="text-blue-100 text-center">
                Our financial services is very secured. Securities and insurance services are provided by Financial Services.
              </p>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white text-gray-900 rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">FINANCIAL INVESTMENT</h3>
              <p className="text-gray-600 text-center">
                We offers Loans at a very low Interest Rate with long duration of repayments.
              </p>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white text-gray-900 rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">CREDIT CARD</h3>
              <p className="text-gray-600 text-center">
                Fast delivery of Credit Cards at your home.
              </p>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white text-gray-900 rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">BUSINESS CONSULTING</h3>
              <p className="text-gray-600 text-center">
                Reach our customer care for counseling on any business matter.
              </p>
            </motion.div>

            {/* Service Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white text-gray-900 rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">INCOME MONITORING</h3>
              <p className="text-gray-600 text-center">
                For your convenience, most of our loan applications are approved and processed within 24 hours. Plus, if you are a customer to our bank we'll reduce your loan rate by 0.5%.
              </p>
            </motion.div>

            {/* Service Card 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white text-gray-900 rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">INSURANCE CONSULTING</h3>
              <p className="text-gray-600 text-center">
                Reach our customer care for counseling on any insurance matter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              OUR OFFERS AND <span className="text-blue-600">SUPPORTS</span>
            </h2>
            <p className="text-xl text-gray-600">We care about our customers.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-lg">
                  WE OFFERS LOANS AT A VERY LOW INTEREST RATE WITH LONG DURATION OF REPAYMENTS.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-lg">
                  WE ALWAYS HELP YOU TO GROW YOUR BUSINESS
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-lg">
                  FAST DELIVERY OF CREDIT CARDS AT YOUR HOME.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-lg">
                  WE COUNSEL ON ANY INSURANCE MATTER.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-lg">
                  24/7 ONLINE CUSTOMER CARE SERVICES.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Performance</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Communication</span>
                    <span className="text-blue-600 font-bold">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '99%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Support</span>
                    <span className="text-blue-600 font-bold">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '99%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Technology</span>
                    <span className="text-blue-600 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Developments</span>
                    <span className="text-blue-600 font-bold">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
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