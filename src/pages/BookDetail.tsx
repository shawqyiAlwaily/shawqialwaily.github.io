import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { books } from '@/data/content';
import { ArrowLeft, ArrowRight, ExternalLink, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BookDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, language, isRTL } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const book = books.find((b) => b.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [slug]);
  
  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">Book Not Found</h1>
          <Button onClick={() => navigate('/')}>{t('books.backToBooks')}</Button>
        </div>
      </div>
    );
  }
  
  const bookColors = {
    'the-visionary-mind': 'from-primary to-primary-dark',
    'leading-through-chaos': 'from-teal to-primary',
    'the-art-of-influence': 'from-accent-dark to-accent',
    'foundations-of-excellence': 'from-primary-light to-primary',
  };
  
  const bgColor = bookColors[slug as keyof typeof bookColors] || 'from-primary to-primary-dark';
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section with Book */}
        <section className="relative py-16 md:py-24 bg-secondary/30 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            {/* Back Button */}
            <Link
              to="/#books"
              className={`inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              <span className="font-medium">{t('books.backToBooks')}</span>
            </Link>
            
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
              {/* Book Cover */}
              <div className={`flex justify-center ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'} ${isRTL ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className={`relative aspect-[3/4] w-full max-w-sm rounded-xl overflow-hidden shadow-book bg-gradient-to-br ${bgColor}`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-20 h-px bg-primary-foreground/30 mb-8" />
                      <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                        {book.title[language as keyof typeof book.title]}
                      </h1>
                      <p className="text-primary-foreground/60 text-lg mt-6">{book.year}</p>
                      <div className="w-20 h-px bg-primary-foreground/30 mt-8" />
                    </div>
                    
                    {/* Spine Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/30 to-transparent" />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                  </div>
                  
                  {/* Shadow */}
                  <div className="absolute -bottom-6 left-6 right-6 h-12 bg-gradient-to-b from-foreground/20 to-transparent blur-2xl rounded-full" />
                </div>
              </div>
              
              {/* Book Info */}
              <div className={`space-y-8 ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'} ${isRTL ? 'lg:col-start-1' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div>
                  <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
                    {book.year}
                  </span>
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mt-2">
                    {book.title[language as keyof typeof book.title]}
                  </h2>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{t('books.about')}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {book.description[language as keyof typeof book.description]}
                  </p>
                </div>
                
                {/* Buy Button */}
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent-dark text-accent-foreground font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-glow"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t('books.buyNow')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Excerpt Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <BookOpen className="w-6 h-6 text-accent" />
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground">
                  {t('books.excerpt')}
                </h3>
              </div>
              
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border/50">
                <div className="prose prose-lg max-w-none">
                  {book.excerpt[language as keyof typeof book.excerpt].split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-muted-foreground leading-relaxed mb-6 last:mb-0 ${
                        index === 0 ? 'font-playfair text-xl text-foreground' : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Decorative Quote Marks */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-accent/50" />
                  <div className="w-2 h-2 rotate-45 bg-accent" />
                  <div className="w-12 h-px bg-accent/50" />
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center mt-12">
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-light text-primary-foreground font-medium px-8 py-6 text-lg rounded-full transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t('books.buyNow')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
