"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  CreditCard, 
  PiggyBank, 
  Shield, 
  HelpCircle,
  LogOut,
  ChevronRight,
  Download,
  TrendingUp,
  TrendingDown,
  User,
  Clock,
  Globe,
  Plus,
  MessageCircle
} from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KP</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">KeyPrime Trust Banking</h1>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Welcome back, John Wong</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">2025-07-31 16:01:53</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Plus className="w-4 h-4 text-gray-400" />
                <Globe className="w-4 h-4 text-gray-400" />
                <Clock className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-900 min-h-screen">
          <nav className="mt-8">
            <div className="px-4 space-y-2">
              <div className="flex items-center justify-between p-3 text-white hover:bg-blue-800 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5" />
                  <span>Dashboard</span>
                </div>
                <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</div>
              </div>
              
              <div className="flex items-center justify-between p-3 text-white hover:bg-blue-800 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5" />
                  <span>My Account</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </div>
              
              <div className="flex items-center justify-between p-3 text-white hover:bg-blue-800 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5" />
                  <span>Fund Transfer</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </div>
              
              <div className="flex items-center justify-between p-3 text-white hover:bg-blue-800 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5" />
                  <span>Transactions</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </div>
              
              <div className="flex items-center justify-between p-3 text-white hover:bg-blue-800 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5" />
                  <span>Bank Cards</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </div>
              
              <div className="flex items-center justify-between p-3 text-white hover:bg-blue-800 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <PiggyBank className="w-5 h-5" />
                  <span>Make Deposit</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </div>
              
              <div className="flex items-center justify-between p-3 text-white hover:bg-blue-800 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5" />
                  <span>Security</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </div>
              
              <div className="flex items-center justify-between p-3 text-white hover:bg-blue-800 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5" />
                  <span>Get Help</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            
            <div className="absolute bottom-8 left-4 right-4">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg flex items-center justify-center space-x-2">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Action Tabs */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('quick-transfer')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'quick-transfer' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Quick Transfer</span>
            </button>
            <button
              onClick={() => setActiveTab('open-ticket')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'open-ticket' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Open Ticket</span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'messages' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Messages</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'profile' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
          </div>

          {/* Account Balance Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-green-600 text-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Account Balance</h3>
                  <p className="text-3xl font-bold">USD $ 2,531,000</p>
                  <p className="text-green-200 text-sm mt-2">Today 31-07-25 08:01:53</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-green-600 text-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ledger Balance</h3>
                  <p className="text-3xl font-bold">USD $ 2,531,000</p>
                  <p className="text-green-200 text-sm mt-2">0.05% from Current Balance: USD $ 2,531,000</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Transaction Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Transaction Statistics</h3>
                <p className="text-gray-600">Show all Overview from 2018-01-18 - July 17, 2022 See Details</p>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Statement</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bank Card Display */}
              <div className="bg-green-600 text-white rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-yellow-800" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm">Mastercard</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">XX-903446863-XXXXX</p>
                  <p className="text-sm">CARD HOLDER: JOHN WONG -</p>
                  <p className="text-sm">EXPIRES: 03/2027</p>
                </div>
              </div>

              {/* Account Details */}
              <div className="bg-green-600 text-white rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-yellow-800" />
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <DollarSign className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Acct No#: 8845990764</p>
                  <p className="text-sm">ACCOUNT HOLDER: JOHN WONG</p>
                  <p className="text-sm">TYPE: ONLINE BANKING</p>
                </div>
              </div>
            </div>

            {/* Company Logos */}
            <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-gray-200">
              <div className="text-gray-600 font-semibold">Apple</div>
              <div className="text-gray-600 font-semibold">Google</div>
              <div className="text-gray-600 font-semibold">Microsoft</div>
            </div>

            {/* Apple Inc Section */}
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🌙</span>
              </div>
              <span className="text-gray-900 font-semibold">Apple Inc</span>
            </div>
          </motion.div>

          {/* Security Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Security Tips</h3>
            <p className="text-gray-600 mb-4">
              Change your Internet banking Password Frequently to keep your Account Safe
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
              Reset Password
            </button>
          </motion.div>
        </main>
      </div>

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