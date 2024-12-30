import { useState } from 'react';
import { ShoppingBasket, Menu, X, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';

const Header = ({ onCartClick }: { onCartClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-30 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-black dark:text-white">
              KK<span className="text-gold">Parfüm</span>
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-black dark:text-white hover:text-gold dark:hover:text-gold transition-colors duration-300"
            >
              Ana səhifə
            </Link>
            <Link
              to="/about"
              className="text-black dark:text-white hover:text-gold dark:hover:text-gold transition-colors duration-300"
            >
              Haqqımızda
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6 text-white" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
            >
              <ShoppingBasket className="h-6 w-6 dark:text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6 text-white" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
            >
              <ShoppingBasket className="h-6 w-6 dark:text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-black dark:text-white hover:text-gold dark:hover:text-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana səhifə
              </Link>
              <Link
                to="/about"
                className="text-black dark:text-white hover:text-gold dark:hover:text-gold transition-colors duration-300"
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