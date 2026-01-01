import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Markets } from './pages/Markets';
import { Enquiry } from './pages/Enquiry';
import { Contact } from './pages/Contact';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { logoImage } from '../assets/images';

export default function App() {
  const whatsappLink = `https://wa.me/${'+919353051928'.replace(/[^0-9]/g, '')}`;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white rounded-full p-2 flex items-center justify-center">
                    <img 
                      src={logoImage} 
                      alt="GreenNova Exports" 
                      className="h-12 w-auto"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#2F855A] leading-none tracking-tight">GreenNova</div>
                    <div className="text-xs text-gray-300 tracking-[0.25em] uppercase font-medium">Exports</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Your trusted partner for premium Indian agricultural products. Exporting quality to the world.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { to: '/', label: 'Home' },
                    { to: '/about', label: 'About Us' },
                    { to: '/products', label: 'Products' },
                    { to: '/markets', label: 'Markets' },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h3 className="text-lg mb-6">Our Products</h3>
                <ul className="space-y-3">
                  {['Spices', 'Basmati Rice', 'Pulses & Lentils', 'Cocopeat', 'Agro Commodities'].map((product) => (
                    <li key={product}>
                      <Link
                        to="/products"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {product}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg mb-6">Contact Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">
                      Bengaluru, Karnataka<br />India
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                    <a href="tel:+919353051928" className="text-gray-400 hover:text-white transition-colors text-sm">
                      +91 9353051928
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                    <a href="mailto:info@greennovaexports.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                      info@greennovaexports.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © 2025 GreenNova Exports. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <Link to="/enquiry" className="text-gray-400 hover:text-white transition-colors">
                    Enquiry
                  </Link>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}