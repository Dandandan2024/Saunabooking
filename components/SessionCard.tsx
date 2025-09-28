'use client'

import { Session } from '@/types/session'
import { format, parseISO } from 'date-fns'
import { Clock, Users, Thermometer } from 'lucide-react'

interface SessionCardProps {
  session: Session
  onBook: () => void
}

export default function SessionCard({ session, onBook }: SessionCardProps) {
  const isFullyBooked = session.bookings && session.bookings.length >= session.capacity

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{session.title}</h3>
        <div className="text-2xl font-bold text-sauna-600">${session.price}</div>
      </div>
      
      <p className="text-gray-600 mb-4">{session.description}</p>
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-sauna-600" />
          <span>{format(parseISO(session.date), 'EEEE, MMMM d, yyyy')}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-sauna-600" />
          <span>{session.startTime} - {session.endTime}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2 text-sauna-600" />
          <span>
            {session.bookings ? session.bookings.length : 0} / {session.capacity} spots taken
          </span>
        </div>
      </div>
      
      <button
        onClick={onBook}
        disabled={isFullyBooked || !session.isActive}
        className={`w-full font-medium py-2 px-4 rounded-lg transition-colors ${
          isFullyBooked || !session.isActive
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-sauna-600 hover:bg-sauna-700 text-white'
        }`}
      >
        {isFullyBooked ? 'Fully Booked' : !session.isActive ? 'Unavailable' : 'Book This Session'}
      </button>
    </div>
  )
}