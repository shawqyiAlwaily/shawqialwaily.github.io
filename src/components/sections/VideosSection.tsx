import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { videos } from '@/data/content';
import { Play, X } from 'lucide-react';

const VideosSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };
  
  return (
    <section
      id="videos"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm">
            {t('videos.subtitle')}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            {t('videos.title')}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>
        </div>
        
        {/* Videos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video.videoUrl)}
              className={`group text-left video-card transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-elegant bg-card">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title[language as keyof typeof video.title]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/50 video-overlay opacity-0 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-glow">
                      <Play className="w-6 h-6 text-accent-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-playfair text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {video.title[language as keyof typeof video.title]}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-2 line-clamp-2">
                    {video.description[language as keyof typeof video.description]}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/20 hover:bg-card/30 flex items-center justify-center text-primary-foreground transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div
            className="w-full max-w-5xl aspect-video mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`}
              className="w-full h-full rounded-2xl shadow-book"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideosSection;
