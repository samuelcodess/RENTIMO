const HowItWorks = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            Three simple steps to find your perfect student accommodation
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {/* Card 1 - Explore Verified Listings */}
          <div className="bg-[#FFF0ED] rounded-3xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Explore Verified Listings
              </h3>
              <p className="text-gray-600">
                Find apartments, rooms, or shared spaces that fit your budget.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/Hero Section.png" 
                alt="Browse Listings" 
                className="w-full max-w-sm rounded-2xl"
              />
            </div>
          </div>

          {/* Card 2 - Chat Directly with Landlords */}
          <div className="bg-[#FFE8F0] rounded-3xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Chat Directly with Landlords
              </h3>
              <p className="text-gray-600">
                Ask questions and negotiate without middlemen.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 space-y-4">
              {/* Chat Message 1 - User */}
              <div className="flex justify-end">
                <div className="flex items-end gap-2 max-w-[85%]">
                  <div className="bg-[#FF5722] text-white rounded-2xl rounded-br-sm px-5 py-3">
                    <p className="text-sm mb-2">Hi, I am interested in the 2-bedroom apartment you listed. Is it still available?</p>
                    <p className="text-xs opacity-90">Read ✓✓ • 05:02 pm</p>
                  </div>
                  <img src="/images/black female (1).png" alt="User" className="w-8 h-8 rounded-lg" />
                </div>
              </div>

              {/* Chat Message 2 - Landlord */}
              <div className="flex justify-start">
                <div className="flex items-end gap-2 max-w-[85%]">
                  <img src="/images/black female (2).png" alt="Landlord" className="w-8 h-8 rounded-lg" />
                  <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-sm px-5 py-3">
                    <p className="text-sm">Yes, it is available. Would you like to schedule a visit?</p>
                  </div>
                </div>
              </div>

              {/* Chat Message 3 - User */}
              <div className="flex justify-end">
                <div className="flex items-end gap-2 max-w-[85%]">
                  <div className="bg-[#FF5722] text-white rounded-2xl rounded-br-sm px-5 py-3">
                    <p className="text-sm mb-2">That would be great. This Saturday works for me.</p>
                    <p className="text-xs opacity-90">Read ✓✓ • 05:02 pm</p>
                  </div>
                  <img src="/images/black female (1).png" alt="User" className="w-8 h-8 rounded-lg" />
                </div>
              </div>

              {/* Chat Message 4 - Landlord */}
              <div className="flex justify-start">
                <div className="flex items-end gap-2 max-w-[85%]">
                  <img src="/images/black female (2).png" alt="Landlord" className="w-8 h-8 rounded-lg" />
                  <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-sm px-5 py-3">
                    <p className="text-sm">Perfect, see you then!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Schedule a Viewing - Full Width */}
          <div className="col-span-2 bg-[#E8E6FF] rounded-3xl p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Schedule a Viewing Easily
              </h3>
              <p className="text-gray-600 text-lg">
                Pick a convenient time to visit, confirm with the landlord, and walk into your potential new home with confidence.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/images/hand phone.png" 
                alt="Schedule Viewing" 
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>

        {/* Mobile: Scrollable Cards */}
        <div className="md:hidden flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          <div className="snap-center flex-shrink-0 w-[85%] bg-[#FFF0ED] rounded-3xl overflow-hidden">
            <div className="px-6 pt-6 pb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Explore Verified Listings
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Find apartments, rooms, or shared spaces that fit your budget.
              </p>
            </div>
            <div className="px-2">
              <img 
                src="/images/Hero Section.png" 
                alt="Browse Listings" 
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          <div className="snap-center flex-shrink-0 w-[85%] bg-[#FFE8F0] rounded-3xl overflow-hidden">
            <div className="px-6 pt-6 pb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Chat Directly with Landlords
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Ask questions and negotiate without middlemen.
              </p>
            </div>
            <div className="px-4 pb-4">
              <div className="bg-white rounded-2xl p-4 space-y-3">
                {/* Chat Message 1 - User */}
                <div className="flex justify-end">
                  <div className="flex items-end gap-2 max-w-[85%]">
                    <div className="bg-[#FF5722] text-white rounded-xl rounded-br-sm px-4 py-2">
                      <p className="text-xs mb-1">Hi, I am interested in the 2-bedroom apartment you listed. Is it still available?</p>
                      <p className="text-[10px] opacity-90">Read ✓✓ • 05:02 pm</p>
                    </div>
                    <img src="/images/black female (1).png" alt="User" className="w-6 h-6 rounded-lg" />
                  </div>
                </div>

                {/* Chat Message 2 - Landlord */}
                <div className="flex justify-start">
                  <div className="flex items-end gap-2 max-w-[85%]">
                    <img src="/images/black female (2).png" alt="Landlord" className="w-6 h-6 rounded-lg" />
                    <div className="bg-gray-100 text-gray-900 rounded-xl rounded-bl-sm px-4 py-2">
                      <p className="text-xs">Yes, it is available. Would you like to schedule a visit?</p>
                    </div>
                  </div>
                </div>

                {/* Chat Message 3 - User */}
                <div className="flex justify-end">
                  <div className="flex items-end gap-2 max-w-[85%]">
                    <div className="bg-[#FF5722] text-white rounded-xl rounded-br-sm px-4 py-2">
                      <p className="text-xs mb-1">That would be great. This Saturday works for me.</p>
                      <p className="text-[10px] opacity-90">Read ✓✓ • 05:02 pm</p>
                    </div>
                    <img src="/images/black female (1).png" alt="User" className="w-6 h-6 rounded-lg" />
                  </div>
                </div>

                {/* Chat Message 4 - Landlord */}
                <div className="flex justify-start">
                  <div className="flex items-end gap-2 max-w-[85%]">
                    <img src="/images/black female (2).png" alt="Landlord" className="w-6 h-6 rounded-lg" />
                    <div className="bg-gray-100 text-gray-900 rounded-xl rounded-bl-sm px-4 py-2">
                      <p className="text-xs">Perfect, see you then!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="snap-center flex-shrink-0 w-[85%] bg-[#E8E6FF] rounded-3xl overflow-hidden">
            <div className="px-6 pt-6 pb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Schedule a Viewing Easily
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Pick a convenient time to visit, confirm with the landlord, and walk into your potential new home with confidence.
              </p>
            </div>
            <div className="flex justify-center px-2">
              <img 
                src="/images/hand phone.png" 
                alt="Schedule Viewing" 
                className="w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
