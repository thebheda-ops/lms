import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-tia-grey py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+977-1-4444444" className="flex items-center text-sm text-gray-600 hover:text-tia-primary">
              <FaPhone className="mr-2" />
              +977-1-4444444
            </a>
            <a href="mailto:info@tia.edu.np" className="flex items-center text-sm text-gray-600 hover:text-tia-primary">
              <FaEnvelope className="mr-2" />
              info@tia.edu.np
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-tia-primary transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-tia-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-tia-primary transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;