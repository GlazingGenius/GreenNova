import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { logoImage } from '../../assets/images';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/markets', label: 'Markets' },
    { path: '/enquiry', label: 'Enquiry' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 max-w-[1400px] mx-auto">
            {/* Logo - Far Left */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <motion.img
                src={logoImage}
                alt="GreenNova Exports"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#1A5F3C] leading-none tracking-tight">GreenNova</div>
                <div className="text-[10px] sm:text-xs text-gray-600 tracking-[0.25em] uppercase font-medium">Exports</div>
              </div>
            </Link>

            {/* Navigation & CTA - Far Right */}
            <div className="hidden lg:flex items-center gap-8 flex-shrink-0">
              <nav className="flex items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2 group"
                  >
                    <span className={`relative z-10 transition-colors font-semibold ${
                      isActive(link.path)
                        ? 'text-[#1A5F3C]'
                        : 'text-gray-700 group-hover:text-[#1A5F3C]'
                    }`}>
                      {link.label}
                    </span>
                    {isActive(link.path) && (
                      <motion.span 
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#B8860B]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>

              <motion.a
                href={`https://wa.me/${'+919353051928'.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A5F3C] text-white font-semibold hover:bg-[#154d30] transition-colors shadow-md hover:shadow-lg rounded-md"
              >
                <Phone className="w-4 h-4" />
                Get Quote
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden py-6 border-t border-gray-200 overflow-hidden"
              >
                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-3 px-4 rounded-lg transition-colors font-semibold ${
                          isActive(link.path)
                            ? 'bg-[#F5F1E8] text-[#1A5F3C] border-l-4 border-[#B8860B] shadow-sm'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  href={`https://wa.me/${'+919353051928'.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-6 px-4 py-3 bg-[#1A5F3C] text-white font-semibold text-center hover:bg-[#154d30] transition-colors shadow-md rounded-lg"
                >
                  <Phone className="w-4 h-4" />
                  Get Quote
                </motion.a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}