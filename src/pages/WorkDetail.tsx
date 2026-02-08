import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WorkDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// In a real app we'd fetch the content by id. For now use placeholders.
	const content = {
		h1: {
			title: "Future of Work Research",
			body: "Full article content on Future of Work research, advisory projects, and key findings. This is the expanded page for the highlight.",
		},
		h2: {
			title: "Leadership & Strategy",
			body: "Expanded article on leadership patterns, decision frameworks, and case studies.",
		},
		h3: {
			title: "Global Advisory Projects",
			body: "Detailed descriptions of advisory engagements, outcomes, and contact points.",
		},
	};

	const item = content[id as keyof typeof content];

	if (!item) {
		return (
			<div className="min-h-screen #5c3a8a text-white">
				<Header />
				<main className="relative pt-24 flex items-center justify-center overflow-hidden">
					<div
						className="absolute inset-0 bg-gradient-to-b from-[#5c3a8a] via-[#6b4e9b] to-[#8a6ac2]"
						aria-hidden
					/>
					<div className="relative text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-cyan-500/15">
						<h2 className="text-2xl font-semibold">Article not found</h2>
						<button
							onClick={() => navigate(-1)}
							className="mt-4 inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors"
						>
							<span>Go back</span>
						</button>
					</div>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen #5c3a8a text-white">
			<Header />
			<main className="relative pt-24 pb-16 overflow-hidden">
				<div
					className="absolute inset-0 bg-gradient-to-b from-[#5c3a8a] via-[#6b4e9b] to-[#8a6ac2]"
					aria-hidden
				/>
				<div className="absolute inset-0 pointer-events-none" aria-hidden>
					<div className="absolute -left-24 top-10 w-72 h-72 rounded-full bg-cyan-400/12 blur-3xl" />
					<div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-emerald-200/10 blur-3xl" />
				</div>

				<div className="relative container mx-auto px-4 md:px-8">
					<div className="mb-6">
						<Link
							to="/work"
							className="inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors"
						>
							<ArrowLeft className="w-4 h-4" />
							Back to Highlights
						</Link>
					</div>

					<article className="max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-cyan-500/15">
						<h1 className="font-playfair text-3xl text-white mb-4">
							{item.title}
						</h1>
						<p className="text-slate-200 leading-relaxed">{item.body}</p>
					</article>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default WorkDetail;
