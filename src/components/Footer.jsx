import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Bio */}
          <div>
            <h3 className="text-xl font-bold mb-4">About TIA</h3>
            <p className="text-gray-300 mb-4">
              TIA has been providing quality education for over 25 years, nurturing young minds and shaping future leaders through comprehensive academic programs and holistic development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/academics" className="text-gray-300 hover:text-secondary transition-colors">
                  Academics
                </a>
              </li>
              <li>
                <a href="/admissions" className="text-gray-300 hover:text-secondary transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/facilities" className="text-gray-300 hover:text-secondary transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-300 hover:text-secondary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Facebook Feed Placeholder */}
          <div>
            <h3 className="text-xl font-bold mb-4">Facebook Feed</h3>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <FaFacebookF className="text-3xl text-blue-400 mx-auto mb-2" />
              <p className="text-gray-300 text-sm">
                Connect with us on Facebook for latest updates and announcements.
              </p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Like Our Page
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    TIA School<br />
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-secondary mr-3" />
                <a href="tel:+977-1-4444444" className="text-gray-300 hover:text-secondary transition-colors">
                  +977-1-4444444
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-secondary mr-3" />
                <a href="mailto:info@tia.edu.np" className="text-gray-300 hover:text-secondary transition-colors">
                  info@tia.edu.np
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 TIA School. All rights reserved. |
            <a href="/privacy" className="hover:text-secondary transition-colors ml-1">
              Privacy Policy
            </a> |
            <a href="/terms" className="hover:text-secondary transition-colors ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;