import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { books } from '@/data/content';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const BooksSection = () => {
  const { t, language, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
  
  // Generate book cover colors
  const bookColors = [
    'from-primary to-primary-dark',
    'from-teal to-primary',
    'from-accent-dark to-accent',
    'from-primary-light to-primary',
  ];
  
  return (
    <section
      id="books"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm">
            {t('books.subtitle')}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            {t('books.title')}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>
        </div>
        
        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {books.map((book, index) => (
            <Link
              key={book.id}
              to={`/books/${book.slug}`}
              className={`group book-card ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="relative">
                {/* Book Cover */}
                <div className="book-cover relative aspect-[3/4] rounded-lg overflow-hidden shadow-book transition-all duration-500 transform-gpu">
                  {/* Gradient Cover with Title */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${bookColors[index % bookColors.length]}`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-px bg-primary-foreground/30 mb-6" />
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-primary-foreground leading-tight">
                        {book.title[language as keyof typeof book.title]}
                      </h3>
                      <p className="text-primary-foreground/60 text-sm mt-4">{book.year}</p>
                      <div className="w-16 h-px bg-primary-foreground/30 mt-6" />
                    </div>
                  </div>
                  
                  {/* Spine Effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/30 to-transparent" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Shadow */}
                <div className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-b from-foreground/20 to-transparent blur-xl rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-500" />
              </div>
              
              {/* Book Info */}
              <div className="mt-6 text-center">
                <h4 className="font-playfair text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {book.title[language as keyof typeof book.title]}
                </h4>
                <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                  {book.description[language as keyof typeof book.description]}
                </p>
                
                <div className={`flex items-center justify-center gap-2 mt-4 text-accent font-medium text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t('books.viewDetails')}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
