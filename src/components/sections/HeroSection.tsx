import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToContent = () => {
    document.querySelector('#biography')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Full Width Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/shawqi-hero-new.png"
          alt={personalInfo.name}
          className="w-full h-full object-cover -scale-x-100"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-xl space-y-8">
          {/* Decorative Line */}
          <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="w-16 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
          </div>
          
          {/* Name */}
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-tight opacity-0 animate-fade-up drop-shadow-lg" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {personalInfo.name}
          </h1>
          
          {/* Role - Large titles */}
          <div className="space-y-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-playfair text-accent font-medium drop-shadow-md">
              {t('hero.role')}
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-primary-foreground/90 drop-shadow-md">
              Visionary
            </p>
          </div>
          
          {/* Decorative accent */}
          <div className="flex items-center gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="w-12 h-1 bg-accent" />
            <div className="w-8 h-1 bg-accent/60" />
            <div className="w-4 h-1 bg-accent/30" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-8 md:left-16 lg:left-24 z-20 animate-float">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
