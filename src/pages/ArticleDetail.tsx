import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/data/content";
import { ArrowLeft, ArrowRight, Calendar, Clock, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
/* eslint-disable @typescript-eslint/no-explicit-any */

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
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e]">
				<div className="text-center px-4">
					<h1 className="text-4xl font-playfair font-bold text-white mb-4">
						Article Not Found
					</h1>
					<p className="text-slate-200/80 mb-8">
						The article you're looking for doesn't exist or has been moved.
					</p>
					<Button
						onClick={() => navigate("/")}
						className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
					>
						{t("articles.backToArticles")}
					</Button>
				</div>
			</div>
		);
	}

	const title = article.title[language as keyof typeof article.title];
	const caption = article.caption[language as keyof typeof article.caption];
	const description =
		article.description[language as keyof typeof article.description];
	const content = article.content?.[language as keyof typeof article.content];
	const cover = article.cover;
	const videoUrl = article.videoUrl;

	const date = new Date(article.date).toLocaleDateString(language, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	// Calculate reading time
	const wordsPerMinute = 200;
	const wordCount = content?.split(/\s+/).length || 0;
	const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e] text-white">
			<Header />

			<main className="relative pt-24 overflow-hidden">
				{/* Hero Section */}
				<section className="relative py-16 md:py-20 overflow-hidden">
					{/* Background with cover image overlay */}
					<div className="absolute inset-0">
						{cover && (
							<>
								<img
									src={cover}
									alt=""
									className="w-full h-full object-cover opacity-20"
								/>
								<div className="absolute inset-0 bg-gradient-to-b from-[#5c3a8a] via-[#5c3a8a]/95 to-[#5c3a8a]" />
							</>
						)}
						{!cover && (
							<div className="absolute inset-0 bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e]" />
						)}
					</div>

					<div className="relative container mx-auto px-4 md:px-8 max-w-4xl">
						{/* Back link */}
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
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
								<span className="font-medium">Back to Articles</span>
							</Link>
						</motion.div>

						{/* Article Header */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-center md:text-left"
						>
							<span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-200 text-sm uppercase tracking-wider mb-6">
								Article
							</span>

							<h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
								{title}
							</h1>

							{/* Meta information */}
							<div
								className={`flex flex-wrap items-center gap-6 text-slate-200/80 text-sm mb-8 ${isRTL ? "justify-end" : "justify-start"}`}
							>
								<span className="flex items-center gap-2">
									<Calendar className="w-4 h-4" />
									{date}
								</span>
								<span className="flex items-center gap-2">
									<Clock className="w-4 h-4" />
									{readingTime} min read
								</span>
							</div>

							{/* Caption */}
							<p className="text-xl md:text-2xl text-slate-200/90 font-light leading-relaxed max-w-3xl mx-auto md:mx-0 border-l-4 border-cyan-200/50 pl-6">
								{caption}
							</p>
						</motion.div>
					</div>
				</section>

				{/* Article Content */}
				<section className="relative py-12 md:py-16">
					<div className="container mx-auto px-4 md:px-8 max-w-4xl">
						{/* Description */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mb-12 text-lg text-slate-200/90 leading-relaxed"
						>
							<p>{description}</p>
						</motion.div>

						{/* Cover Image as Featured Image */}
						{cover && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.25 }}
								className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
							>
								<img
									src={cover}
									alt={title}
									className="w-full h-auto object-cover"
								/>
							</motion.div>
						)}

						{/* Video Link */}
						{videoUrl && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="mb-12"
							>
								<a
									href={videoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-cyan-200 hover:text-white transition-all"
								>
									<Play className="w-5 h-5" />
									<span>Watch related video</span>
								</a>
							</motion.div>
						)}

						{/* Markdown Content */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.35 }}
							className="prose prose-lg prose-invert max-w-none
								prose-headings:text-white prose-headings:font-playfair prose-headings:font-bold
								prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6
								prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
								prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
								prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-2
								prose-p:text-slate-200/90 prose-p:leading-relaxed prose-p:mb-6
								prose-a:text-cyan-200 hover:prose-a:text-cyan-100 prose-a:no-underline hover:prose-a:underline
								prose-strong:text-white prose-strong:font-semibold
								prose-blockquote:border-l-4 prose-blockquote:border-cyan-200/50 
								prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-200/90
								prose-blockquote:bg-white/5 prose-blockquote:py-3 prose-blockquote:px-6
								prose-blockquote:rounded-r-2xl
								prose-ul:list-disc prose-ol:list-decimal prose-li:text-slate-200/90 prose-li:mb-2
								prose-img:rounded-xl prose-img:shadow-2xl prose-img:mx-auto prose-img:my-12
								prose-img:border prose-img:border-white/10 prose-img:max-w-full
								prose-hr:border-white/20 prose-hr:my-12
								prose-table:w-full prose-table:border-collapse prose-table:my-8
								prose-th:bg-white/10 prose-th:text-white prose-th:py-3 prose-th:px-4 prose-th:font-semibold
								prose-td:border prose-td:border-white/20 prose-td:py-3 prose-td:px-4
								prose-code:text-cyan-200 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
								prose-pre:bg-white/10 prose-pre:border prose-pre:border-white/20 prose-pre:rounded-xl prose-pre:p-4"
						>
							{content ? (
								<ReactMarkdown
									remarkPlugins={[remarkGfm]}
									rehypePlugins={[rehypeRaw]}
									components={{
										img: ({ node, src, alt, ...props }) => (
											<figure className="my-12">
												<img
													src={src}
													alt={alt || ""}
													className="rounded-xl shadow-2xl mx-auto border border-white/10"
													loading="lazy"
													{...props}
												/>
												{alt &&
													alt.length > 0 &&
													!alt.includes("graph") &&
													!alt.includes("chart") &&
													!alt.includes("model") && (
														<figcaption className="text-center text-sm text-slate-300/70 mt-4 italic">
															{alt}
														</figcaption>
													)}
											</figure>
										),
										a: ({ node, href, children, ...props }) => {
											const isExternal = href?.startsWith("http");
											return (
												<a
													href={href}
													target={isExternal ? "_blank" : undefined}
													rel={isExternal ? "noopener noreferrer" : undefined}
													className="text-cyan-200 hover:text-cyan-100 underline-offset-2 hover:underline"
													{...props}
												>
													{children}
												</a>
											);
										},
										code: ({
											node,
											inline,
											className,
											children,
											...props
										}: any) => {
											const match = /language-(\w+)/.exec(className || "");
											return !inline ? (
												<pre className="bg-white/10 border border-white/20 rounded-xl p-4 overflow-x-auto">
													<code className={className} {...props}>
														{children}
													</code>
												</pre>
											) : (
												<code
													className="bg-white/10 px-1.5 py-0.5 rounded text-cyan-200"
													{...props}
												>
													{children}
												</code>
											);
										},
									}}
								>
									{content}
								</ReactMarkdown>
							) : (
								<div className="text-center py-12">
									<p className="text-slate-200/80 text-lg">
										Content not available in{" "}
										{language === "en"
											? "English"
											: language === "fr"
												? "French"
												: language === "ar"
													? "Arabic"
													: "Spanish"}
									</p>
									<p className="text-slate-300/60 mt-2">
										Please check back later or select another language.
									</p>
								</div>
							)}
						</motion.div>

						{/* Article Footer */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="mt-16 pt-8 border-t border-white/20"
						>
							<div
								className={`flex ${isRTL ? "justify-start" : "justify-end"}`}
							>
								<Button
									onClick={() => navigate("/#articles")}
									variant="outline"
									className="bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/40"
								>
									{isRTL ? (
										<>
											Back to Articles
											<ArrowRight className="w-4 h-4 mr-2" />
										</>
									) : (
										<>
											<ArrowLeft className="w-4 h-4 mr-2" />
											Back to Articles
										</>
									)}
								</Button>
							</div>
						</motion.div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default ArticleDetail;
