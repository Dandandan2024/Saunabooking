import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Check if database is available
    if (!process.env.DATABASE_URL) {
      // Return sample data for build time
      const sampleSessions = [
        {
          id: '1',
          title: 'Morning Wellness Session',
          description: 'Start your day with a rejuvenating sauna session',
          date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
          startTime: '07:00',
          endTime: '08:00',
          capacity: 2,
          price: 45.00,
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          bookings: []
        },
        {
          id: '2',
          title: 'Afternoon Relaxation',
          description: 'Perfect for unwinding after a busy day',
          date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
          startTime: '15:00',
          endTime: '16:00',
          capacity: 3,
          price: 50.00,
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          bookings: []
        },
        {
          id: '3',
          title: 'Evening Detox Session',
          description: 'End your day with a cleansing sauna experience',
          date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
          startTime: '19:00',
          endTime: '20:00',
          capacity: 2,
          price: 55.00,
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          bookings: []
        }
      ]
      return NextResponse.json(sampleSessions)
    }

    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    
    const where: any = {
      isActive: true,
    }
    
    if (date) {
      const startOfDay = new Date(date)
      startOfDay.setHours(0, 0, 0, 0)
      const endOfDay = new Date(date)
      endOfDay.setHours(23, 59, 59, 999)
      
      where.date = {
        gte: startOfDay,
        lte: endOfDay,
      }
    }

    const sessions = await prisma.session.findMany({
      where,
      include: {
        bookings: {
          where: {
            status: {
              in: ['pending', 'confirmed']
            }
          }
        }
      },
      orderBy: {
        startTime: 'asc'
      }
    })

    return NextResponse.json(sessions)
  } catch (error) {
    console.error('Error fetching sessions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch sessions' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { title, description, date, startTime, endTime, capacity, price } = body

    const session = await prisma.session.create({
      data: {
        title,
        description,
        date: new Date(date),
        startTime,
        endTime,
        capacity: parseInt(capacity),
        price: parseFloat(price),
      },
    })

    return NextResponse.json(session)
  } catch (error) {
    console.error('Error creating session:', error)
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 }
    )
  }
}