import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
  {/* Floating emoji decorations */}
  <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>😂</div>
  <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🔥</div>
  <div className="absolute bottom-20 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>💯</div>
  <div className="absolute bottom-40 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🚀</div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
          ⚡ Supercharge Your Meme Game
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent leading-tight">
        Meme Magic at Your Fingertips
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
        Turn trending moments into viral gold with AI-powered meme generation that&apos;s faster than you can say "stonks" 📈
      </p>
    </div>

    {/* Services Grid - Asymmetric Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      
      {/* Service 1 - Large Featured */}
      <div className="lg:col-span-7 group relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 lg:p-10 overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-2">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="relative z-10">
          <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">🤖</span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
            AI-Powered Meme Generation
          </h3>
          <p className="text-purple-100 text-lg mb-6 leading-relaxed">
            Our cutting-edge AI analyzes trending events in real-time and automatically generates relevant, hilarious memes. Just describe what&apos;s happening, and watch the magic unfold in seconds.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">Smart Context</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">Lightning Fast</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">Always Fresh</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
          <Image 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" 
            width={400} 
            height={400} 
            alt="AI technology visualization"
            className="rounded-tl-3xl"
          />
        </div>
      </div>

      {/* Service 2 - Vertical Card */}
      <div className="lg:col-span-5 group bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 hover:-translate-y-2">
        <div className="relative z-10 h-full flex flex-col">
          <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">📱</span>
          </div>
          <h3 className="text-3xl font-black text-white mb-4">
            Popular Meme Templates
          </h3>
          <p className="text-pink-100 text-lg mb-6 leading-relaxed flex-grow">
            Access thousands of trending meme formats from Drake to Distracted Boyfriend. All templates are pre-optimized and ready to customize with your content.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm">1000+ Templates</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="text-white font-semibold text-sm">Updated Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 - Wide Card */}
      <div className="lg:col-span-5 group bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 hover:-translate-y-2">
        <div className="relative z-10">
          <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">🔥</span>
          </div>
          <h3 className="text-3xl font-black text-white mb-4">
            Real-Time Trend Detection
          </h3>
          <p className="text-orange-100 text-lg mb-6 leading-relaxed">
            Never miss a viral moment. Our AI monitors social media trends 24/7 and suggests timely meme opportunities before they peak.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
              <div className="text-2xl font-black text-white">24/7</div>
              <div className="text-xs text-orange-100 font-semibold">Monitoring</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
              <div className="text-2xl font-black text-white">&lt;5min</div>
              <div className="text-xs text-orange-100 font-semibold">Alert Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Wide Card */}
      <div className="lg:col-span-7 group relative bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 lg:p-10 overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-2">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
              One-Click Social Sharing
            </h3>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              Created the perfect meme? Share it instantly to Instagram, Twitter, TikTok, and more. Optimized formats for each platform, automatically sized and ready to post.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white flex items-center justify-center text-white font-bold text-xs">IG</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white font-bold text-xs">X</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-600 border-2 border-white flex items-center justify-center text-white font-bold text-xs">TT</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-white flex items-center justify-center text-white font-bold text-xs">FB</div>
              </div>
              <span className="text-white font-bold text-sm">+ 10 more platforms</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-xl">
        <span className="text-2xl">⚡</span>
        <span className="text-gray-700 font-semibold">Ready to go viral?</span>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
          Start Memeing Free
        </button>
      </div>
    </div>
  </div>
</section>
  );
}