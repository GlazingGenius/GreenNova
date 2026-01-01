import { MessageSquare, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Package, FileText, Clock, Shield, HelpCircle, Sparkles, CheckCircle2, TrendingUp, Globe, Award } from 'lucide-react';

export function Enquiry() {
  const whatsappNumber = '+919353051928';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;
  const email = 'info@greennovaexports.com';

  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white relative overflow-hidden">
      <motion.div
        animate={{ 
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A5F3C] opacity-5 blur-3xl"
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
            Make an Enquiry
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Contact us directly via WhatsApp or Email for quotations and product information
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, rotate: 2, scale: 1.03 }}
            className="bg-white border-2 border-[#1A5F3C] rounded-lg p-8 hover:shadow-2xl transition-all relative overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-48 h-48 bg-[#1A5F3C] rounded-full blur-3xl"
            />
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.3, rotate: 20 }}
                  className="w-16 h-16 bg-[#F5F1E8] rounded-full flex items-center justify-center"
                >
                  <MessageSquare className="w-8 h-8 text-[#1A5F3C]" />
                </motion.div>
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-2xl text-center mb-4 text-[#1A5F3C]"
              >
                WhatsApp Enquiry
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center text-gray-600 mb-6"
              >
                Fastest way to connect with us. Get instant responses to your queries.
              </motion.p>
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-[#1A5F3C] text-white text-center rounded-lg hover:bg-[#154d30] transition-colors shadow-lg"
              >
                Open WhatsApp Chat
              </motion.a>
              <p className="text-center text-sm text-gray-600 mt-4">
                {whatsappNumber}
              </p>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, rotate: -2, scale: 1.03 }}
            className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#B8860B] hover:shadow-2xl transition-all relative overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-[#B8860B] rounded-full blur-3xl"
            />
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <motion.div 
                  animate={{ 
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  whileHover={{ scale: 1.3, rotate: -20 }}
                  className="w-16 h-16 bg-[#F5F1E8] rounded-full flex items-center justify-center"
                >
                  <Mail className="w-8 h-8 text-[#1A5F3C]" />
                </motion.div>
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl text-center mb-4 text-[#1A5F3C]"
              >
                Email Enquiry
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center text-gray-600 mb-6"
              >
                Send us a detailed enquiry via email for comprehensive information.
              </motion.p>
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${email}`}
                className="block w-full px-6 py-4 bg-[#F5F1E8] text-[#1A5F3C] text-center rounded-lg hover:bg-[#B8860B] hover:text-white transition-colors shadow-lg border-2 border-gray-200"
              >
                Send Email
              </motion.a>
              <p className="text-center text-sm text-gray-600 mt-4">
                {email}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Enquiry Guidelines */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.01, y: -3 }}
          className="bg-[#F5F1E8] p-8 rounded-lg border-2 border-gray-200 relative overflow-hidden mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B] rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl mb-6 text-[#1A5F3C]"
            >
              For Better Assistance, Please Include:
            </motion.h2>
            <ul className="space-y-3">
              {[
                "Product name and variety you're interested in",
                "Quantity required (approximate or exact)",
                "Destination country or port",
                "Any specific quality or packaging requirements",
                "Your company name and contact details"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <span 
                    className="w-6 h-6 bg-[#1A5F3C] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-semibold"
                  >
                    {index + 1}
                  </span>
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* What Happens Next Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl mb-6 text-center text-[#1A5F3C]"
          >
            What Happens After You Enquire?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Quick Response",
                description: "We review your enquiry and respond within 24 hours with initial information and clarifications if needed.",
                step: "01"
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Detailed Quotation",
                description: "Receive a comprehensive quote including product specifications, pricing, packaging options, and shipping terms.",
                step: "02"
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: "Sample Availability",
                description: "For bulk orders, we can arrange product samples to ensure quality meets your expectations before finalizing.",
                step: "03"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Documentation Support",
                description: "Full assistance with export documentation, certifications, and compliance requirements for your destination country.",
                step: "04"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), type: "spring" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#B8860B] hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    animate={{ 
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-12 h-12 bg-[#F5F1E8] rounded-full flex items-center justify-center text-[#1A5F3C] shadow-md"
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-lg text-[#1A5F3C] font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl mb-6 text-center text-[#1A5F3C]"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                question: "What is the minimum order quantity?",
                answer: "MOQ varies by product. We accommodate both bulk orders and smaller trial quantities for new buyers. Please enquire for specific products.",
                icon: <HelpCircle className="w-5 h-5" />
              },
              {
                question: "Do you provide product samples?",
                answer: "Yes, we can provide samples for serious bulk order enquiries. Sample costs and shipping charges may apply and can be discussed during the enquiry process.",
                icon: <Package className="w-5 h-5" />
              },
              {
                question: "What payment terms do you offer?",
                answer: "We work with standard international payment terms including L/C, T/T, and other secure methods. Payment terms are negotiable based on order value and buyer relationship.",
                icon: <CheckCircle2 className="w-5 h-5" />
              },
              {
                question: "How long does shipping take?",
                answer: "Shipping time depends on destination and shipping method. Typically 15-30 days for sea freight. We provide estimated timelines during quotation.",
                icon: <Globe className="w-5 h-5" />
              },
              {
                question: "What certifications do your products have?",
                answer: "Our products come with necessary export certifications including phytosanitary certificates, certificates of origin, quality test reports, and other documentation as required by destination country.",
                icon: <Award className="w-5 h-5" />
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.05), type: "spring" }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#B8860B] hover:shadow-lg transition-all relative overflow-hidden ${index === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: index * 0.5 }}
                    whileHover={{ scale: 1.3, rotate: 20 }}
                    className="w-10 h-10 bg-[#F5F1E8] rounded-full flex items-center justify-center text-[#1A5F3C] flex-shrink-0 shadow-sm"
                  >
                    {faq.icon}
                  </motion.div>
                  <h3 className="text-lg text-[#1A5F3C] font-semibold">{faq.question}</h3>
                </div>
                <p className="text-gray-600 text-sm ml-13">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 bg-[#F5F1E8] p-8 rounded-lg border-2 border-gray-200 relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#1A5F3C] rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl mb-6 text-center text-[#1A5F3C]"
            >
              Why Buyers Trust GreenNova Exports
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Quality First",
                  description: "Every product is sourced from verified suppliers and undergoes quality checks before export."
                },
                {
                  title: "Transparent Pricing",
                  description: "Clear, competitive pricing with no hidden costs. What you see in the quotation is what you pay."
                },
                {
                  title: "Reliable Service",
                  description: "Personal attention to every enquiry and commitment to timely delivery and proper documentation."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), type: "spring" }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="text-3xl mb-3"
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-lg mb-2 text-[#1A5F3C] font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Business Hours Note */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          whileHover={{ scale: 1.02, y: -3 }}
          className="mt-8 p-6 bg-white border-2 border-gray-200 rounded-lg"
        >
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-2 text-[#1A5F3C] font-semibold"
          >
            Business Hours
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600"
          >
            Monday to Saturday: 9:00 AM - 6:00 PM IST
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-gray-600 mt-2"
          >
            We aim to respond to all enquiries within 24 hours during business days.
          </motion.p>
        </motion.div>

        {/* Privacy Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 p-4 bg-gray-100 rounded-lg"
        >
          <p className="text-sm text-gray-600">
            <strong>Privacy Notice:</strong> Your enquiry and contact information will be used solely for responding to your business inquiry. We do not store, share, or use your data for any other purpose. GreenNova Exports is committed to maintaining the confidentiality of all business communications.
          </p>
        </motion.div>
      </div>
    </div>
  );
}