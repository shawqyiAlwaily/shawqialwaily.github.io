import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.biography': 'Biography',
    'nav.vlogs': 'Vlogs',
    'nav.videos': 'Videos',
    'nav.books': 'Books',
    'nav.meetings': 'Meetings',
    
    // Hero
    'hero.role': 'Leader | Author | Visionary',
    'hero.description': 'Inspiring minds, shaping futures, and leading with purpose.',
    'hero.explore': 'Explore My Journey',
    
    // Biography
    'bio.title': 'Biography',
    'bio.subtitle': 'A Life Dedicated to Excellence',
    'bio.content1': 'With over three decades of experience in leadership and strategic thinking, Dr. Alexander Sterling has transformed the landscape of modern business philosophy. His journey began in the corridors of prestigious universities, where his insatiable curiosity and analytical mind set him apart from his peers.',
    'bio.content2': 'Throughout his illustrious career, he has advised Fortune 500 companies, authored groundbreaking books on leadership, and inspired millions through his thought-provoking speeches. His unique approach combines Eastern philosophical wisdom with Western business acumen, creating a holistic framework for success.',
    'bio.content3': 'Today, Dr. Sterling continues to shape the next generation of leaders through his mentorship programs, bestselling publications, and transformative workshops held across the globe.',
    
    // Vlogs
    'vlogs.title': 'Vlogs',
    'vlogs.subtitle': 'Insights & Reflections',
    'vlogs.watch': 'Watch Now',
    
    // Videos
    'videos.title': 'Videos',
    'videos.subtitle': 'Keynotes & Appearances',
    'videos.play': 'Play Video',
    
    // Books
    'books.title': 'Published Works',
    'books.subtitle': 'Wisdom in Pages',
    'books.viewDetails': 'View Details',
    'books.buyNow': 'Buy on Amazon',
    'books.excerpt': 'Excerpt',
    'books.backToBooks': 'Back to Books',
    'books.about': 'About This Book',
    
    // Meetings
    'meetings.title': 'Meeting Participations',
    'meetings.subtitle': 'Global Engagements',
    
    // Footer
    'footer.connect': 'Connect With Me',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.biography': 'Biographie',
    'nav.vlogs': 'Vlogs',
    'nav.videos': 'Vidéos',
    'nav.books': 'Livres',
    'nav.meetings': 'Rencontres',
    
    // Hero
    'hero.role': 'Leader | Auteur | Visionnaire',
    'hero.description': 'Inspirer les esprits, façonner les avenirs et diriger avec détermination.',
    'hero.explore': 'Découvrir Mon Parcours',
    
    // Biography
    'bio.title': 'Biographie',
    'bio.subtitle': 'Une Vie Dédiée à l\'Excellence',
    'bio.content1': 'Avec plus de trois décennies d\'expérience en leadership et en réflexion stratégique, le Dr Alexander Sterling a transformé le paysage de la philosophie commerciale moderne. Son parcours a commencé dans les couloirs des universités prestigieuses, où sa curiosité insatiable et son esprit analytique l\'ont distingué de ses pairs.',
    'bio.content2': 'Tout au long de sa carrière illustre, il a conseillé des entreprises du Fortune 500, rédigé des livres révolutionnaires sur le leadership et inspiré des millions de personnes à travers ses discours stimulants. Son approche unique combine la sagesse philosophique orientale avec le sens des affaires occidental, créant un cadre holistique pour le succès.',
    'bio.content3': 'Aujourd\'hui, le Dr Sterling continue de former la prochaine génération de leaders à travers ses programmes de mentorat, ses publications à succès et ses ateliers transformateurs organisés à travers le monde.',
    
    // Vlogs
    'vlogs.title': 'Vlogs',
    'vlogs.subtitle': 'Perspectives & Réflexions',
    'vlogs.watch': 'Regarder',
    
    // Videos
    'videos.title': 'Vidéos',
    'videos.subtitle': 'Conférences & Apparitions',
    'videos.play': 'Lire la Vidéo',
    
    // Books
    'books.title': 'Œuvres Publiées',
    'books.subtitle': 'La Sagesse en Pages',
    'books.viewDetails': 'Voir les Détails',
    'books.buyNow': 'Acheter sur Amazon',
    'books.excerpt': 'Extrait',
    'books.backToBooks': 'Retour aux Livres',
    'books.about': 'À Propos de ce Livre',
    
    // Meetings
    'meetings.title': 'Participations aux Rencontres',
    'meetings.subtitle': 'Engagements Mondiaux',
    
    // Footer
    'footer.connect': 'Connectez-vous avec Moi',
    'footer.rights': 'Tous droits réservés.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.biography': 'السيرة الذاتية',
    'nav.vlogs': 'المدونات المرئية',
    'nav.videos': 'الفيديوهات',
    'nav.books': 'الكتب',
    'nav.meetings': 'اللقاءات',
    
    // Hero
    'hero.role': 'قائد | مؤلف | صاحب رؤية',
    'hero.description': 'إلهام العقول، تشكيل المستقبل، والقيادة بهدف.',
    'hero.explore': 'اكتشف رحلتي',
    
    // Biography
    'bio.title': 'السيرة الذاتية',
    'bio.subtitle': 'حياة مكرسة للتميز',
    'bio.content1': 'مع أكثر من ثلاثة عقود من الخبرة في القيادة والتفكير الاستراتيجي، غيّر الدكتور ألكسندر ستيرلينغ مشهد فلسفة الأعمال الحديثة. بدأت رحلته في أروقة الجامعات المرموقة، حيث ميزه فضوله النهم وعقله التحليلي عن أقرانه.',
    'bio.content2': 'طوال مسيرته المهنية اللامعة، قدم المشورة لشركات فورتشن 500، وألف كتباً رائدة في القيادة، وألهم الملايين من خلال خطاباته المثيرة للتفكير. يجمع نهجه الفريد بين الحكمة الفلسفية الشرقية والفطنة التجارية الغربية، مما يخلق إطاراً شاملاً للنجاح.',
    'bio.content3': 'اليوم، يواصل الدكتور ستيرلينغ تشكيل الجيل القادم من القادة من خلال برامجه الإرشادية ومنشوراته الأكثر مبيعاً وورش العمل التحويلية التي يعقدها حول العالم.',
    
    // Vlogs
    'vlogs.title': 'المدونات المرئية',
    'vlogs.subtitle': 'رؤى وتأملات',
    'vlogs.watch': 'شاهد الآن',
    
    // Videos
    'videos.title': 'الفيديوهات',
    'videos.subtitle': 'الكلمات الرئيسية والظهور',
    'videos.play': 'تشغيل الفيديو',
    
    // Books
    'books.title': 'الأعمال المنشورة',
    'books.subtitle': 'الحكمة في صفحات',
    'books.viewDetails': 'عرض التفاصيل',
    'books.buyNow': 'اشترِ من أمازون',
    'books.excerpt': 'مقتطف',
    'books.backToBooks': 'العودة إلى الكتب',
    'books.about': 'عن هذا الكتاب',
    
    // Meetings
    'meetings.title': 'المشاركات في اللقاءات',
    'meetings.subtitle': 'ارتباطات عالمية',
    
    // Footer
    'footer.connect': 'تواصل معي',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const isRTL = language === 'ar';
  
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
