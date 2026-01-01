import { Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { globalTradeImage } from '../../assets/images';

export function Markets() {
  const regions = [
    {
      region: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain']
    },
    {
      region: 'Asia Pacific',
      countries: ['Singapore', 'Malaysia', 'Thailand', 'Vietnam', 'Indonesia', 'Philippines']
    },
    {
      region: 'Europe',
      countries: ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Belgium', 'Italy']
    },
    {
      region: 'Africa',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'South Africa', 'Nigeria', 'Ghana']
    },
    {
      region: 'North America',
      countries: ['United States', 'Canada']
    },
    {
      region: 'Oceania',
      countries: ['Australia', 'New Zealand']
    }
  ];

  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white relative overflow-hidden">
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-80 h-80 bg-[#B8860B] opacity-5 blur-3xl"
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
            Global Export Markets
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Serving international buyers across 50+ countries with premium Indian agricultural products
          </motion.p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, type: "spring" }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="mb-16 rounded-lg overflow-hidden shadow-2xl"
        >
          <ImageWithFallback
            src={globalTradeImage}
            alt="Global Trade"
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Export Capabilities */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.01, y: -3 }}
          className="mb-16 bg-[#F5F1E8] p-8 border-2 border-gray-200 rounded-lg relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-64 h-64 bg-[#B8860B] rounded-full blur-3xl"
          />
          <div className="flex items-start gap-4 relative z-10">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear"
              }}
              whileHover={{ scale: 1.3 }}
            >
              <Globe className="w-12 h-12 text-[#1A5F3C] flex-shrink-0" />
            </motion.div>
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl mb-4 text-[#1A5F3C]"
              >
                Export Ready for International Markets
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-600 mb-4"
              >
                GreenNova Exports is equipped to serve buyers across the globe with reliable logistics, complete documentation support, and adherence to international quality standards.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600"
              >
                We understand the unique requirements of each market and ensure our products meet destination country regulations and buyer specifications.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Regions Grid */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-3xl mb-8 text-center text-[#1A5F3C]"
          >
            Regions We Serve
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((item, index) => (
              <motion.div 
                key={item.region}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.03, rotate: 1 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#B8860B] hover:shadow-xl transition-all"
              >
                <motion.h3 
                  whileHover={{ x: 5 }}
                  className="text-xl mb-4 text-[#1A5F3C] font-semibold"
                >
                  {item.region}
                </motion.h3>
                <ul className="space-y-2">
                  {item.countries.map((country, i) => (
                    <motion.li 
                      key={country}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (i * 0.05) }}
                      whileHover={{ x: 5, scale: 1.05 }}
                      className="text-gray-600 flex items-center"
                    >
                      <motion.span 
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="w-2 h-2 bg-[#B8860B] rounded-full mr-3"
                      ></motion.span>
                      {country}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.01, y: -5 }}
          className="bg-gradient-to-br from-[#1A5F3C] to-[#154d30] text-white p-8 md:p-12 rounded-lg relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-72 h-72 bg-[#B8860B] rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl mb-6"
            >
              Our Commitment to Global Buyers
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Quality Assurance',
                  desc: 'Every shipment is thoroughly inspected and certified to meet international standards and buyer requirements.'
                },
                {
                  title: 'Documentation Support',
                  desc: 'Complete export documentation including certificates of origin, phytosanitary certificates, and quality reports.'
                },
                {
                  title: 'Reliable Logistics',
                  desc: 'Partnership with trusted freight forwarders ensuring timely delivery to your destination port.'
                },
                {
                  title: 'Flexible Terms',
                  desc: 'We work with buyers to accommodate various payment terms and shipping arrangements.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="opacity-90">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 p-6 bg-gray-100 rounded-lg"
        >
          <p className="text-sm text-gray-600 italic">
            Note: The markets and countries listed represent our export capabilities and network. We welcome enquiries from buyers worldwide and can arrange shipments to additional destinations as per your requirements.
          </p>
        </motion.div>
      </div>
    </div>
  );
}