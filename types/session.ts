export interface Session {
  id: string
  title: string
  description: string
  date: string
  startTime: string
  endTime: string
  capacity: number
  price: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  bookings?: Booking[]
}

export interface Booking {
  id: string
  userId: string
  sessionId: string
  status: 'pending' | 'confirmed' | 'cancelled'
  paymentId?: string
  createdAt: string
  updatedAt: string
  user?: User
  session?: Session
}

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  createdAt: string
  updatedAt: string
  bookings?: Booking[]
}