import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/content";
import {
	Twitter,
	Linkedin,
	Youtube,
	Instagram,
	MapPin,
	Globe,
	BookOpen,
	Users,
	Target,
	Heart,
} from "lucide-react";

type Locale = "en" | "fr" | "ar" | "es";

const copy: Record<
	Locale,
	{
		roleLine: string;
		intro: string;
		location: string;
		expertiseTitle: string;
		expertise: string[];
		publicationsTitle: string;
		publicationsIntro: string;
		publications: string[];
		networkTitle: string;
		network: string[];
		competenciesTitle: string;
		competencies: string[];
		missionHeading: string;
		missionLabel: string;
		valuesLabel: string;
		foundationLabel: string;
		missionBody: string;
		valuesBody: string;
		foundationBody: string;
		ctaTitle: string;
		ctaBody: string;
		ctaNote: string;
		ctaButton?: string;
		ctaButtonSecondary?: string;
		missionCTA?: string;
		bridgeCTA: string;
	}
> = {
	en: {
		roleLine:
			"Head of Translation Division, African Union Commission | Author | Strategic Bridge-Builder",
		intro:
			"I orchestrate the linguistic infrastructure that enables 55 African nations to speak with one voice. With 29 years in translation leadership and 14 years at the heart of African diplomacy, I turn words into actionable policy, strategic partnerships, and cross-continental opportunities.",
		location:
			"Based in Addis Ababa, operating across Africa, the Middle East, and beyond.",
		expertiseTitle: "Expertise & Achievements",
		expertise: [
			"Leadership at AU: Head six linguistic units, shaping policy, managing budgets, and representing the AU at high-level conferences.",
			"Multilingual Mastery: Fluent in Arabic, English, French, Amharic; operational in Spanish, Portuguese, Swahili.",
			"Strategic Projects: Oversaw translation and communication for billion-dollar infrastructure projects, trade negotiations, and presidential summits.",
		],
		publicationsTitle: "Publications",
		publicationsIntro:
			"9 works spanning regional strategy, cultural bridge-building, and language as business intelligence, including:",
		publications: [
			"Maze: A Tapestry of Challenges and Opportunities",
			"From Failure to Success",
			"Glossary of AU, EU and UN Acronyms (English-French-Arabic)",
		],
		networkTitle: "Network & Strategic Positioning",
		network: [
			"African Union Ecosystem: Direct relationships with translation teams across 55 member states; insider understanding of political and economic priorities.",
			"Middle Eastern & Egyptian Connections: Diplomatic networks, Arab League institutional relationships, and Gulf business community access.",
			"Global Institutional Links: Collaborations with the UN, EU, and private sector partners to enable cross-continental initiatives.",
			"Cultural Navigation: Expertise bridging African, Middle Eastern, and global business cultures for seamless partnerships.",
		],
		competenciesTitle: "Core Competencies",
		competencies: [
			"Operational Excellence: Team leadership, budget management, and delivery under high-pressure diplomatic environments.",
			"Strategic Intelligence: Deep understanding of African political economy and Middle Eastern dynamics; opportunity recognition in emerging markets.",
			"Communication Mastery: Executive presentations, cross-cultural facilitation, and flawless documentation for legal, policy, and investment frameworks.",
		],
		missionHeading: "Mission & Values",
		missionLabel: "Mission:",
		valuesLabel: "Core Values:",
		foundationLabel: "Personal Foundation:",
		missionBody:
			"Enabling continental integration through precise communication, turning conversation into action, and fostering sustainable partnerships.",
		valuesBody:
			"Institutional excellence, cultural bridge-building, strategic precision, and long-term thinking.",
		foundationBody:
			"Married with four children, who understand that when Africa speaks clearly, opportunities multiply—for nations, businesses, and families alike.",
		ctaTitle: "Let's Build Bridges Together",
		ctaBody:
			"Ready to unlock opportunities across Africa and the Middle East? Connect with me to explore strategic communication, partnership development, or market intelligence.",
		ctaNote:
			"The conversation that changes everything often begins with a single introduction.",
		bridgeCTA: "Let's Build Bridges Together",
	},
	fr: {
		roleLine:
			"Chef de la Division de traduction, Commission de l'Union africaine | Auteur | Bâtisseur de passerelles stratégiques",
		intro:
			"J'orchestrer l'infrastructure linguistique qui permet à 55 nations africaines de parler d'une seule voix. Avec 29 ans de leadership en traduction et 14 ans au cœur de la diplomatie africaine, je transforme les mots en politiques actionnables, partenariats stratégiques et opportunités transcontinentales.",
		location:
			"Basé à Addis-Abeba, actif à travers l'Afrique, le Moyen-Orient et au-delà.",
		expertiseTitle: "Expertise et réalisations",
		expertise: [
			"Leadership à l'UA : direction de six unités linguistiques, élaboration des politiques, gestion des budgets et représentation de l'UA lors de conférences de haut niveau.",
			"Maîtrise multilingue : arabe, anglais, français, amharique ; opérationnel en espagnol, portugais, swahili.",
			"Projets stratégiques : supervision de la traduction et de la communication pour des projets d'infrastructure à plusieurs milliards, des négociations commerciales et des sommets présidentiels.",
		],
		publicationsTitle: "Publications",
		publicationsIntro:
			"9 ouvrages couvrant la stratégie régionale, le rapprochement culturel et la langue comme intelligence métier, notamment :",
		publications: [
			"Maze: A Tapestry of Challenges and Opportunities",
			"From Failure to Success",
			"Glossary of AU, EU and UN Acronyms (English-French-Arabic)",
		],
		networkTitle: "Réseau et positionnement stratégique",
		network: [
			"Écosystème de l'Union africaine : relations directes avec les équipes de traduction des 55 États membres ; compréhension interne des priorités politiques et économiques.",
			"Connexions Moyen-Orient & Égypte : réseaux diplomatiques, relations institutionnelles avec la Ligue arabe et accès aux milieux d'affaires du Golfe.",
			"Liens institutionnels mondiaux : collaborations avec l'ONU, l'UE et des partenaires du secteur privé pour permettre des initiatives transcontinentales.",
			"Navigation culturelle : expertise reliant les cultures d'affaires africaines, moyen-orientales et mondiales pour des partenariats fluides.",
		],
		competenciesTitle: "Compétences clés",
		competencies: [
			"Excellence opérationnelle : leadership d'équipe, gestion budgétaire et exécution dans des environnements diplomatiques exigeants.",
			"Intelligence stratégique : compréhension profonde de l'économie politique africaine et des dynamiques moyen-orientales ; détection d'opportunités sur les marchés émergents.",
			"Maîtrise de la communication : présentations exécutives, facilitation interculturelle et documentation irréprochable pour cadres juridiques, politiques et d'investissement.",
		],
		missionHeading: "Mission et valeurs",
		missionLabel: "Mission :",
		valuesLabel: "Valeurs fondamentales :",
		foundationLabel: "Fondation personnelle :",
		missionBody:
			"Faciliter l'intégration continentale par une communication précise, transformer la conversation en action et favoriser des partenariats durables.",
		valuesBody:
			"Excellence institutionnelle, construction de passerelles culturelles, précision stratégique et vision long terme.",
		foundationBody:
			"Marié et père de quatre enfants, qui savent que lorsque l'Afrique s'exprime clairement, les opportunités se multiplient—pour les nations, les entreprises et les familles.",
		ctaTitle: "Construisons des ponts ensemble",
		ctaBody:
			"Prêt à libérer des opportunités en Afrique et au Moyen-Orient ? Contactez-moi pour explorer la communication stratégique, le développement de partenariats ou l'intelligence de marché.",
		ctaNote:
			"La conversation qui change tout commence souvent par une simple introduction.",
		bridgeCTA: "Construisons des ponts ensemble",
	},
	ar: {
		roleLine:
			"رئيس قسم الترجمة في مفوضية الاتحاد الأفريقي | مؤلف | صانع جسور استراتيجية",
		intro:
			"أصمم البنية اللغوية التي تمكّن 55 دولة أفريقية من التحدث بصوت واحد. بخبرة 29 عاماً في قيادة الترجمة و14 عاماً في قلب الدبلوماسية الأفريقية، أحول الكلمات إلى سياسات قابلة للتنفيذ وشراكات استراتيجية وفرص عابرة للقارات.",
		location: "مقيم في أديس أبابا وأعمل عبر أفريقيا والشرق الأوسط وخارجهما.",
		expertiseTitle: "الخبرات والإنجازات",
		expertise: [
			"القيادة في الاتحاد الأفريقي: إدارة ست وحدات لغوية، صياغة سياسات، إدارة ميزانيات، وتمثيل الاتحاد في مؤتمرات رفيعة المستوى.",
			"إتقان لغوي متعدد: العربية والإنجليزية والفرنسية والأمهرية؛ وإجادة تشغيلية للإسبانية والبرتغالية والسواحلية.",
			"مشاريع استراتيجية: الإشراف على الترجمة والاتصال لمشاريع بنية تحتية بمليارات الدولارات، ومفاوضات تجارية، وقمم رئاسية.",
		],
		publicationsTitle: "الإصدارات",
		publicationsIntro:
			"تسعة أعمال تمتد عبر الاستراتيجية الإقليمية وبناء الجسور الثقافية واللغة كذكاء أعمال، منها:",
		publications: [
			"Maze: A Tapestry of Challenges and Opportunities",
			"From Failure to Success",
			"Glossary of AU, EU and UN Acronyms (English-French-Arabic)",
		],
		networkTitle: "شبكة العلاقات والتموضع الاستراتيجي",
		network: [
			"منظومة الاتحاد الأفريقي: علاقات مباشرة مع فرق الترجمة في 55 دولة عضو؛ فهم داخلي للأولويات السياسية والاقتصادية.",
			"روابط الشرق الأوسط ومصر: شبكات دبلوماسية، علاقات مؤسساتية مع جامعة الدول العربية، والوصول إلى مجتمع الأعمال الخليجي.",
			"روابط مؤسساتية عالمية: تعاون مع الأمم المتحدة والاتحاد الأوروبي وشركاء من القطاع الخاص لتمكين المبادرات العابرة للقارات.",
			"ملاحة ثقافية: خبرة تربط الثقافات الأفريقية والعربية والعالمية لضمان شراكات سلسة.",
		],
		competenciesTitle: "الكفاءات الأساسية",
		competencies: [
			"تميز تشغيلي: قيادة فرق، إدارة ميزانيات، وإنجاز العمل في بيئات دبلوماسية عالية الضغط.",
			"ذكاء استراتيجي: فهم عميق لاقتصاديات أفريقيا السياسية وديناميكيات الشرق الأوسط؛ ورصد الفرص في الأسواق الناشئة.",
			"إتقان التواصل: عروض تنفيذية، تيسير ثقافي متقاطع، وتوثيق متقن للأطر القانونية والسياسية والاستثمارية.",
		],
		missionHeading: "المهمة والقيم",
		missionLabel: "المهمة:",
		valuesLabel: "القيم الأساسية:",
		foundationLabel: "الأساس الشخصي:",
		missionBody:
			"تمكين التكامل القاري عبر تواصل دقيق، وتحويل الحوار إلى فعل، ورعاية شراكات مستدامة.",
		valuesBody:
			"تميز مؤسسي، بناء جسور ثقافية، دقة استراتيجية، وتفكير بعيد المدى.",
		foundationBody:
			"متزوج وأب لأربعة أطفال يدركون أن وضوح صوت أفريقيا يضاعف الفرص للأمم والأعمال والعائلات على حد سواء.",
		ctaTitle: "لنَبْنِ الجسور معاً",
		ctaBody:
			"مستعد لفتح الفرص عبر أفريقيا والشرق الأوسط؟ تواصل معي لاستكشاف التواصل الاستراتيجي أو تطوير الشراكات أو استخبارات السوق.",
		ctaNote: "المحادثة التي تغيّر كل شيء تبدأ غالباً بتعارف واحد.",
		bridgeCTA: "لنَبْنِ الجسور معاً",
	},
	es: {
		roleLine:
			"Jefe de la División de Traducción, Comisión de la Unión Africana | Autor | Constructor de Puentes Estratégicos",
		intro:
			"Orquesto la infraestructura lingüística que permite a 55 naciones africanas hablar con una sola voz. Con 29 años en liderazgo de traducción y 14 años en el corazón de la diplomacia africana, convierto palabras en políticas aplicables, alianzas estratégicas y oportunidades intercontinentales.",
		location:
			"Con base en Addis Abeba, operando en África, Oriente Medio y más allá.",
		expertiseTitle: "Experiencia y logros",
		expertise: [
			"Liderazgo en la UA: dirigí seis unidades lingüísticas, formulando políticas, gestionando presupuestos y representando a la UA en conferencias de alto nivel.",
			"Dominio multilingüe: fluidez en árabe, inglés, francés y amárico; competencia operativa en español, portugués y suajili.",
			"Proyectos estratégicos: supervisé la traducción y la comunicación para proyectos de infraestructura multibillonarios, negociaciones comerciales y cumbres presidenciales.",
		],
		publicationsTitle: "Publicaciones",
		publicationsIntro:
			"9 obras que abarcan estrategia regional, construcción de puentes culturales y el lenguaje como inteligencia de negocio, incluyendo:",
		publications: [
			"Maze: A Tapestry of Challenges and Opportunities",
			"From Failure to Success",
			"Glossary of AU, EU and UN Acronyms (English-French-Arabic)",
		],
		networkTitle: "Red y posicionamiento estratégico",
		network: [
			"Ecosistema de la Unión Africana: relaciones directas con equipos de traducción en 55 estados miembros; comprensión interna de prioridades políticas y económicas.",
			"Conexiones en Oriente Medio y Egipto: redes diplomáticas, relaciones institucionales con la Liga Árabe y acceso a la comunidad empresarial del Golfo.",
			"Vínculos institucionales globales: colaboraciones con la ONU, la UE y socios del sector privado para habilitar iniciativas intercontinentales.",
			"Navegación cultural: experiencia que enlaza culturas empresariales de África, Oriente Medio y el mundo para asociaciones sin fricciones.",
		],
		competenciesTitle: "Competencias clave",
		competencies: [
			"Excelencia operativa: liderazgo de equipos, gestión presupuestaria y entrega en entornos diplomáticos de alta presión.",
			"Inteligencia estratégica: comprensión profunda de la economía política africana y las dinámicas de Oriente Medio; detección de oportunidades en mercados emergentes.",
			"Maestría en comunicación: presentaciones ejecutivas, facilitación intercultural y documentación impecable para marcos legales, políticos y de inversión.",
		],
		missionHeading: "Misión y valores",
		missionLabel: "Misión:",
		valuesLabel: "Valores fundamentales:",
		foundationLabel: "Fundamento personal:",
		missionBody:
			"Facilitar la integración continental mediante una comunicación precisa, convertir la conversación en acción y fomentar alianzas sostenibles.",
		valuesBody:
			"Excelencia institucional, construcción de puentes culturales, precisión estratégica y pensamiento a largo plazo.",
		foundationBody:
			"Casado y padre de cuatro hijos, que entienden que cuando África habla con claridad, las oportunidades se multiplican—para naciones, empresas y familias por igual.",
		ctaTitle: "Construyamos puentes juntos",
		ctaBody:
			"¿Listo para desbloquear oportunidades en África y Oriente Medio? Conéctate conmigo para explorar comunicación estratégica, desarrollo de asociaciones o inteligencia de mercado.",
		ctaNote:
			"La conversación que lo cambia todo suele comenzar con una sola presentación.",
		bridgeCTA: "Construyamos puentes juntos",
	},
};

