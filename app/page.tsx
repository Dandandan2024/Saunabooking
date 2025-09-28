import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sauna-50 to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to{' '}
            <span className="text-sauna-600">Sauna Cult</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the ultimate relaxation and wellness with our premium sauna sessions. 
            Book your session in just a few clicks.
          </p>
        </div>

        {/* Sample Sessions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Morning Wellness Session</h3>
              <div className="text-2xl font-bold text-sauna-600">$45</div>
            </div>
            <p className="text-gray-600 mb-4">Start your day with a rejuvenating sauna session</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-600">
                <span className="w-4 h-4 mr-2 text-sauna-600">🕐</span>
                <span>07:00 - 08:00</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="w-4 h-4 mr-2 text-sauna-600">👥</span>
                <span>2 spots available</span>
              </div>
            </div>
            <button className="w-full bg-sauna-600 hover:bg-sauna-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Book This Session
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Afternoon Relaxation</h3>
              <div className="text-2xl font-bold text-sauna-600">$50</div>
            </div>
            <p className="text-gray-600 mb-4">Perfect for unwinding after a busy day</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-600">
                <span className="w-4 h-4 mr-2 text-sauna-600">🕐</span>
                <span>15:00 - 16:00</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="w-4 h-4 mr-2 text-sauna-600">👥</span>
                <span>3 spots available</span>
              </div>
            </div>
            <button className="w-full bg-sauna-600 hover:bg-sauna-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Book This Session
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Evening Detox Session</h3>
              <div className="text-2xl font-bold text-sauna-600">$55</div>
            </div>
            <p className="text-gray-600 mb-4">End your day with a cleansing sauna experience</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-600">
                <span className="w-4 h-4 mr-2 text-sauna-600">🕐</span>
                <span>19:00 - 20:00</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="w-4 h-4 mr-2 text-sauna-600">👥</span>
                <span>2 spots available</span>
              </div>
            </div>
            <button className="w-full bg-sauna-600 hover:bg-sauna-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Book This Session
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-sauna-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">🌡️</span>
            </div>
            <h3 className="font-semibold text-gray-900">Premium Heat</h3>
            <p className="text-sm text-gray-600">Optimal temperature control</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-sauna-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="font-semibold text-gray-900">Flexible Times</h3>
            <p className="text-sm text-gray-600">Multiple sessions daily</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-sauna-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-semibold text-gray-900">Private Sessions</h3>
            <p className="text-sm text-gray-600">Your own space</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-sauna-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-semibold text-gray-900">Central Location</h3>
            <p className="text-sm text-gray-600">Easy to find</p>
          </div>
        </div>
      </main>
    </div>
  )
}