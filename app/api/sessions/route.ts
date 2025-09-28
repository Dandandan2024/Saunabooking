import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
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