'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import toast from 'react-hot-toast'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface Booking {
  id: string
  session: {
    title: string
    date: string
    startTime: string
    endTime: string
    price: number
  }
  user: {
    name: string
    email: string
  }
}

function CheckoutForm({ booking }: { booking: Booking }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success?bookingId=${booking.id}`,
        },
      })

      if (error) {
        toast.error(error.message || 'Payment failed')
      }
    } catch (error) {
      toast.error('Payment failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-sauna-600 hover:bg-sauna-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : `Pay $${booking.session.price}`}
      </button>
    </form>
  )
}

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get('bookingId')
  const [booking, setBooking] = useState<Booking | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (bookingId) {
      fetchBooking()
    }
  }, [bookingId])

  const fetchBooking = async () => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}`)
      if (response.ok) {
        const data = await response.json()
        setBooking(data)
      } else {
        toast.error('Booking not found')
      }
    } catch (error) {
      toast.error('Failed to load booking')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sauna-600"></div>
      </div>
    )
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking not found</h1>
          <Link href="/" className="text-sauna-600 hover:text-sauna-700">
            Return to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="flex items-center text-sauna-600 hover:text-sauna-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to sessions
          </Link>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Booking</h1>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900">{booking.session.title}</h3>
                <p className="text-gray-600">
                  {new Date(booking.session.date).toLocaleDateString()} at {booking.session.startTime} - {booking.session.endTime}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Booked by: {booking.user.name}</p>
                <p className="text-sm text-gray-600">{booking.user.email}</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-sauna-600">${booking.session.price}</span>
                </div>
              </div>
            </div>

            <Elements stripe={stripePromise}>
              <CheckoutForm booking={booking} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  )
}