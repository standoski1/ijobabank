import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mvbnqlsynktanamiltnp.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database connection string for direct PostgreSQL access
export const getDatabaseUrl = () => {
  const password = process.env.NEXT_PUBLIC_SuperBaseDBPass
  if (!password) {
    throw new Error('SuperBaseDBPass environment variable is not set')
  }
  return `postgresql://postgres:${password}@db.mvbnqlsynktanamiltnp.supabase.co:5432/postgres`
} 