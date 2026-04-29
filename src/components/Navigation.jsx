import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="TIA Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-primary">TIA</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-center space-x-4">
              <a href="tel:+977-1-4444444" className="text-sm text-gray-600 hover:text-primary">
                <i className="fas fa-phone mr-1"></i> +977-1-4444444
              </a>
              <a href="mailto:info@tia.edu.np" className="text-sm text-gray-600 hover:text-primary">
                <i className="fas fa-envelope mr-1"></i> info@tia.edu.np
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-primary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile menu links go here */}
            <nav className="mt-3 space-y-1 px-2">
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                About
              </Link>
              <Link to="/academics" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                Academics
              </Link>
              <Link to="/admissions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                Admissions
              </Link>
              <Link to="/facilities" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                Facilities
              </Link>
              <Link to="/gallery" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                Gallery
              </Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Mobile menu content */}
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a href="tel:+977-1-4444444" className="text-sm text-gray-600 hover:text-primary">
              <i className="fas fa-phone mr-1"></i> +977-1-4444444
            </a>
            <a href="mailto:info@tia.edu.np" className="text-sm text-gray-600 hover:text-primary">
              <i className="fas fa-envelope mr-1"></i> info@tia.edu.np
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;