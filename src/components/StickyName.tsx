import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const StickyName = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isRTL } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div
      className={cn(
        "fixed top-6 z-50 transition-all duration-500",
        isRTL ? "right-6 md:right-10" : "left-6 md:left-10",
        isScrolled 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-3 bg-card/90 backdrop-blur-md rounded-full px-4 py-2 shadow-elegant border border-border/50">
        <div className="w-8 h-8 rounded-full bg-gradient-gold" />
        <span className="font-playfair text-lg font-semibold text-foreground">
          {personalInfo.name}
        </span>
      </div>
    </div>
  );
};

export default StickyName;
