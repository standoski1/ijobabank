"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CreditCard, 
  PiggyBank, 
  Shield, 
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  Building,
  Lock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: CreditCard,
    title: "Credit & Debit Cards",
    description: "Get instant virtual cards and physical cards delivered to your home with competitive rates and rewards.",
    features: ["Virtual cards", "Physical cards", "Rewards program", "Contactless payments"],
    color: "bg-blue-600"
  },
  {
    icon: PiggyBank,
    title: "Savings & Investment",
    description: "Smart savings accounts with high interest rates and automated investment portfolios.",
    features: ["High-yield savings", "Automated investing", "Goal tracking", "Portfolio management"],
    color: "bg-green-600"
  },
  {
    icon: TrendingUp,
    title: "Loans & Financing",
    description: "Personal and business loans with competitive rates and flexible repayment terms.",
    features: ["Personal loans", "Business loans", "Mortgage services", "Quick approval"],
    color: "bg-purple-600"
  },
  {
    icon: Shield,
    title: "Insurance Services",
    description: "Comprehensive insurance coverage for life, health, property, and business needs.",
    features: ["Life insurance", "Health coverage", "Property insurance", "Business protection"],
    color: "bg-red-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Full-featured mobile app for banking on the go with biometric authentication.",
    features: ["Mobile app", "Biometric login", "Quick transfers", "Bill payments"],
    color: "bg-indigo-600"
  },
  {
    icon: Globe,
    title: "International Banking",
    description: "Global banking services with multi-currency accounts and international transfers.",
    features: ["Multi-currency", "Global transfers", "Exchange rates", "International cards"],
    color: "bg-yellow-600"
  }
]

export default function Services() {
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
              <Link href="/services" className="text-blue-200 font-medium">SERVICES</Link>
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
              Our <span className="text-blue-300">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto"
            >
              Comprehensive financial solutions designed to meet all your banking needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/signup" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Banking */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Business <span className="text-blue-600">Banking</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive banking solutions designed specifically for businesses of all sizes.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Accounts</h3>
                    <p className="text-gray-600">Dedicated business accounts with specialized features and competitive rates.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Merchant Services</h3>
                    <p className="text-gray-600">Payment processing solutions to help your business grow and succeed.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Loans</h3>
                    <p className="text-gray-600">Flexible financing options to support your business expansion and growth.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Solutions</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Business Checking</span>
                    <span className="text-green-600 font-bold">$0/month</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Merchant Services</span>
                    <span className="text-green-600 font-bold">2.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold">Business Loans</span>
                    <span className="text-green-600 font-bold">From 5.5%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Banking Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Digital <span className="text-blue-600">Banking</span>
            </h2>
            <p className="text-xl text-gray-600">Experience the future of banking with our advanced digital platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Banking</h3>
              <p className="text-gray-600">Multi-layer security with biometric authentication</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-gray-600">Full-featured mobile banking on iOS and Android</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Access</h3>
              <p className="text-gray-600">Bank anytime, anywhere with our online platform</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-gray-600">24/7 customer support via chat, phone, and email</p>
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
              Ready to Experience Our <span className="text-blue-300">Services</span>?
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