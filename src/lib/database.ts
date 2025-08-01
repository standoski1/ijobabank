import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import bcrypt from 'bcryptjs'

let db: any = null

export async function getDatabase() {
  if (!db) {
    db = await open({
      filename: './users.db',
      driver: sqlite3.Database
    })
    
    // Create users table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        phone TEXT,
        accountNumber TEXT UNIQUE,
        balance REAL DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)
  }
  return db
}

export async function createUser(userData: {
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
}) {
  const db = await getDatabase()
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(userData.password, 10)
  
  // Generate account number
  const accountNumber = generateAccountNumber()
  
  try {
    const result = await db.run(`
      INSERT INTO users (email, password, firstName, lastName, phone, accountNumber)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [userData.email, hashedPassword, userData.firstName, userData.lastName, userData.phone, accountNumber])
    
    return {
      id: result.lastID,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      accountNumber
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes('UNIQUE constraint failed')) {
      throw new Error('Email already exists')
    }
    throw error
  }
}

export async function findUserByEmail(email: string) {
  const db = await getDatabase()
  return await db.get('SELECT * FROM users WHERE email = ?', [email])
}

export async function findUserById(id: number) {
  const db = await getDatabase()
  return await db.get('SELECT * FROM users WHERE id = ?', [id])
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword)
}

function generateAccountNumber(): string {
  // Generate a 10-digit account number
  return Math.floor(1000000000 + Math.random() * 9000000000).toString()
} 