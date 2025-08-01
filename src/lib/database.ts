import bcrypt from 'bcryptjs'
import { getDb } from './mongodb'

export async function createUser(userData: {
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
}) {
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(userData.password, 10)
  
  // Generate account number
  const accountNumber = generateAccountNumber()
  
  try {
    
    const db = await getDb()
    const usersCollection = db.collection('ijobabankuser')
    
    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email: userData.email })
    if (existingUser) {
      throw new Error('Email already exists')
    }
    
    const userDoc = {
      email: userData.email,
      password: hashedPassword,
      first_name: userData.firstName,
      last_name: userData.lastName,
      phone: userData.phone,
      account_number: accountNumber,
      balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    }
    
    const result = await usersCollection.insertOne(userDoc)
    
    if (!result.insertedId) {
      throw new Error('Failed to create user')
    }
    
    return {
      id: result.insertedId.toString(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      accountNumber: accountNumber
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Failed to create user')
  }
}

export async function findUserByEmail(email: string) {
  try {
    const db = await getDb()
    const usersCollection = db.collection('ijobabankuser')
    
    const user = await usersCollection.findOne({ email })
    
    if (!user) {
      return null
    }

    return {
      id: user._id.toString(),
      email: user.email,
      password: user.password,
      firstName: user.first_name,
      lastName: user.last_name,
      phone: user.phone,
      accountNumber: user.account_number,
      balance: user.balance,
      createdAt: user.created_at,
      updatedAt: user.updated_at
    }
  } catch {
    return null
  }
}

export async function findUserById(id: string) {
  try {
    const db = await getDb()
    const usersCollection = db.collection('ijobabankuser')
    
    const { ObjectId } = await import('mongodb')
    const user = await usersCollection.findOne({ _id: new ObjectId(id) })
    
    if (!user) {
      return null
    }

    return {
      id: user._id.toString(),
      email: user.email,
      password: user.password,
      firstName: user.first_name,
      lastName: user.last_name,
      phone: user.phone,
      accountNumber: user.account_number,
      balance: user.balance,
      createdAt: user.created_at,
      updatedAt: user.updated_at
    }
  } catch{
    return null
  }
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword)
}

function generateAccountNumber(): string {
  // Generate a 10-digit account number
  return Math.floor(1000000000 + Math.random() * 9000000000).toString()
} 