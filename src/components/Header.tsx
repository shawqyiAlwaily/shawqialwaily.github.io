import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);
  
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
    setIsMenuOpen(false);
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
        <div className="flex items-center justify-end gap-4">
          <LanguageSwitcher />
          
          {/* Hamburger Menu */}
          <div ref={menuRef} className="relative">
            <button
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                isScrolled 
                  ? "hover:bg-muted" 
                  : "hover:bg-primary-foreground/10"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={cn(
                    "w-6 h-6 absolute inset-0 transition-all duration-300",
                    isScrolled ? "text-foreground" : "text-primary-foreground",
                    isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  )} 
                />
                <X 
                  className={cn(
                    "w-6 h-6 absolute inset-0 transition-all duration-300",
                    isScrolled ? "text-foreground" : "text-primary-foreground",
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  )} 
                />
              </div>
            </button>

            {/* Dropdown Menu */}
            <div
              className={cn(
                "absolute top-full mt-2 bg-card/98 backdrop-blur-md rounded-xl shadow-elegant border border-border/50 overflow-hidden transition-all duration-300 origin-top-right",
                isRTL ? "left-0" : "right-0",
                isMenuOpen 
                  ? "opacity-100 scale-100 translate-y-0" 
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              )}
            >
              <nav className="py-2 min-w-[180px]">
                {navItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full px-5 py-3 text-foreground font-medium text-left hover:bg-muted/50 hover:text-primary transition-all duration-200",
                      isRTL && "text-right"
                    )}
                    style={{
                      animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
