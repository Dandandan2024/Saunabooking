# 🧖‍♀️ Sauna Cult - Premium Sauna Booking System

A modern, full-featured sauna booking system built with Next.js 14, TypeScript, Prisma, and Stripe.

## ✨ Features

### 🎯 Customer Features
- **Easy Session Booking** - Browse and book sauna sessions with just a few clicks
- **Real-time Availability** - See live session availability and capacity
- **Secure Payments** - Integrated Stripe payment processing
- **Mobile Responsive** - Beautiful design that works on all devices
- **Session Management** - View and manage your bookings

### 🔧 Admin Features
- **Dashboard** - Comprehensive admin dashboard with statistics
- **Session Management** - Create, edit, and manage sauna sessions
- **Booking Management** - View and manage all customer bookings
- **User Management** - Track customer information and booking history
- **Revenue Tracking** - Monitor earnings and booking statistics

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Stripe account (for payments)

### 1. Clone and Install
```bash
git clone https://github.com/Dandandan2024/Saunabooking.git
cd Saunabooking
npm install
```

### 2. Environment Setup
Create a `.env.local` file:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/sauna_cult"

# Stripe (get from https://stripe.com)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."

# JWT Secret (generate a random string)
JWT_SECRET="your-super-secret-jwt-key"

# Admin Credentials
ADMIN_EMAIL="admin@saunacult.com"
ADMIN_PASSWORD="admin123"
```

### 3. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed with sample data
npm run db:seed
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your sauna booking system!

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Payments**: Stripe
- **Authentication**: JWT tokens
- **UI Components**: Headless UI, Heroicons, Lucide React

### Database Schema
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  phone     String?
  bookings  Booking[]
}

model Session {
  id          String    @id @default(cuid())
  title       String
  description String
  date        DateTime
  startTime   String
  endTime     String
  capacity    Int
  price       Float
  isActive    Boolean
  bookings    Booking[]
}

model Booking {
  id        String   @id @default(cuid())
  userId    String
  sessionId String
  status    String   // pending, confirmed, cancelled
  paymentId String?
  user      User     @relation(fields: [userId], references: [id])
  session   Session  @relation(fields: [sessionId], references: [id])
}
```

## 📱 Pages & Features

### Customer Pages
- **Home** (`/`) - Browse and book sessions
- **About** (`/about`) - Learn about Sauna Cult
- **Contact** (`/contact`) - Get in touch
- **Payment** (`/payment`) - Secure checkout process
- **Success** (`/payment/success`) - Booking confirmation

### Admin Pages
- **Admin Login** (`/admin/login`) - Secure admin authentication
- **Dashboard** (`/admin`) - Overview and statistics
- **Session Management** - Create and manage sessions
- **Booking Management** - View and manage bookings

## 🔐 Admin Access

**Default Admin Credentials:**
- Email: `admin@saunacult.com`
- Password: `admin123`

*Change these in production!*

## 💳 Payment Integration

The system uses Stripe for secure payment processing:

1. **Test Mode**: Use Stripe test keys for development
2. **Production**: Replace with live keys for production
3. **Webhooks**: Configure Stripe webhooks for payment confirmations

### Stripe Setup
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the dashboard
3. Add them to your `.env.local` file
4. Test with Stripe's test card numbers

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

### Manual Deployment
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Set up PostgreSQL database
4. Configure environment variables

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push schema to database
npm run db:seed      # Seed database with sample data
```

### Project Structure
```
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── admin/          # Admin pages
│   ├── payment/        # Payment pages
│   └── page.tsx        # Home page
├── components/          # React components
├── lib/                # Utility libraries
├── prisma/             # Database schema and migrations
├── types/              # TypeScript type definitions
└── public/             # Static assets
```

## 🎨 Customization

### Branding
- Update colors in `tailwind.config.js`
- Replace logo and branding in components
- Customize the hero section and messaging

### Features
- Add email notifications
- Implement user accounts
- Add session reviews and ratings
- Create membership tiers

## 📊 Analytics & Monitoring

The system includes built-in tracking for:
- Session bookings and revenue
- User engagement
- Admin activity
- Payment success rates

## 🔒 Security

- JWT-based authentication
- Secure password hashing with bcrypt
- Input validation and sanitization
- CSRF protection
- Rate limiting on API endpoints

## 📞 Support

For support or questions:
- Email: hello@saunacult.com
- GitHub Issues: [Create an issue](https://github.com/Dandandan2024/Saunabooking/issues)

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for the Sauna Cult community**