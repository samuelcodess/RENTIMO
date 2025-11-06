import { Star } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Testimonials = () => {
  const controls = useAnimation()

  const testimonials = [
    {
      name: 'Olivia Rhye',
      role: '100 Level Student',
      image: '/images/olivia.png',
      rating: 5,
      text: 'Rentimo made my house hunt so much easier. I found a place in less than a week and spoke directly with the landlord—no stress, no extra fees.'
    },
    {
      name: 'Tunde Ade',
      role: '300 Level Student',
      image: '/images/tunde.png',
      rating: 4,
      text: 'I love how transparent the process is. Being able to chat with the landlord directly gave me peace of mind before visiting.'
    },
    {
      name: 'Susan Pams',
      role: '200 Level Student',
      image: '/images/susan.png',
      rating: 4.5,
      text: 'Booking a visitation was so smooth. I finally feel like renting is in my control, not some agent\'s hands.'
    },
    {
      name: 'Chioma Okafor',
      role: '400 Level Student',
      image: '/images/olivia.png',
      rating: 5,
      text: 'The verification process gave me confidence. No surprises when I arrived for the viewing—everything was exactly as listed.'
    },
    {
      name: 'David Adeyemi',
      role: '200 Level Student',
      image: '/images/tunde.png',
      rating: 5,
      text: 'Finding affordable accommodation near campus was a nightmare until I discovered Rentimo. The platform is straightforward and reliable.'
    },
    {
      name: 'Grace Nwankwo',
      role: '100 Level Student',
      image: '/images/susan.png',
      rating: 4,
      text: 'As a first-year student, I was worried about getting scammed. Rentimo\'s verification system made me feel safe and protected.'
    },
    {
      name: 'Emmanuel Peters',
      role: '300 Level Student',
      image: '/images/tunde.png',
      rating: 4.5,
      text: 'The direct messaging feature is brilliant. I could ask all my questions and get honest answers before committing to a viewing.'
    }
  ]

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  useEffect(() => {
    controls.start({
      x: [0, -1 * (testimonials.length * 424)],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    })
  }, [controls, testimonials.length])

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Tenants Have to Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences from people finding homes the Rentimo way.
          </p>
        </div>

        {/* Horizontal Auto-Scrolling Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => {
              controls.start({
                x: [0, -1 * (testimonials.length * 424)],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                },
              })
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] md:w-[400px] bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                      <span className="text-gray-300">•</span>
                      <div className="flex items-center">
                        <span className="text-sm font-semibold text-gray-900">{testimonial.rating}</span>
                        <Star size={16} className="fill-yellow-400 text-yellow-400 ml-0.5" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
