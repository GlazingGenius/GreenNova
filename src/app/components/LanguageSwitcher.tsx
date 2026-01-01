import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, CheckCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    
    // Update document direction for RTL languages
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1A5F3C] text-white hover:bg-[#154d30] transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.name}</span>
        <span className="text-lg">{currentLanguage.flag}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                    i18n.language === lang.code ? 'bg-[#F5F1E8] text-[#1A5F3C] font-semibold' : 'text-gray-700'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {i18n.language === lang.code && (
                    <CheckCircle className="w-4 h-4 ml-auto text-[#1A5F3C]" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}