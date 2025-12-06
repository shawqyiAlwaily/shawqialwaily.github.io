import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const languages = [
    { code: 'en' as const, label: 'EN' },
    { code: 'fr' as const, label: 'FR' },
    { code: 'ar' as const, label: 'ع' },
  ];
  
  return (
    <div className="flex items-center gap-1 rounded-full bg-primary/10 p-1 backdrop-blur-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
            language === lang.code
              ? "bg-accent text-accent-foreground shadow-sm"
              : "text-foreground/70 hover:text-foreground hover:bg-primary/5"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
