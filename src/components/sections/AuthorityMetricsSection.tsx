import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Service = {
	id: string;
	name: string;
	subtitle: string;
	description: string;
	expanded: string;
	accentFrom: string;
	accentTo: string;
};

const services: Service[] = [
	{
		id: "linguistic-bridges",
		name: "Seamless Linguistic Bridges",
		subtitle: "Interpretation & Translation Services",
		description:
			"Elite multilingual teams delivering international-standard interpretation and translation across English, French, Arabic, Portuguese, Kiswahili, and Spanish. Backed by decades of service with the United Nations, African Union, and regional economic communities, we ensure accuracy, cultural intelligence, and diplomatic precision in every engagement.",
		expanded:
			"Engage with interpreters who understand policy nuance, negotiation dynamics, and protocol. We build linguistic corridors that protect intent and accelerate alignment across ministries, boardrooms, and multilateral corridors.",
		accentFrom: "#0ea5e9",
		accentTo: "#22d3ee",
	},
	{
		id: "narrative-architects",
		name: "Narrative Architects",
		subtitle: "Writing, Publishing & Professional Profiling",
		description:
			"From books and business studies to high-impact resumes and thought leadership content, our expert writers and editors transform ideas into authoritative narratives. This service elevates individuals and institutions by shaping clarity, credibility, and long-term influence.",
		expanded:
			"Editorial teams pair research discipline with executive storytelling. Expect structured messaging frameworks, publication-ready manuscripts, and profiles that travel confidently across global audiences.",
		accentFrom: "#a855f7",
		accentTo: "#f97316",
	},
	{
		id: "digital-visionaries",
		name: "Digital Visionaries",
		subtitle: "Web Design & Digital Presence",
		description:
			"Highly qualified web designers craft digital platforms that reflect authority, trust, and scalability. We design not just websites—but strategic digital assets that communicate value, convert audiences, and endure in competitive markets.",
		expanded:
			"Every build is anchored in brand governance, content strategy, and conversion architecture. We choreograph motion, narrative, and proof points so your digital front door signals institutional caliber from the first pixel.",
		accentFrom: "#38bdf8",
		accentTo: "#0ea5e9",
	},
	{
		id: "fiscal-guardians",
		name: "Fiscal Guardians",
		subtitle: "Accounting & Auditing Services",
		description:
			"Certified accountants and auditors deliver rigorous financial oversight, compliance assurance, and strategic insight. Beyond numbers, we provide clarity—helping organizations optimize performance, mitigate risk, and plan confidently.",
		expanded:
			"Our teams implement disciplined controls, transparent reporting, and board-ready dashboards. Expect advisory that balances fiduciary responsibility with pragmatic guidance across complex jurisdictions.",
		accentFrom: "#22d3ee",
		accentTo: "#38ef7d",
	},
	{
		id: "diplomatic-catalysts",
		name: "Diplomatic Catalysts",
		subtitle: "African Business Facilitation",
		description:
			"Direct access to specialized African diplomats enables seamless initiation of business studies, government engagement, and market entry across the continent. This service transforms regulatory complexity into navigable opportunity.",
		expanded:
			"We align investors, policymakers, and local partners with discretion and pace. From initial approach to implementation, we compress timelines and de-risk expansion through trusted diplomatic channels.",
		accentFrom: "#f59e0b",
		accentTo: "#f97316",
	},
	{
		id: "holistic-innovators",
		name: "Holistic Innovators",
		subtitle: "Sector Experts & Advisory Services",
		description:
			"A multidisciplinary network of experts in agribusiness, infrastructure, architecture, MIS, HR advisory, and more. Ideal for organizations seeking integrated solutions grounded in regional expertise and execution excellence.",
		expanded:
			"We curate bespoke squads that combine technical mastery with contextual intelligence. The result: initiatives that are viable, fundable, and sustainably delivered across African markets.",
		accentFrom: "#7dd3fc",
		accentTo: "#22d3ee",
	},
	{
		id: "continental-commerce",
		name: "Gateway to Continental Commerce",
		subtitle: "Export & Import Facilitation Across Africa",
		description:
			"End-to-end trade facilitation services supporting exports and imports across Africa. Leveraging regulatory mastery, logistics networks, and cross-border experience, we streamline transactions and unlock sustainable trade pathways at competitive value.",
		expanded:
			"We orchestrate documentation, compliance, and corridor partners so goods move with fewer delays and greater visibility. Our teams protect margin, timelines, and reputation through disciplined execution.",
		accentFrom: "#22c55e",
		accentTo: "#0ea5e9",
	},
];

const gradientBg =
  "bg-[radial-gradient(circle_at_20%_20%,rgba(124,193,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(155,127,211,0.12),transparent_32%),linear-gradient(140deg,#4a2c6e,#5c3a8a,#7c5f9e)]";

