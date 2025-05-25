
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Vishnu Organic Oils</h3>
            <p className="text-gray-300 mb-4">Pure goodness in every drop. Our oils are cold-pressed using traditional wooden chekku method, preserving all the natural goodness and nutrients.</p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-natural-200 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-natural-200 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-natural-200 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-natural-200 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-natural-300 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  J460 Sri Vishnu Chekku Ennai<br />
                  Manikampalayam Pirivu, Mettur Road<br />
                  Ammapettai, Erode District<br />
                  Tamil Nadu - 638311
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-5 w-5 text-natural-300" />
                <a href="tel:+918220939050" className="text-gray-300 hover:text-natural-200">+91 82209 39050</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-natural-300" />
                <a href="mailto:madhanking2004ac@gmail.com" className="text-gray-300 hover:text-natural-200 break-all">madhanking2004ac@gmail.com</a>
              </div>
            </address>
            
            {/* Social Media */}
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-natural-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-natural-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/918220939050" target="_blank" rel="noopener noreferrer" className="text-white hover:text-natural-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-forest-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Vishnu Organic Oils. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