const BiographySection = () => {
	const { t, isRTL, language } = useLanguage();
	const sectionRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const text = copy[language];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		return () => observer.disconnect();
	}, []);

	const socialLinks = [
		{ icon: Twitter, url: personalInfo.socialLinks.twitter, label: "Twitter" },
		{
			icon: Linkedin,
			url: personalInfo.socialLinks.linkedin,
			label: "LinkedIn",
		},
		{ icon: Youtube, url: personalInfo.socialLinks.youtube, label: "YouTube" },
		{
			icon: Instagram,
			url: personalInfo.socialLinks.instagram,
			label: "Instagram",
		},
	];

	const expertise = text.expertise;
	const publications = text.publications;
	const network = text.network;
	const competencies = text.competencies;

	return (
		<section
			id="biography"
			ref={sectionRef}
			className="relative py-24 md:py-32 bg-background overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute top-0 left-0 w-full h-full"
					style={{
						backgroundImage:
							"radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px)",
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			<div className="container mx-auto px-4 md:px-8 relative z-10">
				{/* Section Header */}
				<div
					className={`text-center mb-16 md:mb-20 ${
						isVisible ? "animate-fade-up" : "opacity-0"
					}`}
				>
					<span className="text-accent font-medium tracking-[0.3em] uppercase text-sm">
						{t("bio.subtitle")}
					</span>
					<h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
						Shawqi Al-Waily
					</h2>
					<p className="text-primary text-lg md:text-xl mt-4 max-w-3xl mx-auto font-medium">
						{text.roleLine}
					</p>
					<div className="flex items-center justify-center gap-4 mt-6">
						<div className="w-12 h-px bg-accent" />
						<div className="w-2 h-2 rotate-45 bg-accent" />
						<div className="w-12 h-px bg-accent" />
					</div>
				</div>

				<div
					className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
						isRTL ? "lg:grid-flow-dense" : ""
					}`}
				>
					{/* Image Column */}
					<div
						className={`relative ${
							isVisible ? "animate-slide-in-left" : "opacity-0"
						} ${isRTL ? "lg:col-start-2" : ""}`}
						style={{ animationDelay: "0.2s" }}
					>
						<div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-book sticky top-24">
							<img
								alt="Shawqi Al-Waily Portrait"
								className="w-full h-full object-cover"
								src="/images/your-new-image.png"
							/>
							<div className="absolute inset-4 border-2 border-accent/30 rounded-xl pointer-events-none" />
						</div>
						<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-2xl -z-10 opacity-60" />
						<div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
					</div>

					{/* Content Column */}
					<div
						className={`space-y-10 ${
							isVisible ? "animate-slide-in-right" : "opacity-0"
						} ${isRTL ? "lg:col-start-1 text-right" : "text-left"}`}
						style={{ animationDelay: "0.4s" }}
					>
						{/* Introduction */}
						<div className="space-y-4">
							<p className="text-primary leading-relaxed text-lg">
								{text.intro}
							</p>
							<div className="flex items-center gap-2 text-primary/80">
								<MapPin className="w-5 h-5 text-accent" />
								<span>{text.location}</span>
							</div>
						</div>

						{/* Expertise & Achievements */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<Globe className="w-6 h-6 text-accent" />
								<h3 className="font-playfair text-2xl font-bold text-foreground">
									{text.expertiseTitle}
								</h3>
							</div>
							<ul className="space-y-3">
								{expertise.map((item, index) => (
									<li
										key={index}
										className="text-primary leading-relaxed flex gap-3"
									>
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
								<h3 className="font-playfair text-2xl font-bold text-foreground">
									{text.publicationsTitle}
								</h3>
							</div>
							<p className="text-primary leading-relaxed">
								{text.publicationsIntro}
							</p>
							<ul className="space-y-2 pl-4">
								{publications.map((pub, index) => (
									<li
										key={index}
										className="text-primary leading-relaxed flex gap-3"
									>
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
								<h3 className="font-playfair text-2xl font-bold text-foreground">
									{text.networkTitle}
								</h3>
							</div>
							<ul className="space-y-3">
								{network.map((item, index) => (
									<li
										key={index}
										className="text-primary leading-relaxed flex gap-3"
									>
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
								<h3 className="font-playfair text-2xl font-bold text-foreground">
									{text.competenciesTitle}
								</h3>
							</div>
							<ul className="space-y-3">
								{competencies.map((item, index) => (
									<li
										key={index}
										className="text-primary leading-relaxed flex gap-3"
									>
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
								<h3 className="font-playfair text-2xl font-bold text-foreground">
									{text.missionHeading}
								</h3>
							</div>
							<p className="text-primary leading-relaxed">
								<strong>{text.missionLabel}</strong> {text.missionBody}
							</p>
							<p className="text-primary leading-relaxed">
								<strong>{text.valuesLabel}</strong> {text.valuesBody}
							</p>
							<p className="text-primary leading-relaxed">
								<strong>{text.foundationLabel}</strong> {text.foundationBody}
							</p>
						</div>

						{/* Call to Action */}
						<div className="space-y-4 pt-4">
							<h3 className="font-playfair text-2xl font-bold text-foreground">
								{text.ctaTitle}
							</h3>
							<p className="text-primary leading-relaxed">{text.ctaBody}</p>
							<p className="text-primary/80 italic">{text.ctaNote}</p>
						</div>

						{/* Social Links */}
						<div className="pt-8 border-t border-border">
							<h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
								{t("footer.connect")}
							</h3>
							<div className="flex gap-4">
								{socialLinks.map((social) => (
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
