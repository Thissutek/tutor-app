import { Link } from "react-router"
import { useState } from "react"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    let dropdownTimeout;

    // Handle dropdown hover
    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeout);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeout = setTimeout(() => {
        setIsDropdownOpen(false);
        }, 200); // Small delay to prevent flickering
    }

    return (
        <nav className="top-0 left-0 w-full shadow-md p-4 z-50 ">
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
    
                {/* Services with Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="header-style cursor-pointer flex items-center">
                    Services ▼
                  </button>
                  {isDropdownOpen && (
                    <div 
                      className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50"
                      onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">1-on-1 Tutoring</Link>
                      <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">Group Sessions</Link>
                      <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">Online Workshops</Link>
                    </div>
                  )}
                </div>
    
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
              
              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button 
                  className="header-style w-full text-left"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Services ▼
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 space-y-2">
                    <Link to="/services/tutoring" className="block px-4 py-2 bg-gray-100 rounded-lg">1-on-1 Tutoring</Link>
                    <Link to="/services/group" className="block px-4 py-2 bg-gray-100 rounded-lg">Group Sessions</Link>
                    <Link to="/services/online" className="block px-4 py-2 bg-gray-100 rounded-lg">Online Workshops</Link>
                  </div>
                )}
              </div>
    
              <Link to="/contact" className="CTA text-center px-4 py-2 rounded-lg shadow-md">
                Get in Touch
              </Link>
            </div>
          )}
        </nav>
      );
    };