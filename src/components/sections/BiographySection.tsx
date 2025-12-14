import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { Twitter, Linkedin, Youtube, Instagram, MapPin, Globe, BookOpen, Users, Target, Heart } from 'lucide-react';

const BiographySection = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Twitter, url: personalInfo.socialLinks.twitter, label: 'Twitter' },
    { icon: Linkedin, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Youtube, url: personalInfo.socialLinks.youtube, label: 'YouTube' },
    { icon: Instagram, url: personalInfo.socialLinks.instagram, label: 'Instagram' }
  ];

  const expertise = [
    "Leadership at AU: Head six linguistic units, shaping policy, managing budgets, and representing the AU at high-level conferences.",
    "Multilingual Mastery: Fluent in Arabic, English, French, Amharic; operational in Spanish, Portuguese, Swahili.",
    "Strategic Projects: Oversaw translation and communication for billion-dollar infrastructure projects, trade negotiations, and presidential summits."
  ];

  const publications = [
    "Maze: A Tapestry of Challenges and Opportunities",
    "From Failure to Success: The True Tale of Africans' Passion for a Future Without Agonies",
    "Glossary of AU, EU and UN Acronyms (English-French-Arabic)"
  ];

  const network = [
    "African Union Ecosystem: Direct relationships with translation teams across 55 member states; insider understanding of political and economic priorities.",
    "Middle Eastern & Egyptian Connections: Diplomatic networks, Arab League institutional relationships, and Gulf business community access.",
    "Global Institutional Links: Collaborations with the UN, EU, and private sector partners to enable cross-continental initiatives.",
    "Cultural Navigation: Expertise bridging African, Middle Eastern, and global business cultures for seamless partnerships."
  ];

  const competencies = [
    "Operational Excellence: Team leadership, budget management, and delivery under high-pressure diplomatic environments.",
    "Strategic Intelligence: Deep understanding of African political economy and Middle Eastern dynamics; opportunity recognition in emerging markets.",
    "Communication Mastery: Executive presentations, cross-cultural facilitation, and flawless documentation for legal, policy, and investment frameworks."
  ];

  return (
    <section id="biography" ref={sectionRef} className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm">
            {t('bio.subtitle')}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Shawqi Al-Waily
          </h2>
          <p className="text-primary text-lg md:text-xl mt-4 max-w-3xl mx-auto font-medium">
            Head of Translation Division, African Union Commission | Author | Strategic Bridge-Builder
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>
        </div>
        
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image Column */}
          <div className={`relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'} ${isRTL ? 'lg:col-start-2' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-book sticky top-24">
              <img alt="Shawqi Al-Waily Portrait" className="w-full h-full object-cover" src="/lovable-uploads/5671b763-2a42-472c-9ee1-743fb1bc8872.jpg" />
              <div className="absolute inset-4 border-2 border-accent/30 rounded-xl pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>
          
          {/* Content Column */}
          <div className={`space-y-10 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'} ${isRTL ? 'lg:col-start-1 text-right' : 'text-left'}`} style={{ animationDelay: '0.4s' }}>
            
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-primary leading-relaxed text-lg">
                I orchestrate the linguistic infrastructure that enables 55 African nations to speak with one voice. With 29 years in translation leadership and 14 years at the heart of African diplomacy, I turn words into actionable policy, strategic partnerships, and cross-continental opportunities.
              </p>
              <div className="flex items-center gap-2 text-primary/80">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Based in Addis Ababa, operating across Africa, the Middle East, and beyond.</span>
              </div>
            </div>

            {/* Expertise & Achievements */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-accent" />
                <h3 className="font-playfair text-2xl font-bold text-foreground">Expertise & Achievements</h3>
              </div>
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <li key={index} className="text-primary leading-relaxed flex gap-3">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Publications */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-accent" />
                <h3 className="font-playfair text-2xl font-bold text-foreground">Publications</h3>
              </div>
              <p className="text-primary leading-relaxed">
                9 works spanning regional strategy, cultural bridge-building, and language as business intelligence, including:
              </p>
              <ul className="space-y-2 pl-4">
                {publications.map((pub, index) => (
                  <li key={index} className="text-primary leading-relaxed flex gap-3">
                    <span className="text-accent">•</span>
                    <span className="italic">{pub}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Network & Strategic Positioning */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <h3 className="font-playfair text-2xl font-bold text-foreground">Network & Strategic Positioning</h3>
              </div>
              <ul className="space-y-3">
                {network.map((item, index) => (
                  <li key={index} className="text-primary leading-relaxed flex gap-3">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Competencies */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-accent" />
                <h3 className="font-playfair text-2xl font-bold text-foreground">Core Competencies</h3>
              </div>
              <ul className="space-y-3">
                {competencies.map((item, index) => (
                  <li key={index} className="text-primary leading-relaxed flex gap-3">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission & Values */}
            <div className="space-y-4 bg-primary/5 p-6 rounded-xl border border-primary/10">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-accent" />
                <h3 className="font-playfair text-2xl font-bold text-foreground">Mission & Values</h3>
              </div>
              <p className="text-primary leading-relaxed">
                <strong>Mission:</strong> Enabling continental integration through precise communication, turning conversation into action, and fostering sustainable partnerships.
              </p>
              <p className="text-primary leading-relaxed">
                <strong>Core Values:</strong> Institutional excellence, cultural bridge-building, strategic precision, and long-term thinking.
              </p>
              <p className="text-primary leading-relaxed">
                <strong>Personal Foundation:</strong> Married with four children, who understand that when Africa speaks clearly, opportunities multiply—for nations, businesses, and families alike.
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4 pt-4">
              <h3 className="font-playfair text-2xl font-bold text-foreground">Let's Build Bridges Together</h3>
              <p className="text-primary leading-relaxed">
                Ready to unlock opportunities across Africa and the Middle East? Connect with me to explore strategic communication, partnership development, or market intelligence.
              </p>
              <p className="text-primary/80 italic">
                The conversation that changes everything often begins with a single introduction.
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                {t('footer.connect')}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map(social => (
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