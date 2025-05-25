
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-forest-700">Vishnu</span>
          <span className="text-sm text-forest-500 ml-1 font-bold">Organic Oils</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-forest-600 font-medium">Home</Link>
          <Link to="/shop" className="text-foreground hover:text-forest-600 font-medium">Shop</Link>
          <Link to="/about" className="text-foreground hover:text-forest-600 font-medium">About Us</Link>
          <Link to="/contact" className="text-foreground hover:text-forest-600 font-medium">Contact</Link>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-forest-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-earth-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="ml-4 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-forest-700" />
            ) : (
              <Menu className="h-6 w-6 text-forest-700" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg z-50 animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-forest-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-foreground hover:text-forest-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-forest-600 font-medium py-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-forest-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
