'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get('bookingId')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (bookingId) {
      confirmPayment()
    }
  }, [bookingId])

  const confirmPayment = async () => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}/confirm`, {
        method: 'POST'
      })
      
      if (response.ok) {
        toast.success('Payment confirmed!')
      } else {
        toast.error('Failed to confirm payment')
      }
    } catch (error) {
      toast.error('Failed to confirm payment')
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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Your sauna session has been booked successfully. You will receive a confirmation email shortly.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-sauna-600 hover:bg-sauna-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Book Another Session
          </Link>
          <Link
            href="/contact"
            className="block w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}