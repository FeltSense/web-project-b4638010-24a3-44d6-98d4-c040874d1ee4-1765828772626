'use client';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-4 py-2 mb-6 sm:mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white font-semibold text-sm">🔥 Trending Now: 10K+ Memes Generated Today</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Turn Trends Into
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
                Viral Memes
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              AI-powered meme magic that keeps you ahead of the curve. Generate trending memes in seconds, not hours. 
              <span className="font-semibold text-yellow-200"> No design skills needed.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="group relative bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Start Creating Free 🚀</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Watch Demo ▶️
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-600 border-2 border-white"></div>
                </div>
                <span className="text-sm font-semibold">50K+ creators</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-300">★★★★★</span>
                <span className="text-sm font-semibold ml-1">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right content - Meme showcase */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border-2 border-white/20 shadow-2xl">
              {/* Floating meme cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                    <div>
                      <div className="font-bold text-gray-800">Drake Meme</div>
                      <div className="text-xs text-gray-500">Generated 2 min ago</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl h-32 flex items-center justify-center">
                    <span className="text-4xl">🎵</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">Trending: Tech</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">+2.4K likes</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full"></div>
                    <div>
                      <div className="font-bold text-gray-800">Distracted Boyfriend</div>
                      <div className="text-xs text-gray-500">Generated 5 min ago</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl h-32 flex items-center justify-center">
                    <span className="text-4xl">😱</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">Trending: News</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">+1.8K likes</span>
                  </div>
                </div>
              </div>

              {/* Trend indicator */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm animate-bounce">
                🔥 Trending: AI
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl">
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-xs text-gray-600 font-semibold">Memes/Day</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl">
              <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                {"<1s"}
              </div>
              <div className="text-xs text-gray-600 font-semibold">Generation Time</div>
            </div>
          </div>
        </div>

        {/* Features strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-3">🤖</div>
            <div className="text-white font-bold text-lg mb-2">AI-Powered</div>
            <div className="text-white/80 text-sm">Smart trend detection & instant generation</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-3">📈</div>
            <div className="text-white font-bold text-lg mb-2">Real-Time Trends</div>
            <div className="text-white/80 text-sm">Stay ahead with trending topics & events</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-3">🎨</div>
            <div className="text-white font-bold text-lg mb-2">Popular Templates</div>
            <div className="text-white/80 text-sm">100+ viral meme formats at your fingertips</div>
          </div>
        </div>
      </div>
    </div>
  );
}