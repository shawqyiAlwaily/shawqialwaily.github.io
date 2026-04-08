import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type Locale = "en" | "fr" | "ar" | "es";

const copy: Record<
	Locale,
	{
		kicker: string;
		title: string;
		body: string;
		ctaPrimary: string;
		ctaSecondary: string;
	}
> = {
	en: {
		kicker: "Strategic advisory",
		title: "Strategic Communication at the Center of Power",
		body: "Advisory, authorship, and institutional leadership across Africa and beyond. Decisions aligned, stakeholders synchronized, language designed to move policy and capital.",
		ctaPrimary: "Engage in strategic consultation",
		ctaSecondary: "Explore authored frameworks",
	},
	fr: {
		kicker: "Conseil stratégique",
		title: "Communication stratégique au centre du pouvoir",
		body: "Conseil, rédaction et leadership institutionnel à travers l'Afrique et au-delà. Des décisions alignées, des parties prenantes synchronisées, une langue conçue pour faire bouger les politiques et les capitaux.",
		ctaPrimary: "Engager une consultation stratégique",
		ctaSecondary: "Découvrir les cadres publiés",
	},
	ar: {
		kicker: "الاستشارة الاستراتيجية",
		title: "الاتصال الاستراتيجي في مركز صنع القرار",
		body: "استشارات وتأليف وقيادة مؤسسية عبر أفريقيا وخارجها. قرارات متناغمة، أصحاب مصلحة متزامنون، ولغة مصممة لدفع السياسات ورأس المال.",
		ctaPrimary: "ابدأ استشارة استراتيجية",
		ctaSecondary: "استكشف الأطر المؤلفة",
	},
	es: {
		kicker: "Asesoría estratégica",
		title: "Comunicación estratégica en el centro del poder",
		body: "Asesoría, autoría y liderazgo institucional en África y más allá. Decisiones alineadas, partes interesadas sincronizadas, lenguaje diseñado para impulsar políticas y capital.",
		ctaPrimary: "Iniciar consulta estratégica",
		ctaSecondary: "Explorar marcos publicados",
	},
};

const HeroSection = () => {
	const { language, isRTL } = useLanguage();
	const text = copy[language as keyof typeof copy];

	return (
		<section
			id="hero"
			className="relative min-h-screen bg-[#1f0d36] text-white overflow-hidden flex items-center pt-20 pb-16"
		>
			{/* High-End Background with Subtle Ambient Glow */}
			<div className="absolute inset-0 pointer-events-none" aria-hidden="true">
				{/* Dark gradient base */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#321759] via-[#1f0d36] to-[#0b0416]" />
				
				{/* Premium gold/blue subtle glows */}
				<div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[#a78bfa]/15 rounded-full blur-[120px] mix-blend-screen transform -translate-y-1/2" />
				<div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#58d5ff]/15 rounded-full blur-[100px] mix-blend-screen transform translate-y-1/3" />
				<div className="absolute top-1/2 right-1/4 w-[30vw] h-[30vw] bg-[#c084fc]/10 rounded-full blur-[80px] mix-blend-screen" />
				
				{/* Noise overlay for texture */}
				<div 
					className="absolute inset-0 opacity-[0.03]" 
					style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
				/>
			</div>

			{/* Grid pattern overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
				<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
					{/* Left Column - Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="lg:col-span-7 space-y-8"
					>
						<div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
							<span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
							<p className="uppercase tracking-[0.2em] text-xs font-semibold text-slate-300">
								{text.kicker}
							</p>
						</div>
						
						<h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.1] text-white tracking-tight">
							<span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">
								Strategic Communication 
							</span>
							<span className="block mt-2 text-white">at the Center of Power.</span>
						</h1>
						
						<p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
							{text.body}
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<a
								href="#consultation"
								className="group relative inline-flex justify-center items-center px-8 py-4 bg-white text-black font-medium rounded-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] active:scale-[0.98]"
							>
								<span className="relative z-10 flex items-center gap-2">
									{text.ctaPrimary}
									<span className="transition-transform duration-300 group-hover:translate-x-1">
										{isRTL ? "←" : "→"}
									</span>
								</span>
							</a>
							<a
								href="#books"
								className="inline-flex justify-center items-center px-8 py-4 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 font-medium"
							>
								{text.ctaSecondary}
							</a>
						</div>
						
						{/* Trust Indicators */}
						<div className="pt-12 flex items-center gap-6 border-t border-white/10 opacity-70">
							<div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Trusted by leaders globally</div>
						</div>
					</motion.div>

					{/* Right Column - Premium Framed Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
						animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
						transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
						className="lg:col-span-5 relative flex justify-center lg:justify-end"
					>
						<div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
							{/* Premium Glass Frame */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
								
								{/* Stylized Image */}
								<div className="absolute inset-[2px] rounded-[14px] overflow-hidden bg-[#2d1b4e]">
									<img
										src="/images/hero-section-image.png"
										alt="Strategic Advisory"
										className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-85 scale-105 transition-transform duration-1000 hover:scale-100"
									/>
									{/* Gradient Overlay to enhance mood and hide clutter */}
									<div className="absolute inset-0 bg-gradient-to-t from-[#1f0d36] via-[#1f0d36]/40 to-transparent" />
									<div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay" />
								</div>
								
								{/* Decorative Accents */}
								<div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 opacity-0 transition-opacity duration-500 hover:opacity-100 hidden lg:block">
									<p className="text-xs text-slate-300 font-medium tracking-wide uppercase">Vision aligned with execution</p>
								</div>
							</div>
							
							{/* Ambient glow behind image */}
							<div className="absolute -inset-10 bg-purple-500/20 rounded-full blur-3xl -z-10" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
