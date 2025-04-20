
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Al-Hikmah Campus</h3>
            <p className="text-sm">
              Bridging Islamic wisdom with modern science and technology for a better future.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-emerald-400">About Us</Link>
              </li>
              <li>
                <Link to="/institutions" className="hover:text-emerald-400">Institutions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p>Email: info@alhikmah.edu</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Knowledge Way, Wisdom City</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Al-Hikmah Campus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
