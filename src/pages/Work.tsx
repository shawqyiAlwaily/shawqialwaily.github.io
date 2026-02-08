import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const sampleHighlights = [
	{
		id: "h1",
		title: "Future of Work Research",
		category: "Research",
		summary:
			"A summary of research and advisory projects on the future of work.",
	},
	{
		id: "h2",
		title: "Leadership & Strategy",
		category: "Articles",
		summary:
			"Insights on leadership in complex and rapidly changing environments.",
	},
	{
		id: "h3",
		title: "Global Advisory Projects",
		category: "Work",
		summary: "Selected advisory engagements with governments and institutions.",
	},
];

const Work = () => {
	const [highlights] = useState(sampleHighlights);
	const navigate = useNavigate();

	return (
		<div className="min-h-screen #2d1b47 text-white">
			<Header />
			<main className="relative pt-24 pb-16 overflow-hidden">
				<div
					className="absolute inset-0 bg-gradient-to-b from-[#2d1b47] via-[#25193f] to-[#1a112e]"
					aria-hidden
				/>
				<div className="absolute inset-0 pointer-events-none" aria-hidden>
					<div className="absolute -left-24 top-10 w-72 h-72 rounded-full bg-cyan-400/12 blur-3xl" />
					<div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-emerald-200/10 blur-3xl" />
				</div>

				<div className="relative container mx-auto px-4 md:px-8">
					<div className="text-center mb-12">
						<div className="flex justify-start mb-4">
							<button
								onClick={() => navigate(-1)}
								className="inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors"
							>
								<ArrowLeft className="w-4 h-4" />
								<span>Back</span>
							</button>
						</div>
						<p className="uppercase tracking-[0.3em] text-xs md:text-sm text-cyan-200/70">
							Work
						</p>
						<h1 className="font-playfair text-4xl font-bold text-white">
							Highlights & Articles
						</h1>
						<p className="text-slate-200 mt-4 max-w-2xl mx-auto">
							Selected work and articles with full reads and expanded context.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{highlights.map((h) => (
							<div
								key={h.id}
								className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg shadow-cyan-500/15 transition-transform duration-500 hover:-translate-y-2 hover:shadow-cyan-500/25"
							>
								<div
									className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
									style={{
										background:
											"linear-gradient(135deg, rgba(124,193,255,0.12), rgba(91,230,255,0.06))",
									}}
								/>
								<div className="relative space-y-3">
									<h3 className="font-semibold text-lg text-white">
										{h.title}
									</h3>
									<p className="text-sm text-cyan-200/80">{h.category}</p>
									<p className="text-slate-200 leading-relaxed line-clamp-3">
										{h.summary}
									</p>
									<div>
										<Link
											to={`/work/${h.id}`}
											className="inline-flex items-center gap-2 text-cyan-200 hover:text-white font-medium transition-colors"
										>
											<span>Read More</span>
											<span className="inline-block">→</span>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Work;
