import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

type Locale = "en" | "fr" | "ar" | "es";

const copy: Record<
	Locale,
	{
		kicker: string;
		title: string;
		body: string;
		primary: string;
		secondary: string;
	}
> = {
	en: {
		kicker: "Consultation",
		title: "Engage in Strategic Consultation",
		body: "A focused, decision-level engagement designed for leaders navigating cross-regional stakes. One call to align intent, language, and execution.",
		primary: "Begin the conversation",
		secondary: "Review strategic work",
	},
	fr: {
		kicker: "Consultation",
		title: "Engager une consultation stratégique",
		body: "Un échange ciblé au niveau décisionnel pour les dirigeants avec des enjeux interrégionaux. Un appel pour aligner intention, langage et exécution.",
		primary: "Commencer la conversation",
		secondary: "Voir les travaux stratégiques",
	},
	ar: {
		kicker: "الاستشارة",
		title: "ابدأ استشارة استراتيجية",
		body: "تواصل مركز بمستوى اتخاذ القرار، مصمم للقيادات التي تتعامل مع رهانات عابرة للأقاليم. مكالمة واحدة لمواءمة النية واللغة والتنفيذ.",
		primary: "ابدأ الحديث",
		secondary: "استعرض الأعمال الاستراتيجية",
	},
	es: {
		kicker: "Consulta",
		title: "Participa en una consulta estratégica",
		body: "Un compromiso focalizado a nivel decisorio diseñado para líderes que navegan asuntos interregionales. Una llamada para alinear intención, lenguaje y ejecución.",
		primary: "Iniciar la conversación",
		secondary: "Revisar trabajos estratégicos",
	},
};

const ConsultationCTA = () => {
	const { language } = useLanguage();
	const text = copy[language];

	return (
		<section
			id="consultation"
			className="relative bg-[#050814] text-white py-18 md:py-20 overflow-hidden"
		>
			<div
				className="absolute inset-0 bg-gradient-to-b from-[#081025] via-[#050814] to-[#04060d]"
				aria-hidden
			/>
			<div className="absolute inset-0 pointer-events-none" aria-hidden>
				<div className="absolute -left-16 top-0 w-72 h-72 rounded-full bg-cyan-400/12 blur-3xl" />
				<div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-emerald-200/10 blur-3xl" />
				<div
					className="absolute inset-0"
					style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.55)" }}
				/>
			</div>

			<div className="relative container mx-auto px-6 md:px-10">
				<motion.div
					className="max-w-4xl mx-auto text-center space-y-5"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.35 }}
					transition={{ duration: 0.6 }}
				>
					<p className="uppercase tracking-[0.25em] text-sm text-cyan-200/70">
						{text.kicker}
					</p>
					<h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
						{text.title}
					</h2>
					<p className="text-slate-200/80 max-w-2xl mx-auto">{text.body}</p>
					<div className="flex flex-wrap justify-center gap-3 pt-2">
						<a
							href="mailto:shawqialwaily@outlook.com?subject=Strategic%20Consultation"
							className="group inline-flex items-center px-6 py-3 rounded-md bg-white text-[#0b132b] font-medium shadow-lg shadow-cyan-400/15 transition-transform duration-300 hover:-translate-y-1"
						>
							{text.primary}
							<span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
								→
							</span>
						</a>
						<a
							href="/work"
							className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-white/85 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
						>
							{text.secondary}
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ConsultationCTA;
