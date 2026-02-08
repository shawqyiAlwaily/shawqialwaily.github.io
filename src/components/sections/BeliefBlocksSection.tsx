import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type LocalizedText = Record<"en" | "fr" | "ar" | "es", string>;

type BeliefContent = {
	id: string;
	title: LocalizedText;
	symbol: string;
	thesis: LocalizedText;
	narrative: Record<"en" | "fr" | "ar" | "es", string[]>;
};

const beliefContent: BeliefContent = {
	id: "bridging-africa",
	title: {
		en: "Bridging Africa’s Horizons: From Insight to Impact",
		fr: "Relier les horizons africains : de l'analyse à l'impact",
		ar: "جسر آفاق أفريقيا: من الرؤية إلى الأثر",
		es: "Bridging Africa’s Horizons: From Insight to Impact",
	},
	symbol:
		"An abstract bridge / horizon / convergence icon representing access, continuity, and connection.",
	thesis: {
		en: "Turning continental complexity into decisive action through institutional fluency and trusted networks.",
		fr: "Transformer la complexité continentale en action décisive grâce à la maîtrise institutionnelle et à des réseaux de confiance.",
		ar: "تحويل تعقيد القارة إلى عمل حاسم من خلال الإلمام المؤسسي وشبكات الثقة.",
		es: "Convertir la complejidad continental en acción decisiva mediante la fluidez institucional y redes de confianza.",
	},
	narrative: {
		en: [
			"Africa is not merely a continent — it is a convergence of 55 sovereign voices, aligned toward a shared future under Agenda 2063: The Africa We Want.",
			"For more than fifteen years, I operated at the very center of this vision as a professional within the African Union Commission (AUC) in Addis Ababa — the executive engine that unites member states in pursuit of peace, integration, and prosperity.",
			"During this tenure, I worked within the inner architecture of continental decision-making: facilitating high-level engagements among heads of state, collaborating across directorates on trade, economic development, peace and security, and infrastructure, and contributing to landmark initiatives such as the African Continental Free Trade Area (AfCFTA).",
			"This experience provided more than institutional knowledge — it delivered operational fluency in Africa’s regulatory environments, governmental protocols, and evolving market realities. More importantly, it forged enduring relationships with senior stakeholders across ministries, regional economic communities, and private-sector leadership throughout the continent.",
			"Today, this legacy functions not as a credential, but as a strategic bridge.",
			"Supported by a trusted network of former AUC colleagues and continent-wide professional alliances, I help organizations move faster, clearer, and with confidence. Whether your objective is market intelligence, policy navigation, government engagement, research, business facilitation, or export strategy, complexity is converted into clarity — and delay into momentum.",
			"In an environment where time is the true currency of opportunity, insight earned inside Africa’s institutional core ensures your ambitions are not merely viable — they are visionary.",
			"Africa opens fastest to those who understand how it moves.",
			"Let us turn continental potential into your tangible success Reach out today—Africa's doors open swiftest with the right key.",
		],
		fr: [
			"L'Afrique n'est pas seulement un continent — c'est la convergence de 55 voix souveraines, alignées vers un avenir commun sous l'Agenda 2063 : L'Afrique que nous voulons.",
			"Pendant plus de quinze ans, j'ai travaillé au cœur même de cette vision en tant que professionnel au sein de la Commission de l'Union africaine (CUA) à Addis-Abeba — le moteur exécutif qui fédère les États membres dans la quête de la paix, de l'intégration et de la prospérité.",
			"Au cours de ce mandat, j'ai évolué au sein de l'architecture interne de la décision continentale : facilitation des échanges de haut niveau entre chefs d'État, collaboration interdirections sur le commerce, le développement économique, la paix et la sécurité, les infrastructures, et contribution à des initiatives phares comme la Zone de libre-échange continentale africaine (ZLECAf).",
			"Cette expérience m'a apporté bien plus qu'une connaissance institutionnelle — elle m'a donné une maîtrise opérationnelle des environnements réglementaires africains, des protocoles gouvernementaux et des réalités de marché en évolution. Plus encore, elle a forgé des relations durables avec des parties prenantes de haut niveau dans les ministères, les communautés économiques régionales et les dirigeants du secteur privé à travers le continent.",
			"Aujourd'hui, cet héritage n'est pas un simple titre, c'est un pont stratégique.",
			"Appuyé par un réseau de confiance d'anciens collègues de la CUA et d'alliances professionnelles à l'échelle du continent, j'aide les organisations à avancer plus vite, plus clairement et avec assurance. Qu'il s'agisse d'intelligence de marché, de navigation politique, d'engagement gouvernemental, de recherche, de facilitation des affaires ou de stratégie d'exportation, la complexité se transforme en clarté — et les retards en élan.",
			"Dans un environnement où le temps est la véritable monnaie de l'opportunité, les insights acquis au cœur institutionnel de l'Afrique garantissent que vos ambitions ne sont pas seulement viables — elles sont visionnaires.",
			"L'Afrique s'ouvre plus vite à ceux qui comprennent sa dynamique.",
			"Transformons le potentiel du continent en succès concret pour vous. Contactez-moi dès aujourd'hui — les portes de l'Afrique s'ouvrent plus vite avec la bonne clé.",
		],
		ar: [
			"أفريقيا ليست مجرد قارة — إنها التقاء 55 صوتاً سيادياً متجهين نحو مستقبل مشترك في إطار أجندة 2063: إفريقيا التي نريدها.",
			"لأكثر من خمسة عشر عاماً، عملت في قلب هذه الرؤية كمتخصص داخل مفوضية الاتحاد الأفريقي في أديس أبابا — المحرك التنفيذي الذي يوحد الدول الأعضاء في السعي نحو السلام والتكامل والازدهار.",
			"خلال هذه الفترة، عملت داخل البنية الداخلية لصنع القرار القاري: تيسير اللقاءات رفيعة المستوى بين رؤساء الدول، والتعاون بين الإدارات المعنية بالتجارة والتنمية الاقتصادية والسلام والأمن والبنية التحتية، والمساهمة في مبادرات محورية مثل منطقة التجارة الحرة القارية الأفريقية (AfCFTA).",
			"هذه التجربة وفرت ما هو أكثر من المعرفة المؤسسية — منحتني طلاقة تشغيلية في البيئات التنظيمية الأفريقية والبروتوكولات الحكومية والحقائق السوقية المتغيرة. والأهم أنها صاغت علاقات متينة مع أصحاب المصلحة الكبار في الوزارات والمجموعات الاقتصادية الإقليمية وقيادات القطاع الخاص في القارة.",
			"اليوم، لا يعمل هذا الإرث كاعتماد فحسب، بل كجسر استراتيجي.",
			"بدعم شبكة موثوقة من زملاء سابقين في مفوضية الاتحاد الأفريقي وتحالفات مهنية على امتداد القارة، أساعد المؤسسات على التحرك بسرعة ووضوح وثقة. سواء كان الهدف ذكاءً سوقياً أو اجتياز السياسات أو التواصل الحكومي أو البحث أو تسهيل الأعمال أو استراتيجية التصدير، تتحول التعقيدات إلى وضوح — ويتحول التأخير إلى زخم.",
			"في بيئة يكون فيها الوقت هو العملة الحقيقية للفرص، يضمن الفهم المكتسب من قلب المؤسسات الأفريقية أن طموحاتك ليست مجرد ممكنة — بل رؤيوية.",
			"أفريقيا تنفتح أسرع لأولئك الذين يفهمون كيف تتحرك.",
			"دعنا نحوّل الإمكانات القارية إلى نجاح ملموس لك. تواصل اليوم — أبواب أفريقيا تُفتح بأسرع ما يمكن بالمفتاح الصحيح.",
		],
		es: [
			"África no es simplemente un continente: es la convergencia de 55 voces soberanas, alineadas hacia un futuro compartido bajo la Agenda 2063: El África que queremos.",
			"Durante más de quince años trabajé en el centro de esta visión como profesional en la Comisión de la Unión Africana (AUC) en Addis Abeba: el motor ejecutivo que une a los estados miembros en la búsqueda de paz, integración y prosperidad.",
			"Durante ese periodo trabajé en la arquitectura interna de la toma de decisiones continental: facilitando encuentros de alto nivel entre jefes de Estado, colaborando entre direcciones en comercio, desarrollo económico, paz y seguridad e infraestructura, y contribuyendo a iniciativas emblemáticas como la Zona de Libre Comercio Continental Africana (AfCFTA).",
			"Esta experiencia aportó más que conocimiento institucional: proporcionó fluidez operativa en los entornos regulatorios africanos, protocolos gubernamentales y realidades de mercado en evolución. Más importante aún, forjó relaciones duraderas con altos responsables en ministerios, comunidades económicas regionales y liderazgos del sector privado en todo el continente.",
			"Hoy, ese legado funciona no como un título, sino como un puente estratégico.",
			"Apoyado por una red de confianza de ex colegas de la AUC y alianzas profesionales en todo el continente, ayudo a las organizaciones a avanzar más rápido, con mayor claridad y confianza. Ya sea para inteligencia de mercado, navegación de políticas, compromiso gubernamental, investigación, facilitación de negocios o estrategia de exportación, la complejidad se convierte en claridad y la demora en impulso.",
			"En un entorno donde el tiempo es la verdadera moneda de la oportunidad, la visión adquirida desde el núcleo institucional africano asegura que tus ambiciones no solo sean viables: sean visionarias.",
			"África se abre más rápido para quienes entienden cómo se mueve.",
			"Convirtamos el potencial continental en tu éxito tangible. Contáctame hoy: las puertas de África se abren más rápido con la llave adecuada.",
		],
	},
};

