import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/data/content";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ArticleDetail = () => {
	const { slug } = useParams<{ slug: string }>();
	const navigate = useNavigate();
	const { t, language, isRTL } = useLanguage();
	const [isLoaded, setIsLoaded] = useState(false);

	const article = articles.find((a) => a.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => setIsLoaded(true), 100);
		return () => clearTimeout(timer);
	}, [slug]);

	if (!article) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-background">
				<div className="text-center">
					<h1 className="text-4xl font-playfair font-bold text-foreground mb-4">
						Article Not Found
					</h1>
					<Button onClick={() => navigate("/")}>
						{t("articles.backToArticles")}
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[#050816] text-white">
			<Header />

			<main className="relative pt-24 overflow-hidden">
				<section className="relative py-16 md:py-24 overflow-hidden">
					<div
						className="absolute inset-0 bg-gradient-to-b from-[#0b1530] via-[#060b17] to-[#04060d]"
						aria-hidden
					/>
					<div className="relative container mx-auto px-4 md:px-8">
						<Link
							to="/#articles"
							className={`inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors mb-8 ${isRTL ? "flex-row-reverse" : ""}`}
						>
							{isRTL ? (
								<ArrowRight className="w-5 h-5" />
							) : (
								<ArrowLeft className="w-5 h-5" />
							)}
							<span className="font-medium">
								{t("articles.backToArticles")}
							</span>
						</Link>

						<div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
							<div
								className={`flex justify-center ${isLoaded ? "animate-slide-in-left" : "opacity-0"} lg:col-span-1`}
							>
								<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-3">
									<img
										src={article.cover}
										alt={article.title.en}
										className="w-64 md:w-72 lg:w-full h-auto object-cover rounded-lg shadow-book"
									/>
									<div className="p-4">
										<p className="text-sm text-slate-300">{article.date}</p>
									</div>
								</div>
							</div>

							<div className="hidden lg:flex items-center justify-center">
								<div className="h-56 w-px bg-white/20" />
							</div>

							<div
								className={`space-y-6 lg:col-span-1 ${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}
								style={{ animationDelay: "0.2s" }}
							>
								<div>
									<h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
										{article.title[language as keyof typeof article.title]}
									</h2>
									<p className="text-slate-200/80 mt-2">
										{article.caption[language as keyof typeof article.caption]}
									</p>
								</div>

								<div>
									<p className="text-slate-200 text-lg leading-relaxed">
										{
											article.description[
												language as keyof typeof article.description
											]
										}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default ArticleDetail;
