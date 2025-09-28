import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const booking = await prisma.booking.update({
      where: { id: params.id },
      data: { status: 'confirmed' },
      include: {
        session: true,
        user: true
      }
    })

    return NextResponse.json(booking)
  } catch (error) {
    console.error('Error confirming booking:', error)
    return NextResponse.json(
      { error: 'Failed to confirm booking' },
      { status: 500 }
    )
  }
}