const AuthorityMetricsSection = () => {
	const [activeId, setActiveId] = useState<string | null>(null);

	const orderedServices = useMemo(() => services, []);

	return (
		<section
			className={`relative text-white py-20 md:py-24 overflow-hidden ${gradientBg}`}
		>
			<div className="absolute inset-0 pointer-events-none" aria-hidden>
				<div className="absolute left-1/2 top-12 -translate-x-1/2 w-[620px] h-[620px] bg-cyan-500/10 blur-3xl rounded-full" />
				<div className="absolute -left-10 bottom-0 w-80 h-80 bg-sky-300/10 blur-3xl rounded-full" />
			</div>

			<div className="relative container mx-auto px-6 md:px-10">
				<motion.div
					className="max-w-4xl space-y-4 mb-12"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.65 }}
				>
					<p className="text-sm uppercase tracking-[0.3em] text-cyan-100/70">
						Curated engagements
					</p>
					<h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
						Services I Can Assist You With
					</h2>
					<p className="text-lg md:text-xl text-slate-200/85 max-w-3xl">
						Strategic, multi-disciplinary support designed to accelerate global
						ambitions across Africa and beyond.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6 md:gap-8">
					{orderedServices.map((service, idx) => {
						const isActive = activeId === service.id;

						return (
							<motion.button
								type="button"
								key={service.id}
								aria-expanded={isActive}
								onClick={() => setActiveId(isActive ? null : service.id)}
								className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 text-left shadow-xl transition duration-500"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false, amount: 0.35 }}
								whileHover={{ y: -10 }}
								transition={{
									duration: 0.55,
									delay: idx * 0.12,
									ease: [0.4, 0, 0.2, 1],
								}}
							>
								<div
									className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
									style={{
										boxShadow:
											"0 0 0 1px rgba(255,255,255,0.04), 0 25px 80px rgba(34,211,238,0.08)",
									}}
									aria-hidden
								/>
								<div className="flex items-start gap-4 md:gap-5 relative">
									<span
										className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 shadow-inner shadow-black/40"
										style={{
											background: `linear-gradient(145deg, ${service.accentFrom}22, ${service.accentTo}33)`,
										}}
									>
										<motion.svg
											width="32"
											height="32"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											className="text-white/90"
											initial={{ rotate: 0 }}
											whileHover={{ rotate: 6 }}
											transition={{
												type: "spring",
												stiffness: 160,
												damping: 18,
											}}
										>
											<path
												d="M4 8.5C4 6.015 6.015 4 8.5 4h7c2.485 0 4.5 2.015 4.5 4.5v7c0 2.485-2.015 4.5-4.5 4.5h-7C6.015 20 4 17.985 4 15.5v-7Z"
												strokeWidth="1.4"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M9 10.5c0-.828.895-1.5 2-1.5h2c1.105 0 2 .672 2 1.5 0 .829-.895 1.5-2 1.5h-2c-1.105 0-2 .671-2 1.5 0 .828.895 1.5 2 1.5h2c1.105 0 2-.672 2-1.5"
												strokeWidth="1.4"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<circle
												cx="9.25"
												cy="7.75"
												r="0.75"
												fill="currentColor"
											/>
											<circle
												cx="14.75"
												cy="16.25"
												r="0.75"
												fill="currentColor"
											/>
										</motion.svg>
									</span>
									<div className="flex-1 space-y-2">
										<div className="flex items-center justify-between gap-3">
											<div>
												<p className="text-sm uppercase tracking-[0.2em] text-cyan-50/70">
													{service.subtitle}
												</p>
												<h3 className="text-xl md:text-2xl font-semibold text-white">
													{service.name}
												</h3>
											</div>
											<span className="text-sm font-medium text-cyan-100/80 transition group-hover:text-cyan-100">
												Discuss this service →
											</span>
										</div>
										<p className="text-base text-slate-100/80 leading-relaxed">
											{service.description}
										</p>
									</div>
								</div>

								<AnimatePresence>
									{isActive && (
										<motion.div
											initial={{ opacity: 0, height: 0, marginTop: 0 }}
											animate={{ opacity: 1, height: "auto", marginTop: 18 }}
											exit={{ opacity: 0, height: 0, marginTop: 0 }}
											transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
											className="rounded-xl border border-white/10 bg-white/5 px-5 py-4"
										>
											<p className="text-sm md:text-base text-slate-100/85 leading-relaxed">
												{service.expanded}
											</p>
											<div className="mt-4 flex items-center justify-between">
												<span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100">
													<span
														className="inline-block h-1.5 w-10 rounded-full"
														style={{
															background: `linear-gradient(90deg, ${service.accentFrom}, ${service.accentTo})`,
														}}
													/>
													Deeper overview
												</span>
												<span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
													Request consultation
													<span aria-hidden>→</span>
												</span>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>
						);
					})}
				</div>

				<div className="mt-12 md:mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md">
					<div className="space-y-1">
						<p className="text-sm uppercase tracking-[0.18em] text-cyan-50/70">
							Ready to explore
						</p>
						<p className="text-lg md:text-xl text-white">
							Ready to explore how these services can support your objectives?
						</p>
						<p className="text-slate-200/80">
							Let’s begin a strategic conversation →
						</p>
					</div>
					<div className="inline-flex items-center gap-3 rounded-full border border-cyan-200/40 bg-white/5 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10">
						<span
							className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 animate-pulse"
							aria-hidden
						/>
						<span>Schedule a consultation</span>
						<span aria-hidden className="text-cyan-100">
							→
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AuthorityMetricsSection;
