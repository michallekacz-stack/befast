import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.whyUs, href: '#why-us' },
    { name: t.nav.van, href: '#van-capacity' },
    { name: t.nav.testimonials, href: '#opinie' },
    { name: t.nav.faq, href: '#faq' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative h-12 sm:h-14 w-48 sm:w-56 flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}images/logobefast.png`}
              alt="Be Fast Cargo" 
              className="h-full w-full object-contain object-left"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-2 ml-4 border-l pl-4 border-white/20">
            <button 
              onClick={() => setLanguage('en')}
              className={cn("text-xs font-bold transition-colors", language === 'en' ? "text-orange-500" : "text-white/50 hover:text-white")}
            >
              EN
            </button>
            <span className="text-xs text-white/30">|</span>
            <button 
              onClick={() => setLanguage('pl')}
              className={cn("text-xs font-bold transition-colors", language === 'pl' ? "text-orange-500" : "text-white/50 hover:text-white")}
            >
              PL
            </button>
          </div>

          <a
            href="#kontakt"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
          >
            {t.nav.quote}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLanguage('en')}
              className={cn("text-xs font-bold transition-colors", language === 'en' ? "text-orange-500" : "text-white/50")}
            >
              EN
            </button>
            <span className="text-xs text-white/30">|</span>
            <button 
              onClick={() => setLanguage('pl')}
              className={cn("text-xs font-bold transition-colors", language === 'pl' ? "text-orange-500" : "text-white/50")}
            >
              PL
            </button>
          </div>
          <button
            className="p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 font-medium py-2 hover:text-orange-500"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium text-center mt-2"
              >
                {t.nav.quote}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
