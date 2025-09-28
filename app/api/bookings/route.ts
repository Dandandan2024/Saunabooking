import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { sessionId, user } = body

    // Check if session exists and has capacity
    const session = await prisma.session.findUnique({
      where: { id: sessionId },
      include: {
        bookings: {
          where: {
            status: {
              in: ['pending', 'confirmed']
            }
          }
        }
      }
    })

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      )
    }

    if (session.bookings.length >= session.capacity) {
      return NextResponse.json(
        { error: 'Session is fully booked' },
        { status: 400 }
      )
    }

    // Create or find user
    let dbUser = await prisma.user.findUnique({
      where: { email: user.email }
    })

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
          phone: user.phone || null,
        }
      })
    }

    // Check if user already has a booking for this session
    const existingBooking = await prisma.booking.findUnique({
      where: {
        userId_sessionId: {
          userId: dbUser.id,
          sessionId: sessionId
        }
      }
    })

    if (existingBooking) {
      return NextResponse.json(
        { error: 'You already have a booking for this session' },
        { status: 400 }
      )
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        userId: dbUser.id,
        sessionId: sessionId,
        status: 'pending'
      },
      include: {
        session: true,
        user: true
      }
    })

    return NextResponse.json(booking)
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json([])
    }

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    const bookings = await prisma.booking.findMany({
      where: userId ? { userId } : {},
      include: {
        session: true,
        user: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}