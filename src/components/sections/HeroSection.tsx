import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToContent = () => {
    document.querySelector('#biography')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="relative min-h-screen bg-primary-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark opacity-90" />
      
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0">
          <div className="max-w-xl space-y-8">
            {/* Decorative Line */}
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="w-16 h-px bg-accent" />
              <div className="w-2 h-2 rotate-45 bg-accent" />
            </div>
            
            {/* Name */}
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground leading-tight opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              {personalInfo.name}
            </h1>
            
            {/* Role - Large titles */}
            <div className="space-y-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <p className="text-2xl md:text-3xl lg:text-4xl font-playfair text-accent font-medium">
                {t('hero.role')}
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-primary-foreground/80">
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
        
        {/* Right Side - Full Body Image */}
        <div className="lg:w-[45%] xl:w-[50%] relative flex items-end justify-center lg:justify-end">
          <div className="relative w-full h-[60vh] lg:h-full opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-transparent to-transparent z-10 lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent z-10" />
            
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top"
            />
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
