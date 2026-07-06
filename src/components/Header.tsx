import { useState, useEffect } from 'react';
import { CloudCheck, Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'benefits', 'features', 'pricing', 'faq', 'register'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Trang chủ', id: 'home' },
    { label: 'Giải pháp', id: 'benefits' },
    { label: 'Tính năng', id: 'features' },
    { label: 'Bảng giá', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Liên hệ', id: 'register' },
  ];

  return (
    <header
      id="top-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
        isScrolled
          ? 'glass shadow-md border-b border-gray-200/20 bg-white/85'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-full">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <CloudCheck className="text-white w-6 h-6" />
          </div>
          <span className="font-sans text-xl font-extrabold tracking-tight text-primary">
            VNPT <span className="text-vnpt-blue">Mobile Sales</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-sans text-sm font-semibold transition-all duration-200 cursor-pointer py-1 relative ${
                activeSection === link.id
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0888000999"
            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-vnpt-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>0888 000 999</span>
          </a>
          <button
            onClick={onContactClick}
            className="bg-vnpt-orange hover:bg-orange-600 text-white font-sans text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-vnpt-orange/20 hover:shadow-vnpt-orange/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            Đăng ký tư vấn
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onContactClick}
            className="bg-vnpt-orange text-white text-xs font-bold px-3 py-2 rounded-lg"
          >
            Tư vấn
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-xl border-b border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200 z-40">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left font-sans text-base font-semibold py-2 px-3 rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'bg-primary/5 text-primary'
                    : 'text-on-surface-variant hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-gray-100 pt-4 flex flex-col gap-4">
              <a
                href="tel:0888000999"
                className="flex items-center gap-2.5 font-semibold text-primary px-3"
              >
                <Phone className="w-5 h-5" />
                <span>0888 000 999</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
