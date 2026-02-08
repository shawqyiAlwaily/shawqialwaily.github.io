import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

type Language = "en" | "fr" | "ar" | "es";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
	isRTL: boolean;
}

const translations = {
	en: {
		// Navigation
		"nav.home": "Home",
		"nav.biography": "Biography",
		"nav.articles": "Article",
		"nav.vlogs": "Vlogs",
		"nav.videos": "Videos",
		"nav.books": "Books",
		"nav.meetings": "Meetings",

		// Hero
		"hero.role": "Leader | Author | Visionary",
		"hero.description":
			"Inspiring minds, shaping futures, and leading with purpose.",
		"hero.explore": "Explore My Journey",

		// Biography
		"bio.title": "Biography",
		"bio.subtitle": "A Life Dedicated to Excellence",
		"bio.backToHome": "Back to Home",
		"bio.content1":
			"Shawqi Al-Waily is a distinguished researcher and seasoned politician currently serving at the African Union Commission.",
		"bio.content2":
			"With a strong academic foundation in languages and terminology, he holds two master's degrees: one in Translation and Interpretation and a second specialized master's in the Translatability of African Union and United Nations Terminology.",
		"bio.content3":
			"A prolific author and scholar, Shawqi has written six books and compiled a comprehensive glossary of acronyms widely used in international and continental organizations. His work bridges linguistic precision with political and institutional practice, contributing significantly to clearer communication within the African Union, the United Nations, and related multilateral frameworks. Through his dual expertise in research and politics, Shawqi Al-Waily continues to play an influential role in advancing African integration, multilingualism, and effective governance at the continental level.",

		// Vlogs
		"vlogs.title": "Vlogs",
		"vlogs.subtitle": "Insights & Reflections",
		"vlogs.watch": "Watch Now",

		// Videos
		"videos.title": "Videos",
		"videos.subtitle": "Keynotes & Appearances",
		"videos.play": "Play Video",

		// Books
		"books.title": "Published Works",
		// Articles
		"articles.title": "Articles",
		"articles.subtitle": "Short essays & insights",
		"articles.backToArticles": "Back to Articles",
		"books.subtitle": "Wisdom in Pages",
		"books.viewDetails": "View Details",
		"books.buyNow": "Buy on Amazon",
		"books.excerpt": "Excerpt",
		"books.backToBooks": "Back to Books",
		"books.about": "About This Book",

		// Meetings
		"meetings.title": "Meeting Participations",
		"meetings.subtitle": "Global Engagements",

		// Footer
		"footer.connect": "Connect With Me",
		"footer.rights": "All rights reserved.",
	},
	fr: {
		// Navigation
		"nav.home": "Accueil",
		"nav.biography": "Biographie",
		"nav.articles": "Article",
		"nav.vlogs": "Vlogs",
		"nav.videos": "Vidéos",
		"nav.books": "Livres",
		"nav.meetings": "Rencontres",

		// Hero
		"hero.role": "Leader | Auteur | Visionnaire",
		"hero.description":
			"Inspirer les esprits, façonner les avenirs et diriger avec détermination.",
		"hero.explore": "Découvrir Mon Parcours",

		// Biography
		"bio.title": "Biographie",
		"bio.subtitle": "Une Vie Dédiée à l'Excellence",
		"bio.backToHome": "Retour à l'accueil",
		"bio.content1":
			"Shawqi Al-Waily est un chercheur distingué et un politicien chevronné actuellement en poste à la Commission de l'Union Africaine.",
		"bio.content2":
			"Avec une solide formation académique en langues et terminologie, il détient deux diplômes de master : l'un en Traduction et Interprétation et un second master spécialisé en Traductibilité de la Terminologie de l'Union Africaine et des Nations Unies.",
		"bio.content3":
			"Auteur prolifique et érudit, Shawqi a écrit six livres et compilé un glossaire complet des acronymes largement utilisés dans les organisations internationales et continentales. Son travail établit un pont entre la précision linguistique et la pratique politique et institutionnelle, contribuant de manière significative à une communication plus claire au sein de l'Union Africaine, des Nations Unies et des cadres multilatéraux connexes. Grâce à sa double expertise en recherche et en politique, Shawqi Al-Waily continue de jouer un rôle influent dans l'avancement de l'intégration africaine, du multilinguisme et de la gouvernance efficace au niveau continental.",

		// Vlogs
		"vlogs.title": "Vlogs",
		"vlogs.subtitle": "Perspectives & Réflexions",
		"vlogs.watch": "Regarder",

		// Videos
		"videos.title": "Vidéos",
		"videos.subtitle": "Conférences & Apparitions",
		"videos.play": "Lire la Vidéo",

		// Books
		"books.title": "Œuvres Publiées",
		// Articles
		"articles.title": "Articles",
		"articles.subtitle": "Brefs essais & idées",
		"articles.backToArticles": "Retour aux Articles",
		"books.subtitle": "La Sagesse en Pages",
		"books.viewDetails": "Voir les Détails",
		"books.buyNow": "Acheter sur Amazon",
		"books.excerpt": "Extrait",
		"books.backToBooks": "Retour aux Livres",
		"books.about": "À Propos de ce Livre",

		// Meetings
		"meetings.title": "Participations aux Rencontres",
		"meetings.subtitle": "Engagements Mondiaux",

		// Footer
		"footer.connect": "Connectez-vous avec Moi",
		"footer.rights": "Tous droits réservés.",
	},
	ar: {
		// Navigation
		"nav.home": "الرئيسية",
		"nav.biography": "السيرة الذاتية",
		"nav.articles": "المقالات",
		"nav.vlogs": "المدونات المرئية",
		"nav.videos": "الفيديوهات",
		"nav.books": "الكتب",
		"nav.meetings": "اللقاءات",

		// Hero
		"hero.role": "قائد | مؤلف | صاحب رؤية",
		"hero.description": "إلهام العقول، تشكيل المستقبل، والقيادة بهدف.",
		"hero.explore": "اكتشف رحلتي",

		// Biography
		"bio.title": "السيرة الذاتية",
		"bio.subtitle": "حياة مكرسة للتميز",
		"bio.backToHome": "العودة إلى الصفحة الرئيسية",
		"bio.content1":
			"شوقي الوائلي باحث متميز وسياسي محنك يعمل حالياً في مفوضية الاتحاد الأفريقي.",
		"bio.content2":
			"بخلفية أكاديمية قوية في اللغات والمصطلحات، يحمل درجتي ماجستير: واحدة في الترجمة التحريرية والشفوية وماجستير متخصص ثانٍ في قابلية ترجمة مصطلحات الاتحاد الأفريقي والأمم المتحدة.",
		"bio.content3":
			"مؤلف غزير الإنتاج وعالم بارز، كتب شوقي ستة كتب وجمع قاموساً شاملاً للاختصارات المستخدمة على نطاق واسع في المنظمات الدولية والقارية. يربط عمله بين الدقة اللغوية والممارسة السياسية والمؤسسية، مما يساهم بشكل كبير في تحقيق تواصل أوضح داخل الاتحاد الأفريقي والأمم المتحدة والأطر متعددة الأطراف ذات الصلة. من خلال خبرته المزدوجة في البحث والسياسة، يواصل شوقي الوائلي لعب دور مؤثر في تعزيز التكامل الأفريقي وتعدد اللغات والحوكمة الفعالة على المستوى القاري.",

		// Vlogs
		"vlogs.title": "المدونات المرئية",
		"vlogs.subtitle": "رؤى وتأملات",
		"vlogs.watch": "شاهد الآن",

		// Videos
		"videos.title": "الفيديوهات",
		"videos.subtitle": "الكلمات الرئيسية والظهور",
		"videos.play": "تشغيل الفيديو",

		// Books
		"books.title": "الأعمال المنشورة",
		// Articles
		"articles.title": "المقالات",
		"articles.subtitle": "مقالات قصيرة وأفكار",
		"articles.backToArticles": "العودة إلى المقالات",
		"books.subtitle": "الحكمة في صفحات",
		"books.viewDetails": "عرض التفاصيل",
		"books.buyNow": "اشترِ من أمازون",
		"books.excerpt": "مقتطف",
		"books.backToBooks": "العودة إلى الكتب",
		"books.about": "عن هذا الكتاب",

		// Meetings
		"meetings.title": "المشاركات في اللقاءات",
		"meetings.subtitle": "ارتباطات عالمية",

		// Footer
		"footer.connect": "تواصل معي",
		"footer.rights": "جميع الحقوق محفوظة.",
	},
	es: {
		// Navigation
		"nav.home": "Inicio",
		"nav.biography": "Biografía",
		"nav.articles": "Artículos",
		"nav.vlogs": "Vlogs",
		"nav.videos": "Videos",
		"nav.books": "Libros",
		"nav.meetings": "Reuniones",

		// Hero
		"hero.role": "Líder | Autor | Visionario",
		"hero.description":
			"Inspirando mentes, formando futuros y liderando con propósito.",
		"hero.explore": "Explora Mi Trayectoria",

		// Biography
		"bio.title": "Biografía",
		"bio.subtitle": "Una vida dedicada a la excelencia",
		"bio.backToHome": "Volver al inicio",
		"bio.content1":
			"Shawqi Al-Waily es un investigador distinguido y un político con servicio en la Comisión de la Unión Africana.",
		"bio.content2":
			"Con una sólida formación académica en lenguas y terminología, posee dos maestrías: una en Traducción e Interpretación y otra especializada en la traducibilidad de la terminología de la Unión Africana y las Naciones Unidas.",
		"bio.content3":
			"Autor prolífico y académico, Shawqi ha escrito seis libros y compilado un glosario completo de siglas usado en organizaciones internacionales y continentales. Su trabajo une la precisión lingüística con la práctica política e institucional, contribuyendo a una comunicación más clara dentro de la Unión Africana, las Naciones Unidas y los marcos multilaterales relacionados. Gracias a su doble experiencia en investigación y política, Shawqi Al-Waily continúa desempeñando un papel influyente en el avance de la integración africana, el multilingüismo y la gobernanza eficaz a nivel continental.",

		// Vlogs
		"vlogs.title": "Vlogs",
		"vlogs.subtitle": "Ideas y reflexiones",
		"vlogs.watch": "Ver ahora",

		// Videos
		"videos.title": "Videos",
		"videos.subtitle": "Conferencias y apariciones",
		"videos.play": "Reproducir video",

		// Books
		"books.title": "Obras publicadas",
		// Articles
		"articles.title": "Artículos",
		"articles.subtitle": "Ensayos breves y reflexiones",
		"articles.backToArticles": "Volver a los artículos",
		"books.subtitle": "Sabiduría en páginas",
		"books.viewDetails": "Ver detalles",
		"books.buyNow": "Comprar en Amazon",
		"books.excerpt": "Extracto",
		"books.backToBooks": "Volver a los libros",
		"books.about": "Acerca de este libro",

		// Meetings
		"meetings.title": "Participaciones en reuniones",
		"meetings.subtitle": "Compromisos globales",

		// Footer
		"footer.connect": "Conéctate conmigo",
		"footer.rights": "Todos los derechos reservados.",
	},
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Language>("en");

	const isRTL = language === "ar";

	useEffect(() => {
		document.documentElement.dir = isRTL ? "rtl" : "ltr";
		document.documentElement.lang = language;
	}, [language, isRTL]);

	const t = (key: string): string => {
		return (
			translations[language][key as keyof (typeof translations)["en"]] || key
		);
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
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
