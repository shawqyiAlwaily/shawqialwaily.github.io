import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

type Locale = "en" | "fr" | "ar" | "es";

const panels: {
	title: Record<Locale, string>;
	body: Record<Locale, string>;
}[] = [
	{
		title: {
			en: "Advisory",
			fr: "Conseil",
			ar: "الاستشارات",
			es: "Asesoría",
		},
		body: {
			en: "Executive counsel for negotiations and decision rooms where language and alignment decide outcomes.",
			fr: "Conseil exécutif pour les négociations et les salles de décision où la langue et l'alignement déterminent les résultats.",
			ar: "إرشاد تنفيذي للتفاوض وغرف القرار حيث تحسم اللغة والاتساق النتائج.",
			es: "Asesoramiento ejecutivo para negociaciones y salas de decisión donde el lenguaje y la alineación definen el resultado.",
		},
	},
	{
		title: {
			en: "Intelligence",
			fr: "Intelligence",
			ar: "المعرفة المؤسسية",
			es: "Inteligencia",
		},
		body: {
			en: "Institutional insight that translates complexity into actionable pathways across regions and mandates.",
			fr: "Intelligence institutionnelle qui transforme la complexité en pistes actionnables entre régions et mandats.",
			ar: "رؤى مؤسسية تحول التعقيد إلى مسارات عملية عبر المناطق والتفويضات.",
			es: "Perspectiva institucional que convierte la complejidad en rutas accionables entre regiones y mandatos.",
		},
	},
	{
		title: {
			en: "Cultural Strategy",
			fr: "Stratégie culturelle",
			ar: "الاستراتيجية الثقافية",
			es: "Estrategia cultural",
		},
		body: {
			en: "Cross-cultural choreography that keeps stakeholders synchronized and reduces risk in multi-market execution.",
			fr: "Chorégraphie interculturelle qui synchronise les parties prenantes et réduit les risques dans l'exécution multi-marchés.",
			ar: "تنسيق ثقافي يحافظ على تزامن أصحاب المصلحة ويقلل المخاطر في التنفيذ عبر الأسواق.",
			es: "Coreografía intercultural que mantiene a los stakeholders sincronizados y reduce el riesgo en la ejecución multinacional.",
		},
	},
];

const labels: Record<Locale, { kicker: string; title: string; sub: string }> = {
	en: {
		kicker: "Value Proposition",
		title: "Interactive panels",
		sub: "Distinct capabilities designed to support leadership, insight, and coordinated action.",
	},
	fr: {
		kicker: "Proposition de valeur",
		title: "Panneaux interactifs",
		sub: "Des surfaces vitrées qui s'inclinent avec intention—chaque panneau ouvrant sur un principe opératoire.",
	},
	ar: {
		kicker: "عرض القيمة",
		title: "ألواح تفاعلية",
		sub: "أسطح زجاجية تميل بتعمد—كل لوح بوابة إلى مبدأ تشغيلي.",
	},
	es: {
		kicker: "Propuesta de valor",
		title: "Paneles interactivos",
		sub: "Superficies tipo vidrio que se inclinan con intención—cada panel es una puerta a un principio operativo.",
	},
};

const ValuePanelsSection = () => {
	const { language } = useLanguage();
	const copy = labels[language];
	return (
		<section className="relative bg-[#5c3a8a] text-white py-16 md:py-20 overflow-hidden">
			<div
				className="absolute inset-0 bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e]"
				aria-hidden
			/>
			<div className="absolute inset-0 pointer-events-none" aria-hidden>
				<div className="absolute left-10 top-8 w-72 h-72 rounded-full bg-cyan-400/6 blur-3xl" />
				<div className="absolute right-10 bottom-0 w-80 h-80 rounded-full bg-amber-200/6 blur-3xl" />
			</div>

			<div className="relative container mx-auto px-6 md:px-10">
				<motion.div
					className="max-w-3xl space-y-3 mb-10"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.35 }}
					transition={{ duration: 0.6 }}
				>
					<p className="uppercase tracking-[0.25em] text-sm text-cyan-200/70">
						{copy.kicker}
					</p>
					<h2 className="text-3xl md:text-4xl font-semibold text-white">
						{copy.title}
					</h2>
					<p className="text-slate-200/80 max-w-2xl">{copy.sub}</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-6">
					{panels.map((panel, idx) => (
						<motion.div
							key={panel.title.en}
							className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg shadow-cyan-500/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-cyan-400/20"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false, amount: 0.3 }}
							transition={{ duration: 0.55, delay: idx * 0.08 }}
						>
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
								style={{
									background:
										"linear-gradient(135deg, rgba(124,193,255,0.12), rgba(91,230,255,0.06))",
								}}
							/>
							<div className="relative z-10 space-y-3">
								<h3 className="text-xl font-semibold text-white">
									{panel.title[language]}
								</h3>
								<p className="text-slate-200/80 text-sm md:text-base leading-relaxed">
									{panel.body[language]}
								</p>
								<div className="w-10 h-[1px] bg-gradient-to-r from-cyan-300/80 to-transparent" />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ValuePanelsSection;
