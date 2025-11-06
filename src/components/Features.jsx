const Features = () => {
  const features = [
    {
      icon: '/images/green.svg',
      title: '100% Verified',
      description: 'Every hostel is physically inspected and verified by our team before listing'
    },
    {
      icon: '/images/orange.svg',
      title: 'Transparent Pricing',
      description: 'See the exact price upfront - no hidden fees, no surprise charges'
    },
    {
      icon: '/images/blue.svg',
      title: 'Instant Booking',
      description: 'Book your room instantly online - no lengthy negotiations or delays'
    }
  ]

  return (
    <section className="py-20 px-5 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
          A Better Way to Find Student Housing
        </h2>
        <p className="text-lg text-gray-600">
          Rentimo eliminates the stress with verified listings and transparent student pricing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6">
            <img 
              src={feature.icon} 
              alt={feature.title} 
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
