import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { vlogs } from '@/data/content';
import { Play, ExternalLink } from 'lucide-react';

const VlogsSection = () => {
  const { t, language, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section
      id="vlogs"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm">
            {t('vlogs.subtitle')}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            {t('vlogs.title')}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>
        </div>
        
        {/* Vlogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vlogs.map((vlog, index) => (
            <a
              key={vlog.id}
              href={vlog.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-elegant bg-card transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={vlog.thumbnail}
                    alt={vlog.title[language as keyof typeof vlog.title]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-glow transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-7 h-7 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {vlog.title[language as keyof typeof vlog.title]}
                  </h3>
                  <p className="text-primary text-sm line-clamp-2">
                    {vlog.description[language as keyof typeof vlog.description]}
                  </p>
                  
                  <div className={`flex items-center gap-2 mt-4 text-accent font-medium text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{t('vlogs.watch')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VlogsSection;
