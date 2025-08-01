"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Star,
  Quote,
  User,
  CheckCircle
} from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Business Owner",
    company: "Mitchell Enterprises",
    rating: 5,
    content: "KeyPrime has transformed my business banking experience. The mobile app is incredibly intuitive and the customer service is exceptional. I've been able to manage my business finances more efficiently than ever before.",
    avatar: "SM"
  },
  {
    name: "John Davis",
    role: "Investment Manager",
    company: "Davis Financial",
    rating: 5,
    content: "The investment features are incredible. I've seen significant returns on my portfolio since switching to KeyPrime. Their investment tools and market insights are top-notch.",
    avatar: "JD"
  },
  {
    name: "Emma Lopez",
    role: "Tech Consultant",
    company: "Lopez Tech Solutions",
    rating: 5,
    content: "Security is my top priority, and KeyPrime delivers. The biometric authentication gives me peace of mind, and the platform is incredibly secure. Highly recommended!",
    avatar: "EL"
  },
  {
    name: "Michael Rodriguez",
    role: "Entrepreneur",
    company: "Rodriguez Ventures",
    rating: 5,
    content: "The business banking services are outstanding. Quick loan approvals, competitive rates, and excellent merchant services. KeyPrime has been instrumental in my business growth.",
    avatar: "MR"
  },
  {
    name: "Lisa Chen",
    role: "Freelance Designer",
    company: "Chen Design Studio",
    rating: 5,
    content: "As a freelancer, I need flexible banking solutions. KeyPrime's mobile app and online services make managing my finances so much easier. The customer support is always helpful.",
    avatar: "LC"
  },
  {
    name: "David Thompson",
    role: "Retiree",
    company: "Personal Account",
    rating: 5,
    content: "I've been with KeyPrime for over 10 years and couldn't be happier. The savings rates are competitive, and the retirement planning tools are excellent. They truly care about their customers.",
    avatar: "DT"
  }
]

const stats = [
  { number: "2.5M+", label: "Happy Customers" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "99.9%", label: "Customer Satisfaction" },
  { number: "150+", label: "Countries Served" }
]

export default function Testimonials() {
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
              <Link href="/testimonials" className="text-blue-200 font-medium">TESTIMONIALS</Link>
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
              Customer <span className="text-blue-300">Testimonials</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto"
            >
              Real stories from satisfied customers worldwide
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Customers <span className="text-blue-600">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600">The reasons why millions trust KeyPrime with their finances</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted & Secure</h3>
              <p className="text-gray-600">
                With over 15 years of experience and state-of-the-art security, your money is safe with us.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Our dedicated support team is available 24/7 to help you with any banking needs.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to provide the best banking experience for our customers.
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
              Join Our <span className="text-blue-300">Happy Customers</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Experience the KeyPrime difference and see why millions choose us
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