const beliefLabel: LocalizedText = {
	en: "Belief System",
	fr: "Système de convictions",
	ar: "منظومة القناعات",
	es: "Sistema de creencias",
};

const easing = [0.4, 0, 0.2, 1] as const;

const BridgeMark = ({ active }: { active: boolean }) => (
	<motion.div
		className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-100/25 bg-white/5 backdrop-blur"
		animate={{
			scale: active ? 1 : 0.96,
			boxShadow: active
				? "0 30px 90px rgba(80,170,255,0.28)"
				: "0 12px 45px rgba(0,0,0,0.45)",
		}}
		transition={{ duration: 0.9, ease: easing }}
	>
		<motion.div
			className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/25 via-transparent to-amber-200/25"
			animate={{
				opacity: active ? 1 : 0.45,
				rotate: active ? [0, 2, -2, 0] : 0,
			}}
			transition={{
				duration: active ? 10 : 0.9,
				repeat: active ? Infinity : 0,
				ease: "easeInOut",
			}}
		/>
		<motion.svg
			viewBox="0 0 120 120"
			className="relative h-10 w-10 text-cyan-100"
			initial={false}
			animate={{ y: active ? 0 : 2, opacity: active ? 1 : 0.82 }}
			transition={{ duration: 0.8, ease: easing }}
		>
			<defs>
				<linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#67e8f9" stopOpacity="0.95" />
					<stop offset="60%" stopColor="#a5b4fc" stopOpacity="0.9" />
					<stop offset="100%" stopColor="#f3c98b" stopOpacity="0.95" />
				</linearGradient>
			</defs>
			<path
				d="M20 74c18-18 62-18 80 0"
				fill="none"
				stroke="url(#bridgeGradient)"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M24 60c16-16 56-16 72 0"
				fill="none"
				stroke="url(#bridgeGradient)"
				strokeWidth="4.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.82"
			/>
			<path
				d="M28 48c14-12 50-12 64 0"
				fill="none"
				stroke="url(#bridgeGradient)"
				strokeWidth="3.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.68"
			/>
			<circle cx="60" cy="80" r="2.5" fill="#a5f3fc" />
			<circle cx="40" cy="80" r="2.5" fill="#a5f3fc" />
			<circle cx="80" cy="80" r="2.5" fill="#a5f3fc" />
		</motion.svg>
		<motion.div
			className="absolute inset-0 rounded-full border border-white/10"
			animate={{ opacity: active ? 0.7 : 0.35 }}
			transition={{ duration: 0.7, ease: easing }}
		/>
	</motion.div>
);

