import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
	Mail,
	Phone,
	Globe,
	Linkedin,
	MapPin,
	Calendar,
	Award,
	BookOpen,
	Users,
	Briefcase,
	GraduationCap,
	Heart,
	Coffee,
	Plane,
	PenTool,
	Users2,
} from "lucide-react";

const CV = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e] text-white">
			<Header />
			<main className="pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
				{/* Header with name and contact */}
				<div className="mb-10 text-center md:text-left">
					<h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
						SHAWQI ALWAILY
					</h1>
					<p className="text-xl text-cyan-200/90">
						Head of Translation Division · African Union Commission
					</p>
					<div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4 text-slate-200">
						<a
							href="mailto:shawqialwaily@outlook.com"
							className="flex items-center gap-1 hover:text-cyan-200 transition"
						>
							<Mail className="w-4 h-4" /> shawqialwaily@outlook.com
						</a>
						<a
							href="mailto:shawqim@africanunion.org"
							className="flex items-center gap-1 hover:text-cyan-200 transition"
						>
							<Mail className="w-4 h-4" /> shawqim@africanunion.org
						</a>
						<span className="flex items-center gap-1">
							<Phone className="w-4 h-4" /> +251-912601933
						</span>
						<span className="flex items-center gap-1">
							<Phone className="w-4 h-4" /> +20 1002307197 (WhatsApp)
						</span>
						<a
							href="https://shawqialwaily.com"
							target="_blank"
							rel="noopener"
							className="flex items-center gap-1 hover:text-cyan-200 transition"
						>
							<Globe className="w-4 h-4" /> shawqialwaily.com
						</a>
						<a
							href="https://linkedin.com/in/shawqi-alwaily-886744111"
							target="_blank"
							rel="noopener"
							className="flex items-center gap-1 hover:text-cyan-200 transition"
						>
							<Linkedin className="w-4 h-4" /> linkedin.com/in/shawqi-alwaily
						</a>
					</div>
				</div>

				{/* Two‑column layout */}
				<div className="grid md:grid-cols-3 gap-8">
					{/* Left column – Profile, Skills, Education, Achievements */}
					<div className="space-y-8">
						{/* Profile */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<h2 className="text-xl font-semibold text-cyan-200 mb-3 flex items-center gap-2">
								<Users2 className="w-5 h-5" /> Profile
							</h2>
							<p className="text-slate-200/90 text-sm leading-relaxed">
								Head of Translation Division at the African Union Commission
								with a proven record of transforming language services through
								technological integration and operational leadership. Directed
								translation operations for all AU summits, ministerial
								conferences, and policy meetings, ensuring 100% delivery of over
								4,000 pages within strict deadlines. Spearheaded modernization
								of the Directorate of Conference Management and Publications by
								implementing computer‑assisted translation (CAT) tools and
								standardized terminology systems, increasing translator
								efficiency by 50% and reducing document turnaround time by 90%.
								Established a centralized multilingual terminology database with
								10,000+ validated terms across six official languages, enhancing
								linguistic consistency and diplomatic precision in continental
								governance communications. Implemented a quality assurance
								framework that reduced post‑delivery revisions by 90%, setting a
								benchmark for translation excellence in intergovernmental
								institutions. Managed a team of 21 full‑time staff and a network
								of 100 freelance translators across member states, reducing
								turnover by 50% through mentorship, career development, and
								performance‑based feedback mechanisms. Authored specialized
								glossaries including the trilingual “Glossary of AU, EU and UN
								Acronyms” and contributed to publications on political,
								economic, and cultural themes, reinforcing institutional
								knowledge transfer. Maintains ongoing professional development
								through MBA studies at Singapore Business School, strengthening
								strategic leadership in complex, multicultural environments.
							</p>
						</section>

						{/* Skills */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<h2 className="text-xl font-semibold text-cyan-200 mb-3 flex items-center gap-2">
								<Award className="w-5 h-5" /> Skills
							</h2>
							<div className="space-y-3">
								<div>
									<h3 className="font-medium text-white">Computer Skills</h3>
									<p className="text-slate-200/80 text-sm">
										Microsoft Word, PowerPoint, Internet search engines, AI
										research apps
									</p>
								</div>
								<div>
									<h3 className="font-medium text-white">
										Interpersonal Skills
									</h3>
									<p className="text-slate-200/80 text-sm">
										Motivating people to be team players, communicating
										verbally/writing
									</p>
								</div>
								<div>
									<h3 className="font-medium text-white">
										Organizational Skills
									</h3>
									<p className="text-slate-200/80 text-sm">
										Multitasking, planning, time management, research on the
										subject point
									</p>
								</div>
								<div>
									<h3 className="font-medium text-white">Leadership Skills</h3>
									<p className="text-slate-200/80 text-sm">
										Decision‑making, delegating, team building, influencing and
										negotiating, passion drives performance
									</p>
								</div>
								<div>
									<h3 className="font-medium text-white">
										Communication Skills
									</h3>
									<p className="text-slate-200/80 text-sm">
										Advising, team building, translating/revising, writing,
										editing and reporting
									</p>
								</div>
							</div>
						</section>

						{/* Languages */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<h2 className="text-xl font-semibold text-cyan-200 mb-3 flex items-center gap-2">
								<BookOpen className="w-5 h-5" /> Languages
							</h2>
							<p className="text-slate-200/80">
								Arabic (native), English (fluent), French (working knowledge)
							</p>
						</section>

						{/* Education */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<h2 className="text-xl font-semibold text-cyan-200 mb-3 flex items-center gap-2">
								<GraduationCap className="w-5 h-5" /> Education
							</h2>
							<div className="space-y-4">
								<div>
									<p className="font-medium text-white">MBA (ongoing)</p>
									<p className="text-sm text-slate-200/80">
										Singapore Business School · 2023 – present
									</p>
								</div>
								<div>
									<p className="font-medium text-white">
										MA in Terminology and Translation Studies
									</p>
									<p className="text-sm text-slate-200/80">
										University of South Africa (UNISA) · 2014
									</p>
								</div>
								<div>
									<p className="font-medium text-white">
										Post‑Graduate Diploma in Translation and Interpretation
									</p>
									<p className="text-sm text-slate-200/80">
										Cairo University · 1995–1997
									</p>
								</div>
								<div>
									<p className="font-medium text-white">
										BA in English Literature and Language
									</p>
									<p className="text-sm text-slate-200/80">
										Cairo University · 1990–1995
									</p>
								</div>
							</div>
						</section>

						{/* Achievements Beyond Career */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<h2 className="text-xl font-semibold text-cyan-200 mb-3 flex items-center gap-2">
								<Heart className="w-5 h-5" /> Achievements Beyond Career
							</h2>
							<ul className="list-disc list-inside text-slate-200/80 text-sm space-y-1">
								<li>
									Author of books and glossaries: “The Loyalty Constraint”, “The
									Investor”, “Egypt Beyond the Maze”, “From Failure to Success”,
									“Liberal Thoughts”, “English without Mistakes”, “Glossary of
									AU, EU and UN Acronyms”, “Until the Day of Judgement”, “The
									Invisible Activities of Zionism”, “Summary of Archaeology”,
									“El‑Lisht Seizing the Two Lands”, and layout/editing of
									UNESCO’s “Rashid the Recycler”.
								</li>
								<li>
									Active volunteer in philanthropy activities (Islamic
									Community, AUC), international events, meetings, and
									championships.
								</li>
							</ul>
						</section>

						{/* Hobbies */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<h2 className="text-xl font-semibold text-cyan-200 mb-3 flex items-center gap-2">
								<Coffee className="w-5 h-5" /> Hobbies
							</h2>
							<p className="text-slate-200/80">
								Tai Chi, Reading, Travel, Cooking, Writing, Social gatherings
							</p>
						</section>
					</div>

					{/* Right column – Work Experience */}
					<div className="md:col-span-2 space-y-8">
						<h2 className="text-2xl font-semibold text-cyan-200 mb-4 flex items-center gap-2">
							<Briefcase className="w-5 h-5" /> Work Experience
						</h2>

						{/* Experience 1 */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<div className="flex flex-wrap justify-between items-start mb-2">
								<h3 className="text-lg font-semibold text-white">
									Head of Translation Division (Acting Director of DCMP
									Momentarily)
								</h3>
								<span className="text-sm text-cyan-200/70">2025 – present</span>
							</div>
							<p className="text-sm text-slate-300 mb-3">
								Directorate of Conference Management & Publications (DCMP) –
								African Union Commission (AUC)
							</p>
							<ul className="space-y-2 text-slate-200/80 text-sm list-disc list-inside">
								<li>
									Delivered translation services for 100% AU summits,
									ministerial meetings, STCs and policy organs meetings,
									processing 100% documents totaling more than 4000 pages within
									required timeframes.
								</li>
								<li>
									Reduced document turnaround time by 90% through workflow
									optimization and introduction of modern translation management
									methodologies.
								</li>
								<li>
									Achieved 100% on‑time delivery rate for translation requests
									from AU departments and member state delegations.
								</li>
								<li>
									Maintained translation quality standards through systematic
									review processes, resulting in 90% reduction in revision
									requests.
								</li>
								<li>
									Developed and deployed standardized translation procedures
									manual adopted across all language units, improving
									consistency and reducing onboarding time for new translators.
								</li>
								<li>
									Introduced computer‑assisted translation (CAT) tools and
									terminology management systems, increasing translator
									efficiency by 50%.
								</li>
								<li>
									Created quality assurance framework that systematically
									evaluates translation accuracy, terminology consistency, and
									adherence to AU style guidelines.
								</li>
								<li>
									Established centralized AU terminology database containing
									10,000 validated terms across six languages, serving as
									institutional reference.
								</li>
								<li>
									Built network of 100 vetted freelance translators across
									member states, creating surge capacity for high‑volume
									periods.
								</li>
								<li>
									Secured procurement of translation software, reference
									materials, and technical tools; managed division budget of
									$90,000 with 100% execution rate.
								</li>
								<li>
									Cultivated partnerships with translation services in 55 member
									states and 5 Regional Economic Communities.
								</li>
								<li>
									Represented AUC at international conferences on
									multilingualism and translation policy.
								</li>
								<li>
									Supervised team of 21 professional translators and 100
									freelancers; reduced staff turnover by 50% through
									collaborative environment and career pathways.
								</li>
								<li>
									Mentored 12 junior translators and revisers; facilitated
									cross‑unit collaboration.
								</li>
								<li>
									Identified and mitigated operational risks; implemented
									monitoring system; maintained audit‑ready documentation.
								</li>
								<li>
									Provided technical guidance during all AU Summits; advised
									DCMP Director on strategic decisions.
								</li>
								<li>
									Acted as Director to manage DCMP daily activities, budget
									meetings, and deputy chairperson meetings when required.
								</li>
							</ul>
						</section>

						{/* Experience 2 */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<div className="flex flex-wrap justify-between items-start mb-2">
								<h3 className="text-lg font-semibold text-white">
									Arabic Reviser, Arabic Unit, Translation Division
								</h3>
								<span className="text-sm text-cyan-200/70">2011 – 2025</span>
							</div>
							<p className="text-sm text-slate-300 mb-3">
								Directorate of Conference Management & Publications (DCMP) –
								African Union Commission (AUC)
							</p>
							<ul className="space-y-2 text-slate-200/80 text-sm list-disc list-inside">
								<li>
									Managed Arabic translation unit of 10 staff members,
									consistently achieving daily, weekly, and monthly performance
									targets.
								</li>
								<li>
									Translated and revised AU institutional documents, ensuring
									linguistic accuracy and diplomatic appropriateness for
									intergovernmental communications.
								</li>
								<li>
									Provided technical and diplomatic coaching to translators,
									proofreaders, and assistants, improving team performance and
									output quality.
								</li>
								<li>
									Implemented workflow efficiency improvements that contributed
									to 50% productivity increase across unit operations over
									six‑year period.
								</li>
								<li>
									Deployed to Nigeria, Equatorial Guinea, South Africa, Kenya,
									Libya, Togo, and Mauritania (2012‑2016) to provide translation
									and interpretation services for AU regional meetings and
									conferences.
								</li>
							</ul>
						</section>

						{/* Experience 3 */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<div className="flex flex-wrap justify-between items-start mb-2">
								<h3 className="text-lg font-semibold text-white">
									Head of Translation
								</h3>
								<span className="text-sm text-cyan-200/70">2008 – 2011</span>
							</div>
							<p className="text-sm text-slate-300 mb-3">
								Qatar Stars League Management (QSL) – Doha, Qatar
							</p>
							<ul className="space-y-2 text-slate-200/80 text-sm list-disc list-inside">
								<li>
									Translated contracts, international agreements, protocols, and
									technical studies for league operations, maintaining legal
									precision and institutional terminology standards.
								</li>
								<li>
									Provided consecutive interpretation for press conferences and
									technical meetings with Qatar league coaches and professional
									players.
								</li>
								<li>
									Delivered simultaneous interpretation for 12 member clubs and
									during AFC inspection visits.
								</li>
								<li>
									Translated management programs, PowerPoint presentations,
									operational guidelines, and institutional manuals.
								</li>
								<li>
									Operated effectively in multicultural environment, interfacing
									with stakeholders across management hierarchies.
								</li>
							</ul>
						</section>

						{/* Experience 4 */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<div className="flex flex-wrap justify-between items-start mb-2">
								<h3 className="text-lg font-semibold text-white">
									Translation Specialist
								</h3>
								<span className="text-sm text-cyan-200/70">2004 – 2008</span>
							</div>
							<p className="text-sm text-slate-300 mb-3">
								Doha Bank, CEO Office – Doha, Qatar
							</p>
							<ul className="space-y-2 text-slate-200/80 text-sm list-disc list-inside">
								<li>
									Translated institutional documents for Corporate & Commercial
									Banking Department including contracts, policies, procedures,
									manuals, press releases, and strategic plans.
								</li>
								<li>
									Delivered translation services for QCB daily correspondence,
									executive instructions, and interdepartmental communications,
									maintaining confidentiality and accuracy.
								</li>
								<li>
									Translated Retail Banking Manual and Risk Management Manual,
									supporting regulatory compliance and operational
									standardization.
								</li>
								<li>
									Provided translation services for International and
									Institutional Banking, Organization and Methods Department,
									and Training Center annual reports.
								</li>
							</ul>
						</section>

						{/* Experience 5 */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<div className="flex flex-wrap justify-between items-start mb-2">
								<h3 className="text-lg font-semibold text-white">
									Quality Controller / Linguist
								</h3>
								<span className="text-sm text-cyan-200/70">2003 – 2005</span>
							</div>
							<p className="text-sm text-slate-300 mb-3">
								TITAN Corporation – Doha, Qatar
							</p>
							<ul className="space-y-2 text-slate-200/80 text-sm list-disc list-inside">
								<li>
									Translated and localized high‑priority media content for the
									Combined Media Center (CMC) at the American Logistics Base in
									Qatar, ensuring accurate and timely delivery across diverse
									formats.
								</li>
								<li>
									Promoted to Quality Controller based on consistent
									performance, with responsibility for final review and
									linguistic validation of all translated documents.
								</li>
								<li>
									Provided specialized translation and subtitling support for
									media production teams, covering live and recorded content
									from major regional broadcasters such as Al‑Jazeera and
									Al‑Arabiya.
								</li>
								<li>
									Implemented process improvements within TITAN Corporation’s
									translation workflow by integrating advanced CAT tools and
									standardized quality protocols, contributing to a measurable
									20% increase in team productivity.
								</li>
								<li>
									Led a cross‑functional team of 10 translators and
									proofreaders, coordinating task allocation, enforcing
									consistency in terminology, and conducting final quality
									reviews.
								</li>
								<li>
									Achieved full compliance with organizational KPIs related to
									output volume, accuracy, and timeliness.
								</li>
							</ul>
						</section>

						{/* Experience 6 */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<div className="flex flex-wrap justify-between items-start mb-2">
								<h3 className="text-lg font-semibold text-white">
									Translator/Interpreter
								</h3>
								<span className="text-sm text-cyan-200/70">2001 – 2003</span>
							</div>
							<p className="text-sm text-slate-300 mb-3">
								Qatar Olympic Committee – Doha, Qatar
							</p>
							<ul className="space-y-2 text-slate-200/80 text-sm list-disc list-inside">
								<li>
									Translated and localized regulatory, administrative, and
									public communication materials for the Asian Football
									Confederation (AFC), ensuring accurate linguistic and
									contextual adaptation.
								</li>
								<li>
									Led translation of specialized content including the AFC Fair
									Play handbook and medical documentation for athletes on the
									Qatar National Team.
								</li>
								<li>
									Produced high‑stakes translations of executive‑level reports,
									official forms, and strategic correspondence for senior
									leadership within the Qatar National Olympic Committee.
								</li>
								<li>
									Provided consecutive and simultaneous interpretation during
									high‑level conferences and official meetings.
								</li>
							</ul>
						</section>

						{/* Experience 7 */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<div className="flex flex-wrap justify-between items-start mb-2">
								<h3 className="text-lg font-semibold text-white">
									Translator and Typist
								</h3>
								<span className="text-sm text-cyan-200/70">2001</span>
							</div>
							<p className="text-sm text-slate-300 mb-3">
								Alamana & Partners – Doha, Qatar
							</p>
							<ul className="space-y-2 text-slate-200/80 text-sm list-disc list-inside">
								<li>
									Translated and localized executive‑level documentation for the
									Chief Executive Officer, ensuring accurate and timely delivery
									of strategic reports, internal communications, and official
									correspondence.
								</li>
								<li>
									Conducted comprehensive quality review of translated materials
									prior to dissemination, functioning as a final linguistic
									checkpoint.
								</li>
								<li>
									Collaborated closely with senior management and administrative
									teams to align translation outputs with institutional tone and
									strategic objectives.
								</li>
							</ul>
						</section>

						{/* Experience 8 */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<div className="flex flex-wrap justify-between items-start mb-2">
								<h3 className="text-lg font-semibold text-white">Linguist</h3>
								<span className="text-sm text-cyan-200/70">1998 – 2000</span>
							</div>
							<p className="text-sm text-slate-300 mb-3">
								Sakhr Software, Free Zone – Cairo, Egypt
							</p>
							<ul className="space-y-2 text-slate-200/80 text-sm list-disc list-inside">
								<li>
									Spearheaded a comprehensive technology transformation
									initiative, achieving a 40% productivity increase through
									strategic implementation of CAT tools including Trados and
									advanced translation memory systems.
								</li>
								<li>
									Delivered enterprise‑level localization projects for Fortune
									500 technology partners, including comprehensive translation
									and quality assurance of Oracle and Microsoft technical
									documentation, help systems, and user interface components.
								</li>
								<li>
									Architected and deployed an integrated translation technology
									ecosystem that reduced turnaround times by 40% while enhancing
									linguistic accuracy and consistency.
								</li>
								<li>
									Championed adoption of translation memory systems and
									terminology management platforms, creating scalable knowledge
									repositories that enhanced team performance.
								</li>
								<li>
									Pioneered real‑time Arabic localization of online news content
									through hybrid human‑AI translation workflows.
								</li>
								<li>
									Led end‑to‑end localization of flagship products including
									Arab Cinema entertainment platform and Ajeeb specialized
									terminology dictionary.
								</li>
								<li>
									Produced publication‑ready technical documentation including
									data sheets, technical manuals, and press releases in
									bilingual formats (Arabic‑English).
								</li>
								<li>
									Executed desktop publishing operations for complex
									multilingual manuals, ensuring typographic excellence and
									culturally appropriate formatting.
								</li>
							</ul>
						</section>

						{/* Experience 9 */}
						<section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
							<div className="flex flex-wrap justify-between items-start mb-2">
								<h3 className="text-lg font-semibold text-white">Translator</h3>
								<span className="text-sm text-cyan-200/70">1995 – 1997</span>
							</div>
							<p className="text-sm text-slate-300 mb-3">
								Hit for Translation & Computer Support – Cairo, Egypt
							</p>
							<ul className="space-y-2 text-slate-200/80 text-sm list-disc list-inside">
								<li>
									Translated and localized a wide range of legal, technical, and
									medical documents—including contracts, certificates, product
									catalogues, user manuals, and clinical reports—between Arabic
									and English with consistent accuracy.
								</li>
								<li>
									Applied subject‑matter expertise to adapt complex technical
									and regulatory content for target‑language audiences.
								</li>
								<li>
									Performed rigorous self‑editing and quality review throughout
									the translation workflow, minimizing post‑delivery revisions.
								</li>
							</ul>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default CV;
