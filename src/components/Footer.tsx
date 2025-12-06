import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { Twitter, Linkedin, Youtube, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const { t, isRTL } = useLanguage();
  
  const socialLinks = [
    { icon: Twitter, url: personalInfo.socialLinks.twitter, label: 'Twitter' },
    { icon: Linkedin, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Youtube, url: personalInfo.socialLinks.youtube, label: 'YouTube' },
    { icon: Instagram, url: personalInfo.socialLinks.instagram, label: 'Instagram' },
  ];
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-primary text-primary-foreground py-16">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            {personalInfo.name}
          </h3>
          
          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:shadow-glow"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
            <span>© {currentYear} {personalInfo.name}.</span>
            <span>{t('footer.rights')}</span>
          </p>
          
          {/* Made with love */}
          <p className={`text-primary-foreground/40 text-xs mt-4 flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            Made with <Heart className="w-3 h-3 text-accent fill-accent" /> and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
