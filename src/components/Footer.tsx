import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { Twitter, Linkedin, Youtube, Instagram, Heart, Phone, Mail } from 'lucide-react';

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
    <footer className="relative bg-primary text-primary-foreground">
      {/* Contact Section */}
      <div className="bg-soft-blue py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">
              {isRTL ? 'تواصل معي' : 'Contact Me'}
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-accent" />
              <div className="w-2 h-2 rotate-45 bg-accent" />
              <div className="w-12 h-px bg-accent" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Phone Numbers */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="text-center">
                <a 
                  href="tel:+201002307197" 
                  className="block text-primary hover:text-accent transition-colors font-medium"
                >
                  +20 100 230 7197
                </a>
                <a 
                  href="tel:+251912601933" 
                  className="block text-primary hover:text-accent transition-colors font-medium"
                >
                  +251 912 601 933
                </a>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <a 
                href="mailto:shawqialwaily@outlook.com" 
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                shawqialwaily@outlook.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Name */}
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              {personalInfo.name}
            </h3>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:shadow-glow"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
              <span>© {currentYear} {personalInfo.name}.</span>
              <span>{t('footer.rights')}</span>
            </p>
            
            {/* Made with love */}
            <p className={`text-primary-foreground/40 text-xs mt-3 flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              Made with <Heart className="w-3 h-3 text-accent fill-accent" /> and dedication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
