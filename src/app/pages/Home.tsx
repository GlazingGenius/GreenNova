import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, ArrowRight, CheckCircle, Shield, Globe, Award, Star, Truck, FileCheck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  riceImage,
  spicesImage,
  pulsesImage,
  basmatiRiceImage,
  cocopeatImage,
  riceVarietiesImage,
  chilliMarketImage,
  spiceMarketImage,
  exportShippingImage
} from '../../assets/images';

export function Home() {
  const whatsappNumber = '+919353051928';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  // Hero Image Slider
  const heroImages = [
    {
      url: spicesImage,
      title: 'Spices'
    },
    {
      url: basmatiRiceImage,
      title: 'Basmati Rice'
    },
    {
      url: pulsesImage,
      title: 'Pulses & Lentils'
    },
    {
      url: exportShippingImage,
      title: 'Global Export'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // About section images
  const aboutImages = [
    {
      url: riceVarietiesImage,
      alt: 'GreenNova Rice Varieties - Basmati, Non-Basmati, Organic Rice'
    },
    {
      url: chilliMarketImage,
      alt: 'Indian Red Chilli Market - Premium Spices Export'
    },
    {
      url: spiceMarketImage,
      alt: 'Traditional Indian Spice & Pulse Market - Authentic Export Products'
    }
  ];

  const [currentAboutImageIndex, setCurrentAboutImageIndex] = useState(0);

  useEffect(() => {
    const aboutInterval = setInterval(() => {
      setCurrentAboutImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 3000); // Change about image every 3 seconds

    return () => clearInterval(aboutInterval);
  }, []);

  const products = [
    {
      name: 'Indian Spices',
      image: spicesImage,
      description: 'Turmeric, Red Chili, Coriander, Cumin, Black Pepper'
    },
    {
      name: 'Basmati Rice',
      image: basmatiRiceImage,
      description: '1121 Basmati, Premium Aged Rice, Organic Varieties'
    },
    {
      name: 'Pulses & Lentils',
      image: pulsesImage,
      description: 'Toor Dal, Moong Dal, Chickpeas, Lentils'
    },
    {
      name: 'Cocopeat',
      image: cocopeatImage,
      description: 'Cocopeat Blocks, Grow Bags, Coco Fiber'
    }
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const productInterval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // Change product every 4 seconds

    return () => clearInterval(productInterval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport: { once: true, margin: "-50px" }
  };

  const staggerItem = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, delay, ease: "easeOut" }
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden border-b border-gray-200">
        <div className="grid lg:grid-cols-2 min-h-[450px] md:min-h-[500px] lg:min-h-[560px]">
          {/* Left Content */}
          <div className="flex items-center bg-[#F5F1E8] px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16 relative overflow-hidden">
            {/* Animated background circles */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-[#1A5F3C] rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-[#B8860B] rounded-full blur-3xl"
            />
            
            <div className="max-w-xl relative z-10">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
                className="inline-block mb-6"
              >
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-sm font-semibold tracking-wider text-[#1A5F3C] flex items-center gap-2"
                >
                  <motion.div 
                    animate={{ scaleX: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-8 h-[2px] bg-[#B8860B]"
                  />
                  TRUSTED EXPORT PARTNER
                </motion.div>
              </motion.div>
              
              {/* Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
                className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-[#1A5F3C] leading-tight"
              >
                Premium Indian<br />Agricultural Exports
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, type: "spring" }}
                className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Supplying world-class spices, basmati rice, pulses, cocopeat, and agro commodities to global markets with complete export documentation.
              </motion.p>

              {/* Quick Stats */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 pb-8 border-b border-gray-300"
              >
                {[
                  { number: '50+', label: 'Countries' },
                  { number: '1000+', label: 'Shipments' },
                  { number: 'ISO', label: 'Certified' },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + (i * 0.1), type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={i === 2 ? 'col-span-2 sm:col-span-1' : ''}
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="text-xl sm:text-2xl font-bold text-[#1A5F3C]"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, type: "spring" }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#1A5F3C] text-white hover:bg-[#154d30] transition-colors shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Phone className="w-5 h-5" />
                  </motion.div>
                  Request Quote
                </motion.a>
                <motion.div 
                  whileHover={{ scale: 1.08, y: -3 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#1A5F3C] text-[#1A5F3C] hover:bg-[#1A5F3C] hover:text-white transition-colors"
                  >
                    View Products
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
            className="relative bg-cover bg-center overflow-hidden min-h-[400px] lg:min-h-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroImages[currentImageIndex].url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </AnimatePresence>
            
            {/* Overlay - Lighter */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1A5F3C]/10 to-[#1A5F3C]/30"></div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, type: "spring", stiffness: 100 }}
              className="absolute bottom-4 left-4 right-4 lg:bottom-10 lg:left-10 lg:right-auto bg-white p-4 lg:p-5 shadow-2xl max-w-xs z-10"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 mb-3"
              >
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-11 h-11 bg-[#1A5F3C] rounded-full flex items-center justify-center"
                >
                  <Shield className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <div className="font-bold text-[#1A5F3C]">ISO Certified</div>
                  <div className="text-xs text-gray-600">Quality Assured</div>
                </div>
              </motion.div>
              <p className="text-sm text-gray-600">
                Complete export documentation & compliance
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Flowing Marquee */}
      <section className="border-y border-gray-200 bg-[#1A5F3C] text-white py-4 overflow-hidden mt-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-12 mx-6 md:mx-12">
              <div className="flex items-center gap-2 md:gap-3">
                <FileCheck className="w-4 h-4 md:w-5 md:h-5 text-[#B8860B]" />
                <span className="font-semibold text-sm md:text-base">Full Documentation</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-[#B8860B]" />
                <span className="font-semibold text-sm md:text-base">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Truck className="w-4 h-4 md:w-5 md:h-5 text-[#B8860B]" />
                <span className="font-semibold text-sm md:text-base">Global Shipping</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#B8860B]" />
                <span className="font-semibold text-sm md:text-base">Certified Products</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 lg:gap-12"
          >
            {[
              { number: '50+', label: 'Countries Served' },
              { number: '1000+', label: 'Export Shipments' },
              { number: 'ISO', label: 'Certified Products' },
              { number: 'FSSAI', label: 'Approved' },
              { number: '100%', label: 'Quality Certified' }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.15, y: -10 }}
                className={i >= 3 ? 'col-span-1' : ''}
              >
                <motion.div 
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                  className="text-3xl sm:text-4xl font-bold text-[#1A5F3C] mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-gray-200 bg-[#F5F1E8] relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-[#1A5F3C] opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#B8860B] opacity-5 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl lg:text-4xl mb-6 text-[#1A5F3C]"
              >
                Your Trusted Export Partner
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                GreenNova Exports, based in Bengaluru, specializes in exporting premium Indian agricultural products to international markets. We ensure quality, compliance, and timely delivery.
              </motion.p>
              <ul className="space-y-3">
                {[
                  'IEC Registered & Export Certified',
                  'Complete Export Documentation',
                  'Quality Control & Testing',
                  'Worldwide Logistics Network'
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1), type: "spring" }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + (i * 0.1), type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0" />
                    </motion.div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 80, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, type: "spring", stiffness: 60 }}
              className="relative h-[450px] w-full"
            >
              {/* Auto-cycling slideshow - ONE image at a time */}
              <div className="w-full h-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentAboutImageIndex}
                    src={aboutImages[currentAboutImageIndex].url}
                    alt={aboutImages[currentAboutImageIndex].alt}
                    initial={{ opacity: 0, x: 400, scale: 1.2 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -400, scale: 0.8 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className="mb-16 text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl lg:text-5xl mb-4 text-[#1A5F3C]"
            >
              Our Product Range
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              High-quality agricultural commodities sourced from India's finest regions
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: 'Indian Spices',
                image: spicesImage,
                description: 'Turmeric, Red Chili, Coriander, Cumin, Black Pepper'
              },
              {
                name: 'Basmati Rice',
                image: basmatiRiceImage,
                description: '1121 Basmati, Premium Aged Rice, Organic Varieties'
              },
              {
                name: 'Pulses & Lentils',
                image: pulsesImage,
                description: 'Toor Dal, Moong Dal, Chickpeas, Lentils'
              },
              {
                name: 'Cocopeat',
                image: cocopeatImage,
                description: 'Cocopeat Blocks, Grow Bags, Coco Fiber'
              }
            ].map((product, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="bg-white border-2 border-gray-200 overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A5F3C] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-[#B8860B] group-hover:text-[#1A5F3C] font-medium text-sm transition-colors"
                  >
                    Learn More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-b border-gray-200 bg-[#F5F1E8] relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-72 h-72 bg-[#B8860B] opacity-5 blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className="mb-16 text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl lg:text-5xl mb-4 text-[#1A5F3C]"
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Your reliable partner for quality, compliance, and seamless international trade
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-16"
          >
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Quality Certified',
                description: 'Every product meets international quality standards with ISO & FSSAI certifications and complete documentation.'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Global Network',
                description: 'Exporting to 50+ countries with established logistics partners ensuring timely and safe delivery worldwide.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Export Licensed',
                description: 'IEC registered, ICEGATE compliant with all necessary export licenses and regulatory certifications.'
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mb-6 text-[#B8860B] inline-block"
                >
                  {item.icon}
                </motion.div>
                <motion.h3 
                  whileHover={{ x: 5 }}
                  className="text-2xl font-bold text-[#1A5F3C] mb-4"
                >
                  {item.title}
                </motion.h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#1A5F3C] opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -90, -180]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#B8860B] opacity-5 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="text-4xl lg:text-5xl mb-8 text-[#1A5F3C] text-center"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-12 text-center"
            >
              Contact us for product enquiries, quotations, and export documentation
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid sm:grid-cols-2 gap-6"
            >
              <motion.a
                initial={{ opacity: 0, x: -60, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-white border-2 border-[#B8860B] hover:border-[#1A5F3C] hover:shadow-2xl transition-all text-center group relative overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <Phone className="w-8 h-8 text-[#1A5F3C] mx-auto mb-4" />
                </motion.div>
                <div className="text-sm text-gray-600 mb-2 relative z-10">WhatsApp</div>
                <div className="font-bold text-[#1A5F3C] relative z-10">+91 9353051928</div>
                
                {/* Pulsing ring effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 border-2 border-[#B8860B] rounded-sm"
                />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: 60, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@greennovaexports.com"
                className="p-8 bg-white border-2 border-[#B8860B] hover:border-[#1A5F3C] hover:shadow-2xl transition-all text-center group relative overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1A5F3C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="relative z-10"
                >
                  <Mail className="w-8 h-8 text-[#1A5F3C] mx-auto mb-4" />
                </motion.div>
                <div className="text-sm text-gray-600 mb-2 relative z-10">Email</div>
                <div className="font-bold text-[#1A5F3C] relative z-10">info@greennovaexports.com</div>
                
                {/* Pulsing ring effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5
                  }}
                  className="absolute inset-0 border-2 border-[#B8860B] rounded-sm"
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}