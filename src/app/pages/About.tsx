import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white relative overflow-hidden">
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-[#1A5F3C] opacity-5 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-[#1A5F3C]"
          >
            About GreenNova Exports
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Your trusted partner for premium Indian agricultural exports
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
          >
            <motion.h2 
              whileHover={{ x: 5 }}
              className="text-2xl md:text-3xl mb-4 text-[#1A5F3C]"
            >
              Manjunath B
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-gray-600 mb-4"
            >
              Founder & Proprietor, GreenNova Exports
            </motion.p>
          </motion.div>

          <div className="prose max-w-none">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, type: "spring" }}
              className="text-lg mb-6 text-gray-700"
            >
              With a deep understanding of India's agricultural landscape and a commitment to quality, Manjunath B founded GreenNova Exports to bridge the gap between India's finest agricultural products and international markets.
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 5 }}
              className="text-xl mb-4 text-[#1A5F3C]"
            >
              Vision
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg mb-6 text-gray-700"
            >
              To establish GreenNova Exports as a trusted name in global agricultural trade, known for authenticity, quality, and reliability. We believe in building long-term partnerships with international buyers based on transparency and consistent quality delivery.
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 5 }}
              className="text-xl mb-4 text-[#1A5F3C]"
            >
              Our Commitment
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg mb-6 text-gray-700"
            >
              Every product we export represents India's rich agricultural heritage. We work directly with verified suppliers to ensure that our international partners receive only the finest quality products that meet global standards.
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 5 }}
              className="text-xl mb-4 text-[#1A5F3C]"
            >
              Professional Background
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg mb-6 text-gray-700"
            >
              Drawing from years of experience in agricultural trade and export operations, Manjunath B understands the nuances of international business requirements. This expertise enables GreenNova Exports to provide reliable, professional service to buyers worldwide.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#F5F1E8] p-8 border-2 border-gray-200 mt-12 relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-64 h-64 bg-[#B8860B] rounded-full blur-3xl"
              />
              <div className="relative z-10">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg italic text-gray-700"
                >
                  "Our mission is simple: to deliver India's agricultural excellence to the world with integrity and professionalism. Every enquiry receives personal attention, and every shipment carries our commitment to quality."
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-4 text-[#1A5F3C] font-semibold"
                >
                  — Manjunath B
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}