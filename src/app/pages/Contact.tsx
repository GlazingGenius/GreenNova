import { Phone, Mail, MapPin, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const whatsappNumber = '+919353051928';
  const email = 'info@greennovaexports.com';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white relative overflow-hidden">
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-80 h-80 bg-[#1A5F3C] opacity-5 blur-3xl"
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Get in touch with us for enquiries, quotations, and export documentation
          </motion.p>
        </motion.div>

        {/* Company Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-gradient-to-br from-[#1A5F3C] to-[#154d30] text-white p-8 md:p-12 rounded-lg mb-12 shadow-xl relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B] rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-3xl mb-8"
            >
              GreenNova Exports
            </motion.h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h3 className="text-lg mb-2 opacity-90">Proprietor</h3>
                <p className="text-2xl">Manjunath B</p>
              </motion.div>
              <div className="h-px bg-white/20"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <p className="opacity-90">
                  Registered export business specializing in premium Indian agricultural products for international markets
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: <Phone className="w-6 h-6 text-[#1A5F3C]" />,
              title: 'Phone / WhatsApp',
              content: whatsappNumber,
              link: whatsappLink,
              linkText: 'Message on WhatsApp →'
            },
            {
              icon: <Mail className="w-6 h-6 text-[#1A5F3C]" />,
              title: 'Email',
              content: email,
              link: `mailto:${email}`,
              linkText: 'Send Email →'
            },
            {
              icon: <MapPin className="w-6 h-6 text-[#1A5F3C]" />,
              title: 'Location',
              content: 'Bengaluru, Karnataka\nIndia\n(Serving International Markets)',
              link: null,
              linkText: null
            },
            {
              icon: <Globe className="w-6 h-6 text-[#1A5F3C]" />,
              title: 'Website',
              content: 'www.greennovaexports.com',
              subtext: '(Domain coming soon)',
              link: null,
              linkText: null
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#B8860B] transition-colors shadow-md"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 bg-[#F5F1E8] rounded-full flex items-center justify-center flex-shrink-0"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg mb-2 text-[#1A5F3C] font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mb-3 whitespace-pre-line">{item.content}</p>
                  {item.subtext && <p className="text-sm text-gray-500">{item.subtext}</p>}
                  {item.link && (
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#1A5F3C] hover:text-[#B8860B] transition-colors inline-block"
                    >
                      {item.linkText}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Info */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          whileHover={{ scale: 1.01 }}
          className="bg-[#F5F1E8] p-8 border-2 border-gray-200 rounded-lg mb-8"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl mb-6 text-[#1A5F3C]"
          >
            Business Information
          </motion.h2>
          <div className="space-y-4">
            {[
              { title: 'Company Type', content: 'Proprietorship - Export Business' },
              { title: 'Primary Business', content: 'Export of Agricultural Commodities from India' },
              { title: 'Main Products', content: 'Spices, Rice, Pulses, Cocopeat, and Various Agro Commodities' },
              { title: 'Export Markets', content: 'Middle East, Asia Pacific, Europe, Africa, Americas, and Oceania' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg mb-2 text-[#1A5F3C] font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="mb-8"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl mb-6 text-[#1A5F3C]"
          >
            Our Location
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490828406!2d77.3507524!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GreenNova Exports Location - Bengaluru"
            ></iframe>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-gray-600 mt-4 text-center"
          >
            Based in Bengaluru, Karnataka - India's leading hub for agricultural exports
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-[#F5F1E8] border-2 border-gray-200 p-8 rounded-lg text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B] rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl mb-4 text-[#1A5F3C]"
            >
              Ready to Place an Order?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 mb-6"
            >
              Contact us directly on WhatsApp for quick responses and personalized service
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
              className="inline-flex items-center px-8 py-4 bg-[#1A5F3C] text-white rounded-lg hover:bg-[#154d30] transition-colors shadow-lg"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Start WhatsApp Chat
            </motion.a>
          </div>
        </motion.div>

        {/* Legal Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 p-4 bg-gray-100 rounded-lg"
        >
          <p className="text-xs text-gray-600 text-center">
            GreenNova Exports operates as a registered export business in India. All transactions are conducted with proper documentation and compliance with Indian export regulations and international trade laws.
          </p>
        </motion.div>
      </div>
    </div>
  );
}