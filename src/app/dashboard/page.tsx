"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
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
  MessageCircle,
  Menu
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const stockData = [
  { time: '09:00', price: 205.50 },
  { time: '10:00', price: 206.20 },
  { time: '11:00', price: 207.80 },
  { time: '12:00', price: 208.50 },
  { time: '13:00', price: 207.90 },
  { time: '14:00', price: 207.57 },
  { time: '15:00', price: 206.80 },
  { time: '16:00', price: 207.57 },
]

const transactionData = [
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 3000, expenses: 1398 },
  { month: 'Mar', income: 2000, expenses: 9800 },
  { month: 'Apr', income: 2780, expenses: 3908 },
  { month: 'May', income: 1890, expenses: 4800 },
  { month: 'Jun', income: 2390, expenses: 3800 },
  { month: 'Jul', income: 3490, expenses: 4300 },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('profile')
  const [selectedStock, setSelectedStock] = useState('Apple')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const stocks = [
    { name: 'Apple', symbol: 'AAPL', price: 207.57, change: -1.48, changePercent: -0.71 },
    { name: 'Google', symbol: 'GOOGL', price: 142.56, change: 2.34, changePercent: 1.67 },
    { name: 'Microsoft', symbol: 'MSFT', price: 378.85, change: 5.67, changePercent: 1.52 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
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
              <div className="hidden md:block text-center">
                <p className="text-sm text-gray-600">Welcome back, {user?.firstName} {user?.lastName}</p>
              </div>
              <div className="hidden lg:block text-right">
                <p className="text-sm text-gray-600">{new Date().toLocaleString()}</p>
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
              {/* Mobile menu button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-blue-900 min-h-screen fixed left-0 top-16 z-40">
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
            
            <div className="absolute bottom-[100px] left-4 right-4">
              <button 
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        {/* Mobile Sidebar */}
        <aside className={`lg:hidden fixed top-16 left-0 h-full w-64 bg-blue-900 z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
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
            
            <div className="absolute bottom-[100px] left-4 right-4">
              <button 
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:ml-64">
          {/* Action Tabs */}
          <div className="grid grid-cols-2 lg:flex lg:space-x-4 gap-2 lg:gap-0 mb-8">
            <button
              onClick={() => setActiveTab('quick-transfer')}
              className={`flex items-center justify-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base ${
                activeTab === 'quick-transfer' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Quick Transfer</span>
              <span className="sm:hidden">Transfer</span>
            </button>
            <button
              onClick={() => setActiveTab('open-ticket')}
              className={`flex items-center justify-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base ${
                activeTab === 'open-ticket' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Open Ticket</span>
              <span className="sm:hidden">Ticket</span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`flex items-center justify-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base ${
                activeTab === 'messages' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Messages</span>
              <span className="sm:hidden">Chat</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center justify-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base ${
                activeTab === 'profile' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
          </div>

          {/* Account Balance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-green-600 text-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Current Balance</h3>
                  <p className="text-3xl font-bold">USD $ {user?.balance?.toLocaleString() || '0'}</p>
                  <p className="text-green-200 text-sm mt-2">Account: {user?.accountNumber}</p>
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
              className="bg-blue-600 text-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Loan App Status</h3>
                  <p className="text-3xl font-bold">ACTIVE</p>
                  <p className="text-blue-200 text-sm mt-2">Transfer Mode: WIRE/LOCAL</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Investment App Mode Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-yellow-500 text-black rounded-xl p-6 shadow-lg mb-8"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">Investment App Mode</h3>
                <p className="text-3xl font-bold">ACTIVE</p>
                <p className="text-yellow-800 text-sm mt-2">Investment by Plan Selection</p>
              </div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Stock Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-8"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Stock Information</h3>
                <p className="text-gray-600">Real-time stock data and analysis</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {stocks.map((stock) => (
                  <button
                    key={stock.name}
                    onClick={() => setSelectedStock(stock.name)}
                    className={`px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base ${
                      selectedStock === stock.name 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {stock.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Stock Info */}
            {(() => {
              const selectedStockData = stocks.find(s => s.name === selectedStock)
              return selectedStockData ? (
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🌙</span>
                    </div>
                    <span className="text-gray-900 font-semibold">{selectedStockData.name} Inc</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">{selectedStockData.price} USD</span>
                    <span className={`text-sm ${selectedStockData.change >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {selectedStockData.change} {selectedStockData.changePercent}%
                    </span>
                  </div>
                </div>
              ) : null
            })()}

            {/* Stock Chart */}
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Timeframe Options */}
            <div className="flex space-x-2">
              {['1D', '1M', '3M', '1Y', '5Y', 'All'].map((timeframe) => (
                <button
                  key={timeframe}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    timeframe === '1D' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Transaction Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-8"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Transaction Statistics</h3>
                <p className="text-gray-600 text-sm lg:text-base">Show all Overview from 2018-01-18 - July 17, 2022 See Details</p>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm lg:text-base">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download Statement</span>
                <span className="sm:hidden">Download</span>
              </button>
            </div>

            {/* Transaction Chart */}
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={transactionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="income" stackId="1" stroke="#10B981" fill="#10B981" />
                  <Area type="monotone" dataKey="expenses" stackId="1" stroke="#EF4444" fill="#EF4444" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
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
          </motion.div>

          {/* Security Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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