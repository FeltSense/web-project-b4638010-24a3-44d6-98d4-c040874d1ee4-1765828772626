export default function Testimonials() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
  {/* Decorative background elements */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
  <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
  <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300 rounded-full opacity-20 blur-2xl"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="text-5xl animate-bounce inline-block">😂</span>
        <span className="text-5xl animate-bounce inline-block animation-delay-100">🔥</span>
        <span className="text-5xl animate-bounce inline-block animation-delay-200">✨</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
        Meme Lords Speak
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Real creators. Real results. Real internet clout. 🚀
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Testimonial 1 */}
      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-purple-300 transform hover:-translate-y-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl">
                🎨
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Sarah "MemeMom" Chen</h3>
            <p className="text-sm text-purple-600 font-semibold">@memequeen_official</p>
          </div>
        </div>
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Generated <span className="font-bold text-purple-600">47 viral memes</span> last week that got me <span className="font-bold text-pink-600">2.3M impressions</span>! The AI nailed the Biden ice cream cone trend before anyone else. My engagement is up 340% 📈"
        </p>
        <div className="flex gap-2 text-sm text-gray-500">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">Content Creator</span>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-pink-300 transform hover:-translate-y-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl">
                💼
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Marcus "The Brand Guy" Rodriguez</h3>
            <p className="text-sm text-orange-600 font-semibold">Social Media Manager</p>
          </div>
        </div>
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Our brand&apos;s Twitter went from <span className="font-bold text-orange-600">boring corporate</span> to <span className="font-bold text-pink-600">actually funny</span> in 2 weeks. Created 23 trending memes during the Oscars slap situation and got <span className="font-bold text-purple-600">featured on BuzzFeed</span>. Boss gave me a raise! 💰"
        </p>
        <div className="flex gap-2 text-sm text-gray-500">
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">Marketing Pro</span>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-yellow-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl">
                🎮
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Alex "Dank Lord" Thompson</h3>
            <p className="text-sm text-green-600 font-semibold">@thedanklord</p>
          </div>
        </div>
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Went from <span className="font-bold text-green-600">500 followers to 89K</span> in 3 months using Cool Dude&apos;s memes. Hit the front page of Reddit <span className="font-bold text-blue-600">12 times</span> with AI-generated content about the GameStop situation. Now I monetize my meme page full-time! 🎯"
        </p>
        <div className="flex gap-2 text-sm text-gray-500">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Meme Influencer</span>
        </div>
      </div>

      {/* Testimonial 4 - Special Wide Card */}
      <div className="md:col-span-2 lg:col-span-3 group bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-[3px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="bg-white rounded-3xl p-8 md:p-10 h-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl md:text-5xl">
                  🚀
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-lg">
                TOP USER
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-black text-2xl md:text-3xl text-gray-900 mb-2">Jamie "Meme Machine" Park</h3>
              <p className="text-lg text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold">Head of Growth at TrendyTech</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">10K+ Memes</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">Power User</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Beta Tester</span>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            "Cool Dude saved our marketing budget by <span className="font-bold text-purple-600">$15,000/month</span>. We canceled our expensive agency and now generate <span className="font-bold text-pink-600">500+ custom memes weekly</span> that get <span className="font-bold text-orange-600">5x better engagement</span> than stock content. The trending event detection is SCARY accurate - we&apos;re always first to jump on new trends. This tool is literally printing engagement. 🖨️✨"
          </p>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border-4 border-purple-200">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            50K+
          </div>
          <div className="text-gray-600 font-semibold">Memes Generated Daily</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
            4.9/5
          </div>
          <div className="text-gray-600 font-semibold">Average Rating</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
            98%
          </div>
          <div className="text-gray-600 font-semibold">Would Recommend</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
            2M+
          </div>
          <div className="text-gray-600 font-semibold">Happy Memers</div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    .animate-bounce {
      animation: bounce 1s ease-in-out infinite;
    }
    .animation-delay-100 {
      animation-delay: 0.1s;
    }
    .animation-delay-200 {
      animation-delay: 0.2s;
    }
  `}</style>
</section>
  );
}