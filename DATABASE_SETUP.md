# 🗄️ Database Setup Guide for Sauna Cult Booking

This guide will walk you through setting up a database to make your Sauna Cult booking system fully functional.

## 🚀 **Quick Setup (5 minutes)**

### **Step 1: Create a Database**

**Option A: Vercel Postgres (Recommended)**
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your "sauna-cult-booking" project
3. Go to the "Storage" tab
4. Click "Create Database" → "Postgres"
5. Name it "sauna-cult-db"
6. Choose the "Hobby" plan (free)
7. Copy the connection string (starts with `postgresql://`)

**Option B: Supabase (Alternative)**
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string

**Option C: Railway (Another Option)**
1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Add a PostgreSQL database
4. Copy the connection string

### **Step 2: Add Environment Variables to Vercel**

1. In your Vercel project dashboard
2. Go to "Settings" → "Environment Variables"
3. Add these variables:

```
DATABASE_URL = your_postgres_connection_string_here
JWT_SECRET = your-random-secret-key-here-make-it-long-and-random
ADMIN_EMAIL = admin@saunacult.com
ADMIN_PASSWORD = admin123
```

**Important:** Make sure to replace `your_postgres_connection_string_here` with your actual database URL!

### **Step 3: Deploy the Updated Code**

The code is already updated with full database functionality. Just push to GitHub and Vercel will automatically deploy:

```bash
git add .
git commit -m "Add full database functionality"
git push origin main
```

### **Step 4: Set Up the Database Schema**

After deployment, you need to run the database setup. You can do this by:

1. **Option A: Using Vercel CLI (Recommended)**
   ```bash
   npx vercel env pull .env.local
   npx prisma db push
   npx prisma db seed
   ```

2. **Option B: Using Vercel's Terminal**
   - Go to your Vercel project dashboard
   - Go to "Functions" tab
   - Click on any function
   - Use the terminal to run:
     ```bash
     npx prisma db push
     npx prisma db seed
     ```

3. **Option C: Manual Setup**
   - Connect to your database directly
   - Run the SQL commands from the Prisma schema

## 🎯 **What This Gives You**

Once the database is set up, your Sauna Cult booking system will have:

### **✅ Full Functionality:**
- **Real Session Management** - Create, edit, delete sessions
- **Live Booking System** - Users can actually book sessions
- **User Management** - Track customer information
- **Admin Dashboard** - Manage everything from one place
- **Data Persistence** - All data is saved and persistent

### **🔧 Admin Features:**
- **Dashboard** - View statistics and overview
- **Session Management** - Add/edit/delete sauna sessions
- **Booking Management** - View and manage all bookings
- **User Tracking** - See customer information

### **💳 Payment Integration (Optional):**
- **Stripe Integration** - Ready for payment processing
- **Secure Checkout** - Professional payment flow

## 🛠️ **Troubleshooting**

### **Common Issues:**

1. **"Database not configured" error**
   - Make sure `DATABASE_URL` is set in Vercel environment variables
   - Check that the connection string is correct

2. **"Prisma client not found" error**
   - Run `npx prisma generate` locally
   - Make sure Prisma is installed

3. **"Table doesn't exist" error**
   - Run `npx prisma db push` to create the database schema
   - Run `npx prisma db seed` to add sample data

4. **Build fails on Vercel**
   - Check that all environment variables are set
   - Make sure the database URL is accessible from Vercel

### **Getting Help:**

If you run into issues:
1. Check the Vercel deployment logs
2. Make sure all environment variables are set correctly
3. Verify the database connection string is valid
4. Try running the database setup commands locally first

## 🎉 **Success!**

Once everything is set up, you'll have a fully functional sauna booking system with:
- Real database storage
- User management
- Session management
- Admin dashboard
- Professional booking flow

Your customers will be able to browse sessions, book appointments, and you'll be able to manage everything from the admin panel!

## 📞 **Need Help?**

If you get stuck, check:
1. Vercel deployment logs
2. Database connection status
3. Environment variables are set correctly
4. Prisma schema is pushed to database

The system is designed to be robust and handle errors gracefully, so even if something goes wrong, the basic functionality will still work.