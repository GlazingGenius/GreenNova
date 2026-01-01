import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage(
          "👋 Welcome to GreenNova Exports! I'm here to help you with:\n\n• Product Information\n• Export Enquiries\n• Documentation\n• Contact Details\n\nHow can I assist you today?",
          [
            "View Products",
            "Make Enquiry",
            "Export Process",
            "Contact Details"
          ]
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, options?: string[]) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
  };

  const handleQuickReply = (option: string) => {
    addUserMessage(option);
    setIsTyping(true);

    setTimeout(() => {
      processBotResponse(option);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addUserMessage(inputValue);
    setIsTyping(true);

    setTimeout(() => {
      processBotResponse(inputValue);
    }, 1000);
  };

  const processBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();

    // Open WhatsApp - Check this FIRST before general whatsapp mentions
    if (input === 'open whatsapp') {
      window.open('https://wa.me/918147008048?text=Hi%2C%20I%20have%20an%20enquiry%20about%20your%20products', '_blank');
      addBotMessage(
        "✅ WhatsApp opened! We'll respond to your message shortly.",
        ["View Products", "Export Process"]
      );
    }
    // Email
    else if (input === 'send email') {
      window.location.href = 'mailto:nageshasnageshas614@gmail.com?subject=Export Enquiry from Website';
      addBotMessage(
        "✅ Email client opened! You can also reach us at:\n\nnageshasnageshas614@gmail.com",
        ["View Products", "Make Enquiry"]
      );
    }
    // Products
    else if (input.includes('product') || input.includes('what do you sell') || input === 'view products') {
      addBotMessage(
        "🌾 We export premium Indian agricultural products:\n\n• 🌶️ Spices (Turmeric, Red Chili, Cumin, Coriander)\n• 🍚 Basmati Rice (1121, Premium Aged)\n• 🫘 Pulses & Lentils (Toor, Moong, Chickpeas)\n• 🥥 Cocopeat (Blocks, Grow Bags)\n• 🥜 Cashew Nuts (Premium W320, W240)\n• 🌽 Agro Commodities\n\nAll products are ISO certified with complete documentation!",
        ["Make Enquiry", "Export Process", "View Markets", "Contact Us"]
      );
    }
    // Enquiry
    else if (input.includes('enquiry') || input.includes('quote') || input.includes('price') || input === 'make enquiry') {
      addBotMessage(
        "📋 I'd be happy to help with your enquiry!\n\nYou can reach our founder Manjunath B directly:\n\n📱 WhatsApp: +91 8147008048\n📧 Email: nageshasnageshas614@gmail.com\n\nWould you like me to connect you via WhatsApp?",
        ["Connect on WhatsApp", "Send Email", "View Products"]
      );
    }
    // Export Process
    else if (input.includes('export') || input.includes('documentation') || input.includes('shipping') || input === 'export process') {
      addBotMessage(
        "🚢 Our Export Process:\n\n✅ Complete Documentation\n✅ Quality Certificates\n✅ FSSAI & ISO Approved\n✅ Global Shipping Solutions\n✅ Custom Packaging\n✅ Timely Delivery\n\nWe handle all export formalities from India to your destination!",
        ["Make Enquiry", "View Markets", "Contact Us"]
      );
    }
    // Markets
    else if (input.includes('market') || input.includes('country') || input.includes('where') || input === 'view markets') {
      addBotMessage(
        "🌍 We export to 50+ countries:\n\n• 🇦🇪 Middle East (UAE, Saudi Arabia)\n• 🇪🇺 Europe (UK, Germany, France)\n• 🇺🇸 North America (USA, Canada)\n• 🇸🇬 Southeast Asia (Singapore, Malaysia)\n• 🇦🇺 Australia & New Zealand\n\nWherever you are, we deliver!",
        ["Make Enquiry", "View Products", "Contact Us"]
      );
    }
    // Contact
    else if (input.includes('contact') || input.includes('phone') || input.includes('email') || input === 'contact details' || input === 'contact us') {
      addBotMessage(
        "📞 Contact GreenNova Exports:\n\n👤 Founder: Manjunath B\n📱 Phone: +91 8147008048\n📧 Email: nageshasnageshas614@gmail.com\n📍 Location: Bengaluru, Karnataka, India\n\nReach out anytime for enquiries!",
        ["Connect on WhatsApp", "Send Email", "View Products"]
      );
    }
    // WhatsApp - General mention
    else if (input.includes('whatsapp') || input === 'connect on whatsapp') {
      addBotMessage(
        "✅ Great! Click the button below to chat with us on WhatsApp:",
        ["Open WhatsApp"]
      );
    }
    // Quality/Certification
    else if (input.includes('quality') || input.includes('certified') || input.includes('iso') || input.includes('fssai')) {
      addBotMessage(
        "🏆 Quality Certifications:\n\n✅ ISO Certified\n✅ FSSAI Approved\n✅ Premium Quality Products\n✅ Laboratory Tested\n✅ International Standards\n\nWe ensure top-quality exports with complete documentation!",
        ["View Products", "Make Enquiry", "Contact Us"]
      );
    }
    // Pricing
    else if (input.includes('price') || input.includes('cost') || input.includes('rate')) {
      addBotMessage(
        "💰 For pricing and quotations:\n\nPrices vary based on:\n• Product type\n• Quantity\n• Destination\n• Packaging requirements\n\nPlease contact us for a customized quote!",
        ["Make Enquiry", "Connect on WhatsApp"]
      );
    }
    // Minimum Order
    else if (input.includes('minimum') || input.includes('moq') || input.includes('order quantity')) {
      addBotMessage(
        "📦 Minimum Order Quantity (MOQ):\n\nMOQ varies by product. We handle:\n• Bulk orders\n• Container loads\n• Custom quantities\n\nContact us to discuss your requirements!",
        ["Make Enquiry", "Contact Us"]
      );
    }
    // Default
    else {
      addBotMessage(
        "I'm here to help! You can ask me about:\n\n• Products we export\n• Export process\n• Global markets\n• Contact information\n• Quality certifications\n\nOr choose an option below:",
        ["View Products", "Make Enquiry", "Export Process", "Contact Us"]
      );
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Ripple Effect */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 bg-[#1A5F3C] rounded-full"
        />
        
        {/* Outer Glow Ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 bg-[#B8860B] rounded-full blur-sm"
        />

        {/* Main Button */}
        <motion.button
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -10, 10, -10, 0],
            transition: { rotate: { duration: 0.5 } }
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1A5F3C] to-[#154d30] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#1A5F3C]/50 transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0, scale: 0 }}
                animate={{ 
                  rotate: 0, 
                  opacity: 1, 
                  scale: 1 
                }}
                exit={{ rotate: -90, opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    rotate: [0, -15, 15, -15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                >
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
                
                {/* Notification Badge */}
                <motion.span
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-[#B8860B] rounded-full border-2 border-white flex items-center justify-center"
                >
                  <motion.span
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Shine Effect */}
          <motion.div
            animate={{
              x: [-100, 100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
            className="absolute inset-0 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 skew-x-12" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1A5F3C] to-[#154d30] text-white p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 text-[#1A5F3C]" />
                </motion.div>
                <div>
                  <div className="font-bold">GreenNova Assistant</div>
                  <div className="text-xs text-green-200 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                    Online
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="h-[400px] sm:h-[450px] overflow-y-auto p-4 bg-[#F5F1E8] space-y-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] ${message.isBot ? 'order-1' : 'order-2'}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.isBot
                          ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
                          : 'bg-[#1A5F3C] text-white shadow-md'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 px-2 ${message.isBot ? 'text-left' : 'text-right'}`}>
                      {formatTime(message.timestamp)}
                    </div>
                    
                    {/* Quick Reply Options */}
                    {message.options && message.options.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 space-y-2"
                      >
                        {message.options.map((option, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleQuickReply(option)}
                            className="block w-full text-left px-4 py-2.5 bg-white hover:bg-[#F5F1E8] text-[#1A5F3C] rounded-xl text-sm font-medium shadow-sm border border-gray-200 transition-all"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-gray-100">
                    <div className="flex gap-1.5">
                      <motion.span
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.span
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.span
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A5F3C] focus:border-transparent text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2.5 bg-[#1A5F3C] text-white rounded-xl hover:bg-[#154d30] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by GreenNova Exports
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}