import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ISRA Vatanappally</h3>
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
              <p>Email: isralabvty@gmail.com</p>
              <p>Phone: +91 9645222427</p>
              <p>Address: Beach road, Vatanappally, Thrissur, Kerala 680</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 pt-8 border-t border-gray-800">
          <div className="flex gap-6 mb-4">
            <a
              href="https://www.facebook.com/ISRAVTP/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/isra_vatanappally/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@isra_media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Visit our YouTube channel"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} ISRA Vatanappally. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
