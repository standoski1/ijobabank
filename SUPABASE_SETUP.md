# Supabase Setup Guide

## 1. Install Dependencies

```bash
npm install @supabase/supabase-js
npm uninstall sqlite3 better-sqlite3
```

## 2. Environment Variables

Create a `.env.local` file in your project root:

```env
# Supabase Configuration
SUPABASE_URL=https://mvbnqlsynktanamiltnp.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SuperBaseDBPass=your-password-here

# JWT Secret
JWT_SECRET=your-jwt-secret-key-here
```

## 3. Database Setup

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Run the SQL script from `supabase-setup.sql`

## 4. Get Your Supabase Keys

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the following:
   - Project URL (already configured)
   - Anon public key
   - Service role key (if needed)

## 5. Update Environment Variables

Replace the placeholder values in `.env.local`:
- `your-anon-key-here` → Your actual anon key
- `your-password-here` → Your database password
- `your-jwt-secret-key-here` → A secure random string

## 6. Deploy to Production

### For Netlify:
1. Add environment variables in Netlify dashboard
2. Deploy your application

### For Vercel (Recommended):
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## 7. Test the Application

1. Start the development server: `npm run dev`
2. Test user registration and login
3. Verify database operations work correctly

## Troubleshooting

### Common Issues:

1. **"Anon key not found"**: Check your SUPABASE_ANON_KEY
2. **"Database connection failed"**: Verify your SuperBaseDBPass
3. **"Table not found"**: Run the SQL setup script in Supabase

### Security Notes:

- Never commit `.env.local` to version control
- Use strong, unique passwords
- Enable Row Level Security (RLS) in Supabase
- Regularly rotate your JWT secret

## Database Schema

The users table includes:
- `id`: Primary key (auto-increment)
- `email`: Unique email address
- `password`: Hashed password
- `first_name`: User's first name
- `last_name`: User's last name
- `phone`: Optional phone number
- `account_number`: Unique account number
- `balance`: Account balance
- `created_at`: Account creation timestamp
- `updated_at`: Last update timestamp 