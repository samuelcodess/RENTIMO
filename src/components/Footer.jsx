import { Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="px-5 md:px-12 py-12 flex flex-col md:flex-row justify-between gap-8 text-gray-800">
      <div className="flex-1">
        <img 
          src="/images/Rentimo Logo.png" 
          alt="Rentimo Logo" 
          className="w-36 mb-4"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
        <div className="space-y-2">
          <p className="cursor-pointer hover:text-primary transition-colors">Home</p>
          <p className="cursor-pointer hover:text-primary transition-colors">Features</p>
          <p className="cursor-pointer hover:text-primary transition-colors">Sign Up for waitlist</p>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-4">Contact information</h3>
        <div className="space-y-2">
          <p>nevaeh.simmons@example.com</p>
          <p>(406) 555-0120</p>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-4">Socials</h3>
        <div className="flex gap-4">
          <a 
            href="#" 
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
