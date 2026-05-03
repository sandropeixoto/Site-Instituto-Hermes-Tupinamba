import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'O que fazemos', href: '#services' },
  { name: 'Sobre', href: '#about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'py-3' : 'py-6'
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto flex items-center justify-between rounded-2xl transition-all duration-300',
        isScrolled ? 'glass px-6 py-2' : 'bg-transparent'
      )}>
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white border border-brand-brown rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden p-1">
            <img src="./logo-simbolo-IHT.png" alt="Logo Instituto Hermes Tupinambá" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col hidden sm:flex">
            <span className="font-montserrat font-bold text-[10px] tracking-[0.2em] text-slate-500 uppercase leading-none mb-1">
              Instituto
            </span>
            <span className="font-cinzel font-bold text-lg text-brand-blue uppercase leading-none tracking-wide">
              <span className="text-[22px]">H</span>ermes <span className="text-[22px]">T</span>upinambá
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-blue text-white px-5 py-2 rounded-xl font-semibold text-sm hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 hover:scale-105 active:scale-95"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 glass rounded-2xl p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-blue text-white px-5 py-3 rounded-xl font-semibold text-center mt-2 shadow-lg shadow-brand-blue/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
