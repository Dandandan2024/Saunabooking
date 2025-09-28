import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        totalSessions: 0,
        totalBookings: 0,
        totalRevenue: 0,
        upcomingSessions: 0
      })
    }

    const [
      totalSessions,
      totalBookings,
      confirmedBookings,
      upcomingSessions
    ] = await Promise.all([
      prisma.session.count(),
      prisma.booking.count(),
      prisma.booking.findMany({
        where: { status: 'confirmed' },
        include: { session: true }
      }),
      prisma.session.count({
        where: {
          date: {
            gte: new Date()
          },
          isActive: true
        }
      })
    ])

    const totalRevenue = confirmedBookings.reduce((sum, booking) => {
      return sum + booking.session.price
    }, 0)

    return NextResponse.json({
      totalSessions,
      totalBookings,
      totalRevenue,
      upcomingSessions
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json({
      totalSessions: 0,
      totalBookings: 0,
      totalRevenue: 0,
      upcomingSessions: 0
    })
  }
}