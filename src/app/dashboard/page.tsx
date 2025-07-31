"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Home,
  CreditCard,
  PiggyBank,
  TrendingUp,
  Settings,
  Bell,
  Search,
  LogOut,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Calendar,
  User,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  const accountData = {
    balance: 25480.50,
    accountNumber: '**** **** **** 1234',
    accountType: 'Premium Savings',
    currency: 'USD'
  }

  const recentTransactions = [
    {
      id: 1,
      type: 'credit',
      amount: 2500.00,
      description: 'Salary Deposit',
      date: '2024-01-15',
      category: 'Income'
    },
    {
      id: 2,
      type: 'debit',
      amount: 150.75,
      description: 'Grocery Store',
      date: '2024-01-14',
      category: 'Shopping'
    },
    {
      id: 3,
      type: 'credit',
      amount: 500.00,
      description: 'Investment Return',
      date: '2024-01-13',
      category: 'Investment'
    },
    {
      id: 4,
      type: 'debit',
      amount: 89.99,
      description: 'Netflix Subscription',
      date: '2024-01-12',
      category: 'Entertainment'
    }
  ]

  const quickActions = [
    { icon: CreditCard, label: 'Transfer', color: 'blue' },
    { icon: PiggyBank, label: 'Savings', color: 'purple' },
    { icon: TrendingUp, label: 'Invest', color: 'green' },
    { icon: CreditCard, label: 'Pay Bills', color: 'orange' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                iJobaBank
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: Home },
                  { id: 'accounts', label: 'Accounts', icon: CreditCard },
                  { id: 'transactions', label: 'Transactions', icon: TrendingUp },
                  { id: 'savings', label: 'Savings', icon: PiggyBank },
                  { id: 'settings', label: 'Settings', icon: Settings }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href="/login" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-red-600 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Sign Out</span>
                </Link>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Account Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Account Overview</h2>
                  <p className="text-gray-600">Welcome back, John!</p>
                </div>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign className="w-8 h-8" />
                    <Shield className="w-6 h-6 opacity-80" />
                  </div>
                  <h3 className="text-sm font-medium opacity-90">Total Balance</h3>
                  <p className="text-3xl font-bold">
                    {showBalance ? `$${accountData.balance.toLocaleString()}` : '****'}
                  </p>
                  <p className="text-sm opacity-80 mt-1">{accountData.accountType}</p>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-8 h-8" />
                    <ArrowUpRight className="w-6 h-6 opacity-80" />
                  </div>
                  <h3 className="text-sm font-medium opacity-90">This Month</h3>
                  <p className="text-3xl font-bold">+$2,450</p>
                  <p className="text-sm opacity-80 mt-1">+12.5% from last month</p>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <PiggyBank className="w-8 h-8" />
                    <ArrowDownRight className="w-6 h-6 opacity-80" />
                  </div>
                  <h3 className="text-sm font-medium opacity-90">Savings Goal</h3>
                  <p className="text-3xl font-bold">75%</p>
                  <p className="text-sm opacity-80 mt-1">$18,600 of $25,000</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        action.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        action.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        action.color === 'green' ? 'bg-green-100 text-green-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <action.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <motion.div
                    key={transaction.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'credit' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? (
                          <ArrowUpRight className="w-5 h-5" />
                        ) : (
                          <ArrowDownRight className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{transaction.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Account Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Account Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Account Information</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Number:</span>
                      <span className="font-medium">{accountData.accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Type:</span>
                      <span className="font-medium">{accountData.accountType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Currency:</span>
                      <span className="font-medium">{accountData.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Security Status</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Two-Factor Auth:</span>
                      <span className="text-green-600 font-medium">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Last Login:</span>
                      <span className="font-medium">Today, 9:30 AM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Device:</span>
                      <span className="font-medium">Chrome on Windows</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">Houston, TX</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 