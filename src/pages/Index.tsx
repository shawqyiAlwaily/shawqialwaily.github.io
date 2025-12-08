import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import StickyName from '@/components/StickyName';
import HeroSection from '@/components/sections/HeroSection';
import BiographySection from '@/components/sections/BiographySection';
import VlogsSection from '@/components/sections/VlogsSection';
import VideosSection from '@/components/sections/VideosSection';
import BooksSection from '@/components/sections/BooksSection';
import MeetingsSection from '@/components/sections/MeetingsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle hash navigation (e.g., returning from book detail)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StickyName />
      
      <main>
        <HeroSection />
        <BiographySection />
        <BooksSection />
        <VlogsSection />
        <VideosSection />
        <MeetingsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
