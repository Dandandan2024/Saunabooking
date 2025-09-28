import Link from 'next/link'
import { CalendarDays, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sauna-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sauna Cult</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sauna-600 font-medium transition-colors flex items-center space-x-1">
              <CalendarDays className="w-4 h-4" />
              <span>Book Session</span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-sauna-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-sauna-600 font-medium transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-sauna-600 font-medium transition-colors flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}