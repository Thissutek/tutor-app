import { Link } from "react-router"
import { useState } from "react"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="top-0 left-0 w-full shadow-md p-4 z-50 sticky bg-[#F8F4E7]">
          <div className="container mx-auto flex justify-between items-center">
            
            {/* Logo */}
            <div className="text-2xl font-bold mx-6">
              <Link to="/">Aims2Learn</Link>
            </div>
    
            {/* Desktop Menu + CTA Button Wrapper */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-4">
                <Link to="/about" className="header-style">About</Link>
                <Link to="/testimonials" className="header-style">Testimonials</Link>
                <Link to="/services" className="header-style">Services</Link>
              </div>
    
              {/* CTA Button */}
              <Link to="/contact" className="CTA px-5 py-2 rounded-lg shadow-md mx-6">
                CONTACT
              </Link>
            </div>
    
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
    
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col space-y-2 p-4 bg-white shadow-md">
              <Link to="/about">About</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/services"></Link>
    
              <Link to="/contact" className="CTA text-center px-4 py-2 rounded-lg shadow-md">
                Get in Touch
              </Link>
            </div>
          )}
        </nav>
      );
    };