const BeliefBlocksSection = () => {
	const { language } = useLanguage();
	const [activeParagraph, setActiveParagraph] = useState(0);
	const blockRefs = useRef<(HTMLElement | null)[]>([]);
	const activeRef = useRef(0);
	const lastSwitchTime = useRef(0);
	const sectionLabel = beliefLabel[language];
	const belief = {
		id: beliefContent.id,
		title: beliefContent.title[language],
		symbol: beliefContent.symbol,
		thesis: beliefContent.thesis[language],
		narrative: beliefContent.narrative[language],
	};

	useEffect(() => {
		blockRefs.current = [];
		activeRef.current = 0;
		setActiveParagraph(0);
	}, [language]);

	useEffect(() => {
		const raf = requestAnimationFrame(() => {
			// Re-run the scroll handler after language/content changes so the active block is recalculated
			window.dispatchEvent(new Event("scroll"));
		});
		return () => cancelAnimationFrame(raf);
	}, [language, belief.narrative.length]);

	useEffect(() => {
		const updateActive = () => {
			const mid = window.innerHeight / 2;
			// Widen the active band so blocks react earlier in the viewport (helps top paragraphs animate)
			const bandTop = mid - window.innerHeight * 0.22; // 44% tall band
			const bandBottom = mid + window.innerHeight * 0.22;

			let candidate = activeRef.current;
			let candidateDistance = Number.POSITIVE_INFINITY;
			let bandCandidate = -1;

			blockRefs.current.forEach((block, idx) => {
				if (!block) return;
				const rect = block.getBoundingClientRect();
				const center = rect.top + rect.height / 2;
				const distance = Math.abs(center - mid);
				if (center >= bandTop && center <= bandBottom) {
					if (bandCandidate === -1 || distance < candidateDistance) {
						bandCandidate = idx;
						candidateDistance = distance;
					}
				}
				if (distance < candidateDistance) {
					candidate = idx;
					candidateDistance = distance;
				}
			});

			// Prefer band candidate when available
			if (bandCandidate !== -1) {
				candidate = bandCandidate;
			}

			if (candidate !== activeRef.current) {
				// Hysteresis: only switch if significantly closer or enough time passed
				const currentBlock = blockRefs.current[activeRef.current];
				let currentDistance = Number.POSITIVE_INFINITY;
				if (currentBlock) {
					const r = currentBlock.getBoundingClientRect();
					currentDistance = Math.abs(r.top + r.height / 2 - mid);
				}
				const margin = 60; // px closer than current
				const now = performance.now();
				const timeOk = now - lastSwitchTime.current > 180;
				const closerOk = candidateDistance + margin < currentDistance;

				if (bandCandidate !== -1 || (timeOk && closerOk)) {
					activeRef.current = candidate;
					lastSwitchTime.current = now;
					setActiveParagraph(candidate);
				}
			}
		};

		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(() => {
					updateActive();
					ticking = false;
				});
			}
		};

		updateActive();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	return (
		<section className="relative overflow-hidden #2d1b47 text-white py-24 md:py-32">
			<div
				className="absolute inset-0 bg-gradient-to-b from-[#071128] via-[#050c1c] to-[#020510]"
				aria-hidden
			/>
			<div
				className="absolute inset-0 opacity-65"
				aria-hidden
				style={{
					backgroundImage:
						"radial-gradient(circle at 22% 18%, rgba(103,232,249,0.14), transparent 38%), radial-gradient(circle at 78% 64%, rgba(251,191,36,0.1), transparent 36%)",
				}}
			/>
			<div
				className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:140px_140px] opacity-30"
				aria-hidden
			/>

			<div className="relative container mx-auto px-6 md:px-10">
				<header className="flex flex-col gap-6 mb-16">
					<div className="space-y-3 max-w-4xl">
						<p className="text-sm uppercase tracking-[0.22em] text-cyan-100/70">
							{sectionLabel}
						</p>
						<h2 className="text-3xl md:text-4xl font-semibold text-white md:text-[2.6rem] leading-tight">
							{belief.title}
						</h2>
						<p className="text-slate-200/90 text-xl leading-relaxed md:text-[1.25rem]">
							{belief.thesis}
						</p>
					</div>
				</header>

				<div className="relative flex flex-col gap-8">
					{belief.narrative.map((paragraph, idx) => {
						const isActive = idx === activeParagraph;
						return (
							<motion.article
								key={`${belief.id}-${idx}`}
								data-index={idx}
								ref={(el) => {
									blockRefs.current[idx] = el;
								}}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false, amount: 0.35 }}
								animate={{
									opacity: isActive ? 1 : 0.5,
									scale: isActive ? 1 : 0.987,
									filter: isActive ? "saturate(1)" : "saturate(0.9)",
								}}
								transition={{ duration: 0.8, ease: easing }}
								className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_28px_120px_rgba(0,0,0,0.36)]"
								style={{ willChange: "transform, opacity" }}
							>
								<div
									className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-white/4"
									aria-hidden
								/>
								<motion.div
									className="absolute inset-0"
									animate={{
										opacity: isActive ? 0.5 : 0.2,
										background: isActive
											? "radial-gradient(circle at 58% 22%, rgba(103,232,249,0.2), transparent 45%), radial-gradient(circle at 32% 82%, rgba(251,191,36,0.16), transparent 38%)"
											: "radial-gradient(circle at 50% 24%, rgba(103,232,249,0.1), transparent 40%)",
									}}
									transition={{ duration: 0.9, ease: easing }}
									aria-hidden
								/>
								<div
									className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60"
									aria-hidden
								/>
								<div
									className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-300/0 via-cyan-200/50 to-amber-200/0"
									aria-hidden
								/>

								<div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 sm:px-9 md:px-14">
									<div
										className="relative"
										style={{
											overflow: "hidden",
											maxHeight: isActive ? "none" : "10.5rem",
										}}
									>
										<motion.p
											initial={{ opacity: 0, y: 24 }}
											animate={{
												opacity: isActive ? 1 : 0.7,
												y: isActive ? 0 : 6,
												lineHeight: isActive ? "2" : "1.6",
											}}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: false, amount: 0.35 }}
											transition={{ duration: 0.8, ease: easing }}
											className="text-[1.25rem] md:text-[1.6rem] text-slate-50"
											style={{ willChange: "transform, opacity" }}
										>
											{paragraph}
										</motion.p>
										<motion.div
											className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/10 to-transparent"
											animate={{ opacity: isActive ? 0 : 0.85 }}
											transition={{ duration: 0.6, ease: easing }}
										/>
									</div>
								</div>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default BeliefBlocksSection;
