import { Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-[#FAFAFA] px-6 md:px-16 py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-1 text-left max-w-2xl">
          {/* Student Images */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex -space-x-3">
              <img src="/images/black female (1).png" alt="Student" className="w-12 h-12 rounded-full border-3 border-white shadow-sm" />
              <img src="/images/black female (2).png" alt="Student" className="w-12 h-12 rounded-full border-3 border-white shadow-sm" />
              <img src="/images/black female (3).png" alt="Student" className="w-12 h-12 rounded-full border-3 border-white shadow-sm" />
            </div>
            <p className="text-sm text-gray-700">
              <span className="text-[#FF5722] font-bold">500+ </span>
              Students on waitlist
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#1a1a1a]">
            Find Verified Hostels.<br />
            Skip The Stress.
          </h1>
          
          <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-600">
            No agent wahala. From hustle to hostel, Unilag students dey use our platform to find verified, affordable hostels wey no get fake listing or hidden charges
          </p>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#2B3C6F] text-white px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-sm">
              <Star className="fill-[#FFD700] text-[#FFD700]" size={18} />
              <span className="font-semibold text-sm">4.7 Rated</span>
            </div>
            <p className="text-gray-700 text-sm">By satisfied students</p>
          </div>

          {/* Email Input */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch max-w-xl bg-white p-2 rounded-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-full bg-white text-base"
            />
            <button className="bg-[#FF5722] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e64a19] transition-colors whitespace-nowrap shadow-lg shadow-[#FF5722]/30">
              Join Wishlist
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <img src="/images/Rentimo Phones.png" alt="Rentimo App" className="w-full max-w-xl drop-shadow-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
