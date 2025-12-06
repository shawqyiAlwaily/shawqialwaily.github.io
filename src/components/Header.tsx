import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { href: '#hero', label: t('nav.home') },
    { href: '#biography', label: t('nav.biography') },
    { href: '#vlogs', label: t('nav.vlogs') },
    { href: '#videos', label: t('nav.videos') },
    { href: '#books', label: t('nav.books') },
    { href: '#meetings', label: t('nav.meetings') },
  ];
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>
          
          {/* Language Switcher - Right */}
          <div className={cn(
            "flex items-center gap-4",
            isRTL ? "flex-row-reverse" : ""
          )}>
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={cn(
                  "w-6 h-6 transition-colors",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )} />
              ) : (
                <Menu className={cn(
                  "w-6 h-6 transition-colors",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-full bg-card/98 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground font-medium py-2 text-left hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
