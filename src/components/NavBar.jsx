import { Link } from "react-router"
import { useState } from "react"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <Link to="/">Logo</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                    <Link to="/testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
                    <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                </div>

                 {/* CTA Button */}
                    <Link to="/contact" className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700">
                    Get in Touch
                    </Link>
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
                <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link to="/testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                <Link to="/contact" className="bg-blue-600 text-white text-center px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
                    Get in Touch
                </Link>
                </div>
            )}
        </nav>
    )
}