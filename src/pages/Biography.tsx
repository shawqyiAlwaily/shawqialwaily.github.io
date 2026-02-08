import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/content";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Biography = () => {
	const { t, isRTL } = useLanguage();

	return (
		<div className="min-h-screen bg-[#5c3a8a] text-white">
			<Header />

			<main className="relative pt-28 pb-20 overflow-hidden">
				<div className="container mx-auto px-4 md:px-8 py-6">
					<Link
						to="/#biography"
						className={`inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
					>
						{isRTL ? (
							<ArrowRight className="w-5 h-5" />
						) : (
							<ArrowLeft className="w-5 h-5" />
						)}
						<span className="font-medium">{t("bio.backToHome")}</span>
					</Link>
				</div>
				<div
					className="absolute inset-0 bg-gradient-to-b from-[#5c3a8a] via-[#6b4e9b] to-[#8a6ac2]"
					aria-hidden
				/>
				<div className="absolute inset-0 pointer-events-none" aria-hidden>
					<div className="absolute -left-24 top-10 w-72 h-72 rounded-full bg-cyan-400/12 blur-3xl" />
					<div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-emerald-200/10 blur-3xl" />
				</div>

				<div className="relative container mx-auto px-4 md:px-8">
					<div className="max-w-6xl mx-auto">
						{/* Hero / Title area */}
						<header className="mb-10 text-center md:text-left rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10">
							<p className="uppercase tracking-[0.3em] text-xs md:text-sm text-cyan-200/70">
								{"Biography"}
							</p>
							<h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
								SHAWQI AL-WAILY
							</h1>
							<h2 className="mt-3 text-xl md:text-2xl font-semibold text-cyan-100">
								The Diplomatic Bridge Builder
							</h2>
							<p className="mt-4 text-lg md:text-xl italic text-slate-200/85 max-w-3xl">
								Architect of Continental Communication and Strategic
								Partnerships
							</p>
							<blockquote className="mt-4 text-cyan-200/90 italic border-l-4 border-cyan-300/40 pl-4">
								"Three Decades of Transforming Words into Geopolitical Reality"
							</blockquote>
						</header>

						<div className="grid md:grid-cols-3 gap-8 items-start">
							{/* Left: main content */}
							<section className="md:col-span-2 space-y-16">
								{/* Introduction & identity */}
								<section className="space-y-6 animate-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10">
									<div className="space-y-3">
										<p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
											Identity
										</p>
										<h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
											Calm authority across continents
										</h2>
										<div className="h-px w-14 bg-cyan-300/70" />
									</div>
									<div className="grid md:grid-cols-2 gap-6 text-lg text-slate-200 leading-relaxed">
										<p>
											I orchestrate the linguistic infrastructure that lets
											fifty-five African nations speak with one voice. Born in
											Egypt (1972) and operating from Addis Ababa, I serve as
											Head of the Translation Division at the African Union
											Commission, bridging billion-dollar projects and
											diplomatic summits with precision.
										</p>
										<p>
											Every negotiation, treaty, and policy conversation travels
											through language. I turn that language into strategic
											leverage for governments, investors, and cross-continental
											partners.
										</p>
									</div>
								</section>

								<div className="h-px w-full bg-slate-200/70" />

								{/* Strategic advantage */}
								<section
									className="space-y-6 animate-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10"
									style={{ animationDelay: "0.05s" }}
								>
									<div className="space-y-2">
										<p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
											Strategic Advantage
										</p>
										<h3 className="font-playfair text-3xl md:text-4xl text-white">
											Language as business intelligence
										</h3>
										<p className="text-slate-200 text-lg md:text-xl max-w-3xl">
											Twenty-nine years in translation leadership prove language
											is a competitive advantage. I manage strategic
											communication across six official languages, leveraging
											every linguistic asset for geopolitical impact.
										</p>
									</div>
									<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
										{[
											{
												title: "Native Arabic",
												desc: "Anchors Middle Eastern networks.",
											},
											{
												title: "Diplomatic English",
												desc: "Opens global markets.",
											},
											{
												title: "French",
												desc: "Unlocks Francophone Africa's $2.4T economy.",
											},
											{
												title: "Spanish & Amharic",
												desc: "Operational access across regions.",
											},
											{
												title: "Strategic Oversight",
												desc: "Coordinates Portuguese, Swahili, and every language that matters.",
											},
											{
												title: "Executive Precision",
												desc: "Policy-ready communication for heads of state and investors.",
											},
										].map((item, idx) => (
											<div
												key={item.title}
												className="rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
												style={{ animationDelay: `${0.05 * idx}s` }}
											>
												<h4 className="text-base font-semibold text-white">
													{item.title}
												</h4>
												<p className="text-sm text-slate-200 leading-relaxed">
													{item.desc}
												</p>
											</div>
										))}
									</div>
								</section>

								<div className="h-px w-full bg-slate-200/70" />

								{/* African Union leadership */}
								<section
									className="space-y-6 animate-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10"
									style={{ animationDelay: "0.1s" }}
								>
									<div className="space-y-2">
										<p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
											African Union Leadership
										</p>
										<h3 className="font-playfair text-3xl md:text-4xl text-white">
											Fourteen years inside the decision engine
										</h3>
										<p className="text-slate-200 text-lg md:text-xl max-w-3xl">
											Since 2011, the African Union Commission has been my
											arena—every treaty, summit, and policy document moves
											through my team.
										</p>
									</div>
									<div className="grid md:grid-cols-2 gap-4">
										<div className="rounded-xl bg-white/5 border border-white/10 p-5 shadow-lg shadow-cyan-500/15">
											<h4 className="text-lg font-semibold text-white mb-3">
												Strategic Ascent
											</h4>
											<ul className="space-y-2 text-slate-200 leading-relaxed">
												<li>
													Progression from Arabic Reviser to Head of Translation
													Division (2025).
												</li>
												<li>
													Scope: 50,000+ pages annually; six linguistic units
													led.
												</li>
												<li>
													Representation: High-level conferences across Africa.
												</li>
											</ul>
										</div>
										<div className="rounded-xl bg-white/5 border border-white/10 p-5 shadow-lg shadow-cyan-500/15">
											<h4 className="text-lg font-semibold text-white mb-3">
												Value Proposition
											</h4>
											<ul className="space-y-2 text-slate-200 leading-relaxed">
												<li>
													Insider access: every treaty and trade agreement
													crosses my desk.
												</li>
												<li>
													Network intelligence: real-time insight into African
													political dynamics.
												</li>
												<li>
													Operational mastery: logistics for presidential
													summits and peacekeeping.
												</li>
											</ul>
										</div>
									</div>
								</section>

								<div className="h-px w-full bg-slate-200/70" />

								{/* Regional nexus */}
								<section
									className="space-y-6 animate-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10"
									style={{ animationDelay: "0.15s" }}
								>
									<div className="space-y-2">
										<p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
											Regional Nexus
										</p>
										<h3 className="font-playfair text-3xl md:text-4xl text-white">
											Egypt–Africa–Middle East bridge
										</h3>
										<p className="text-slate-200 text-lg md:text-xl max-w-3xl">
											My birthplace is my credential—grounded in Egypt, fluent
											in African realities, and fluent in Middle Eastern capital
											flows.
										</p>
									</div>
									<div className="grid sm:grid-cols-3 gap-4">
										{[
											{
												title: "Cross-Regional Intelligence",
												desc: "Arab League and AU intersections decoded.",
											},
											{
												title: "Investment Pathways",
												desc: "Gulf capital flows into African infrastructure.",
											},
											{
												title: "Cultural Navigation",
												desc: "Operate across African, Middle Eastern, and global business cultures.",
											},
										].map((item) => (
											<div
												key={item.title}
												className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/15"
											>
												<h4 className="text-lg font-semibold text-white">
													{item.title}
												</h4>
												<p className="text-slate-200 mt-2 leading-relaxed">
													{item.desc}
												</p>
											</div>
										))}
									</div>
								</section>

								<div className="h-px w-full bg-slate-200/70" />

								{/* Thought leadership */}
								<section
									className="space-y-6 animate-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10"
									style={{ animationDelay: "0.2s" }}
								>
									<div className="space-y-2">
										<p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
											Thought Leadership
										</p>
										<h3 className="font-playfair text-3xl md:text-4xl text-white">
											Selected works
										</h3>
										<p className="text-slate-200 text-lg">
											Nine published works across regional expertise, business
											strategy, and cultural depth.
										</p>
									</div>
									<div className="grid md:grid-cols-2 gap-4">
										{[
											{
												title: "Regional Expertise",
												items: [
													"Egypt Beyond the Maze",
													"From Failure to Success",
												],
											},
											{
												title: "Business Strategy",
												items: ["The Investor", "The Loyalty Constraint"],
											},
											{
												title: "Technical Resources",
												items: [
													"Glossary of AU, EU and UN Acronyms",
													"Avoiding Mistakes in English",
												],
											},
											{
												title: "Cultural Depth",
												items: [
													"Liberal Thoughts",
													"Summary of Archaeology",
													"Al-Lisht Seizing the Two Lands",
												],
											},
										].map((group) => (
											<div
												key={group.title}
												className="rounded-xl bg-white/5 border border-white/10 p-5 shadow-lg shadow-cyan-500/15 flex flex-col gap-2"
											>
												<h4 className="text-lg font-semibold text-white">
													{group.title}
												</h4>
												<ul className="space-y-1 text-slate-200 leading-relaxed list-disc list-inside">
													{group.items.map((item) => (
														<li key={item}>{item}</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</section>

								<div className="h-px w-full bg-slate-200/70" />

								{/* Network assets */}
								<section
									className="space-y-6 animate-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10"
									style={{ animationDelay: "0.25s" }}
								>
									<div className="space-y-2">
										<p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
											Network Assets
										</p>
										<h3 className="font-playfair text-3xl md:text-4xl text-white">
											Access that accelerates decisions
										</h3>
									</div>
									<div className="grid sm:grid-cols-3 gap-4">
										{[
											{
												title: "African Union Ecosystem",
												desc: "Direct relationships with translation teams across 55 member states.",
											},
											{
												title: "Middle Eastern Connections",
												desc: "Egyptian diplomatic networks and Arab League relationships.",
											},
											{
												title: "Global Institutional Links",
												desc: "UN and EU partnerships for rapid coordination.",
											},
										].map((item) => (
											<div
												key={item.title}
												className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/15"
											>
												<h4 className="text-lg font-semibold text-white">
													{item.title}
												</h4>
												<p className="text-slate-200 mt-2 leading-relaxed">
													{item.desc}
												</p>
											</div>
										))}
									</div>
								</section>

								<div className="h-px w-full bg-slate-200/70" />

								{/* Core competencies */}
								<section
									className="space-y-6 animate-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10"
									style={{ animationDelay: "0.3s" }}
								>
									<div className="space-y-2">
										<p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
											Core Competencies
										</p>
										<h3 className="font-playfair text-3xl md:text-4xl text-white">
											Built for business development
										</h3>
									</div>
									<div className="grid sm:grid-cols-3 gap-4">
										{[
											{
												title: "Operational",
												items: [
													"Team leadership across multilingual groups",
													"Budget management & optimization",
													"Delivery under diplomatic pressure",
												],
											},
											{
												title: "Strategic",
												items: [
													"Regional analysis of political economy",
													"Risk assessment in cross-cultural negotiations",
													"Opportunity recognition",
												],
											},
											{
												title: "Communication",
												items: [
													"Communication mastery",
													"Executive presentations to senior leadership",
													"Cross-cultural facilitation",
												],
											},
										].map((card) => (
											<div
												key={card.title}
												className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/15 flex flex-col gap-2"
											>
												<h4 className="text-lg font-semibold text-white">
													{card.title}
												</h4>
												<ul className="space-y-1 text-slate-200 leading-relaxed list-disc list-inside">
													{card.items.map((item) => (
														<li key={item}>{item}</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</section>

								<div className="h-px w-full bg-slate-200/70" />

								{/* Business case */}
								<section
									className="space-y-6 animate-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10"
									style={{ animationDelay: "0.35s" }}
								>
									<div className="space-y-2">
										<p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
											Business Case
										</p>
										<h3 className="font-playfair text-3xl md:text-4xl text-white">
											Why partner with Shawqi Al-Waily
										</h3>
									</div>
									<div className="grid sm:grid-cols-3 gap-4">
										{[
											{
												title: "Companies entering Africa",
												bullets: [
													"Navigate complex regulatory environments.",
													"Understand cultural nuances that make or break deals.",
													"Access decision-maker networks through AU connections.",
												],
											},
											{
												title: "Investors seeking intelligence",
												bullets: [
													"Real-time insights into policy developments.",
													"Understand how regional politics impact business.",
													"Mitigate risk with deep political awareness.",
												],
											},
											{
												title: "Cross-continental partnerships",
												bullets: [
													"Bridge African, Middle Eastern, and global stakeholders.",
													"Cultural translation beyond language.",
													"Long-term partnership sustainability.",
												],
											},
										].map((card) => (
											<div
												key={card.title}
												className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/15 flex flex-col gap-3"
											>
												<h4 className="text-lg font-semibold text-white">
													{card.title}
												</h4>
												<ul className="space-y-1 text-slate-200 leading-relaxed list-disc list-inside">
													{card.bullets.map((item) => (
														<li key={item}>{item}</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</section>

								<div className="h-px w-full bg-slate-200/70" />

								{/* Personal foundation & mission */}
								<section
									className="space-y-6 animate-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/10"
									style={{ animationDelay: "0.4s" }}
								>
									<div className="space-y-2">
										<p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
											Personal Foundation
										</p>
										<h3 className="font-playfair text-3xl md:text-4xl text-white">
											Values that anchor the work
										</h3>
									</div>
									<div className="grid md:grid-cols-2 gap-6 text-slate-200 leading-relaxed">
										<p>
											Married with four children who understand that their
											father's work shapes how continents communicate. When
											Africa speaks with clarity, opportunities multiply.
										</p>
										<p>
											<strong>Core Values:</strong> Institutional excellence,
											cultural bridge-building, strategic precision, long-term
											thinking.
										</p>
									</div>
									<div className="space-y-4 p-5 rounded-xl bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/15">
										<h4 className="text-lg font-semibold text-white">
											The mission forward
										</h4>
										<p className="text-slate-200 leading-relaxed">
											Continental integration through communication: every major
											opportunity begins with a conversation. Whether you are a
											multinational corporation, an investor, a government
											entity, or building cross-cultural teams, my expertise
											delivers results.
										</p>
										<div className="text-sm text-slate-200 space-y-1">
											<p className="font-semibold text-white">
												SHAWQI AL-WAILY
											</p>
											<p>
												Head of Translation Division, African Union Commission •
												Author • Cultural Bridge-Builder • Strategic Partner
											</p>
											<p>
												29 years transforming language into opportunity; 14
												years at the center of African decision-making; 3
												decades building the networks that shape continental
												futures.
											</p>
										</div>
										<div>
											<a
												href="/"
												className="inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors text-sm"
											>
												<span>← Back to Home</span>
											</a>
										</div>
									</div>
								</section>
							</section>

							{/* Right: portrait */}
							<aside className="md:col-span-1">
								<div className="sticky top-28 space-y-6">
									<div className="relative w-full rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-white/10 bg-white/5 backdrop-blur-md">
										<img
											src="/images/your-new-image.png"
											alt={personalInfo.name}
											className="w-full h-auto object-cover"
										/>
										<div
											className="absolute inset-0 pointer-events-none"
											style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.45)" }}
										/>
									</div>

									<div className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/15">
										<p className="text-sm text-slate-200 leading-relaxed">
											Ready to explore how strategic communication can unlock
											your next opportunity?
										</p>
										<a
											href="mailto:shawqialwaily@outlook.com"
											className="mt-3 inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors"
										>
											<span>Let's connect for strategic consultation</span>
											<span className="inline-block">→</span>
										</a>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Biography;
