import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const BiographySection = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const socialLinks = [
    { icon: Twitter, url: personalInfo.socialLinks.twitter, label: 'Twitter' },
    { icon: Linkedin, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Youtube, url: personalInfo.socialLinks.youtube, label: 'YouTube' },
    { icon: Instagram, url: personalInfo.socialLinks.instagram, label: 'Instagram' },
  ];
  
  return (
    <section
      id="biography"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-24 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm">
            {t('bio.subtitle')}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            {t('bio.title')}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>
        </div>
        
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image Column */}
          <div className={`relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'} ${isRTL ? 'lg:col-start-2' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-book">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-accent/30 rounded-xl pointer-events-none" />
            </div>
            
            {/* Floating Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>
          
          {/* Content Column */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'} ${isRTL ? 'lg:col-start-1' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>{t('bio.content1')}</p>
              <p>{t('bio.content2')}</p>
              <p>{t('bio.content3')}</p>
            </div>
            
            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {t('footer.connect')}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/5 hover:bg-accent hover:text-accent-foreground flex items-center justify-center text-foreground/70 transition-all duration-300 hover:shadow-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
