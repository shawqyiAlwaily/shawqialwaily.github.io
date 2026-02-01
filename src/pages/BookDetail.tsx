import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { books } from "@/data/content";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookDetail = () => {
	const { slug } = useParams<{ slug: string }>();
	const navigate = useNavigate();
	const { t, language, isRTL } = useLanguage();
	const [isLoaded, setIsLoaded] = useState(false);

	const book = books.find((b) => b.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => setIsLoaded(true), 100);
		return () => clearTimeout(timer);
	}, [slug]);

	if (!book) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-background">
				<div className="text-center">
					<h1 className="text-4xl font-playfair font-bold text-foreground mb-4">
						Book Not Found
					</h1>
					<Button onClick={() => navigate("/")}>
						{t("books.backToBooks")}
					</Button>
				</div>
			</div>
		);
	}

	const bookColors = {
		"the-visionary-mind": "from-primary to-primary-dark",
		"leading-through-chaos": "from-teal to-primary",
		"the-art-of-influence": "from-accent-dark to-accent",
		"foundations-of-excellence": "from-primary-light to-primary",
	};

	const bgColor =
		bookColors[slug as keyof typeof bookColors] ||
		"from-primary to-primary-dark";

	return (
		<div className="min-h-screen bg-[#050816] text-white">
			<Header />

			<main className="relative pt-24 overflow-hidden">
				<section className="relative py-16 md:py-24 overflow-hidden">
					<div
						className="absolute inset-0 bg-gradient-to-b from-[#0b1530] via-[#060b17] to-[#04060d]"
						aria-hidden
					/>
					<div className="absolute inset-0 pointer-events-none" aria-hidden>
						<div className="absolute -left-24 top-10 w-72 h-72 rounded-full bg-cyan-400/12 blur-3xl" />
						<div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-emerald-200/10 blur-3xl" />
					</div>

					<div className="relative container mx-auto px-4 md:px-8">
						<Link
							to="/#books"
							className={`inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors mb-8 ${
								isRTL ? "flex-row-reverse" : ""
							}`}
						>
							{isRTL ? (
								<ArrowRight className="w-5 h-5" />
							) : (
								<ArrowLeft className="w-5 h-5" />
							)}
							<span className="font-medium">{t("books.backToBooks")}</span>
						</Link>

						<div
							className={`grid lg:grid-cols-3 gap-8 lg:gap-12 items-start ${
								isRTL ? "lg:grid-flow-dense" : ""
							}`}
						>
							{/* Left: Book Image */}
							<div
								className={`flex justify-center ${
									isLoaded ? "animate-slide-in-left" : "opacity-0"
								} lg:col-span-1`}
							>
								<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-cyan-500/20 p-3">
									<img
										src={book.cover}
										alt={book.title.en}
										className="w-64 md:w-72 lg:w-full h-auto object-cover rounded-lg shadow-book"
									/>
									<div
										className="absolute inset-0 pointer-events-none"
										style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.45)" }}
									/>
								</div>
							</div>

							<div className="hidden lg:flex items-center justify-center">
								<div className="h-56 w-px bg-white/20" />
							</div>

							{/* Right: content */}
							<div
								className={`space-y-6 lg:col-span-1 ${
									isLoaded ? "animate-slide-in-right" : "opacity-0"
								}`}
								style={{ animationDelay: "0.2s" }}
							>
								<div>
									<h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
										{book.title[language as keyof typeof book.title]}
									</h2>
									<p className="text-slate-200/80 mt-2">{book.year}</p>
								</div>

								<div>
									<p className="text-slate-200 text-lg leading-relaxed">
										{
											book.description[
												language as keyof typeof book.description
											]
										}
									</p>
								</div>

								{book.amazonUrl && (
									<div className="pt-2">
										<a
											href={book.amazonUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex"
										>
											<Button
												variant="default"
												className="shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/25"
											>
												{isRTL ? "اشتري من أمازون" : "Buy on Amazon"}
											</Button>
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default BookDetail;
