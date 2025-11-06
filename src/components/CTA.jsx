const CTA = () => {
  return (
    <section className="relative bg-[#FF5722] text-white rounded-3xl mx-5 md:mx-12 my-20 p-12 md:p-16 lg:p-10 overflow-hidden">
      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Be the First to Experience<br />
            Stress-Free Renting
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-95 leading-relaxed">
            Join the waitlist today and get early access to<br className="hidden sm:block" /> 
            verified listings and direct landlord connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start max-w-xl bg-white p-1 rounded-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:flex-1 px-6 py-4 rounded-full border-none bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-base"
            />
            <button className="w-full sm:w-auto bg-[#FF5722] text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Join Wishlist
            </button>
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="hidden lg:block">
          <img 
            src="/images/half.png" 
            alt="Rentimo App" 
            className="w-full max-w-md lg:max-w-2xl xl:max-w-xl h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default CTA
