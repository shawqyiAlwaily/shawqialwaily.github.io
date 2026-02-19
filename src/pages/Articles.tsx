import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/data/content";
import { motion } from "framer-motion";

const Articles = () => {
	const { t, language, isRTL } = useLanguage();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Sort articles newest first
	const sortedArticles = [...articles].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e] text-white">
			<Header />
			<main className="pt-28 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
				{/* Back link */}
				<Link
					to="/#articles"
					className={`inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors mb-8 group ${
						isRTL ? "flex-row-reverse" : ""
					}`}
				>
					{isRTL ? (
						<ArrowRight className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
					) : (
						<ArrowLeft className="w-5 h-5 transition-transform group-hover:translate-x-1" />
					)}
					<span className="font-medium">{t("articles.backToArticles")}</span>
				</Link>

				{/* Header */}
				<div className="mb-12">
					<h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
						All Articles
					</h1>
					<p className="text-slate-200/80 text-lg max-w-2xl">
						{t("articles.subtitle")} – {t("articles.title")}
					</p>
				</div>

				{/* Articles Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{sortedArticles.map((article, idx) => {
						const title = article.title[language as keyof typeof article.title];
						const caption =
							article.caption[language as keyof typeof article.caption];
						return (
							<motion.div
								key={article.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
							>
								<Link
									to={`/articles/${article.slug}`}
									className="block group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 h-full transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
								>
									<p className="text-sm uppercase tracking-[0.2em] text-cyan-200/70">
										Article
									</p>
									<h2 className="text-xl md:text-2xl font-semibold text-white leading-tight mt-2 line-clamp-2">
										{title}
									</h2>
									<p className="text-slate-200/80 mt-2 text-sm line-clamp-3">
										{caption}
									</p>
									<span
										className={`inline-flex items-center gap-1 mt-4 text-cyan-200/80 transition-transform duration-300 group-hover:translate-x-1 ${
											isRTL ? "group-hover:-translate-x-1" : ""
										}`}
									>
										Read more {!isRTL && "→"} {isRTL && "←"}
									</span>
								</Link>
							</motion.div>
						);
					})}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Articles;
