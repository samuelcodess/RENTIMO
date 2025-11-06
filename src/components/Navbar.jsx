import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const SignInLink = "https://rentimo.vercel.app";
  

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-6 bg-[#FAFAFA] relative z-50">
      <div className="logo">
        <img src="/images/Rentimo Logo.png" alt="Rentimo Logo" className="h-10" />
      </div>

      {/* Hamburger Menu Icon */}
      <button 
        className="lg:hidden text-gray-800 cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <div className={`
        ${isOpen ? 'flex' : 'hidden'} 
        lg:flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10
        absolute lg:relative top-20 lg:top-0 right-6 lg:right-0
        bg-white lg:bg-transparent
        w-64 lg:w-auto p-6 lg:p-0
        rounded-xl lg:rounded-none
        shadow-lg lg:shadow-none
        z-40
      `}>
        <p className="font-medium cursor-pointer hover:text-[#FF5722] transition-colors text-gray-700 text-base">Features</p>
        <p className="font-medium cursor-pointer hover:text-[#FF5722] transition-colors text-gray-700 text-base">How It Works</p>
        <p className="font-medium cursor-pointer hover:text-[#FF5722] transition-colors text-gray-700 text-base">Reviews</p>
        <button 
          className="border-2 border-[#FF5722] text-[#FF5722] px-6 py-2.5 rounded-full font-medium hover:bg-[#FF5722] hover:text-white transition-all"
          onClick={() => window.open(SignInLink, "_blank")}
        >
          Join Wishlist
        </button>
      </div>
    </nav>
  )
}

export default Navbar
