import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxSpeed = 0.4;
      hero.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToContent = () => {
    document.querySelector('#biography')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div ref={heroRef} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
          alt="Portrait"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="w-16 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-16 h-px bg-accent" />
          </div>
          
          {/* Name */}
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {personalInfo.name}
          </h1>
          
          {/* Role */}
          <p className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-accent opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            {t('hero.role')}
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {t('hero.description')}
          </p>
          
          {/* CTA Button */}
          <div className="pt-8 opacity-0 animate-fade-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button
              onClick={scrollToContent}
              size="lg"
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-glow"
            >
              {t('hero.explore')}
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <button
            onClick={scrollToContent}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
