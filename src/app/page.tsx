"use client"

import { useState, useEffect } from 'react'
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
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "WE PROVIDE FINANCIAL SOLUTION FOR YOUR BUSINESS",
      subtitle: "For all your personal financial goals, we're here to make sure life happens on your terms!",
      bgImage: "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900",
      cta1: "SIGN IN",
      cta2: "FAQS"
    },
    {
      title: "OUR OFFERS AND SUPPORTS",
      subtitle: "We care about our customers.",
      bgImage: "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900",
      features: [
        "WE OFFERS LOANS AT A VERY LOW INTEREST RATE WITH LONG DURATION OF REPAYMENTS.",
        "WE ALWAYS HELP YOU TO GROW YOUR BUSINESS",
        "FAST DELIVERY OF CREDIT CARDS AT YOUR HOME.",
        "WE COUNSEL ON ANY INSURANCE MATTER.",
        "24/7 ONLINE CUSTOMER CARE SERVICES."
      ],
      cta1: "CONTACT US",
      cta2: "LEARN MORE"
    },
    {
      title: "LET MAKE YOUR BRAND SUCCESSFUL TODAY",
      subtitle: "Professional banking solutions for modern businesses",
      bgImage: "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900",
      cta1: "OPEN ACCOUNT",
      cta2: "SIGN IN"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

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
                    <span className="text-blue-900 font-bold text-lg">IB</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">IjobaBank</h1>
                    <p className="text-blue-200 text-sm">Trust Banking</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">TESTIMONIALS</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">FAQS</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT</a>
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
                <a href="#" className="text-white hover:text-blue-200 transition-colors">HOME</a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">ABOUT</a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">SERVICES</a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">TESTIMONIALS</a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">FAQS</a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">CONTACT</a>
                <div className="pt-4 space-y-2">
                  <Link href="/login" className="text-white hover:text-blue-200 transition-colors block">SIGN IN</Link>
                  <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors block text-center">OPEN ACCOUNT</Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 ${slide.bgImage} text-white`}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-center lg:text-left">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-4xl md:text-6xl font-bold mb-6"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-xl md:text-2xl mb-8 text-blue-100"
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    {slide.features && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-4 mb-8"
                      >
                        {slide.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-300" />
                            <span className="text-blue-100">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                      <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
                        {slide.cta1}
                      </Link>
                      <Link href="/faqs" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors font-semibold border border-blue-200">
                        {slide.cta2}
                      </Link>
                    </motion.div>
                  </div>
                  
                  {/* Right Content - Progress Bars for slide 2 */}
                  {index === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="bg-black/30 backdrop-blur-sm rounded-xl p-8"
                    >
                      <h3 className="text-2xl font-bold mb-6 text-center">Our Expertise</h3>
                      <div className="space-y-6">
                        {[
                          { label: "Communication", percentage: 99 },
                          { label: "Support", percentage: 99 },
                          { label: "Technology", percentage: 98 },
                          { label: "Developments", percentage: 90 }
                        ].map((item, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between mb-2">
                              <span className="text-white font-medium">{item.label}</span>
                              <span className="text-blue-300 font-bold">{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-3">
                              <div 
                                className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Slider Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

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
                For your convenience, most of our loan applications are approved and processed within 24 hours.
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
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
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
