import { useState } from 'react';
import { ShoppingBasket, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = ({ onCartClick }: { onCartClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-30 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-black">
              KK<span className="text-gold">Parfüm</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-black hover:text-gold transition-colors duration-300"
            >
              Ana səhifə
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-gold transition-colors duration-300"
            >
              Haqqımızda
            </Link>
          </nav>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <ShoppingBasket className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-black hover:text-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana səhifə
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Haqqımızda
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;