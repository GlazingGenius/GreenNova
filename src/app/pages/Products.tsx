import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  cocopeatImage, 
  agroCommoditiesImage, 
  pulsesProductImage,
  spicesImage,
  basmatiRiceImage
} from '../../assets/images';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function Products() {
  const whatsappNumber = '+919353051928';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  const products = [
    {
      name: 'Spices',
      image: spicesImage,
      description: 'Premium quality Indian spices sourced from the finest growing regions',
      varieties: [
        'Turmeric Powder & Whole',
        'Red Chili Powder & Whole',
        'Coriander Powder & Seeds',
        'Cumin Seeds',
        'Black Pepper',
        'Cardamom',
        'Cloves',
        'Cinnamon'
      ],
      quality: 'Grade A, Export Quality, Lab Tested',
      packaging: 'Available in bulk packaging (25kg, 50kg bags) and custom packaging as per buyer requirements',
      exportReadiness: 'All products comply with international food safety standards and come with necessary export documentation'
    },
    {
      name: 'Rice',
      image: basmatiRiceImage,
      description: 'Premium varieties of rice known for aroma, quality, and long grain',
      varieties: [
        'Basmati Rice (Traditional & Aged)',
        'Non-Basmati Rice',
        'Parboiled Rice',
        'Broken Rice',
        'Organic Rice Varieties'
      ],
      quality: 'Premium grades with consistent grain length, minimal breakage, and superior cooking quality',
      packaging: 'Available in 5kg, 10kg, 25kg, and 50kg packaging. Custom branding available for bulk orders',
      exportReadiness: 'Meets international rice export standards with proper moisture content and purity levels'
    },
    {
      name: 'Pulses',
      image: pulsesProductImage,
      description: 'High-quality pulses and lentils rich in protein and nutrition',
      varieties: [
        'Toor Dal (Pigeon Peas)',
        'Moong Dal (Green Gram)',
        'Urad Dal (Black Gram)',
        'Chana Dal (Bengal Gram)',
        'Masoor Dal (Red Lentils)',
        'Chickpeas (Kabuli & Desi)'
      ],
      quality: 'Cleaned, polished, and graded for size and color consistency',
      packaging: 'Available in 25kg and 50kg bags with moisture-proof packaging',
      exportReadiness: 'Export-grade quality with minimal foreign matter and uniform size grading'
    },
    {
      name: 'Cocopeat',
      image: cocopeatImage,
      description: 'Eco-friendly growing medium and soil amendment from coconut husk',
      varieties: [
        'Low EC Cocopeat',
        'High EC Cocopeat',
        'Cocopeat Blocks (5kg)',
        'Cocopeat Bales',
        'Coco Chips',
        'Coco Fiber'
      ],
      quality: 'Washed, buffered, and pH balanced. Available in different EC levels based on application',
      packaging: 'Compressed blocks and bales for efficient shipping. Custom packaging available',
      exportReadiness: 'Ideal for horticulture and agriculture applications worldwide. Certified organic options available'
    },
    {
      name: 'Agro Commodities',
      image: agroCommoditiesImage,
      description: 'Diverse range of agricultural products for various applications',
      varieties: [
        'Dry Fruits & Nuts',
        'Seeds (Sesame, Mustard, etc.)',
        'Sugar',
        'Tea',
        'Coffee Beans',
        'Jaggery Products',
        'Tamarind'
      ],
      quality: 'Carefully sourced and graded products meeting international quality parameters',
      packaging: 'Customizable packaging based on product type and buyer requirements',
      exportReadiness: 'Full documentation support and compliance with destination country regulations'
    }
  ];

  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-72 h-72 bg-[#B8860B] opacity-5 blur-3xl"
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
            Our Premium Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            High-quality agricultural commodities sourced from India's finest regions
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div 
              key={product.name} 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 80 }}
              className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotate: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
                whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 2 : -2 }}
                className={index % 2 === 1 ? 'md:order-2' : ''}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className={index % 2 === 1 ? 'md:order-1' : ''}
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ x: 5 }}
                  className="text-3xl mb-4 text-[#1A5F3C]"
                >
                  {product.name}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-600 mb-6"
                >
                  {product.description}
                </motion.p>
                
                <div className="space-y-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h3 className="text-lg mb-2 font-semibold text-[#1A5F3C]">Available Varieties:</h3>
                    <ul className="space-y-2">
                      {product.varieties.map((variety, i) => (
                        <motion.li 
                          key={variety}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.6 + (i * 0.05) }}
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 + (i * 0.05), type: "spring", stiffness: 200 }}
                          >
                            <CheckCircle className="w-4 h-4 text-[#B8860B] flex-shrink-0" />
                          </motion.div>
                          {variety}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <h3 className="text-lg mb-2 font-semibold text-[#1A5F3C]">Quality Description:</h3>
                    <p className="text-gray-600">{product.quality}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <h3 className="text-lg mb-2 font-semibold text-[#1A5F3C]">Packaging & Supply:</h3>
                    <p className="text-gray-600">{product.packaging}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <h3 className="text-lg mb-2 font-semibold text-[#1A5F3C]">Export Readiness:</h3>
                    <p className="text-gray-600">{product.exportReadiness}</p>
                  </motion.div>
                </div>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={`${whatsappLink}?text=I'm interested in ${product.name}. Please share more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#1A5F3C] text-white hover:bg-[#154d30] transition-colors shadow-lg"
                >
                  Enquire on WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring" }}
          whileHover={{ scale: 1.02 }}
          className="mt-16 p-8 bg-[#F5F1E8] border-2 border-gray-200 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B] rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl mb-4 text-[#1A5F3C]"
            >
              Looking for Something Specific?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 mb-6"
            >
              We can source and supply a wide range of Indian agricultural products. Contact us with your requirements.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-[#1A5F3C] text-white hover:bg-[#154d30] transition-colors shadow-lg"
            >
              Contact Us on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}