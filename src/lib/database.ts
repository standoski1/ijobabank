import bcrypt from 'bcryptjs'
import { supabase } from './supabase'

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
    const { data, error } = await supabase
      .from('users')
      .insert({
        email: userData.email,
        password: hashedPassword,
        first_name: userData.firstName,
        last_name: userData.lastName,
        phone: userData.phone,
        account_number: accountNumber,
        balance: 0
      })
      .select()
      .single()

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        throw new Error('Email already exists')
      }
      throw error
    }
    
    return {
      id: data.id,
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
      phone: data.phone,
      accountNumber: data.account_number
    }
  } catch (error) {
    if (error instanceof Error && error.message === 'Email already exists') {
      throw error
    }
    throw new Error('Failed to create user')
  }
}

export async function findUserByEmail(email: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single()

  if (error || !data) {
    return null
  }

  return {
    id: data.id,
    email: data.email,
    password: data.password,
    firstName: data.first_name,
    lastName: data.last_name,
    phone: data.phone,
    accountNumber: data.account_number,
    balance: data.balance,
    createdAt: data.created_at,
    updatedAt: data.updated_at
  }
}

export async function findUserById(id: number) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) {
    return null
  }

  return {
    id: data.id,
    email: data.email,
    password: data.password,
    firstName: data.first_name,
    lastName: data.last_name,
    phone: data.phone,
    accountNumber: data.account_number,
    balance: data.balance,
    createdAt: data.created_at,
    updatedAt: data.updated_at
  }
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword)
}

function generateAccountNumber(): string {
  // Generate a 10-digit account number
  return Math.floor(1000000000 + Math.random() * 9000000000).toString()
} 