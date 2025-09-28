import Header from '@/components/Header'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sauna-50 to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="text-sauna-600">Sauna Cult</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing the ancient tradition of sauna therapy 
            to the modern world, creating a sanctuary for wellness, relaxation, and community.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Sauna Cult, we believe that regular sauna sessions are essential for 
                maintaining optimal health and well-being. Our mission is to make this 
                ancient wellness practice accessible to everyone in a modern, comfortable environment.
              </p>
              <p className="text-lg text-gray-600">
                We've created a space where you can escape the stresses of daily life, 
                detoxify your body, and reconnect with yourself in a peaceful, nurturing atmosphere.
              </p>
            </div>
            <div className="bg-sauna-100 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-sauna-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">🌡️</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Optimal Heat</h3>
                  <p className="text-sm text-gray-600">Perfect temperature control</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-sauna-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">⏰</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Flexible Timing</h3>
                  <p className="text-sm text-gray-600">Sessions throughout the day</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-sauna-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">👥</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Private Sessions</h3>
                  <p className="text-sm text-gray-600">Your own space</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-sauna-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Safe & Clean</h3>
                  <p className="text-sm text-gray-600">Highest hygiene standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}